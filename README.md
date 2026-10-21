# London Leadwork — website

Astro static site. `npm install` → `npm run dev` (port 4341) → `npm run build`.

## Deploy
- New GitHub repo → Vercel (team vards-projects, preset **Astro**).
- Env var: `PUBLIC_WEB3FORMS_KEY` = the client's own Web3Forms key (then redeploy). Without it the form falls back to opening an email.
- Domain in `astro.config.mjs`, `src/data/site.ts` (`SITE`) and `public/robots.txt` is **londonleadwork.co.uk** — change all three if the real domain differs.

## Where content comes from
All copy is in `src/data/site.ts`. The lead work copy is the owner's existing wording, used word for word. Photos are the owner's own (26 used).

## For the owner to fill in
- **Email:** `contact.email` in site.ts is empty. Add London Leadwork's own address and the email links appear everywhere automatically.
- **Google reviews:** London Leadwork has no Google profile yet. Fill in `google` in site.ts (link, rating, count, reviews word for word) and the reviews section, hero rating and footer rating appear automatically.
- Short service descriptions and photo captions were written by Quantweb from what the photos show. Check them.
- Area pages state straight-line miles from the Bracknell base, nothing else claimed per town.

## Hero video
`public/video/hero-uk-roofs.mp4` — Pexels video 33953496 by David Pickup (GB), "Aerial View of Suburban Neighborhood at Sunrise", free under the Pexels licence. Re-encoded 1600px/30fps, 12s, no audio.
