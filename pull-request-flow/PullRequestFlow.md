# Workshop: Pull Request Flow (Fork Workflow)

## What is a Pull Request?

A **pull request** (PR) is a feature that lets you tell others about changes you've pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

**Why Pull Requests are essential**:
- **Code Review**: Team members can review your changes before they're merged
- **Collaboration**: Discuss implementation details, suggest improvements, and catch bugs
- **Documentation**: PRs create a historical record of what changed and why
- **Quality Control**: Ensure code meets team standards before integration
- **Knowledge Sharing**: Help team members learn from each other's approaches

**What you'll learn in this Workshop**:
1. Fork-based collaboration workflow (essential for open-source contributions)
2. Creating and managing feature branches
3. Writing effective PR descriptions and commit messages
4. Understanding the review and feedback process
5. Keeping your fork synchronized with the upstream repository
6. Best practices for collaborative development

**What to expect**:
1. Create a feature branch to fix a critical error in a recipe
2. Make targeted changes and commit them with clear messages
3. Push your branch and create a pull request in your fork
4. Practice the complete review cycle including addressing feedback
5. Merge your changes and clean up branches
6. Learn to keep your fork up-to-date with upstream changes

This workshop teaches you the collaborative workflow used in professional development teams and open-source projects worldwide.

---

### Goal
Practice the complete fork-based pull request workflow by making a simple change and going through the full review process.

> **Prerequisites**: You should have already forked this repository and set up your local clone with upstream remote. If not, follow the setup instructions in the main README first.

---

## 1. Start from a clean main (in your fork)
```bash
git checkout main
git pull origin main
```
> `git checkout {branch name}` - **Switch to main**: Change to the main branch  
> `git pull origin {branch name}` - **Download updates**: Get latest changes from your fork

## 2. Create a feature branch
```bash
git checkout -b feature/fix-salt-measurement
```
> `git checkout -b {branch name}` - **Create and switch**: Create a new branch and immediately switch to it

## 3. Make the change

Navigate to `pull-request-flow/desserts.ts` and fix the salt measurement:

```diff
- '1 cup salt',
+ '1 teaspoon salt',
```

This fixes a critical error - 1 cup of salt would make the cookies inedible! The correct measurement is 1 teaspoon.

## 4. Commit
```bash
cd pull-request-flow
git add desserts.ts
git commit -m "Fix salt measurement: change from 1 cup to 1 teaspoon"
```
> `git add` - **Stage changes**: Mark files to be included in the next commit  
> `git commit` - **Save changes**: Create a snapshot of staged changes with a descriptive message

## 5. Push your branch to your fork
```bash
git push -u origin feature/fix-salt-measurement
```
> `git push -u origin` - **Upload and track**: Send your branch to your fork and set up tracking

## 6. Open a PR in your fork

1. Go to your fork on GitHub
2. Click **"Compare & pull request"** (should appear automatically)
3. Set up the PR:
   - **Base**: `main`
   - **Compare**: `feature/fix-salt-measurement`
   - **Title**: "Fix salt measurement from cup to teaspoon"
   - **Description**:  Example below, use what you think is appropriate
     ```
     ## Changes
     - Fixed salt measurement from 1 cup to 1 teaspoon
     
     ## Reasoning
     - 1 cup of salt would make cookies inedible
     - 1 teaspoon is the correct amount for chocolate chip cookies
     - Critical bug fix for recipe accuracy
     ```

4. Click **"Create pull request"**
5. Ask a teammate to leave a comment on your new Pull Request, use the `#qa-automation` slack channel

## 7. Update after feedback

If you receive feedback, make the changes:

```bash
# Make edits to desserts.ts
git add desserts.ts
git commit -m "Address feedback: add comment explaining salt measurement"
git push
```

The PR updates automatically! ✨

## 8. Merge (in your fork)

1. Use **"Merge pull request"** on your fork
2. **Delete branch** (remote) after merging

## 9. Sync your fork's main locally
```bash
git checkout main
git pull origin main
git branch -d feature/fix-salt-measurement
```
> `git branch -d` - **Delete branch**: Remove the local feature branch after merging

---

## 🔁 Keeping your fork up-to-date with upstream

When the instructor updates the template:

```bash
git fetch upstream
git checkout main
git merge upstream/main   # or: git rebase upstream/main
git push origin main
```
> `git fetch upstream` - **Download from upstream**: Get latest changes from the original repository  
> `git merge upstream/main` - **Integrate upstream**: Combine upstream changes into your main branch

---

## 🎉 Congratulations!

You've completed the full fork-based pull request workflow! This is the standard process used in open-source projects and many professional development teams.

### What you learned:
- Fork-based collaboration workflow
- Feature branch development
- Pull request creation and management
- Code review process
- Keeping forks synchronized with upstream

**Next**: Try creating another PR with a different change to practice the workflow!
