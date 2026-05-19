# Jaydev Hapani — Portfolio

Personal portfolio website for Jaydev Hapani, Senior React Native Developer & Mobile Team Lead.

**Live URL:** https://jaydev-portfolio-pi.vercel.app

---

## Accounts & Services

| Service | Account | Purpose |
|---------|---------|---------|
| GitHub | [@jaydevhapani](https://github.com/jaydevhapani) | Source code & version control |
| Vercel | Connected via GitHub OAuth | Hosting & CI/CD auto-deploy |
| Email | hapanijaydev04@gmail.com | Contact form (mailto) |

---

## CI/CD Pipeline

```
Local code change
      ↓
git add . && git commit -m "message"
      ↓
git push origin main
      ↓
Vercel detects push → auto build → auto deploy
      ↓
https://jaydev-portfolio-pi.vercel.app updated ✅
```

Every push to `main` triggers an automatic Vercel deployment. No manual steps needed.

**Vercel Dashboard:** https://vercel.com/dashboard
**Vercel Project:** vercel.com → jaydev-portfolio

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | React Icons (Feather) |
| Fonts | Sora, Inter, Fira Code (Google Fonts) |
| Deployment | Vercel (free tier) |
| Version Control | Git + GitHub |

---

## Project Structure

```
jaydev-portfolio/
├── public/
│   ├── profile.jpg          ← Profile photo
│   ├── resume.pdf           ← Downloadable resume
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx         ← Profile photo + animated badges
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── ContactPage.tsx  ← Contact form (mailto)
│   │   ├── Footer.tsx
│   │   └── ParticleBackground.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx  ← Dark mode (always dark)
│   ├── hooks/
│   │   └── useTypewriter.ts
│   ├── data.ts              ← ALL content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html               ← Meta tags, OG tags
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## How to Update Content

All portfolio content is in one file: **`src/data.ts`**

- Update personal info, email, phone, LinkedIn, GitHub → `personalInfo`
- Add/edit experience → `experiences` array
- Add/edit projects → `projects` array
- Update skills → `skillCategories`
- Update achievements → `achievements` array

---

## How to Update Profile Photo & Resume

1. Replace `public/profile.jpg` with new photo (keep same filename)
2. Replace `public/resume.pdf` with new resume (keep same filename)
3. Push to GitHub → auto-deploys

---

## Git Workflow

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit
git commit -m "describe your change"

# Push → triggers Vercel auto-deploy
git push origin main
```

---

## SSH Setup (already configured)

SSH key is set up on this machine (`~/.ssh/id_ed25519`).
Added to GitHub account as **"Jaydev MacBook"**.
Push works without password from this machine.

If using a new machine:
1. Generate new SSH key: `ssh-keygen -t ed25519 -C "hapanijaydev04@gmail.com"`
2. Add public key to GitHub: Settings → SSH Keys → New SSH Key
3. Paste contents of `~/.ssh/id_ed25519.pub`

---

## Color Scheme

| Variable | Value | Usage |
|----------|-------|-------|
| Primary | `#06b6d4` (Cyan-500) | Buttons, badges, highlights |
| Accent | `#3b82f6` (Blue-500) | Gradients, secondary elements |
| Background | `#070d1a` | Main background |
| Card BG | `#0c1425` | Section cards |
| Text | `#e2f0ff` | Primary text |
| Muted | `#7b9ab8` | Secondary text |

---

## Contact Form

The contact form uses **mailto** — clicking Send Message opens the user's email app pre-filled with the form data, sending directly to `hapanijaydev04@gmail.com`. No backend or API key required.
