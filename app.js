// Main Application Logic for CloudMaster

// Decks configuration mapped by week number
const DECK_CONFIG = {
  1: { name: "Week 1: Fundamentals & Cloud Characteristics", badge: "Fundamentals" },
  2: { name: "Week 2: Scaling & Distributed Architectures", badge: "Scaling" },
  3: { name: "Week 3: HPC & Spartan Batch Systems", badge: "HPC" },
  4: { name: "Week 4: Cloud Models & OpenStack", badge: "OpenStack" },
  5: { name: "Week 5: Containers, Docker & CI/CD", badge: "Containers" },
  6: { name: "Week 6: K8s & Resource Oriented APIs", badge: "Orchestration" },
  7: { name: "Week 7: Serverless FaaS & Fission", badge: "Serverless" },
  8: { name: "Week 8: Big Data & ElasticSearch Clusters", badge: "Big Data" },
  9: { name: "Week 9: Virtualization Mechanics & AWS", badge: "Virtualization" },
  10: { name: "Week 10: Distributed Cloud Security", badge: "Security" }
};

// Application State
let state = {
  activeView: "dashboard",
  ratings: {}, // Maps cardId -> "easy" | "medium" | "hard"
  quizHistory: [], // Array of scores (percentages)
  
  // Active study deck variables
  studyDeck: null, // "all" or week number (1-10)
  studyCards: [],
  studyIndex: 0,
  cardFlipped: false,
  
  // Active quiz variables
  quizActive: false,
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswersChecked: false,
  quizSelectedOption: null,

  // Active exam variables
  examActive: false,
  activeExam: null,
  examMcqIndex: 0,
  examSaIndex: 0,
  examMcqScore: 0,
  examSaScore: 0,
  examAnswersChecked: false,
  examSelectedOptionIndex: null,
  examTimeStart: 0,
  examTimerInterval: null,
  examHistory: []
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  initRouter();
  renderDecks();
  updateStats();
  initCardFlipping();
  initCardRating();
  initBrowserSearch();
  initQuizFlow();
  initExamFlow(); // Initialize practice exams handlers
  initKeyboardShortcuts();
});

// Load state from LocalStorage
function loadProgress() {
  const savedRatings = localStorage.getItem("cloudmaster_ratings");
  if (savedRatings) {
    state.ratings = JSON.parse(savedRatings);
  }
  
  const savedQuizHistory = localStorage.getItem("cloudmaster_quiz_history");
  if (savedQuizHistory) {
    state.quizHistory = JSON.parse(savedQuizHistory);
  }

  const savedExamHistory = localStorage.getItem("cloudmaster_exam_history");
  if (savedExamHistory) {
    try {
      const parsed = JSON.parse(savedExamHistory);
      state.examHistory = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      state.examHistory = [];
    }
  } else {
    state.examHistory = [];
  }
}

// Save state to LocalStorage
function saveProgress() {
  localStorage.setItem("cloudmaster_ratings", JSON.stringify(state.ratings));
  localStorage.setItem("cloudmaster_quiz_history", JSON.stringify(state.quizHistory));
  localStorage.setItem("cloudmaster_exam_history", JSON.stringify(state.examHistory));
  updateStats();
}

// Simple Page Router
function initRouter() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const viewId = e.currentTarget.id.replace("nav-", "view-");
      switchView(viewId);
    });
  });

  // Back buttons
  document.getElementById("study-back-btn").addEventListener("click", () => switchView("view-dashboard"));
  document.getElementById("quiz-back-btn").addEventListener("click", () => switchView("view-dashboard"));
}

function switchView(viewId) {
  // If an active exam is running, prevent switching tab without confirmation
  if (state.examActive && viewId !== "view-exams") {
    if (!confirm("An exam is currently in progress. Switching views will abort the exam and lose your progress. Proceed?")) {
      return;
    }
    abortActiveExam();
  }

  // Hide all sections
  document.querySelectorAll(".view-section").forEach(view => {
    view.classList.remove("active");
  });
  
  // Show target section
  const targetView = document.getElementById(viewId);
  if (targetView) targetView.classList.add("active");
  
  // Update nav menu active state
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  
  const navId = viewId.replace("view-", "nav-");
  const navLink = document.getElementById(navId);
  if (navLink) navLink.classList.add("active");
  
  // Update state pointer
  state.activeView = viewId.replace("view-", "");
  
  // View specific handlers
  if (state.activeView === "dashboard") {
    renderDecks();
    updateStats();
  } else if (state.activeView === "browser") {
    renderCardBrowser();
  } else if (state.activeView === "study" && state.studyCards.length === 0) {
    // Default to "all cards" if Study view clicked directly
    startStudySession("all");
  } else if (state.activeView === "quiz") {
    resetQuizSetup();
  } else if (state.activeView === "exams") {
    renderExamsView();
  }
}

// Update Global Statistics Widget
function updateStats() {
  const total = window.FLASHCARDS.length;
  document.getElementById("stat-total-cards").textContent = total;
  
  const easyCount = Object.values(state.ratings).filter(r => r === "easy").length;
  document.getElementById("stat-easy-cards").textContent = easyCount;
  
  // Calculate average quiz accuracy
  if (state.quizHistory.length > 0) {
    const avg = Math.round(state.quizHistory.reduce((a, b) => a + b, 0) / state.quizHistory.length);
    document.getElementById("stat-accuracy").textContent = avg + "%";
  } else {
    document.getElementById("stat-accuracy").textContent = "0%";
  }
  
  // Sidebar progress bar
  const masteredRatio = (easyCount / total) * 100;
  document.getElementById("overall-progress-bar").style.width = masteredRatio + "%";
  document.getElementById("overall-progress-text").textContent = Math.round(masteredRatio) + "%";
  document.getElementById("overall-ratio-text").textContent = `${easyCount}/${total} Mastered`;
}

// Render Dashboard Decks Grid
function renderDecks() {
  const decksContainer = document.getElementById("decks-container");
  decksContainer.innerHTML = "";
  
  // First item: All Decks Combined
  const allCards = window.FLASHCARDS;
  const allEasy = allCards.filter(c => state.ratings[c.id] === "easy").length;
  const allMed = allCards.filter(c => state.ratings[c.id] === "medium").length;
  const allCompleted = allEasy + allMed;
  const allPercent = allCards.length ? Math.round((allCompleted / allCards.length) * 100) : 0;
  
  const allDeckElement = document.createElement("div");
  allDeckElement.className = "deck-card";
  allDeckElement.innerHTML = `
    <span class="deck-week">Full Syllabus</span>
    <span class="deck-name">All Cloud & Cluster Computing Cards</span>
    <div class="deck-footer">
      <div class="deck-stats">
        <span class="deck-badge">${allCards.length} Cards</span>
        <span>${allPercent}% studied</span>
      </div>
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
  `;
  allDeckElement.addEventListener("click", () => startStudySession("all"));
  decksContainer.appendChild(allDeckElement);
  
  // Populating Weeks 1 to 10
  for (let week = 1; week <= 10; week++) {
    const config = DECK_CONFIG[week];
    const weekCards = window.FLASHCARDS.filter(c => c.week === week);
    if (weekCards.length === 0) continue;
    
    const weekEasy = weekCards.filter(c => state.ratings[c.id] === "easy").length;
    const weekMed = weekCards.filter(c => state.ratings[c.id] === "medium").length;
    const weekCompleted = weekEasy + weekMed;
    const weekPercent = Math.round((weekCompleted / weekCards.length) * 100);
    
    const deckElement = document.createElement("div");
    deckElement.className = "deck-card";
    deckElement.innerHTML = `
      <span class="deck-week">Week ${week} • ${config.badge}</span>
      <span class="deck-name">${config.name}</span>
      <div class="deck-footer">
        <div class="deck-stats">
          <span class="deck-badge">${weekCards.length} Cards</span>
          <span>${weekPercent}% studied</span>
        </div>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    `;
    deckElement.addEventListener("click", () => startStudySession(week));
    decksContainer.appendChild(deckElement);
  }
}

// Start a Study Session
function startStudySession(deckId) {
  state.studyDeck = deckId;
  state.studyIndex = 0;
  state.cardFlipped = false;
  
  if (deckId === "all") {
    state.studyCards = shuffle([...window.FLASHCARDS]);
  } else {
    state.studyCards = shuffle(window.FLASHCARDS.filter(c => c.week === parseInt(deckId)));
  }
  
  if (state.studyCards.length === 0) {
    alert("No cards found for this deck.");
    return;
  }
  
  switchView("view-study");
  renderActiveCard();
}

// Shuffle Utility (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Render the current active flashcard
function renderActiveCard() {
  const card = state.studyCards[state.studyIndex];
  if (!card) return;
  
  const cardElement = document.getElementById("interactive-card");
  cardElement.classList.remove("flipped");
  state.cardFlipped = false;
  
  // Set Tag
  const weekLabel = `Week ${card.week} | ${card.topic}`;
  document.getElementById("card-tag-front").textContent = weekLabel;
  document.getElementById("card-tag-back").textContent = weekLabel;
  
  // Set Content
  document.getElementById("card-question-text").textContent = card.question;
  
  // Format the answer text nicely (converting basic markdown * and \n)
  let answerHtml = card.answer;
  // Replace **bold**
  answerHtml = answerHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Replace *italic*
  answerHtml = answerHtml.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  document.getElementById("card-answer-text").innerHTML = answerHtml;
  
  // Update Progress indicators
  const ratioText = `Card ${state.studyIndex + 1} / ${state.studyCards.length}`;
  document.getElementById("study-progress-text").textContent = ratioText;
  
  const percentage = ((state.studyIndex) / state.studyCards.length) * 100;
  document.getElementById("study-progress-fill").style.width = percentage + "%";
}

// Flip Card Action
function initCardFlipping() {
  const cardContainer = document.getElementById("flashcard-container");
  const interactiveCard = document.getElementById("interactive-card");
  
  cardContainer.addEventListener("click", () => {
    interactiveCard.classList.toggle("flipped");
    state.cardFlipped = !state.cardFlipped;
  });
}

// Rate Card Progress
function initCardRating() {
  const buttons = document.querySelectorAll(".rating-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Stop click propagating to flip card
      const rating = e.currentTarget.dataset.score; // "easy" / "medium" / "hard"
      rateCurrentCard(rating);
    });
  });
}

function rateCurrentCard(rating) {
  const card = state.studyCards[state.studyIndex];
  if (!card) return;
  
  // Save Rating
  state.ratings[card.id] = rating;
  saveProgress();
  
  // Move to next card
  state.studyIndex++;
  
  if (state.studyIndex >= state.studyCards.length) {
    // Completed deck!
    document.getElementById("study-progress-fill").style.width = "100%";
    alert("🏆 Great job! You have completed studying all cards in this deck!");
    switchView("view-dashboard");
  } else {
    renderActiveCard();
  }
}

// Keyboard Shortcuts Listener
function initKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if (state.activeView !== "study") return;
    
    // Disable shortcuts if input fields are focused
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT") return;
    
    if (e.code === "Space") {
      e.preventDefault(); // Stop page scrolling
      const interactiveCard = document.getElementById("interactive-card");
      interactiveCard.classList.toggle("flipped");
      state.cardFlipped = !state.cardFlipped;
    } else if (e.key === "1") {
      rateCurrentCard("hard");
    } else if (e.key === "2") {
      rateCurrentCard("medium");
    } else if (e.key === "3") {
      rateCurrentCard("easy");
    }
  });
}

// --- CARD BROWSER VIEW LOGIC ---
function renderCardBrowser() {
  const browserList = document.getElementById("browser-cards-list");
  const searchVal = document.getElementById("browser-search").value.toLowerCase();
  const weekVal = document.getElementById("browser-filter-week").value;
  
  browserList.innerHTML = "";
  
  const filtered = window.FLASHCARDS.filter(c => {
    // Filter by week
    if (weekVal !== "all" && c.week !== parseInt(weekVal)) return false;
    
    // Search filter
    if (searchVal) {
      const inQuestion = c.question.toLowerCase().includes(searchVal);
      const inAnswer = c.answer.toLowerCase().includes(searchVal);
      const inTopic = c.topic.toLowerCase().includes(searchVal);
      return inQuestion || inAnswer || inTopic;
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    browserList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No cards match your filter criteria.</p>`;
    return;
  }
  
  filtered.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "browser-card-row";
    
    let answerHtml = card.answer;
    answerHtml = answerHtml.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    answerHtml = answerHtml.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    cardEl.innerHTML = `
      <div class="browser-card-header">
        <span class="browser-card-week">Week ${card.week} • ${card.topic}</span>
        <span style="font-size:0.75rem; color: var(--text-muted); text-transform: uppercase;">Rating: ${state.ratings[card.id] || "unreviewed"}</span>
      </div>
      <div class="browser-card-question">${card.question}</div>
      <div class="browser-card-answer">${answerHtml}</div>
    `;
    browserList.appendChild(cardEl);
  });
}

function initBrowserSearch() {
  document.getElementById("browser-search").addEventListener("input", renderCardBrowser);
  document.getElementById("browser-filter-week").addEventListener("change", renderCardBrowser);
}

// --- QUIZ MODE LOGIC ---
function resetQuizSetup() {
  document.getElementById("quiz-setup-panel").style.display = "block";
  document.getElementById("quiz-active-panel").style.display = "none";
  document.getElementById("quiz-results-panel").style.display = "none";
  state.quizActive = false;
}

function initQuizFlow() {
  document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
  document.getElementById("quiz-next-btn").addEventListener("click", nextQuizQuestion);
  document.getElementById("quiz-retry-btn").addEventListener("click", startQuiz);
  document.getElementById("quiz-close-btn").addEventListener("click", () => switchView("view-dashboard"));
}

function startQuiz() {
  state.quizActive = true;
  state.quizIndex = 0;
  state.quizScore = 0;
  
  // Select 10 random cards for the quiz
  state.quizQuestions = shuffle([...window.FLASHCARDS]).slice(0, 10);
  
  document.getElementById("quiz-setup-panel").style.display = "none";
  document.getElementById("quiz-results-panel").style.display = "none";
  document.getElementById("quiz-active-panel").style.display = "block";
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const card = state.quizQuestions[state.quizIndex];
  if (!card) return;
  
  state.quizAnswersChecked = false;
  state.quizSelectedOption = null;
  
  // Update header text
  document.getElementById("quiz-header-status").textContent = `Question ${state.quizIndex + 1} of 10`;
  document.getElementById("quiz-score-indicator").textContent = `Current Score: ${state.quizScore}/${state.quizIndex}`;
  
  // Set question values
  document.getElementById("quiz-question-tag").textContent = `Week ${card.week} • ${card.topic}`;
  document.getElementById("quiz-question-text").textContent = card.question;
  
  // Generate Options (1 correct, 3 incorrect random answers)
  const choices = [card.answer];
  
  // Gather incorrect answers from other cards
  const otherAnswers = shuffle(window.FLASHCARDS.filter(c => c.id !== card.id).map(c => c.answer));
  for (let i = 0; i < 3; i++) {
    if (otherAnswers[i]) choices.push(otherAnswers[i]);
  }
  
  // Shuffle options
  const shuffledChoices = shuffle(choices);
  
  // Render buttons
  const optionsContainer = document.getElementById("quiz-options-container");
  optionsContainer.innerHTML = "";
  
  shuffledChoices.forEach(choice => {
    const optBtn = document.createElement("button");
    optBtn.className = "quiz-option";
    
    // Clean markdown text for rendering choices cleanly
    let plainText = choice.replace(/\*\*/g, '').replace(/\*/g, '');
    if (plainText.length > 180) {
      plainText = plainText.substring(0, 180) + "...";
    }
    
    optBtn.textContent = plainText;
    optBtn.dataset.original = choice; // Keep track of full original string
    
    optBtn.addEventListener("click", () => selectQuizOption(optBtn, choice, card.answer));
    optionsContainer.appendChild(optBtn);
  });
  
  // Hide feedback and disable Next button
  document.getElementById("quiz-feedback-box").style.display = "none";
  document.getElementById("quiz-next-btn").disabled = true;
}

function selectQuizOption(clickedBtn, selectedText, correctText) {
  if (state.quizAnswersChecked) return;
  
  state.quizAnswersChecked = true;
  const allOptions = document.querySelectorAll(".quiz-option");
  
  // Check correctness
  const isCorrect = (selectedText === correctText);
  if (isCorrect) {
    clickedBtn.classList.add("correct");
    state.quizScore++;
  } else {
    clickedBtn.classList.add("incorrect");
    
    // Find and highlight correct answer
    allOptions.forEach(opt => {
      if (opt.dataset.original === correctText) {
        opt.classList.add("correct");
      }
    });
  }
  
  // Render detailed review feedback
  const feedbackBox = document.getElementById("quiz-feedback-box");
  let answerHtml = correctText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  feedbackBox.innerHTML = `<strong>Correct Answer Detail:</strong><br>${answerHtml}`;
  feedbackBox.style.display = "block";
  
  // Enable Next button and update stats
  document.getElementById("quiz-next-btn").disabled = false;
  document.getElementById("quiz-score-indicator").textContent = `Current Score: ${state.quizScore}/${state.quizIndex + 1}`;
}

function nextQuizQuestion() {
  state.quizIndex++;
  if (state.quizIndex >= 10) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResults() {
  document.getElementById("quiz-active-panel").style.display = "none";
  document.getElementById("quiz-results-panel").style.display = "block";
  
  const percentage = (state.quizScore / 10) * 100;
  
  document.getElementById("quiz-results-summary").textContent = `You scored ${state.quizScore} out of 10 (${percentage}%).`;
  
  // Adjust crown or rating feedback
  let title = "Practice Completed!";
  if (percentage >= 90) title = "🏆 Perfect Score! Master Class!";
  else if (percentage >= 70) title = "🌟 Excellent Progress!";
  else if (percentage >= 50) title = "📖 Keep Studying!";
  
  document.getElementById("quiz-results-title").textContent = title;
  
  // Save score to history
  state.quizHistory.push(percentage);
  // Cap history to last 10 quizzes
  if (state.quizHistory.length > 10) {
    state.quizHistory.shift();
  }
  saveProgress();
}

// --- PRACTICE EXAMS VIEW LOGIC ---

function initExamFlow() {
  // Bind Quiz Options/Submit Buttons for Practice Exams
  document.getElementById("exam-quit-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to quit this exam? Your progress will be lost.")) {
      abortActiveExam();
    }
  });

  document.getElementById("exam-mcq-submit").addEventListener("click", checkExamMCQ);
  document.getElementById("exam-mcq-next").addEventListener("click", nextExamMCQ);

  document.getElementById("exam-sa-reveal-btn").addEventListener("click", revealShortAnswerMarking);
  document.getElementById("exam-sa-next").addEventListener("click", nextExamShortAnswer);

  const slider = document.getElementById("exam-sa-grade-slider");
  slider.addEventListener("input", (e) => {
    const val = e.target.value;
    document.getElementById("exam-sa-slider-value").textContent = val;
    const maxMarks = state.activeExam.shortAnswers[state.examSaIndex].maxMarks;
    document.getElementById("exam-sa-grade-label").textContent = `Self-Grade your response: ${val} / ${maxMarks} Marks`;
  });

  document.getElementById("exam-results-close-btn").addEventListener("click", () => {
    document.getElementById("exam-results-view").style.display = "none";
    document.getElementById("exam-dashboard-panel").style.display = "block";
    renderExamsView();
  });
}

function renderExamsView() {
  const container = document.getElementById("exams-list-container");
  if (!container) return;
  container.innerHTML = "";

  if (!window.EXAMS || !Array.isArray(window.EXAMS)) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem; grid-column: 1 / -1;">No practice exams database found. Please ensure exams.js is loaded correctly.</p>`;
    return;
  }

  window.EXAMS.forEach(exam => {
    const card = document.createElement("div");
    card.className = "deck-card";
    
    const attempts = (state.examHistory || []).filter(a => a.examId === exam.id);
    let attemptText = "Not attempted yet";
    if (attempts.length > 0) {
      const maxScore = Math.max(...attempts.map(a => a.totalScore));
      const maxPercent = Math.max(...attempts.map(a => a.percentage));
      const bestAttempt = attempts.find(a => a.percentage === maxPercent);
      attemptText = `Best: ${maxScore}/50 (${bestAttempt.grade})`;
    }

    const badgeClass = exam.type === "AI Generated" ? "exam-badge badge-ai" : "exam-badge badge-past";

    card.innerHTML = `
      <div>
        <span class="${badgeClass}">${exam.type}</span>
        <h3 class="deck-name" style="margin-top: 0.5rem; margin-bottom: 0.25rem;">${exam.title}</h3>
      </div>
      <div class="deck-footer" style="margin-top: auto; padding-top: 1rem;">
        <div class="deck-stats" style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
          <span class="deck-badge" style="background: rgba(255, 255, 255, 0.05); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">35 MCQ + 15 SA Marks</span>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">${attemptText}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => startExam(exam.id));
    container.appendChild(card);
  });

  const tbody = document.getElementById("exam-history-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (!state.examHistory || state.examHistory.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No exam attempts recorded yet. Ready to take your first exam?</td>
      </tr>
    `;
  } else {
    const sortedHistory = [...(state.examHistory || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
    sortedHistory.forEach(attempt => {
      const tr = document.createElement("tr");
      
      const dateFormatted = new Date(attempt.date).toLocaleDateString([], {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const gradeClass = attempt.grade === "H1" ? "grade-badge grade-h1" :
                         attempt.grade.startsWith("H2") ? "grade-badge grade-h2" :
                         attempt.grade === "H3" || attempt.grade === "Pass" ? "grade-badge grade-h3" :
                         "grade-badge grade-fail";

      const typeBadgeClass = attempt.type === "AI Generated" ? "exam-badge badge-ai" : "exam-badge badge-past";

      tr.innerHTML = `
        <td style="padding: 1rem;">${dateFormatted}</td>
        <td style="padding: 1rem; font-weight: 500;">${attempt.title}</td>
        <td style="padding: 1rem;"><span class="${typeBadgeClass}">${attempt.type}</span></td>
        <td style="padding: 1rem; text-align: right;">${attempt.mcqScore} / 35</td>
        <td style="padding: 1rem; text-align: right;">${attempt.saScore} / 15</td>
        <td style="padding: 1rem; text-align: right; font-weight: 600;">${attempt.totalScore} / 50 (${attempt.percentage}%)</td>
        <td style="padding: 1rem; text-align: center;"><span class="${gradeClass}">${attempt.grade}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }
}

function startExam(examId) {
  const exam = window.EXAMS.find(e => e.id === examId);
  if (!exam) return;

  state.examActive = true;
  state.activeExam = exam;
  state.examMcqIndex = 0;
  state.examSaIndex = 0;
  state.examMcqScore = 0;
  state.examSaScore = 0;
  state.examAnswersChecked = false;
  state.examSelectedOptionIndex = null;
  state.examTimeStart = Date.now();

  document.getElementById("exam-dashboard-panel").style.display = "none";
  document.getElementById("exam-results-view").style.display = "none";
  document.getElementById("exam-runner-panel").style.display = "block";

  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  updateExamTimer();
  state.examTimerInterval = setInterval(updateExamTimer, 1000);

  renderExamMCQ();
}

function updateExamTimer() {
  const elapsedMs = Date.now() - state.examTimeStart;
  const elapsedSeconds = Math.floor(elapsedMs / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("exam-timer").textContent = `Time Elapsed: ${timeStr}`;
}

function abortActiveExam() {
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examActive = false;
  state.activeExam = null;
  document.getElementById("exam-runner-panel").style.display = "none";
  document.getElementById("exam-dashboard-panel").style.display = "block";
  renderExamsView();
}

function renderExamMCQ() {
  const exam = state.activeExam;
  const mcq = exam.mcqs[state.examMcqIndex];
  if (!mcq) return;

  state.examAnswersChecked = false;
  state.examSelectedOptionIndex = null;

  document.getElementById("exam-mcq-section").style.display = "block";
  document.getElementById("exam-sa-section").style.display = "none";

  const totalQuestions = 35 + exam.shortAnswers.length;
  const progressPercent = (state.examMcqIndex / totalQuestions) * 100;
  document.getElementById("exam-progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("exam-progress-text").textContent = `MCQ ${state.examMcqIndex + 1} of 35`;

  document.getElementById("exam-mcq-tag").textContent = `Question ${state.examMcqIndex + 1} of 35 (MCQ - 1 Mark)`;
  document.getElementById("exam-mcq-text").textContent = mcq.question;

  const optionsContainer = document.getElementById("exam-mcq-options");
  optionsContainer.innerHTML = "";

  mcq.options.forEach((option, idx) => {
    const optBtn = document.createElement("button");
    optBtn.className = "quiz-option";
    optBtn.textContent = option;
    
    optBtn.addEventListener("click", () => {
      if (state.examAnswersChecked) return;
      state.examSelectedOptionIndex = idx;
      
      document.querySelectorAll("#exam-mcq-options .quiz-option").forEach((btn, bIdx) => {
        if (bIdx === idx) {
          btn.classList.add("selected");
        } else {
          btn.classList.remove("selected");
        }
      });
      
      document.getElementById("exam-mcq-submit").disabled = false;
    });
    
    optionsContainer.appendChild(optBtn);
  });

  document.getElementById("exam-mcq-submit").style.display = "block";
  document.getElementById("exam-mcq-submit").disabled = true;
  document.getElementById("exam-mcq-next").style.display = "none";
  document.getElementById("exam-mcq-feedback").style.display = "none";
}

function checkExamMCQ() {
  state.examAnswersChecked = true;
  const exam = state.activeExam;
  const mcq = exam.mcqs[state.examMcqIndex];
  const selectedIdx = state.examSelectedOptionIndex;
  const correctIdx = mcq.answer;

  const options = document.querySelectorAll("#exam-mcq-options .quiz-option");
  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIdx === correctIdx) {
    state.examMcqScore++;
  }

  const feedback = document.getElementById("exam-mcq-feedback");
  feedback.innerHTML = `<strong>Explanation:</strong><br>${mcq.explanation}`;
  feedback.style.display = "block";

  document.getElementById("exam-mcq-submit").style.display = "none";
  document.getElementById("exam-mcq-next").style.display = "block";
}

function nextExamMCQ() {
  state.examMcqIndex++;
  if (state.examMcqIndex < 35) {
    renderExamMCQ();
  } else {
    state.examSaIndex = 0;
    renderExamShortAnswer();
  }
}

function renderExamShortAnswer() {
  const exam = state.activeExam;
  const sa = exam.shortAnswers[state.examSaIndex];
  if (!sa) return;

  document.getElementById("exam-mcq-section").style.display = "none";
  document.getElementById("exam-sa-section").style.display = "block";

  const totalQuestions = 35 + exam.shortAnswers.length;
  const progressPercent = ((35 + state.examSaIndex) / totalQuestions) * 100;
  document.getElementById("exam-progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("exam-progress-text").textContent = `Short Answer ${state.examSaIndex + 1} of ${exam.shortAnswers.length}`;

  document.getElementById("exam-sa-tag").textContent = `Question ${state.examSaIndex + 1} of ${exam.shortAnswers.length} (Short Answer - ${sa.maxMarks} Marks)`;
  document.getElementById("exam-sa-text").innerHTML = sa.question.replace(/\n/g, '<br>');
  document.getElementById("exam-sa-input").value = "";
  document.getElementById("exam-sa-input").disabled = false;

  document.getElementById("exam-sa-grading-block").style.display = "none";
  document.getElementById("exam-sa-reveal-btn").style.display = "block";
  document.getElementById("exam-sa-next").style.display = "none";

  const slider = document.getElementById("exam-sa-grade-slider");
  slider.max = sa.maxMarks;
  slider.value = 0;
  document.getElementById("exam-sa-slider-value").textContent = "0";
  document.getElementById("exam-sa-grade-label").textContent = `Self-Grade your response: 0 / ${sa.maxMarks} Marks`;
}

function revealShortAnswerMarking() {
  const exam = state.activeExam;
  const sa = exam.shortAnswers[state.examSaIndex];
  if (!sa) return;

  const modelAnswerEl = document.getElementById("exam-sa-model-answer");
  modelAnswerEl.innerHTML = sa.sampleAnswer.replace(/\n/g, '<br>');
  
  document.getElementById("exam-sa-input").disabled = true;
  document.getElementById("exam-sa-grading-block").style.display = "block";
  document.getElementById("exam-sa-reveal-btn").style.display = "none";
  document.getElementById("exam-sa-next").style.display = "block";
}

function nextExamShortAnswer() {
  const slider = document.getElementById("exam-sa-grade-slider");
  const marksEarned = parseInt(slider.value, 10);
  state.examSaScore += marksEarned;

  state.examSaIndex++;
  const exam = state.activeExam;
  if (state.examSaIndex < exam.shortAnswers.length) {
    renderExamShortAnswer();
  } else {
    showExamResults();
  }
}

function showExamResults() {
  if (state.examTimerInterval) clearInterval(state.examTimerInterval);
  state.examActive = false;

  const exam = state.activeExam;
  const elapsedMs = Date.now() - state.examTimeStart;
  const elapsedSeconds = Math.floor(elapsedMs / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const mcqScore = state.examMcqScore;
  const saScore = state.examSaScore;
  const totalScore = mcqScore + saScore;
  const percentage = Math.round((totalScore / 50) * 100);

  let grade = "Fail";
  if (percentage >= 80) grade = "H1";
  else if (percentage >= 75) grade = "H2A";
  else if (percentage >= 70) grade = "H2B";
  else if (percentage >= 65) grade = "H3";
  else if (percentage >= 50) grade = "Pass";

  document.getElementById("exam-results-mcq-score").textContent = `${mcqScore} / 35`;
  document.getElementById("exam-results-sa-score").textContent = `${saScore} / 15`;
  document.getElementById("exam-results-grade").textContent = grade;
  
  const gradeEl = document.getElementById("exam-results-grade");
  gradeEl.className = "";
  if (grade === "H1") gradeEl.style.color = "#10b981";
  else if (grade.startsWith("H2")) gradeEl.style.color = "#3b82f6";
  else if (grade === "H3" || grade === "Pass") gradeEl.style.color = "#f59e0b";
  else gradeEl.style.color = "#ef4444";

  document.getElementById("exam-results-total-score").textContent = `${totalScore} / 50 (${percentage}%)`;
  document.getElementById("exam-results-time-taken").textContent = timeFormatted;

  const typeBadge = document.getElementById("exam-results-type-badge");
  typeBadge.textContent = exam.type;
  typeBadge.className = exam.type === "AI Generated" ? "exam-badge badge-ai" : "exam-badge badge-past";

  let title = "Exam Completed!";
  if (percentage >= 80) title = "🏆 H1 - First Class Honours! Outstanding!";
  else if (percentage >= 70) title = "🌟 H2 - Second Class Honours! Great job!";
  else if (percentage >= 65) title = "👍 H3 - Third Class Honours! Good effort!";
  else if (percentage >= 50) title = "📖 Pass - Keep reviewing to improve!";
  else title = "❌ Fail - Focus on weak areas and try again!";

  document.getElementById("exam-results-title-h2").textContent = title;

  const attempt = {
    date: new Date().toISOString(),
    examId: exam.id,
    title: exam.title,
    type: exam.type,
    mcqScore: mcqScore,
    saScore: saScore,
    totalScore: totalScore,
    percentage: percentage,
    grade: grade,
    timeTaken: timeFormatted
  };

  state.examHistory.push(attempt);
  saveProgress();

  document.getElementById("exam-runner-panel").style.display = "none";
  document.getElementById("exam-results-view").style.display = "block";
}
