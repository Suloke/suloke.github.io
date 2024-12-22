This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are 5 pages as of now

1. [backend](src/app/backend/page.js)
2. [web](src/app/web/page.js)
3. [mobile](src/app/mobile/page.js)
4. [contact](src/app/contact/page.js)
5. [privacy-policy](src/app/privacy-policy/page.js)

Each page shows current capabilities and tech stacks

MetaData and SEO currently are generated using [metaData](src/utils/metaData.js)