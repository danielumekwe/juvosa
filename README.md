# Juvosa Limited website

The homepage (`app/(site)`, `components/site`) is the redesigned Juvosa Limited site, built with Next.js App Router and Tailwind CSS. Shared company details (contact information, opening hours, navigation) live in `lib/site.ts`.

The previous design, a faithful rebuild of the WordPress homepage, is preserved at `/original` (`app/original`, `components/original`). It is excluded from search engines and the sitemap and can be deleted once it is no longer needed for comparison.

## Image credits

The Juvosa logo and the architectural renders (`public/images/project-*.jpg`) are Juvosa's own assets. The redesign photographs in `public/images/redesign` are used under the [Unsplash License](https://unsplash.com/license), which permits free commercial use without attribution; credits are recorded here as a courtesy:

| File | Photographer | Source |
| --- | --- | --- |
| `lagos-lagoon-aerial*.jpg` | Malik Buraimoh | https://unsplash.com/photos/EMjpo0YjHPw |
| `hero-lagos-skyline*.jpg` | Onaopemipo Oladipupo | https://unsplash.com/photos/20o-8pav22k |
| `hero-interior*.jpg` | Spacejoy | https://unsplash.com/photos/9M66C_w_ToM |
| `lagos-civic-aerial.jpg` | Nupo Deyon Daniel | https://unsplash.com/photos/67ruAEYmp4c |
| `interior-bright-living.jpg` | Spacejoy | https://unsplash.com/photos/x3mSC1WnWhc |
| `lagos-facade.jpg` | Hammed Okunade | https://unsplash.com/photos/ePtmY4Xh6DI |
| `fashion-boutique.jpg` | Clark Street Mercantile | https://unsplash.com/photos/qnKhZJPKFD8 |
| `excavator-dusk.jpg` | Built Robotics | https://unsplash.com/photos/zmW-UG2OX_M |

The stock photographs illustrate services and location only; they are never presented as Juvosa developments.

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
