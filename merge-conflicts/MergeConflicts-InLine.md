# Workshop: Inline Merge Conflicts

## What is a Merge Conflict?

A **merge conflict** occurs when Git cannot automatically combine changes from different branches because:
- Two branches modified the same line(s) in a file differently
- One branch deleted a file while another modified it
- Multiple branches made conflicting changes to the same section of code

When this happens, Git pauses the merge and asks you to manually decide which changes to keep, creating an opportunity to learn conflict resolution skills that are essential for collaborative development.

**What you'll learn**: How to create and resolve the most common type of merge conflict — when two branches edit the same line differently.

<!-- **Why inline conflicts are most common**: 
- Multiple developers often work on the same files simultaneously
- Small changes to the same line (like variable names, strings, or formatting) happen frequently
- These conflicts are straightforward to understand and resolve, making them perfect for learning -->

**What to expect**:
1. Create two branches that modify the same line in different ways
2. Attempt to merge them and encounter the conflict
3. Learn to read Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Practice resolving conflicts using your IDE's merge tools
5. Complete the merge and understand the resolution process

This workshop gives you hands-on experience with the fundamental skill of merge conflict resolution that every Git user needs to master.

---

## Exercise 1: Same-Line Edit Conflict (The Classic)

### Goal
Create a guaranteed merge conflict by changing the **same line** in two branches, then resolve it.

---
### 1. Navigate to the `merge-conflicts` directory
From within your forked repo
```bash
cd merge-conflicts
```
> `cd` - **Change Directory**: Navigate to a different folder

### 2. Start from a clean `main` branch in your fork
From within the `merge-conflicts` directory
```bash
git checkout main
git pull origin main
git status
```
> `git checkout` - **Switch branches**: Change to a different branch or commit  
> `git pull` - **Download updates**: Fetch and merge latest changes from remote repository  
> `git status` - **Check state**: Show current branch, staged/unstaged changes, and untracked files

### 3. Create the feature branch
```bash
git checkout -b merge-conflict
```
> `git checkout -b` - **Create and switch**: Create a new branch and immediately switch to it

### 4. Make a conflicting change on `merge-conflict` branch
Open `animals.ts` and update the animalByLetter array by replacing Bear -> Black Bear
```diff
- 'Bear',
+ 'Black Bear',
```

Also make an update to any other animal of your choice.

#### Stage and commit
```bash
git add animals.ts
git commit -m "Merge Conflict: change Bear -> Black Bear"
```
> `git add` - **Stage changes**: Mark files to be included in the next commit  
> `git commit` - **Save changes**: Create a snapshot of staged changes with a descriptive message

**Alternative - SourceTree:**
1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Merge conflict: change Bear -> Black Bear"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`

### 5. Switch back to main
```bash
git checkout main
```

### 6. Make a different change to the same line on `main`
```diff
- 'Bear',
+ 'Brown Bear',
```

#### Stage and commit.
Try this on your own using what you learned in Step 4
<details>
  <summary>Click here if you need help</summary>

**CLI:**
1. `git add animals.ts`
2. `git commit -m "Merge conflict: change Bear -> Brown Bear"`

**SourceTree:**
1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Merge conflict: change Bear -> Brown Bear"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`

</details>

### 7. Switch back to your `merge-conflict` branch
```bash
git checkout merge-conflict
```

### 8. Attempt to update your `merge-conflict` branch with your changes in `main`
```bash
git merge main
```
> `git merge` - **Combine branches**: Integrate changes from another branch into your current branch

For this command, git is saying "Take all the new commits from the branch `main`, and try to combine them (merge) into my current branch `merge-conflict`.

This is a common practice when writing automation and others continue to contribute to main.  You'll need those changes in your branch to ensure they all work together. 

So: 

* Current Branch: `merge-conflict`
* Incoming changes: `main`

Git will:

* Compare main and merge-conflict to find the common ancestor (the point before the two branches diverged).
* Apply the changes that exist in main but not yet in merge-conflict.
* Attempt to combine both versions of the files line by line.
* If both branches edited the same lines differently, Git cannot decide which to keep — so it stops and flags a merge conflict.
---
After running `git merge main`, you should see something like:
```bash
Auto-merging animals.ts
CONFLICT (content): Merge conflict in animals.ts
Automatic merge failed; fix conflicts and then commit the result.
```
And git status will confirm the conflict:
```bash
On branch merge-conflict
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  both modified:   animals.ts
  ```

### 9. Resolving the conflict
In your IDE navigate to the file where you're having the merge conflicts (`animals.ts`).

It should look like this:

```typescript
<<<<<<< HEAD
    'Black Bear',
=======
    'Brown Bear',
>>>>>>> main
```
* `HEAD` means "your current branch" (In this example, that's `merge-conflict`)
* The section below `=======` comes from the other branch (`main`).

You'll be given the option of selecting `Accept Current Change`, `Accept Incoming Change`, `Accept Both Changes`, `Compare Changes`

![alt text](image.png)

You can resolve the conflict by selecting any of the `Accept` options:
* **Accepting Current Changes** will keep `Black Bear` in your `animalByLetter` array.
* **Accepting Incoming Changes** will keep `Brown Bear` in your `animalByLetter` array.

**For this exercise: Accept the Incoming Changes** (Brown Bear)

#### Stage and complete the merge
Try this on your own using what you learned in Step 4 and 6
<details>
  <summary>Click here if you need help</summary>

**CLI:**
1. `git add animals.ts`
2. `git commit -m "Merge conflict: Resolve same-line conflict"`

**SourceTree:**
1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Merge conflict: Resolve same-line conflict"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`

</details>

## 🎉 YOU DID IT!!!
Once you've resolved the conflict and committed, `merge-conflict` should now contain:
* Its previous history (Other animal changed in Step 4), plus
* The new changes from `main` (update to Brown Bear)

### Optional: Push to your fork
```bash
git push -u origin merge-conflict
```
> `git push -u origin` - **Upload and track**: Send your branch to your fork and set up tracking

You can now create a Pull Request in your fork if you want to practice that workflow!