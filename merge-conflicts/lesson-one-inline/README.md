## 🧩 Exercise A — Same-Line Edit Conflict (The Classic)

### 🎯 Goal
Create a guaranteed merge conflict by changing the **same line** in two branches, then resolve it.

---
### 1. Navigate to the `lesson-one-inline` directory
From within the repo
```bash
cd merge-conflicts/lesson-one-inline
```
### 2. From within the repository, start from a clean `main`
From with the `merge-conflicts/lesson-one-inline` directory
```bash
git checkout main
git pull
git status
```

### 3. Create the feature branch
```bash
git checkout -b lesson-one
```

### 4. Make a conflicting change on `lesson-one` branch
Open animals.ts and update the animalByLetter array by replacing Bear -> Black Bear
```diff
- 'Bear',
+ 'Black Bear',
```

Also make an update to any other animal of your choice.

#### Stage and commit
```bash
CLI:

git add animals.ts
git commit -m "Lesson One: change Bear -> Black Bear"

---

SourceTree:

1. Select `File Status` from top left.
2. Select the files you want to stage (animals.ts)
3. Add a commit message to the bottom text field "Lesson One: change Bear -> Black Bear"
4. Make sure the "Push changes immediately to origin/*" box is NOT checked.
5. Select `Commit`
```

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