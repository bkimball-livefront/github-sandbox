## 🧩 Exercise A — Same-Line Edit Conflict (The Classic)

### 🎯 Goal
Create a guaranteed merge conflict by changing the **same line** in two branches, then resolve it.

---

### ⚙️ Before You Start
Replace `<ANIMALS_FILE>` with your file path (for example: `src/animals.ts` or `animals.js`).

---
### 1. Navigate to the `lesson-one-inline` directory
From within the repo
```bash
cd merge-conflicts/lesson-one-inline

### 2. From within the repository, start from a clean `main`
```bash
git checkout main
git pull
git status
