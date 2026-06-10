# Shine Beauty Salon & Spa — Website

Website for **Shine Beauty Salon & Spa**, High Point, NC.  
Live site: **https://www.shinespabeauty.com**  
GitHub repo: **https://github.com/shinespanc/shinespanc.github.io**

---

## How to Make Changes & Deploy to GitHub Pages

Every time you edit the website code in Replit, follow these steps to publish the changes live.

---

### Step 1 — Make Your Code Changes in Replit

Edit any files you need (pages, images, services list, etc.) using the Replit editor or AI agent.

---

### Step 2 — Build the Site

Open the **Shell** tab in Replit and run:

```bash
npx vite build --config vite.config.gh-pages.ts
```

This compiles all the code into the `docs/` folder. You'll see a list of files it created when it finishes. It takes about 10–15 seconds.

---

### Step 3 — Run the Post-Build Commands

Still in the Shell, run this single line (copy and paste the whole thing):

```bash
cp docs/index.html docs/404.html && touch docs/.nojekyll && cp client/public/favicon.jpg docs/favicon.jpg && cp attached_assets/website_icon_1770081414201.jpg docs/og-image.jpg
```

What each part does:
- `cp docs/index.html docs/404.html` — makes page-not-found redirect back to the app (required for navigation to work)
- `touch docs/.nojekyll` — tells GitHub Pages not to process the files with Jekyll
- `cp client/public/favicon.jpg docs/favicon.jpg` — copies the browser tab icon
- `cp attached_assets/website_icon_1770081414201.jpg docs/og-image.jpg` — copies the social share image

> **Note:** The `docs/CNAME` file (which sets the custom domain `www.shinespabeauty.com`) is automatically copied from `client/public/CNAME` during the build — you don't need to handle it manually.

---

### Step 4 — Commit and Push to GitHub

Still in the Shell, run these three commands one at a time:

```bash
git add -A
```
```bash
git commit -m "Deploy: describe your change here"
```
```bash
git push origin main
```

Replace `"Deploy: describe your change here"` with a short note about what you changed, for example:
- `"Deploy: update TikTok handle"`
- `"Deploy: add new gallery images"`
- `"Deploy: update service prices"`

> **Authentication:** The first time you push, Git will ask for your GitHub username and a **Personal Access Token** (not your password). To create one:
> 1. Go to github.com → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
> 2. Click **Generate new token (classic)**
> 3. Check the **`repo`** scope, set an expiration, and generate
> 4. Copy the token (starts with `ghp_`) and use it as your password when Git prompts you

---

### Step 5 — Wait for GitHub Pages to Deploy

After pushing, GitHub automatically rebuilds the live site. It usually takes **1–3 minutes**.

You can watch the progress at:  
**https://github.com/shinespanc/shinespanc.github.io/actions**

Once the green checkmark appears, visit **https://www.shinespabeauty.com** to see your changes live.

---

## Quick Reference — Full Deploy in One Go

Copy and paste this entire block into the Shell after making your changes:

```bash
npx vite build --config vite.config.gh-pages.ts && \
cp docs/index.html docs/404.html && \
touch docs/.nojekyll && \
cp client/public/favicon.jpg docs/favicon.jpg && \
cp attached_assets/website_icon_1770081414201.jpg docs/og-image.jpg && \
git add -A && \
git commit -m "Deploy: site update" && \
git push origin main
```

---

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── pages/          ← Website pages (Home, Services, Gallery, About, Contact)
│   │   ├── components/     ← Shared components (Layout, BookingButton, WelcomePopup)
│   │   ├── assets/         ← Local images used in pages
│   │   └── resources/
│   │       └── services.json  ← All service names and prices
│   └── public/
│       ├── CNAME           ← Custom domain (www.shinespabeauty.com) — do not delete
│       └── favicon.jpg     ← Browser tab icon
├── attached_assets/        ← Gallery and hero images
├── docs/                   ← Built site output (auto-generated, pushed to GitHub Pages)
└── vite.config.gh-pages.ts ← Build config for GitHub Pages deployment
```

---

## Common Edits

| What you want to change | File to edit |
|---|---|
| Service names & prices | `client/src/resources/services.json` |
| Home page text/images | `client/src/pages/Home.tsx` |
| Gallery images | `client/src/pages/Gallery.tsx` |
| About page | `client/src/pages/About.tsx` |
| Contact info / hours | `client/src/pages/Contact.tsx` |
| Header, footer, navigation | `client/src/components/Layout.tsx` |
| Colors / fonts | `client/src/index.css` |
| Booking link | `client/src/components/BookingButton.tsx` |

---

## Business Info

- **Salon:** Shine Beauty Salon & Spa
- **Address:** 2402 Hickswood Rd #108, High Point, NC 27265
- **Business phone:** (336) 905-5616
- **Cell:** (336) 309-1065
- **Booking:** https://www.vagaro.com/shinebeautysalonspa
- **Instagram:** https://www.instagram.com/shinebeauty459/
- **TikTok:** https://www.tiktok.com/@shinebeautysalonandspa
- **Facebook:** https://www.facebook.com/groups/906064359948904/posts/1957466918141971/
