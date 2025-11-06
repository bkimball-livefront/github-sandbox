# Workshop: Delete vs Modify Merge Conflicts

## What is a Delete vs Modify Conflict?

A **delete vs modify conflict** is a special type of merge conflict that occurs when:
- One branch **deletes** a file entirely
- Another branch **modifies** the same file
- Git cannot automatically decide whether to keep the modified version or honor the deletion

This creates a unique conflict scenario where Git must ask you to explicitly choose between keeping or removing the file, rather than just merging content changes.

**What you'll learn**: How to handle conflicts when file existence itself is disputed between branches.

**Why this matters**: 
- Common in refactoring scenarios where files are being removed/renamed
- Happens when features are being deprecated while simultaneously receiving bug fixes
- Critical for maintaining clean project structure during team collaboration

**What to expect**:
1. Create a file and commit it to main
2. Make one branch that modifies the file
3. Make another branch that deletes the file entirely
4. Attempt to merge and encounter the delete/modify conflict
5. Learn to read Git's delete/modify conflict messages
6. Practice resolving by choosing to keep or remove the file
7. Understand the implications of each choice

This workshop teaches you to handle one of Git's more complex conflict types that can be confusing for developers at any level.

---

## Exercise 1: Delete vs Modify Conflict

### Goal
Create a delete vs modify conflict by having one branch delete a file while another modifies it, then resolve the conflict.

---

### 🧨 Step 1 — Navigate to the Lesson Directory

Navigate to the lesson directory where the demo file is already provided:

```bash
cd merge-conflicts/delete-vs-modify
```

You'll see that `conflict-file.txt` is already provided for this exercise. Let's examine its contents:

```bash
cat conflict-file.txt
```
> `cat` - **Display file contents**: Shows the complete contents of a file in the terminal

---

### ✏️ Step 2 — Create the Modify Branch

Create and switch to a branch that will modify the file:

```bash
git checkout -b modify-branch
```

Modify the file content:
```bash
"This file has been MODIFIED!
It now has different content.
This change will conflict with deletion."
```

Commit the modification:
```bash
git add conflict-file.txt
git commit -m "Modify conflict-file.txt content"
```

Push this branch if working with remotes:
```bash
git push origin modify-branch
```

---

### 🧨 Step 3 — Delete the File on Another Branch

Go back to main and make a second branch:

```bash
git checkout main
git checkout -b delete-branch
```

Delete the file:
```bash
git rm conflict-file.txt 
git commit -m "Delete conflict-file.txt"
```
> `git rm` - **Remove file from Git**: Deletes the file from both your working directory AND stages the deletion for commit

> **Alternative**: You could also manually delete the file in your IDE then stage the deletion with `git add conflict-file.txt`.

Push this one too if needed:
```bash
git push origin delete-branch
```

---

### ⚔️ Step 4 — Merge and Observe the Conflict

Try merging the modify branch into the delete branch:

```bash
git merge modify-branch
```

Git will respond with something like:
```
CONFLICT (modify/delete): conflict-file.txt deleted in delete-branch and modified in modify-branch. 
Version modify-branch of conflict-file.txt left in tree.
Automatic merge failed; fix conflicts and then commit the result.
```

**🔍 Understanding the Conflict Message:**
- `CONFLICT (modify/delete)`: Tells you the type of conflict
- `deleted in delete-branch`: Shows which branch deleted the file
- `modified in modify-branch`: Shows which branch modified it
- `Version modify-branch of conflict-file.txt left in tree`: Git keeps the modified version for you to decide

---

### 🧩 Step 5 — Resolve the Conflict

At this point, you have two choices:

#### Option A: Keep the deletion
If the file should stay deleted:

```bash
git rm conflict-file.txt
git commit
```

**When to choose this:**
- The file was removed for a good reason (deprecated, refactored, etc.)
- The modifications on the other branch are no longer needed
- You're cleaning up the codebase

#### Option B: Keep the modified version
If the modified file should be kept:

```bash
git add conflict-file.txt
git commit
```

**When to choose this:**
- The modifications contain important changes
- The deletion was premature or incorrect
- The file is still needed in the project

---

### 🧭 Step 6 — Verify the Result

Check the final state:
```bash
git status
git log --oneline
```

Verify whether the file exists:
```bash
ls -la conflict-file.txt
# or
cat conflict-file.txt  # if you kept it
```

Check whether the file is present or deleted after resolution.

---

## 💡 What You Learned

✅ **How Git handles delete vs modify conflicts** - Unlike inline conflicts, these require explicit decisions about file existence

✅ **Reading conflict messages** - Git clearly tells you which branch deleted and which modified

✅ **Resolution strategies** - You learned when to keep deletions vs modifications

✅ **The importance of context** - These conflicts require understanding why files were deleted or modified

✅ **Commit strategies** - Different resolution paths require different Git commands

---

## 🎯 Practice Scenarios

Try these variations to deepen your understanding:

1. **Multiple file conflicts**: Create several files, delete some and modify others
2. **Directory deletion**: Delete an entire directory on one branch while modifying files within it on another
3. **Rename conflicts**: Rename a file on one branch while modifying it on another

---

## 🔗 Next Steps

- Practice with [Lesson One: Inline Conflicts](../MergeConflicts-InLine.md) if you haven't already
- Try creating more complex scenarios with multiple files
- Learn about merge strategies that can help prevent these conflicts

---

*Remember: Delete vs modify conflicts are normal and expected in collaborative development. The key is understanding the context and making informed decisions about which changes to keep.*