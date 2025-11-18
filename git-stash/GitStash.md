# Workshop: Git Stash

## What is Git Stash?

**Git stash** is a powerful feature that temporarily saves your uncommitted changes (both staged and unstaged) and reverts your working directory to match the HEAD commit. Think of it as a "clipboard" for your work-in-progress changes that you can retrieve later.

<!-- **Why Git Stash is essential**:
- **Branch switching**: Quickly switch branches without committing incomplete work
- **Emergency fixes**: Handle urgent issues while preserving your current work
- **Clean workspace**: Get a clean working directory when you need to pull updates
- **Experimentation**: Try different approaches without losing your current progress
- **Context switching**: Pause work on one feature to help with another -->

### Why Git Stash Is Useful

- Switch branches safely without committing unfinished work  
- Fix urgent bugs while preserving work-in-progress  
- Pull updates cleanly  
- Experiment safely  
- Pause & resume work anytime  

### Important Notes

- Stashing does **not** save committed changes — only uncommitted ones  
- `git stash save` is deprecated; use `git stash push`  

**What you'll learn in this Workshop**:
1. Creating stashes with descriptive messages
2. Viewing and managing your stash stack
3. Applying stashes back to your working directory
4. Understanding the difference between `apply` and `pop`
5. Handling stash conflicts when applying changes
6. Advanced stash operations (partial stashing, stash branching)

**What to expect**:
1. Create a feature branch and start working on changes
2. Practice stashing work when you need to switch contexts
3. Learn to apply stashes in different scenarios
4. Handle conflicts when stashed changes don't apply cleanly


This workshop teaches you one of Git's most practical day-to-day features that everyone needs to be familiar with.

---

### Goal
Master the git stash workflow by practicing common scenarios: saving work-in-progress, switching contexts, and applying changes back to your working directory.

> **Prerequisites**: You should have already forked this repository and set up your local clone. If not, follow the setup instructions in the main README first.

---

## 1. Start from a clean main and navigate to the workshop

```bash
git checkout main
git pull origin main
```
> [`git checkout`](../git-glossary.md#git-checkout) | [`git pull`](../git-glossary.md#git-pull)

Navigate to the stash workshop directory where the demo files are already provided:

```bash
cd git-stash
```

Examine the initial files we'll be working with:

```bash
cat shopping-cart.ts
cat styles.css
```

You should see a basic shopping cart class and some initial CSS styles. These files are already committed to the repository and ready for our stash workshop.

---

## 2. Create a feature branch and start working

```bash
git checkout -b feature/add-remove-functionality
```
> [`git checkout -b`](../git-glossary.md#git-checkout--b)

Start making changes to the shopping cart:

**Edit `shopping-cart.ts`** - Add the `removeItem` method and TODO comments:

```typescript
// Shopping cart functionality
class ShoppingCart {
  private items: any[];

  constructor() {
    this.items = [];
  }
  
  addItem(item: any): void {
    this.items.push(item);
  }
  
  removeItem(itemId: string): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }
  
  // TODO: Add quantity management
  // TODO: Add price calculation
}
```

**Edit `styles.css`** - Add background color and remove button styles:

```css
/* Basic styles for shopping cart */
.shopping-cart {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

/* TODO: Add remove button styles */
.remove-btn {
  color: red;
}
```

Check your current status:
```bash
git status
```
> [`git status`](../git-glossary.md#git-status)

You should see both files as modified but not staged.

---

## 3. Scenario 1: Emergency hotfix needed - Basic Stash

Imagine you get an urgent request to fix a bug on main. You need to switch branches but your work isn't ready to commit.

### Stash your changes with a descriptive message:
```bash
git stash push -m "WIP: Adding remove functionality and styling updates"
```
> [`git stash push -m`](../git-glossary.md#git-stash-push--m)

**What happened?**
- Your working directory is now clean
- All changes are safely stored in the stash
- You can switch branches freely

Verify your working directory is clean:
```bash
git status
cat shopping-cart.ts  # Should show original content
```

### Switch to main for the hotfix:
```bash
git checkout main
```

Simulate fixing a bug by editing the file:

**Edit `shopping-cart.ts`** - Add input validation to the `addItem` method and update the comment:

```typescript
// Shopping cart functionality - Bug fix: Added input validation
class ShoppingCart {
  private items: any[];

  constructor() {
    this.items = [];
  }
  
  addItem(item: any): void {
    if (!item || !item.id) {
      throw new Error('Invalid item: must have an id');
    }
    this.items.push(item);
  }
}
```

**What changed:**
- Updated the file comment to mention the bug fix
- Added input validation in `addItem` method
- Added error handling for invalid items

Commit the hotfix:
```bash
git add shopping-cart.ts
git commit -m "Hotfix: Add input validation for addItem method"
```

---

## 4. Return to your feature work - Apply the stash

Switch back to your feature branch:
```bash
git checkout feature/add-remove-functionality
```

### View your stashes:
```bash
git stash list
```
> [`git stash list`](../git-glossary.md#git-stash-list)

You should see something like:
```
stash@{0}: On feature/add-remove-functionality: WIP: Adding remove functionality and styling updates
```

### Apply your stashed changes:
```bash
git stash apply stash@{0}
```
> [`git stash apply`](../git-glossary.md#git-stash-apply)

**Note**: `git stash apply` keeps the stash in your stash list. Use `git stash pop` if you want to apply AND remove it from the stash list.

Check the results:
```bash
git status
cat shopping-cart.ts
```

Your changes are back! You might notice Git has intelligently merged your stashed changes with the current state of the files.

---

## 5. Scenario 2: Stash conflicts - When changes don't apply cleanly

Let's create a scenario where applying a stash causes conflicts.

First, let's commit our current work:
```bash
git add .
git commit -m "Add removeItem functionality and basic styling"
```

Now make some changes that will conflict with a future stash:

**Edit `shopping-cart.ts`** - Add a `discountRate` property:

```typescript
// Shopping cart functionality - Bug fix: Added input validation
class ShoppingCart {
  private items: any[];
  private discountRate: number; // New property that will conflict

  constructor() {
    this.items = [];
    this.discountRate = 0;
  }
  
  addItem(item: any): void {
    if (!item || !item.id) {
      throw new Error('Invalid item: must have an id');
    }
    this.items.push(item);
  }
  
  removeItem(itemId: string): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}
```

**What changed:**
- Added `private discountRate: number;` property declaration
- Initialized `this.discountRate = 0;` in constructor

Stash this change:
```bash
git stash push -m "WIP: Adding discount rate property"
```

Now make a different change to the same area:

**Edit `shopping-cart.ts`** - Replace the `discountRate` with a `maxItems` property and add validation:

```typescript
// Shopping cart functionality - Bug fix: Added input validation
class ShoppingCart {
  private items: any[];
  private maxItems: number; // Different property in same location

  constructor() {
    this.items = [];
    this.maxItems = 100;
  }
  
  addItem(item: any): void {
    if (!item || !item.id) {
      throw new Error('Invalid item: must have an id');
    }
    if (this.items.length >= this.maxItems) {
      throw new Error('Cart is full');
    }
    this.items.push(item);
  }
  
  removeItem(itemId: string): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}
```

**What changed:**
- **Replaced** `discountRate` property with `maxItems: number`
- **Changed** constructor to initialize `maxItems = 100` instead of `discountRate = 0`
- **Added** cart capacity validation in `addItem` method

Commit this change:
```bash
git add shopping-cart.ts
git commit -m "Add max items limit to shopping cart"
```

Now try to apply the stash with the discount rate:
```bash
git stash apply stash@{0}
```

You'll get a merge conflict! Git will tell you there's a conflict and mark the file with conflict markers.

### Resolve the conflict:

Open `shopping-cart.ts` and you'll see conflict markers like:
```typescript
  constructor() {
    this.items = [];
<<<<<<< Updated upstream
    this.maxItems = 100; // Different property in same location
=======
    this.discountRate = 0; // New property that will conflict
>>>>>>> Stashed changes
  }
```

**Resolve the conflict by editing `shopping-cart.ts`** - Keep both properties by removing the conflict markers and merging the changes:

```typescript
// Shopping cart functionality - Bug fix: Added input validation
class ShoppingCart {
  private items: any[];
  private maxItems: number;
  private discountRate: number;

  constructor() {
    this.items = [];
    this.maxItems = 100;
    this.discountRate = 0;
  }
  
  addItem(item: any): void {
    if (!item || !item.id) {
      throw new Error('Invalid item: must have an id');
    }
    if (this.items.length >= this.maxItems) {
      throw new Error('Cart is full');
    }
    this.items.push(item);
  }
  
  removeItem(itemId: string): void {
    this.items = this.items.filter(item => item.id !== itemId);
  }
}
```

**How to resolve:**
1. **Remove** all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
2. **Keep both** property declarations: `maxItems` and `discountRate`
3. **Initialize both** properties in the constructor
4. **Save** the file - VS Code should show the conflict as resolved

Stage the resolved file:
```bash
git add shopping-cart.ts
```

The conflict is now resolved! The stash is still in your list unless you used `git stash pop`.

---

## 6. Advanced Stash Operations

### Stash only specific files:

Make changes to both files in your IDE:

**Add to `styles.css`:**
```css
/* Updated CSS with new styles */
.cart-item {
  margin: 5px 0;
  padding: 8px;
}
```

**Add to `shopping-cart.ts`:**
```typescript
console.log('Debug info');
```
*(Add this line at the end of the file)*

**Stash only the CSS file:**
```bash
git stash push -m "CSS updates only" styles.css
```

This will stash only the CSS changes, leaving the TypeScript changes in your working directory.

### Create a new branch from a stash:
```bash
git stash branch feature/css-improvements stash@{0}
```
> [`git stash branch`](../git-glossary.md#git-stash-branch)

This creates a new branch and applies the stash to it automatically.

### View stash contents before applying:
```bash
git stash show -p stash@{0}
```
> [`git stash show -p`](../git-glossary.md#git-stash-show--p)

This shows you exactly what changes are in the stash.

### Drop a stash you no longer need:
```bash
git stash drop stash@{1}
```
> [`git stash drop`](../git-glossary.md#git-stash-drop)

### Clear all stashes:
```bash
git stash clear
```
> [`git stash clear`](../git-glossary.md#git-stash-clear)

---

## 7. Best Practices and Tips

### Always use descriptive messages:
```bash
# Good
git stash push -m "WIP: User authentication form validation"

# Bad
git stash
```

### Check what you're stashing:
```bash
git status              # See what files are changed
git diff                # See what the changes are
git stash push -m "Descriptive message"
```

### Use stash when pulling updates:
```bash
git stash push -m "Save work before pulling latest changes"
git pull origin main
git stash pop
```

### Stash untracked files too:
```bash
git stash push -u -m "Include new files in stash"
```
> [`git stash push -u`](../git-glossary.md#git-stash-push--u)

---

## Common Scenarios Where You'll Use Stash

1. **Switching branches mid-work**: You're working on a feature but need to check something on another branch
2. **Pulling updates**: You have uncommitted changes but need to pull the latest changes from remote
3. **Emergency hotfixes**: Drop everything to fix a critical bug, then come back to your work
4. **Code review prep**: Clean up your working directory before reviewing someone else's PR
5. **Experimenting**: Try a different approach while keeping your current progress safe

---

## 🎉 Congratulations!

You've mastered Git stash! This is one of the most practical Git features you'll use in day-to-day development.

### What you learned:
- Creating stashes with descriptive messages
- Applying and popping stashes
- Handling stash conflicts
- Advanced stash operations
- When and why to use stash in real-world scenarios

### Key takeaways:
- **Always use descriptive messages** for your stashes
- **`apply` keeps the stash**, `pop` removes it after applying
- **Stash conflicts are resolved** just like merge conflicts
- **Stash is perfect for context switching** without committing incomplete work

**Next**: Try using stash in your daily workflow! It becomes second nature once you start using it regularly.

---

*Remember: Git stash is your safety net for work-in-progress changes. Don't be afraid to use it liberally - it's much better than losing work or making premature commits!*