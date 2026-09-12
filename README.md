# Seven Seas Sailing

Luxury catamaran charter site for Emmanouil’s private and small-group days in **Milos, Cyclades**. Next.js App Router. FareHarbor is the only booking engine.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is busy, Next.js will use the next free port (this workspace used **3001**).

```bash
npm run build
npm start
```

## Paste real FareHarbor IDs

Do **not** invent a shortname or item IDs.

1. FareHarbor Dashboard → **Settings → Book Buttons & Embeds**
2. Generate embeds for the company, the day cruise, and the private charter
3. Copy values into `.env.local` (see `.env.example`):

```
NEXT_PUBLIC_FAREHARBOR_SHORTNAME=REPLACE_SHORTNAME
NEXT_PUBLIC_FAREHARBOR_ITEM_DAY_CRUISE=REPLACE_ITEM_DAY_CRUISE
NEXT_PUBLIC_FAREHARBOR_ITEM_PRIVATE=REPLACE_ITEM_PRIVATE
```

4. Keep the Lightframe API script in the **body**, not the head. This project loads it from the footer via `next/script` (`strategy="lazyOnload"`):

`https://fareharbor.com/embeds/api/v1/?autolightframe=yes`

5. Book buttons call `FH.open({ shortname, view: { item } })` when IDs are real. Tour cards open that item’s calendar. `/book` and each tour page embed the FareHarbor availability calendar.
6. Until IDs are pasted, Book opens a quiet notice instead of a fake checkout.

FareHarbor remains source of truth for availability and payments. There is no custom cart.

## Official logo

The Medusa / twin **S** / bow-in-a-rope-circle lockup lives in `public/brand/`. Navy on salt grounds, salt on navy grounds. Do not replace it with a generic compass.

## Replace sample photographs

See `content/image-sources.md`. Footer already says *Sample imagery — replace with Seven Seas Sailing photos*.

Drop real files into `public/images` using the same filenames, or update paths in `content/tours.json`, `content/itinerary.json`, and `lib/content.ts`.

## Content placeholders (CAPS)

Edit `lib/site.ts` and `content/*.json` for:

- BOAT NAME, MAX GUESTS, SEASON DATES
- MEETING POINT PIN
- PHONE, WHATSAPP, EMAIL, INSTAGRAM
- LENGTH, BEAM, CREW, menus, inclusions
- Exact itinerary — confirm with the owner before treating stops as guaranteed

Example reviews on the homepage are labelled **EXAMPLE**.

## Deploy

Hosted on **GitHub Pages** (same pattern as H.T. Harris Deli): a workflow static-exports Next.js and publishes to `https://androidkrayze.github.io/sevenseassailing/`.

Push to `main` to rebuild. FareHarbor IDs stay `REPLACE_*` until you paste real ones into the workflow env or repository variables.

After deploy, test a Book button: until IDs are real, Book shows a quiet notice instead of a fake checkout.

## Stack

- Next.js App Router, TypeScript, Tailwind v4
- Framer Motion + Lenis
- `next/image` (AVIF/WebP)
- FareHarbor Lightframe API + calendar embeds
