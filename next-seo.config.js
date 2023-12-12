/** @type {import('next-seo').DefaultSeoProps} */
const DEFAULT_SEO = {
  // TODO: Change these default meta
  title: undefined,
  titleTemplate: '%s | Next.js + Chakra UI + Typescript Starter',
  defaultTitle: 'Next.js + Chakra UI + Typescript Starter',
  description:
    'A personal opinionated starter for Next.js, Chakra UI, and Typescript',
  canonical: 'https://next-chakra-ts-starter.vercel.app/',
  openGraph: {
    url: 'https://next-chakra-ts-starter.vercel.app/',
    type: 'website',
    title: `Next.js + Chakra UI + Typescript Starter`,
    description: `A personal opinionated starter for Next.js, Chakra UI, and Typescript`,
    site_name: 'Next.js + Chakra UI + Typescript Starter',
  },
};

export default DEFAULT_SEO;
