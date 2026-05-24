# Purna Chander — Professional Tutor Portfolio

A production-ready React portfolio website for professional deployment on Vercel.

## 🚀 Vercel Deployment Steps

### Option 1 — Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Purna Chander portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/purna-portfolio.git
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com) → "Add New Project"
   - Import your GitHub repository
   - Framework: **Create React App** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Click **Deploy**

### Option 2 — Deploy via Vercel CLI

```bash
npm install -g vercel
npm install
vercel
```

Follow the prompts — select "Create React App" when asked.

---

## 🛠 Local Development

```bash
npm install
npm start
# Opens at http://localhost:3000
```

## 📁 Project Structure

```
purna-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # All sections & components
│   ├── App.css         # All styles
│   ├── index.js        # Entry point
│   └── index.css       # Global tokens & animations
├── vercel.json         # SPA routing config
└── package.json
```

## ✏️ Customization

### Update Contact Details
In `src/App.js`, find the `Contact` component and update:
- Phone number
- Email address
- Available hours

### Add WhatsApp Link
Replace the phone `contact-item` with:
```jsx
<a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
  WhatsApp Me
</a>
```

### Connect the Contact Form
The form currently shows a success message on submit.
To make it functional, integrate one of:
- **Formspree**: `https://formspree.io` (free, no backend needed)
- **EmailJS**: `https://emailjs.com` (sends email from browser)
- **WhatsApp redirect**: redirect to `https://wa.me/91XXXXXXXX?text=...`

---

Built with React 18 · Deployed on Vercel
