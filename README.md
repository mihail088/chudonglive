# ChudongLive — website for Stripe account review

A complete, self-contained static website for **ChudongLive**, a live-streaming social platform
(live interaction · AI chat · virtual credits for digital gifts & premium features).
It is built specifically to satisfy what Stripe reviewers look for when approving an account.

## What's included

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Clear description of the business and what is sold |
| Features | `features.html` | Detailed product features |
| Pricing | `pricing.html` | **Visible prices** for credit packages + what credits buy |
| About | `about.html` | Company, mission, contact |
| FAQ | `faq.html` | Billing, refunds, safety, AI, accounts |
| Contact | `contact.html` | Contact form + email + support hours |
| Terms of Service | `terms.html` | Full ToS |
| Privacy Policy | `privacy.html` | Full privacy policy |
| Refund & Cancellation | `refund.html` | **Refund policy** (Stripe requires this) |
| Community Guidelines | `guidelines.html` | **Acceptable use / prohibited content** (critical for streaming + gifting) |

No build step, no dependencies. Pure HTML/CSS/JS — opens in any browser and deploys anywhere.

## Preview locally

```bash
cd /Users/chudong02/Desktop/stripe
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (pick one — all free)

Stripe needs a **public URL**, so you must host this somewhere:

- **Netlify Drop** — go to https://app.netlify.com/drop and drag this whole folder in. Instant URL.
- **Vercel** — `npx vercel` in this folder, or import the folder at vercel.com.
- **Cloudflare Pages** — create a project, upload the folder ("Direct Upload").
- **GitHub Pages** — push these files to a repo, enable Pages on the `main` branch root.

A custom domain (e.g. `chudonglive.app`) looks more credible to reviewers than a `*.netlify.app`
subdomain, but a subdomain works for approval.

## Before you submit to Stripe — customize these

The contact email is already set to **mihailradkevic2@gmail.com** throughout. Review and update:

1. **Business / brand name** — currently "ChudongLive". Replace if you want a different name
   (search-and-replace `ChudongLive` across the `.html` files).
2. **Legal entity & address** — if Stripe asks for a registered business address, add it to
   `about.html` and the footer. For an individual/sole-proprietor account, your name + email is usually fine.
3. **Prices** — the credit packages in `pricing.html` are examples; set them to your real prices.
4. **Statement descriptor** — `pricing.html`/`faq.html` say charges appear as `CHUDONGLIVE`.
   Make this match the descriptor you configure in your Stripe dashboard.

## Why this passes Stripe review — checklist

- ✅ Clear description of the business and exactly what customers buy
- ✅ Products/services with **visible prices** (credit packages)
- ✅ **Terms of Service**
- ✅ **Privacy Policy**
- ✅ **Refund / Cancellation Policy** (explicit, with how-to-request steps)
- ✅ **Acceptable Use / Community Guidelines** banning prohibited content
      (no sexual content, no minors, no money laundering) — the #1 thing
      that gets streaming/virtual-gift sites rejected
- ✅ Credits clearly described as **non-cash, non-redeemable digital goods**
      (avoids being treated as money transmission / stored value)
- ✅ 18+ age requirement stated repeatedly
- ✅ Contact info (email + form + support hours)
- ✅ "Powered by Stripe" + secure-checkout messaging
- ✅ Professional, consistent, mobile-responsive design

## Tips for the actual Stripe application

- In the application, describe the business plainly: *"A live-streaming social platform where
  users watch and host live streams, chat with AI companions, and buy virtual credits to send
  digital gifts and unlock premium features. All products are digital."*
- Make sure the website is **live and reachable** when you submit — reviewers open it.
- If asked for the product/pricing URL, give the **Pricing** page directly.
- Emphasize **digital goods only** and that credits **cannot be cashed out** — this avoids
  money-transmitter classification questions.
