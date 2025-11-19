# Git Command Glossary

A comprehensive reference for Git commands used throughout the workshops. Bookmark this page for quick command lookups!

## Table of Contents
- [Basic Commands](#basic-commands)
- [Branching & Merging](#branching--merging)
- [Remote Operations](#remote-operations)
- [Stash Operations](#stash-operations)
- [Conflict Resolution](#conflict-resolution)
- [Information & Status](#information--status)

---

## Basic Commands

### git add
**Stage changes**: Mark files to be included in the next commit
- **Syntax**: `git add {file-name}` or `git add .` (all files)
- **Example**: `git add desserts.ts` or `git add .`
- **Use case**: Preparing specific changes for commit
- **Tip**: Use `git add -p` for interactive staging of partial changes

### git commit
**Save changes**: Create a snapshot of staged changes with a descriptive message
- **Syntax**: `git commit -m "{commit-message}"`
- **Example**: `git commit -m "Fix salt measurement in recipe"`
- **Use case**: Recording changes to repository history
- **Tip**: Write clear, concise commit messages that explain "why" not just "what"

### git status
**Check working tree**: Show the current state of your working directory and staging area
- **Syntax**: `git status`
- **Example**: `git status`
- **Use case**: See which files are modified, staged, or untracked
- **Tip**: Run this frequently to stay aware of your current state

---

## Branching & Merging

### git checkout
**Switch branches**: Change to a different branch or commit
- **Syntax**: `git checkout {branch-name}`
- **Example**: `git checkout main` or `git checkout feature/fix-bug`
- **Use case**: Moving between different versions of your code
- **Tip**: Always commit or stash changes before switching branches

### git checkout -b
**Create and switch**: Create a new branch and immediately switch to it
- **Syntax**: `git checkout -b {new-branch-name}`
- **Example**: `git checkout -b feature/fix-salt-measurement`
- **Use case**: Starting work on a new feature or bug fix
- **Tip**: Use descriptive branch names like `feature/user-login` or `fix/header-bug`

### git merge
**Combine branches**: Integrate changes from another branch into the current branch
- **Syntax**: `git merge {source-branch}`
- **Example**: `git merge feature/new-feature`
- **Use case**: Bringing completed work from a feature branch into main
- **Tip**: Always merge into the target branch (e.g., switch to main, then merge feature)

### git branch -d
**Delete branch**: Remove a local branch that's no longer needed
- **Syntax**: `git branch -d {branch-name}`
- **Example**: `git branch -d feature/completed-feature`
- **Use case**: Cleaning up after merging branches
- **Tip**: Use `-D` to force delete unmerged branches (be careful!)

---

## Remote Operations

### git pull
**Download and merge**: Fetch changes from remote repository and merge into current branch
- **Syntax**: `git pull {remote-name} {branch-name}`
- **Example**: `git pull origin main`
- **Use case**: Getting the latest changes from your remote repository
- **Tip**: Always pull before starting new work to avoid conflicts

### git push
**Upload changes**: Send your local commits to the remote repository
- **Syntax**: `git push {remote-name} {branch-name}`
- **Example**: `git push origin feature/fix-bug`
- **Use case**: Sharing your work with others or backing up to remote
- **Tip**: Use `git push -u origin {branch-name}` for first push to set up tracking

### git push -u origin
**Upload and track**: Send your branch to remote and set up tracking for future pushes
- **Syntax**: `git push -u origin {branch-name}`
- **Example**: `git push -u origin feature/new-feature`
- **Use case**: First time pushing a new branch
- **Tip**: After this, you can just use `git push` for subsequent pushes

### git fetch
**Download updates**: Get latest changes from remote repository without merging
- **Syntax**: `git fetch {remote-name}`
- **Example**: `git fetch origin` or `git fetch upstream`
- **Use case**: Checking what's new on remote before deciding to merge
- **Tip**: Safer than pull when you want to review changes first

### git fetch upstream
**Download from upstream**: Get latest changes from the original repository (when working with forks)
- **Syntax**: `git fetch upstream`
- **Example**: `git fetch upstream`
- **Use case**: Staying up-to-date with the original project when working on a fork
- **Tip**: Essential for keeping forks synchronized with upstream changes

### git merge upstream/main
**Integrate upstream**: Combine upstream changes into your main branch
- **Syntax**: `git merge upstream/{branch-name}`
- **Example**: `git merge upstream/main`
- **Use case**: Updating your fork with latest changes from original repository
- **Tip**: Do this regularly to avoid large merge conflicts

---

## Stash Operations

### git stash push -m
**Save work-in-progress**: Temporarily store uncommitted changes with a descriptive message
- **Syntax**: `git stash push -m "{descriptive-message}"`
- **Example**: `git stash push -m "WIP: Adding user authentication"`
- **Use case**: Saving incomplete work when you need to switch contexts
- **Tip**: Always use descriptive messages to remember what you stashed

### git stash list
**View stashed changes**: Display all saved stashes with their messages
- **Syntax**: `git stash list`
- **Example**: `git stash list`
- **Use case**: Seeing what stashes you have available to apply
- **Tip**: Stashes are numbered stash@{0}, stash@{1}, etc. (newest to oldest)

### git stash apply
**Restore stashed changes**: Apply a stash to your working directory without removing it from stash list
- **Syntax**: `git stash apply {stash-reference}`
- **Example**: `git stash apply stash@{0}` or just `git stash apply` (applies most recent)
- **Use case**: Retrieving your work-in-progress changes
- **Tip**: Use when you might need to apply the same stash to multiple branches

### git stash pop
**Apply and remove**: Apply a stash to your working directory and remove it from stash list
- **Syntax**: `git stash pop {stash-reference}`
- **Example**: `git stash pop stash@{0}` or just `git stash pop` (pops most recent)
- **Use case**: Retrieving your work when you're done with the stash
- **Tip**: More common than apply since you usually don't need the stash again

### git stash show -p
**Preview stash contents**: Show exactly what changes are stored in a stash
- **Syntax**: `git stash show -p {stash-reference}`
- **Example**: `git stash show -p stash@{0}`
- **Use case**: Reviewing what's in a stash before applying it
- **Tip**: Helps avoid conflicts by seeing what you're about to apply

### git stash drop
**Delete a stash**: Remove a specific stash from your stash list
- **Syntax**: `git stash drop {stash-reference}`
- **Example**: `git stash drop stash@{1}`
- **Use case**: Cleaning up stashes you no longer need
- **Tip**: Be careful - this permanently deletes the stash!

### git stash clear
**Delete all stashes**: Remove all saved stashes from your stash list
- **Syntax**: `git stash clear`
- **Example**: `git stash clear`
- **Use case**: Starting fresh with no saved work-in-progress
- **Warning**: This permanently deletes ALL stashes - use with caution!

### git stash branch
**Create branch from stash**: Create a new branch and apply a stash to it
- **Syntax**: `git stash branch {new-branch-name} {stash-reference}`
- **Example**: `git stash branch feature/stashed-work stash@{0}`
- **Use case**: When a stash doesn't apply cleanly to current branch
- **Tip**: Great for handling complex conflicts or exploring different approaches

### git stash push -u
**Stash including untracked files**: Save both tracked changes and new files
- **Syntax**: `git stash push -u -m "{message}"`
- **Example**: `git stash push -u -m "Include new config files"`
- **Use case**: When you have new files that aren't being tracked by Git yet
- **Tip**: Without -u, new files won't be included in the stash

---

## Conflict Resolution

### git rm
**Remove file from Git**: Deletes the file from both your working directory and stages the deletion for commit
- **Syntax**: `git rm {file-name}`
- **Example**: `git rm unwanted-file.txt`
- **Use case**: Removing files that should no longer be tracked by Git
- **Alternative**: You could manually delete with `rm {file-name}` then stage with `git add {file-name}`, but `git rm` does both steps at once

---

## Information & Status

### git log --oneline
**Show commit history**: Display a condensed view of commit history
- **Syntax**: `git log --oneline`
- **Example**: `git log --oneline` or `git log --oneline -n {number}`
- **Use case**: Quickly reviewing recent commits and their messages
- **Tip**: Use `git log --oneline -n 10` to show only the last 10 commits

---

## Quick Reference Cards

### Starting a New Feature
```bash
git checkout main                           # Switch to main
git pull origin main                        # Get latest changes
git checkout -b {feature-branch-name}       # Create feature branch
# ... make changes ...
git add {file-name}                         # Stage changes
git commit -m "{descriptive-message}"       # Commit changes
git push -u origin {feature-branch-name}    # Push to remote
```

### Updating Your Fork
```bash
git fetch upstream                          # Get upstream changes
git checkout main                           # Switch to main
git merge upstream/main                     # Merge upstream changes
git push origin main                        # Update your fork
```

### Basic Conflict Resolution
```bash
# After encountering a merge conflict:
# 1. Edit files to resolve conflicts
git add {resolved-file-name}                # Stage resolved files
git commit                                  # Complete the merge
```

### Using Git Stash
```bash
# Save work-in-progress before switching context
git stash push -m "WIP: {description}"      # Save current changes
git checkout {other-branch}                 # Switch to work on something else
# ... do other work ...
git checkout {original-branch}              # Return to original work
git stash pop                               # Restore your changes

# Handle stash conflicts
git stash pop                               # If conflicts occur
# Edit files to resolve conflicts
git add {resolved-files}                    # Stage resolved conflicts
# Stash is automatically removed after successful pop
```

---

## Tips for Success

- **Read the output**: Git provides helpful messages - take time to read them
- **Commit often**: Small, frequent commits are easier to manage than large ones
- **Use descriptive names**: Branch names and commit messages should be clear and meaningful
- **When in doubt, check status**: `git status` is your friend - use it frequently
- **Practice safely**: This sandbox is perfect for experimenting without consequences

---

*Need help with a command not listed here? Check the official [Git documentation](https://git-scm.com/docs) or ask for assistance!*