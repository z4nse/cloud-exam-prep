# cloud-exam-prep

Flashcard and practice exam app for COMP90024 (Cluster & Cloud Computing) at UniMelb.

Live at https://z4nse.github.io/cloud-exam-prep/

## What's in it

- Flashcards across all 10 weeks with self-rating (hard/medium/easy)
- Randomised quiz mode
- Card browser with search and week filter
- Practice exams — 35 MCQ + 15 marks short answer, includes past exams and AI-generated papers
- Progress and exam history saved in your browser via localStorage

## Running locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Or just double-click `index.html`.

## Shortcuts (study mode)

| Key | Action |
|-----|--------|
| `Space` | Flip card |
| `1` | Hard |
| `2` | Medium |
| `3` | Easy |
