# Merge Conflicts Workshop Series## Exercise 1: Same-Line Edit Conflict (The Classic)



Welcome to the merge conflicts workshop series! These hands-on lessons will teach you to confidently handle different types of merge conflicts that occur in real-world Git workflows.### Goal

Create a guaranteed merge conflict by changing the **same line** in two branches, then resolve it.

## 📚 Available Lessons

---

### Lesson 1: Inline Merge Conflicts### 1. Navigate to the `lesson-one-inline` directory

**File**: `MergeConflicts-InLine.md`From within the repo

**Difficulty**: 🟢 Beginner```bash

cd merge-conflicts/lesson-one-inline

Learn to resolve the most common type of merge conflict - when two branches modify the same line(s) differently. This is your essential foundation for merge conflict resolution.```

> `cd` - **Change Directory**: Navigate to a different folder

**What you'll practice:**

- Creating same-line edit conflicts### 2. From within the repository, start from a clean `main`

- Reading Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)From with the `merge-conflicts/lesson-one-inline` directory

- Using your IDE's merge tools```bash

- Completing merges after resolutiongit checkout main

git pull

### Lesson 2: Delete vs Modify Conflicts  git status

**File**: `lesson-two-delete-vs-modify/README.md````

**Difficulty**: 🟡 Intermediate> `git checkout` - **Switch branches**: Change to a different branch or commit  

> `git pull` - **Download updates**: Fetch and merge latest changes from remote repository  

Handle the tricky scenario when one branch deletes a file while another modifies it. Git can't automatically decide whether to keep or remove the file.> `git status` - **Check state**: Show current branch, staged/unstaged changes, and untracked files



**What you'll practice:**### 3. Create the feature branch

- Understanding delete/modify conflict messages```bash

- Choosing between keeping deletions vs modificationsgit checkout -b lesson-one

- Making context-aware resolution decisions```

- Managing file existence conflicts> `git checkout -b` - **Create and switch**: Create a new branch and immediately switch to it



## 🎯 Recommended Learning Path### 4. Make a conflicting change on `lesson-one` branch

Open animals.ts and update the animalByLetter array by replacing Bear -> Black Bear

1. **Start with Lesson 1** - Master inline conflicts first as they're foundational```diff

2. **Progress to Lesson 2** - Learn delete vs modify conflicts when you're comfortable with basics- 'Bear',

3. **Practice variations** - Try the suggested scenarios in each lesson+ 'Black Bear',

4. **Combine concepts** - Create mixed conflict situations```



## 🛠️ PrerequisitesAlso make an update to any other animal of your choice.



- Basic Git knowledge (commit, branch, merge)#### Stage and commit

- A forked copy of this repository```bash

- A Git-enabled terminal or IDE```bash

CLI:

## 💡 Tips for Success

git add animals.ts

- **Don't rush** - Take time to read and understand each conflict messagegit commit -m "Lesson One: change Bear -> Black Bear"

- **Experiment freely** - This is a sandbox, mistakes are learning opportunities```

- **Use your IDE** - Most modern IDEs have excellent merge conflict tools> `git add` - **Stage changes**: Mark files to be included in the next commit  

- **Read the context** - Understanding why conflicts occur helps you resolve them better> `git commit` - **Save changes**: Create a snapshot of staged changes with a descriptive message



## 🔄 Reset Between Lessons---



If you need to start fresh:SourceTree:

```bash

git checkout main1. Select `File Status` from top left.

git reset --hard origin/main2. Select the files you want to stage (animals.ts)

```3. Add a commit message to the bottom text field "Lesson One: change Bear -> Black Bear"

4. Make sure the "Push changes immediately to origin/*" box is NOT checked.

## 🤝 Getting Help5. Select `Commit`

```

- Each lesson includes detailed explanations and examples

- Conflict messages contain helpful information - read them carefully### 5. Switch back to main

- When in doubt, ask: "What was each branch trying to accomplish?"```bash

git checkout main

---```



Happy learning! Merge conflicts are a normal part of collaborative development, and mastering them will make you a more confident Git user.### 6. Make a different change to the same line on `main`
```diff
- 'Bear',
+ 'Brown Bear',
```

#### Stage and commit.
Try this on your own using what you learned in Step 4
<details>
  <summary>Click here if you need help</summary>

CLI:

1. git add animals.ts
2. git commit -m "Lesson One: change Bear -> Brown Bear"

---

SourceTree:

1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Lesson One: change Bear -> Brown Bear"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`

</details>

### 7. Switch back to your `lesson-one` branch
```bash
git checkout lesson-one
```

### 8. Attempt to update your `lesson-one` branch with your changes in `main`
```bash
git merge main
```
> `git merge` - **Combine branches**: Integrate changes from another branch into your current branch

For this command, git is saying "Take all the new commits from the branch `main`, and try to combine them (merge) into my current branch `lesson-one`.

This is a common practice when writing automation and others continue to contribute to main.  You'll need those changes in your branch to ensure they all work together. 

So: 

* Current Branch: `lesson-one`
* Incoming changes: `main`

Git will:

* Compare main and lesson-one to find the common ancestor (the point before the two branches diverged).
* Apply the changes that exist in lesson-one but not yet in main.
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
On branch lesson-one
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  both modified:   animals.ts
  ```

### 9. Resolving the conflict
In your IDE of choice navigate to the file where you're having the merge conflicts `lesson-one`.

It should look like so:

```bash
<<<<<<< HEAD
    'Black Bear',
=======
    'Brown Bear',
>>>>>>> main
```
* `HEAD` means "your current branch" (In this example, that's `lesson-one`)
* the section below `=======` comes from the other branch (`main`).

You'll be given the option of selecting `Accept Current Change`,`Accept Incoming Change`, `Accept Both Changes`, `Compare Changes`

![alt text](image.png)

You can resolve the conflict by selecting any of the `Accept` options.
* Accepting Current Changes will keep `Black Bear` in your `animalByLetter` array.
* Accepting Incoming Changes will keep `Brown Bear` in your `animalByLetter` array.

Accept the Incoming Changes

#### Stage and complete the merge
Try this on your own using what you learned in Step 4 and 6
<details>
  <summary>Click here if you need help</summary>

CLI:

1. git add animals.ts
2. git commit -m "Lesson One: Resolve same-line conflict"

---

SourceTree:

1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Lesson One: change Bear -> Brown Bear"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`

</details>

## YOU DID IT!!!
Once you've resolved the conflict and commited, `lesson-one` should now contain:
* Its previous history (Other animal changed in Step 4), plus
* The new changes from `main` (update to Brown Bear)