# Git Learning Sandbox

## Purpose

This repository provides a safe, structured environment to practice common Git scenarios and build confidence with Git workflows. Whether you're new to Git or want to sharpen your skills with challenging situations, this sandbox lets you experiment, make mistakes, and learn without consequences.

---

## Get Started (Fork Workflow)

> You'll work inside **your own fork** of this repository so the upstream `main` (this repo) stays clean for future learners.

### 1) Fork this repository
1. Click **Fork** on GitHub (top-right).
2. Choose your account and create the fork.

### 2) Clone **your fork** and set remotes
```bash
git clone https://github.com/<your-username>/github-sandbox.git
cd github-sandbox
git remote add upstream https://github.com/bkimball-livefront/github-sandbox.git
git remote -v   # should show 'origin' (your fork) and 'upstream' (this template)
```
> `git clone` - **Download repository**: Copy a repository from GitHub to your local machine  
> `git remote add` - **Add remote connection**: Link your local repo to another repository  
> `git remote -v` - **View remotes**: List all remote repositories connected to your local repo

## 🔁 Keep Your Fork in Sync with Upstream
When new content is added to the upstream template:

```bash
git fetch upstream
git checkout main
git merge upstream/main     # or: git rebase upstream/main
git push origin main
```
> `git fetch` - **Download updates**: Get latest changes from remote without merging  
> `git merge` - **Combine branches**: Integrate changes from another branch into current branch  
> `git push` - **Upload changes**: Send your local commits to the remote repository


## 📚 Current Lessons

### Lesson One: Inline Merge Conflicts
**Location**: `merge-conflicts/lesson-one-inline/`

## What is a Merge Conflict?

A **merge conflict** occurs when Git cannot automatically combine changes from different branches because:
- Two branches modified the same line(s) in a file differently
- One branch deleted a file while another modified it
- Multiple branches made conflicting changes to the same section of code

When this happens, Git pauses the merge and asks you to manually decide which changes to keep, creating an opportunity to learn conflict resolution skills that are essential for collaborative development.

**What you'll learn**: How to create and resolve the most common type of merge conflict — when two branches edit the same line differently.

**Why inline conflicts are most common**: 
- Multiple developers often work on the same files simultaneously
- Small changes to the same line (like variable names, strings, or formatting) happen frequently
- These conflicts are straightforward to understand and resolve, making them perfect for learning

**What to expect**:
1. Create two branches that modify the same line in different ways
2. Attempt to merge them and encounter the conflict
3. Learn to read Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Practice resolving conflicts using your IDE's merge tools
5. Complete the merge and understand the resolution process

This lesson gives you hands-on experience with the fundamental skill of merge conflict resolution that every Git user needs to master.

## Ready to Start?

Navigate to [Lesson One](merge-conflicts/lesson-one-inline/README.md) and follow the detailed instructions!

## Resetting Your Sandbox (Local Only)

If you want a clean slate in your local clone of your fork:
```bash
git checkout main
git reset --hard HEAD
git clean -fd
```
> `git checkout main` - **Switch to main branch**: Return to the main branch  
> `git reset --hard HEAD` - **Discard all changes**: Remove all uncommitted changes and reset to last commit  
> `git clean -fd` - **Remove untracked files**: Delete any new files/folders not tracked by Git

If you've merged lessons into your fork's main and want to realign with upstream:
```bash
git fetch upstream
git checkout main
git reset --hard upstream/main   # WARNING: blows away local changes on main
git push --force origin main
```
---

<!-- *Ready to build your Git confidence? Start with [Lesson One](merge-conflicts/lesson-one-inline/README.md)!* 🚀 -->
