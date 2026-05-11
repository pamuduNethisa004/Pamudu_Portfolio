# Pamudu Jayathunge — Portfolio

A professional React portfolio built with a dark blue/white/glass theme.

---

## 📁 Project Structure

```
pamudu-portfolio/
├── public/
│   └── index.html              ← HTML shell
├── src/
│   ├── components/
│   │   ├── Cursor.jsx / .css   ← Custom animated cursor
│   │   ├── Nav.jsx / .css      ← Fixed top navigation
│   │   ├── Hero.jsx / .css     ← Landing hero section
│   │   ├── About.jsx / .css    ← About me + stats
│   │   ├── Skills.jsx / .css   ← Tech skills grid
│   │   ├── Projects.jsx / .css ← Project cards
│   │   ├── Experience.jsx/.css ← Education & experience
│   │   ├── Contact.jsx / .css  ← Contact section
│   │   ├── Footer.jsx / .css   ← Footer
│   │   └── Icons.jsx           ← All SVG icons
│   ├── hooks/
│   │   ├── useTypewriter.js    ← Typewriter animation hook
│   │   └── useReveal.js        ← Scroll reveal hook
│   ├── styles/
│   │   └── global.css          ← CSS variables, resets, shared styles
│   ├── data.js                 ← ⭐ ALL YOUR PERSONAL INFO HERE
│   ├── App.jsx                 ← Root component
│   └── index.js                ← React entry point
└── package.json
```

---

## ✏️ How to Edit Your Info

**Open `src/data.js`** — everything is in one place:

| Section | What to change |
|---|---|
| `name` | Your name |
| `roles` | Typewriter roles on hero |
| `email` | Your real email |
| `github / linkedin / twitter` | Your social URLs |
| `about` | Bio paragraphs |
| `stats` | Numbers (projects, years, etc.) |
| `skills` | Tech categories + pills |
| `projects` | Your real projects |
| `education` | Your university/school |
| `experience` | Your internships/work |

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm start
# Opens at http://localhost:3000
```

---

## 🌐 Deploy to Netlify (Free)

### Option A — Drag & Drop (Quickest)
```bash
npm run build
# Drag the build/ folder to https://app.netlify.com/drop
```

### Option B — GitHub + Netlify (Recommended)
1. Push this folder to a GitHub repo
2. Go to https://netlify.com → "Add new site" → "Import from Git"
3. Select your repo
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy** — live in 60 seconds!

### Option C — Vercel (Also great)
```bash
npm install -g vercel
vercel
# Follow prompts — done!
```

---

## 🎨 Adding React Bits Animations (Next Step)

```bash
npm install framer-motion
```

Then replace background sections with React Bits components:
- **Particles** — hero background
- **Aurora** — glowing gradient background
- **MagneticButton** — hover effect on buttons
- **TextReveal** — scroll-triggered text

Resources:
- https://www.reactbits.dev
- https://ui.aceternity.com
- https://magicui.design

---

## 🔧 Customizing Colors

Open `src/styles/global.css` and edit the `:root` variables:

```css
:root {
  --blue:       #3b82f6;  /* Main accent color */
  --blue-light: #60a5fa;  /* Lighter accent */
  --bg:         #050810;  /* Background */
}
```
