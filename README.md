# Git Learning Sandbox

## Table of Contents
- [Purpose](#purpose)
- [Git Command Glossary](#git-command-glossary)
- [Get Started (Fork Workflow)](#get-started-fork-workflow)
- [Keep Your Fork in Sync with Upstream](#-keep-your-fork-in-sync-with-upstream)
- [Current Workshops](#-current-workshops)
  - [Pull Request Flow](#pull-request-flow)
  - [Inline Merge Conflicts](#inline-merge-conflicts)
- [Resetting Your Sandbox](#resetting-your-sandbox-local-only)

## Purpose

This repository provides a safe, structured environment to practice common Git scenarios and build confidence with Git workflows. Whether you're new to Git or want to sharpen your skills with challenging situations, this sandbox lets you experiment, make mistakes, and learn without consequences.

---

## Git Command Glossary

📖 **[View the complete Git Command Glossary](git-glossary.md)**

Quick reference for all Git commands used in the workshops, with examples and use cases. Bookmark this page for easy command lookup!

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

## Keep Your Fork in Sync with Upstream
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


## Current Workshops

### Pull Request Flow
**Location**: `pull-request-flow/PullRequestFlow.md`

### Merge Conflicts
**Location**: `merge-conflicts/` (Multiple lessons available)
- **Lesson 1**: Inline Conflicts (`MergeConflicts-InLine.md`)
- **Lesson 2**: Delete vs Modify Conflicts (`lesson-two-delete-vs-modify/README.md`)

## Resetting Your Sandbox (Local Only)

### Scenario 1: Clean up your working directory
If you want a clean slate in your local clone of your fork (removes any uncommitted changes but keeps your fork's history intact):
```bash
git checkout main
git reset --hard HEAD
git clean -fd
```
> `git checkout main` - **Switch to main branch**: Return to the main branch  
> `git reset --hard HEAD` - **Discard all changes**: Remove all uncommitted changes and reset to last commit  
> `git clean -fd` - **Remove untracked files**: Delete any new files/folders not tracked by Git

**Use this when**: You have uncommitted changes you want to discard but want to keep any workshop branches or commits you've made.

### Scenario 2: Complete reset to match upstream template
If you've merged workshop changes into your fork's main and want to completely realign with the clean upstream template (this will remove ALL your workshop commits from main):
```bash
git fetch upstream
git checkout main
git reset --hard upstream/main   # WARNING: This removes ALL commits from your fork's main
git push --force origin main
```
> `git fetch upstream` - **Download updates**: Get latest changes from the original template repository  
> `git reset --hard upstream/main` - **Reset completely**: Make your main branch identical to upstream  
> `git push --force origin main` - **Force update**: Overwrite your fork's main branch on GitHub

**Use this when**: 
- You've completed workshops and merged them into your main branch
- You want a completely fresh start with the original template
- New workshop content has been added to the upstream template
- You want to start over with a clean main branch

**Note**: Your workshop branches will still exist locally unless you delete them manually. This only affects your main branch.
