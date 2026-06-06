# ☁️ CloudMaster — Cluster & Cloud Computing Study App

A premium, interactive flashcard and practice exam web application for studying Cluster & Cloud Computing (COMP90024) at the University of Melbourne.

**Live App →** https://YOUR-USERNAME.github.io/cloud-flashcards/

---

## Features

- **📚 Study Cards** — 100+ flashcards across all 10 weeks, with hard/medium/easy self-rating
- **🧠 Quiz Mode** — Randomised 10-question multiple choice quiz
- **🔍 Card Browser** — Search and filter all cards by week or keyword
- **📝 Practice Exams** — 6 full-length exams (35 MCQ + 15 SA marks) including past exams and AI-generated practice papers
- **📊 Progress Tracking** — Mastery progress, quiz accuracy, and exam attempt history (stored locally in your browser)

---

## 🚀 Running Locally

Since this is a pure static app (HTML + CSS + JS, no frameworks), you can open it directly:

**Option 1 — Double-click:**
Open `index.html` directly in Chrome, Safari, or Firefox.

**Option 2 — Local server (recommended):**
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## ⚡ Keyboard Shortcuts (Study Zone)

| Key | Action |
|-----|--------|
| `Space` | Flip card |
| `1` | Rate Hard |
| `2` | Rate Medium |
| `3` | Rate Easy (Mastered) |

---

## 🛠️ Tech Stack

- Vanilla HTML5, CSS3, JavaScript (no frameworks or build steps)
- All progress saved locally via `localStorage`
- Deployed via GitHub Pages

---

## 📖 Content

Cards and exams cover:
- Week 1–2: Cloud fundamentals, distributed systems, scaling laws
- Week 3: HPC & Spartan/SLURM batch computing
- Week 4: Cloud models & OpenStack architecture
- Week 5: Docker, containers & CI/CD pipelines
- Week 6: Kubernetes & REST APIs
- Week 7: Serverless FaaS & Fission
- Week 8: Big Data & Elasticsearch
- Week 9: Virtualisation mechanics & AWS
- Week 10: Distributed cloud security
