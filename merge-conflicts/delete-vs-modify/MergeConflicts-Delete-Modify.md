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
1. Start with the provided file already committed to main
2. Create a feature branch and modify the file
3. Switch back to main and delete the file
4. Attempt to merge main into your feature branch and encounter the delete/modify conflict
5. Learn to read Git's delete/modify conflict messages
6. Practice resolving by choosing to keep or remove the file
7. Understand the implications of each choice

This workshop teaches you to handle one of Git's more complex conflict types that can be confusing for developers at any level.

---

## Delete vs Modify Conflict

### Goal
Create a delete vs modify conflict by having one branch delete a file while another modifies it, then resolve the conflict.

---

### Step 1 — Navigate to the Lesson Directory

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

### Step 2 — Create the Modify Branch

Create and switch to a branch that will modify the file:

```bash
git checkout -b modify-branch
```
> [`git checkout -b`](../../git-glossary.md#git-checkout--b)

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
> [`git add`](../../git-glossary.md#git-add) | [`git commit`](../../git-glossary.md#git-commit)

Push this branch if working with remotes:
```bash
git push origin modify-branch
```
> [`git push`](../../git-glossary.md#git-push)

---

### Step 3 — Delete the File on Main

Go back to main and delete the file there:

```bash
git checkout main
```
> [`git checkout`](../../git-glossary.md#git-checkout)

Delete the file: You can do this through the CLI or manually in your IDE
```bash
git rm conflict-file.txt 
git commit -m "Delete conflict-file.txt"
```
> [`git rm`](../../git-glossary.md#git-rm) | [`git commit`](../../git-glossary.md#git-commit)

---

### Step 4 — Merge and Observe the Conflict

Switch back to your modify branch and try merging main:

```bash
git checkout modify-branch
git merge main
```
> [`git checkout`](../../git-glossary.md#git-checkout) | [`git merge`](../../git-glossary.md#git-merge)

Git will respond with something like:
```
CONFLICT (modify/delete): conflict-file.txt deleted in main and modified in modify-branch. 
Version modify-branch of conflict-file.txt left in tree.
Automatic merge failed; fix conflicts and then commit the result.
```

**Understanding the Conflict Message:**
- `CONFLICT (modify/delete)`: Tells you the type of conflict
- `deleted in main`: Shows which branch deleted the file
- `modified in modify-branch`: Shows which branch modified it
- `Version modify-branch of conflict-file.txt left in tree`: Git keeps the modified version for you to decide

> **💡 Modify/Delete Conflicts**: Decide whether the file should exist. If keeping, re-add with intended content. **Tip:** Use CLI commands below rather than IDE merge tools - they handle file existence conflicts more clearly than visual editors.

---

### Step 5 — Resolve the Conflict

At this point, you have two choices, but **for this exercise, we'll keep the modified file**.

Keep the modified version:

```bash
git add conflict-file.txt
git commit -m "Resolve delete vs modify conflict: keep modified file"
```
> [`git add`](../../git-glossary.md#git-add) | [`git commit`](../../git-glossary.md#git-commit)

**Why we're keeping the modified file:**
- The modifications contain important changes that shouldn't be lost
- This demonstrates the "keep changes" resolution path
- Shows how to preserve work when conflicts arise

**Alternative (for reference):** If you wanted to keep the deletion instead, you would run `git rm conflict-file.txt` followed by `git commit`.

---

### Step 6 — Verify the Result

Check the final state:
```bash
git status
git log --oneline
```
> [`git status`](../../git-glossary.md#git-status) | [`git log --oneline`](../../git-glossary.md#git-log---oneline)

Verify whether the file exists:
```bash
ls conflict-file.txt
# or
cat conflict-file.txt  # if you kept it
```
> `ls` - **List files**: Check if the specified file exists in the directory  
> `cat` - **Display file contents**: Shows the complete contents of a file in the terminal

Check whether the file is present or deleted after resolution.

---

## What You Learned

✅ **How Git handles delete vs modify conflicts** - Unlike inline conflicts, these require explicit decisions about file existence

✅ **Reading conflict messages** - Git clearly tells you which branch deleted and which modified

✅ **Resolution strategies** - You learned when to keep deletions vs modifications

✅ **The importance of context** - These conflicts require understanding why files were deleted or modified

✅ **Commit strategies** - Different resolution paths require different Git commands

---

## Practice Scenarios

Try these variations to deepen your understanding:

1. **Multiple file conflicts**: Create several files, delete some and modify others
2. **Directory deletion**: Delete an entire directory on one branch while modifying files within it on another
3. **Rename conflicts**: Rename a file on one branch while modifying it on another

---

## Next Steps

- Practice with [Inline Conflicts](../MergeConflicts-InLine.md) if you haven't already
- Try creating more complex scenarios with multiple files
- Learn about merge strategies that can help prevent these conflicts

---

*Remember: Delete vs modify conflicts are normal and expected in collaborative development. The key is understanding the context and making informed decisions about which changes to keep.*