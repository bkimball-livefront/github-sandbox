# Git Learning Sandbox

## Purpose

This repository provides a safe, structured environment to practice common Git scenarios and build confidence with Git workflows. Whether you're new to Git or want to sharpen your skills with challenging situations, this sandbox lets you experiment, make mistakes, and learn without consequences.


## Current Lessons

### Lesson One: Inline Merge Conflicts
**Location**: `merge-conflicts/lesson-one-inline/`

#### What is a Merge Conflict?

A **merge conflict** occurs when Git cannot automatically combine changes from different branches because:
- Two branches modified the same line(s) in a file differently
- One branch deleted a file while another modified it
- Multiple branches made conflicting changes to the same section of code

When this happens, Git pauses the merge and asks you to manually decide which changes to keep, creating an opportunity to learn conflict resolution skills that are essential for collaborative development.

**What you'll learn**: How to create and resolve the most common type of merge conflict - when two branches edit the same line differently.

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

## Getting Started

1. **Navigate to a lesson directory**:
   ```bash
   cd merge-conflicts/lesson-one-inline
   ```

2. **Follow the lesson README**: Each lesson has detailed step-by-step instructions

3. **Practice repeatedly**: Reset and try scenarios multiple times to build muscle memory

## Resetting Your Sandbox

To start fresh at any time:
```bash
git checkout main
git reset --hard HEAD
git clean -fd
```
> `git checkout main` - **Switch to main branch**: Return to the main branch  
> `git reset --hard HEAD` - **Discard all changes**: Remove all uncommitted changes and reset to last commit  
> `git clean -fd` - **Remove untracked files**: Delete any new files/folders not tracked by Git

---

*Ready to build your Git confidence? Start with [Lesson One](merge-conflicts/lesson-one-inline/README.md)!* 🚀
