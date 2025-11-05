# Git Learning Sandbox

## Table of Contents
- [Purpose](#purpose)
- [Get Started (Fork Workflow)](#get-started-fork-workflow)
- [Keep Your Fork in Sync with Upstream](#-keep-your-fork-in-sync-with-upstream)
- [Current Workshops](#-current-workshops)
  - [Pull Request Flow](#pull-request-flow)
  - [Inline Merge Conflicts](#inline-merge-conflicts)
- [Resetting Your Sandbox](#resetting-your-sandbox-local-only)

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


## 📚 Current Workshops

### Pull Request Flow
**Location**: `pull-request-flow/PullRequestFlow.md`

### Inline Merge Conflicts
**Location**: `merge-conflicts/MergeConflicts-InLine.md`

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

If you've merged changes into your fork's main and want to realign with upstream:
```bash
git fetch upstream
git checkout main
git reset --hard upstream/main   # WARNING: blows away local changes on main
git push --force origin main
```
