
# 🌐 How to Create a Public GitHub Webpage (Student Handout)

This handout guides you through creating a public GitHub Pages website with multiple pages, images, and version control using Git and VS Code.

---

## 🚀 Part 1: Set Up Your Local Project in VS Code

### ✅ 1.1. Install Required Tools

Make sure the following are installed:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- A GitHub account: https://github.com

---

### ✅ 1.2. Create a Local Project Folder

1. Open VS Code
2. Go to `File → Open Folder...`
3. Create a folder called `my-github-site` and open it

---

## 📄 Part 2: Add HTML Pages and Images

### ✅ 2.1. Create `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Home Page</title>
</head>
<body>
  <h1>Welcome to My Website!</h1>
  <p>This is the homepage.</p>
  <a href="about.html">Go to About Page</a><br>
  <img src="images/cat.jpg" alt="A Cat" width="300">
</body>
</html>
```

---

### ✅ 2.2. Create `about.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>About Page</title>
</head>
<body>
  <h1>About Me</h1>
  <p>This is the about page.</p>
  <a href="index.html">Back to Home</a>
</body>
</html>
```

---

### ✅ 2.3. Add an Image

1. Create a folder called `images`
2. Place a file like `cat.jpg` into it (drag from your desktop)

---

## 🔧 Part 3: Initialize Git and Connect to GitHub

### ✅ 3.1. Open Terminal and Run:

```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

### ✅ 3.2. Create a New Repository on GitHub

- Go to GitHub → Click `+` → `New repository`
- Name it `my-github-site`
- Set it to **Public**
- **Do NOT** check "Initialize with README"
- Click **Create Repository**

---

### ✅ 3.3. Link Local Project to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-github-site.git
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## 💾 Part 4: Add, Commit, and Push Your Code

```bash
git add .
git commit -m "Initial website with home and about pages"
git branch -M main
git push -u origin main
```

---

## 🌐 Part 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages**
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Visit the link shown:
```
https://yourusername.github.io/my-github-site/
```

---

## 🌀 Part 6: Update Your Site

When you edit or add files:

```bash
git add .
git commit -m "Describe your update"
git push
```

GitHub Pages will auto-update.

---

## 🎨 Optional: Add CSS and JavaScript

### Add `style.css`

```css
body {
  background-color: #f4f4f4;
  font-family: sans-serif;
}
```

Link it in `index.html`:

```html
<link rel="stylesheet" href="style.css">
```

---

### Add `script.js`

```javascript
alert("Welcome to my site!");
```

Link it:

```html
<script src="script.js"></script>
```

---

## ✅ Summary Checklist

| Step | Task |
|------|------|
| 1 | Create folder in VS Code |
| 2 | Add HTML pages and images |
| 3 | Initialize Git |
| 4 | Create GitHub repo |
| 5 | Add/commit/push |
| 6 | Enable GitHub Pages |
| 7 | Visit live site and keep updating |

---

**Your website is now live and public!**
