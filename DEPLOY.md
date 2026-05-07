# ForgeAI — Deploy Guide

End-to-end: from your laptop to a live URL with a custom domain, in ~20 minutes.

---

## Step 1 — Push to GitHub

First, create a new private repo on GitHub, then:

```bash
cd forgeai

# Initialise git (if not done already)
git init
git add .
git commit -m "Initial commit — ForgeAI Phase 1-5"

# Connect to your GitHub repo (replace the URL)
git remote add origin https://github.com/YOUR_USERNAME/forgeai.git
git branch -M main
git push -u origin main
```

✅ Your code is now on GitHub. The `.gitignore` ensures `.env.local` is NOT pushed.

---

## Step 2 — Create your Supabase project (if not done)

1. Go to **[app.supabase.com](https://app.supabase.com)** → **New project**
2. Name it `forgeai`, pick a region close to your users (e.g. `ap-south-1` for India)
3. Wait ~2 min for it to provision

4. Go to **Settings → API**, copy these two values:
   - `Project URL` → looks like `https://abcdefgh.supabase.co`
   - `service_role` key → the long secret key (NOT the `anon` key)

5. Go to **SQL Editor** → run this once:

```sql
create table leads (
  id         bigint generated always as identity primary key,
  created_at timestamptz default now(),
  name       text not null,
  email      text not null,
  company    text,
  role       text,
  message    text not null,
  budget     text,
  status     text default 'new'
);
```

✅ Your database is ready. All form submissions will appear here under **Table Editor → leads**.

---

## Step 3 — Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** → Sign in with GitHub
2. Click **Add New → Project**
3. Import your `forgeai` repo
4. Vercel auto-detects Next.js — don't change any build settings
5. Before clicking **Deploy**, click **Environment Variables** and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://abcdefgh.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | `your-service-role-key` |

6. Click **Deploy**

⏱ First deploy takes ~90 seconds. You'll get a URL like `forgeai.vercel.app`.

---

## Step 4 — Connect your custom domain

1. In Vercel → your project → **Settings → Domains**
2. Type your domain (e.g. `forgeai.com`) → **Add**
3. Vercel shows you two DNS records to add. Go to your domain registrar (GoDaddy / Namecheap / Cloudflare):

**If using the root domain (`forgeai.com`):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**If using www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait 5–15 minutes for DNS to propagate
5. Vercel auto-provisions an SSL certificate (HTTPS) — no action needed

✅ Your site is live at your custom domain.

---

## Step 5 — Update SITE_URL

In `app/layout.jsx`, update line 16:

```js
export const SITE_URL = 'https://youractualdomain.com';   // ← change this
```

Commit and push — Vercel auto-redeploys in ~60 seconds:

```bash
git add app/layout.jsx
git commit -m "Update SITE_URL to production domain"
git push
```

---

## Step 6 — Submit to Google Search Console

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **Add Property** → enter your domain
3. Verify ownership: Vercel method — go to **Vercel → Settings → Domains → DNS Records** and add the TXT record Google gives you

4. Once verified, click **Sitemaps** in the left sidebar
5. Enter: `sitemap.xml` → Submit

✅ Google now knows your site exists and will start crawling it.

---

## Step 7 — Verify everything is working

Open your live URL and check these manually:

```
✅ https://yourdomain.com                    → home page loads
✅ https://yourdomain.com/sitemap.xml        → shows XML with all your URLs
✅ https://yourdomain.com/robots.txt         → shows crawl rules
✅ https://yourdomain.com/opengraph-image    → shows OG image preview

Share on WhatsApp / Slack → link preview shows correct title + amber image
Submit contact form → check Supabase Table Editor → leads for the new row
```

---

## Ongoing deploys (automatic)

Every time you `git push` to `main`, Vercel auto-redeploys. Zero action needed.

```bash
# Typical dev workflow after setup
npm run dev              # local dev
# ... make changes ...
git add .
git commit -m "your message"
git push                 # → Vercel deploys automatically in ~60s
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Form submissions not saving | Check env vars in Vercel → Settings → Environment Variables |
| "Missing Supabase env vars" error | Redeploy after adding env vars |
| OG image not showing on WhatsApp | Use [opengraph.xyz](https://opengraph.xyz) to force-refresh the cache |
| Domain not resolving | DNS can take up to 48hrs — usually under 30min |
| Build failing on Vercel | Run `npm run build` locally first to catch errors |
