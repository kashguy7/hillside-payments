# hillsidepay.com

One-page company site for Hillside Payments LLC. Plain HTML and CSS — no build step, no dependencies.

```
index.html      the page
styles.css      all styling
fonts/          Archivo variable font (self-hosted, SIL Open Font License)
```

## Editing

Edit `index.html` and push to `master`. Vercel redeploys automatically.

To preview locally, open `index.html` in a browser, or run any static server from this folder, e.g. `python3 -m http.server 8000` and visit http://localhost:8000.

## Before pointing the domain

1. Set up email on hillsidepay.com so `hello@hillsidepay.com` actually delivers (forwarding at the registrar is enough to start).
2. Decide whether to publish founder names. There is a commented-out founders block in the About section of `index.html`.

## Sponsor disclosure (required once the agent agreement is signed)

Card-brand rules require sales agents to name their sponsoring ISO and bank wherever processing is marketed. Until the agreement is signed, the site describes the company but does not solicit merchant accounts, so no disclosure is shown.

Once signed:

1. Get the exact disclosure wording from the ISO.
2. In `index.html`, find the `SPONSOR DISCLOSURE` comment in the footer, uncomment the `<p class="disclosure">` line, and fill in the ISO and bank names.
3. Only then add anything that solicits accounts (rates, "get started" buttons, application links).

## What stays off this site

- Pricing or rates
- "Sign up" / "Apply" / "Get started" buttons
- Processor, POS or software partner logos without written permission
- Claims that can't be verified (certifications, merchant counts, testimonials)
