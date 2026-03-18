# Gayatri Devi Putta — Angular Developer Portfolio

> A modern, production-grade developer portfolio built with **Angular 17+**, **SCSS**, and **TypeScript**.

![Angular](https://img.shields.io/badge/Angular-17+-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-pink?logo=sass)

---

## ✨ Features

- **7 Sections**: Home, About, Skills, Experience, Projects, Education, Contact
- **Typewriter animation** on hero section with multiple role phrases
- **Scroll-triggered animations** using IntersectionObserver (custom directive)
- **Interactive contact form** with validation states
- **Floating code card** with live metric badges
- **Dark theme** with teal (#64dcb4) accent, Syne + DM Mono typography
- **Fully responsive** — mobile, tablet, desktop
- **Standalone Components** architecture (Angular 17+)
- **Lazy-loaded routes**
- **SEO meta tags** in index.html

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Fixed responsive navbar with scroll spy
│   │   ├── home/           # Hero section + page assembler
│   │   ├── about/          # About with stats cards
│   │   ├── skills/         # Skill cards with animated progress bars
│   │   ├── experience/     # Timeline-style work history
│   │   ├── projects/       # Project cards with achievements
│   │   ├── education/      # Education + certifications
│   │   ├── contact/        # Contact form + info
│   │   └── footer/         # Footer with back-to-top
│   ├── services/
│   │   ├── portfolio-data.service.ts   # All resume data (single source of truth)
│   │   └── scroll-animate.directive.ts # IntersectionObserver fade-in
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss              # Global design system (CSS variables, utilities)
└── index.html
```

---

## 🚀 Local Development

### Prerequisites
- **Node.js 18+** — [Download](https://nodejs.org/)
- **npm 9+** (comes with Node)
- **Angular CLI 17+**

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/gayatri-portfolio.git
cd gayatri-portfolio

# 2. Install Angular CLI globally (if not already installed)
npm install -g @angular/cli@latest

# 3. Install project dependencies
npm install

# 4. Start the dev server
npm start
# → Open http://localhost:4200
```

---

## 🎨 Customisation

All your personal data lives in **one single file**:

```
src/app/services/portfolio-data.service.ts
```

Edit these sections to update the portfolio:
- `personal` — name, email, phone, GitHub/LinkedIn URLs, stats
- `skills` — categories and skill levels (0–100)
- `experiences` — companies, roles, bullet points
- `projects` — title, description, tech stack, achievements, links
- `education` — degrees, institutions, CGPAs
- `certifications` — title, issuer

### Update social links
Search for `https://github.com` and `https://linkedin.com` in `portfolio-data.service.ts` and replace with your actual profile URLs.

---

## 📦 Build for Production

```bash
npm run build:prod
# Output: dist/gayatri-portfolio/browser/
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

#### One-time setup:

```bash
# 1. Push your code to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gayatri-portfolio.git
git push -u origin main
```

```bash
# 2. Update the base-href in package.json
# Open package.json and change this line:
"build:gh-pages": "ng build --configuration production --base-href /gayatri-portfolio/"
# Replace 'gayatri-portfolio' with your EXACT GitHub repo name
```

```bash
# 3. Enable GitHub Pages in your repository settings:
# → Go to repo Settings → Pages
# → Source: "GitHub Actions"
# → Save

# 4. The GitHub Actions workflow (.github/workflows/deploy.yml) will
#    automatically build and deploy on every push to main.
```

**Your site will be live at:** `https://YOUR_USERNAME.github.io/gayatri-portfolio/`

#### Manual deploy (alternative without Actions):

```bash
npm install -g angular-cli-ghpages

# Build and deploy in one command:
npm run build:gh-pages && npx angular-cli-ghpages --dir=dist/gayatri-portfolio/browser
```

---

### Option 2: Netlify (Recommended — Free tier, custom domain support)

#### Method A: Drag & Drop (Fastest)

```bash
# 1. Build the project
npm run build:prod

# 2. Go to https://app.netlify.com/drop
# 3. Drag and drop the 'dist/gayatri-portfolio/browser' folder
# 4. Your site is live instantly with a *.netlify.app URL!
```

#### Method B: Git Integration (Auto-deploy on push)

```bash
# 1. Push your code to GitHub/GitLab/Bitbucket

# 2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"

# 3. Connect your Git provider and select the repo

# 4. Netlify auto-detects Angular. Confirm these settings:
#    Build command:  npm run build:prod
#    Publish dir:    dist/gayatri-portfolio/browser

# 5. Click "Deploy site"
```

The `netlify.toml` file in this repo handles redirects automatically (SPA routing).

**Custom domain:** In Netlify → Site Settings → Domain Management → Add custom domain.

---

### Option 3: Vercel (Free tier, fastest CDN)

#### Method A: Vercel CLI

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy (from project root)
vercel

# Follow prompts:
# → Set up and deploy: Y
# → Which scope: (your account)
# → Link to existing project: N
# → Project name: gayatri-portfolio
# → Directory: ./
# → Override settings: N

# For production deploy:
vercel --prod
```

#### Method B: Git Integration

```bash
# 1. Push code to GitHub

# 2. Go to https://vercel.com/new

# 3. Import your GitHub repository

# 4. Vercel auto-detects Angular via vercel.json
#    Build command:  npm run build:prod
#    Output dir:     dist/gayatri-portfolio/browser

# 5. Click Deploy
```

**Your site will be live at:** `https://gayatri-portfolio.vercel.app`

---

## 🔗 Quick Comparison

| Platform      | Free Tier | Custom Domain | Auto-Deploy | Build Time |
|---------------|-----------|---------------|-------------|------------|
| GitHub Pages  | ✅ Yes    | ✅ Yes (CNAME)| ✅ Actions  | ~2 min     |
| Netlify       | ✅ Yes    | ✅ Yes        | ✅ Git push | ~1.5 min   |
| Vercel        | ✅ Yes    | ✅ Yes        | ✅ Git push | ~1 min     |

**Recommendation:** Use **Netlify** or **Vercel** for the easiest experience with automatic HTTPS, custom domains, and instant rollbacks.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Angular | 17+ | Framework |
| TypeScript | 5.4 | Language |
| SCSS | — | Styling |
| RxJS | 7.8 | Reactivity |
| IntersectionObserver API | — | Scroll animations |
| Google Fonts | — | Syne + DM Mono + DM Sans |

---

## 📧 Contact

**Gayatri Devi Putta**
- Email: gayatridevi.putta@gmail.com
- Phone: +91 9949581512
- Location: Hyderabad, India

---

*Built with ❤️ using Angular 17+ Standalone Components*
