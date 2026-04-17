# Portfolio — Full-Stack Developer

Personal portfolio website showcasing 10 projects across 5+ years of experience.

## Tech Stack

- Pure HTML5 / CSS3 / JavaScript (no framework, no build step)
- Google Fonts: Space Grotesk + JetBrains Mono
- Deployed on GitHub Pages

## Local Preview

Open `index.html` directly in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

## Deploy to GitHub Pages

### Option 1: From the `main` branch

1. Push this repo to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to **Settings > Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save** — your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: From the `gh-pages` branch

```bash
git checkout -b gh-pages
git push origin gh-pages
```

Then configure GitHub Pages to use the `gh-pages` branch.

## Customize

### Your Name
Edit the hero section in `index.html` — change `QUỐC L.` to your name.

### Contact Links
Find the contact section in `index.html` and update:
- `href="mailto:your.email@example.com"` → your email
- `href="https://github.com/yourusername"` → your GitHub
- `href="https://linkedin.com/in/yourusername"` → your LinkedIn

### Projects
Edit the `projects` array in `js/script.js` to add/remove/modify projects.

### Colors
Edit CSS custom properties at the top of `css/style.css`:

```css
:root {
    --neon-cyan: #00f0ff;    /* Primary accent */
    --neon-purple: #7b2ff7;  /* Secondary accent */
    --neon-blue: #0066ff;
    --neon-pink: #ff2d7c;
}
```

## File Structure

```
├── index.html       # Main page
├── css/
│   └── style.css    # All styles & animations
├── js/
│   └── script.js    # Data, filtering, interactions
├── README.md        # This file
└── noidung.md       # Source content (Vietnamese)
```
