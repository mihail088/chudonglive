# ChudongLive — AI live-streaming assistant (bilingual website)

Official website for **ChudongLive**, AI assistant software for live streamers
(real-time captions & translation, AI avatar co-host, smart chat replies, auto highlight
clips, multi-platform simulcast, and analytics). Built as a clean static site with
**Chinese + English** language switching, and structured to satisfy Stripe's review checklist.

**Live site:** https://mihail088.github.io/chudonglive/
**Repo:** https://github.com/mihail088/chudonglive

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Product overview |
| Features | `features.html` | Detailed AI features |
| Pricing | `pricing.html` | Free / Pro / Studio subscription plans |
| About | `about.html` | Company, mission, contact |
| FAQ | `faq.html` | Plans, billing, refunds, AI, privacy |
| Contact | `contact.html` | Contact form + email |
| Terms of Service | `terms.html` | Full ToS |
| Privacy Policy | `privacy.html` | Full privacy policy |
| Refund & Cancellation | `refund.html` | 7-day money-back + cancel anytime |
| Acceptable Use | `guidelines.html` | Prohibited uses |

No build step, no dependencies — pure HTML/CSS/JS.

## Bilingual (中文 / English)

- A **language toggle** sits in the top-right nav on every page (中文 ⇄ EN).
- The choice is saved to `localStorage` and persists across pages.
- On first visit, the language is auto-detected from the browser (`zh*` → Chinese, else English).
- How it works: translatable text exists in both languages, tagged `.lx-en` / `.lx-zh`;
  CSS shows one based on `<html data-lang>`. An inline `<head>` script sets the language
  before paint to avoid any flash. Logic lives in `js/main.js`.
- To add/edit copy: provide both `<span class="lx-en">…</span><span class="lx-zh">…</span>`
  (for long legal text, the whole English and Chinese blocks are wrapped in `.lx-en` / `.lx-zh`).

## Preview locally

```bash
cd /Users/chudong02/Desktop/stripe
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy / update

The site is hosted on **GitHub Pages**. To publish changes:

```bash
git add -A && git commit -m "your message" && git push
# GitHub Pages redeploys in ~1–2 minutes
```

## Before submitting to Stripe — customize

- **Statement descriptor** — pages say charges appear as `CHUDONGLIVE`; match this in your Stripe dashboard.
- **Prices** — the plans in `pricing.html` are examples; set your real prices.
- **Business details** — add a registered address in `about.html`/footer if Stripe requests one.
- Contact email is set to `mihailradkevic2@gmail.com` throughout.

## Why it passes Stripe review

- ✅ Clear description of the software and what subscribers pay for
- ✅ Visible subscription pricing (Free / Pro / Studio)
- ✅ Terms of Service, Privacy Policy, Refund & Cancellation Policy, Acceptable Use Policy
- ✅ SaaS subscription model (clean, low-risk — no virtual currency/marketplace)
- ✅ Cancel-anytime + 7-day money-back clearly stated
- ✅ Contact info, "Powered by Stripe" trust signals, professional responsive design
