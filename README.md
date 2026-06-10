# Shine Beauty Salon & Spa — Website

Website for **Shine Beauty Salon & Spa**, High Point, NC.  
Live site: **https://www.shinespabeauty.com**  
GitHub repo: **https://github.com/shinespanc/shinespanc.github.io**

---

## Option A — Working in Replit

### Step 1 — Make Your Code Changes
Edit any files using the Replit editor or AI agent.

### Step 2 — Build + Deploy (one command)
Open the **Shell** tab in Replit and paste this entire block:

```bash
npx vite build --config vite.config.gh-pages.ts && \
cp docs/index.html docs/404.html && \
touch docs/.nojekyll && \
cp client/public/favicon.jpg docs/favicon.jpg && \
cp attached_assets/website_icon_1770081414201.jpg docs/og-image.jpg && \
git add -A && \
git commit -m "Deploy: describe your change here" && \
git push origin main
```

That's it. GitHub Pages will rebuild the live site within 1–3 minutes.

---

## Option B — Working on Your Own Computer (Without Replit)

### Prerequisites

Install these once on your computer before anything else:

| Tool | Download link | Why you need it |
|---|---|---|
| **Node.js** (v18 or later) | https://nodejs.org → click "LTS" | Runs the build tool |
| **Git** | https://git-scm.com/downloads | Downloads code & pushes changes |
| **VS Code** (recommended) | https://code.visualstudio.com | Code editor |

To verify everything installed, open a Terminal (Mac) or Command Prompt (Windows) and run:
```bash
node --version
git --version
```
Both should print a version number (e.g. `v20.11.0`).

---

### Step 1 — Download the Code (One-Time Setup)

Open a Terminal / Command Prompt and run:

```bash
git clone https://github.com/shinespanc/shinespanc.github.io.git
cd shinespanc.github.io
```

This creates a folder called `shinespanc.github.io` on your computer with all the website code.

---

### Step 2 — Install Dependencies (One-Time Setup)

Inside the project folder, run:

```bash
npm install
```

This downloads all the packages the project needs (takes 1–2 minutes, only needed once).

---

### Step 3 — Open the Project in VS Code

```bash
code .
```

Or open VS Code manually and use **File → Open Folder** to select the `shinespanc.github.io` folder.

---

### Step 4 — Preview the Site Locally (Optional but Recommended)

To see the site running live on your computer before publishing:

```bash
npm run dev
```

Then open your browser and go to **http://localhost:5000**

The site will automatically refresh whenever you save a file. Press `Ctrl+C` in the terminal to stop it.

---

### Step 5 — Make Your Changes

Edit the files you need. See the **Common Edits** table at the bottom of this file for which file to open for each type of change.

**Most common changes:**
- **Update service prices or names** → open `client/src/resources/services.json`
- **Add a gallery image** → copy image into `attached_assets/`, then add it to `client/src/pages/Gallery.tsx`
- **Change phone/address/hours** → open `client/src/pages/Contact.tsx` and `client/src/components/Layout.tsx`
- **Change social media links** → search all files for the old URL and replace it

---

### Step 6 — Build the Site

When you're happy with your changes, open a terminal in the project folder and run:

```bash
npx vite build --config vite.config.gh-pages.ts
```

This compiles everything into the `docs/` folder (takes ~15 seconds). You'll see a list of files when it finishes successfully.

**On Windows**, replace `&&` with `;` in multi-line commands, or run each command separately.

---

### Step 7 — Run the Post-Build Commands

**Mac / Linux:**
```bash
cp docs/index.html docs/404.html && touch docs/.nojekyll && cp client/public/favicon.jpg docs/favicon.jpg && cp attached_assets/website_icon_1770081414201.jpg docs/og-image.jpg
```

**Windows (Command Prompt):**
```cmd
copy docs\index.html docs\404.html
copy NUL docs\.nojekyll
copy client\public\favicon.jpg docs\favicon.jpg
copy attached_assets\website_icon_1770081414201.jpg docs\og-image.jpg
```

**Windows (PowerShell):**
```powershell
Copy-Item docs\index.html docs\404.html
New-Item docs\.nojekyll -ItemType File -Force
Copy-Item client\public\favicon.jpg docs\favicon.jpg
Copy-Item attached_assets\website_icon_1770081414201.jpg docs\og-image.jpg
```

What each file does:
- `404.html` — makes all pages (like `/services`, `/gallery`) work on GitHub Pages
- `.nojekyll` — stops GitHub from interfering with the build output
- `favicon.jpg` — browser tab icon
- `og-image.jpg` — image that appears when the site is shared on social media

> The `CNAME` file (custom domain `www.shinespabeauty.com`) is copied automatically by the build — no action needed.

---

### Step 8 — Commit and Push to GitHub

Run these three commands one at a time:

```bash
git add -A
git commit -m "Deploy: describe what you changed"
git push origin main
```

**Examples of good commit messages:**
- `git commit -m "Deploy: update massage prices"`
- `git commit -m "Deploy: add 3 new gallery photos"`
- `git commit -m "Deploy: fix phone number in footer"`

#### GitHub Authentication

The first time you push from a new computer, Git will ask for your credentials:
- **Username:** your GitHub username (`shinespanc`)
- **Password:** a Personal Access Token (NOT your GitHub account password)

**To create a Personal Access Token:**
1. Log into GitHub → click your profile photo → **Settings**
2. Scroll down and click **Developer settings** (bottom of left sidebar)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token (classic)**
5. Give it a name (e.g. "My Laptop"), set expiration to 1 year
6. Check the **`repo`** checkbox
7. Click **Generate token** at the bottom
8. **Copy the token immediately** — GitHub only shows it once
9. Paste it as your password when Git asks

**To avoid being asked every time (save credentials):**

Mac:
```bash
git config --global credential.helper osxkeychain
```
Windows:
```bash
git config --global credential.helper wincred
```
Linux:
```bash
git config --global credential.helper store
```

---

### Step 9 — Verify the Deployment

1. Go to **https://github.com/shinespanc/shinespanc.github.io/actions**
2. You'll see a workflow running — wait for the green checkmark (1–3 minutes)
3. Visit **https://www.shinespabeauty.com** to confirm your changes are live

---

### Pulling Latest Changes (If You Edit in Replit Too)

If you sometimes edit in Replit and sometimes on your computer, always run this before making changes on your computer to get the latest version:

```bash
git pull origin main
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

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── pages/             ← Website pages (Home, Services, Gallery, About, Contact)
│   │   ├── components/        ← Shared components (Layout, BookingButton, WelcomePopup)
│   │   ├── assets/            ← Local images referenced in pages
│   │   └── resources/
│   │       └── services.json  ← All service names and prices
│   └── public/
│       ├── CNAME              ← Custom domain (www.shinespabeauty.com) — do not delete
│       └── favicon.jpg        ← Browser tab icon
├── attached_assets/           ← Gallery and hero images
├── docs/                      ← Built site output — pushed to GitHub Pages
└── vite.config.gh-pages.ts    ← Build config for GitHub Pages
```

---

## Business Info

| | |
|---|---|
| **Salon** | Shine Beauty Salon & Spa |
| **Address** | 2402 Hickswood Rd #108, High Point, NC 27265 |
| **Business phone** | (336) 905-5616 |
| **Cell** | (336) 309-1065 |
| **Online booking** | https://www.vagaro.com/shinebeautysalonspa |
| **Instagram** | https://www.instagram.com/shinebeauty459/ |
| **TikTok** | https://www.tiktok.com/@shinebeautysalonandspa |
| **Facebook** | https://www.facebook.com/groups/906064359948904/posts/1957466918141971/ |
