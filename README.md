# London Leadwork — website

Astro static site. `npm install` → `npm run dev` (port 4341) → `npm run build`.

## Deploy
- New GitHub repo → Vercel (team vards-projects, preset **Astro**).
- Env var: `PUBLIC_WEB3FORMS_KEY` = the client's own Web3Forms key (then redeploy). Without it the form falls back to opening an email.
- Domain in `astro.config.mjs`, `src/data/site.ts` (`SITE`) and `public/robots.txt` is **londonleadwork.co.uk** — change all three if the real domain differs.

## Where content comes from
All copy is in `src/data/site.ts`, tagged by source:
- tavancontractors.co.uk lead work + home pages (verbatim)
- Google profile "Roofing Tavan Contractors Ltd" — 4.9 from 37 reviews, 3 reviews verbatim
- Photos: the 9 sent + the 24 from WhatsApp (duplicates dropped, 26 used)

## For the owner to check
- Short service descriptions and photo captions were written by Quantweb from what the photos show.
- Email is sales@tavancontractors.co.uk — swap in a London Leadwork address if there is one.
- Reviews are Tavan's (London Leadwork has no Google profile yet). Once it has one, update `google` in site.ts.
- Area pages state straight-line miles from the Bracknell base, nothing else claimed per town.
