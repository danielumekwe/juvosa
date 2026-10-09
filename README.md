# Juvosa Limited website

The site is a Next.js App Router rebuild of the current Juvosa Limited homepage. It uses the existing logo, hero backgrounds, building photographs, footer thumbnails, and section copy. The old WordPress Gallery URL currently returns a 404; the Gallery navigation entry therefore points to the working portfolio/gallery section.

## Local development

```sh
npm install
npm run dev
```

## Contact form delivery

The original Contact Form 7 form sent its submission to WordPress. The replacement posts to `app/api/contact/route.ts`, which delivers messages through Resend. Copy `.env.example` to `.env.local`, set a Resend API key, and use a sender address verified with Resend:

```text
RESEND_API_KEY=...
RESEND_FROM_EMAIL=Juvosa Website <website@juvosaltd.com>
CONTACT_EMAIL=info@juvosaltd.com
```

The form shows an explicit setup/error message if these values are not configured. Never commit API credentials.

## Cloudflare Workers deployment

The project uses `@opennextjs/cloudflare` and `wrangler.jsonc`. `npm run build` creates the regular Next.js production build; create and test the Cloudflare Worker bundle with:

```sh
npm run build:cloudflare
npm run preview
```

Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_EMAIL` as Worker secrets/variables in the Cloudflare dashboard (or with Wrangler), then deploy:

```sh
npm run build:cloudflare
npx wrangler secret put RESEND_API_KEY
npm run deploy
```

The public images and fonts are local static assets. Next Image rendering is configured as unoptimized so it serves those already-compressed source assets directly without requiring a Node-native image optimizer at the Worker runtime.
