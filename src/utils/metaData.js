const BASE_URL = 'https://suloke.com'; 
const DEFAULT_IMAGE = '/suloke-logo.png';
const DEFAULT_TITLE = 'Suloke';
const DEFAULT_DESCRIPTION = 'Your go-to platform for web, mobile, and backend development.';

// Centralized metadata for all pages
const PAGE_METADATA = {
  '/': {
    title: 'Welcome to Suloke | Home',
    description: 'Discover cutting-edge solutions for web, mobile, and backend development.',
    image: '/suloke-logo.png',
  },
  '/web': {
    title: 'Web Development Services | Suloke',
    description: 'Explore our modern web development solutions tailored to your business needs.',
    image: '/suloke-logo.png',
  },
  '/mobile': {
    title: 'Mobile App Development | Suloke',
    description: 'Innovative mobile app development services for iOS and Android.',
    image: '/suloke-logo.png',
  },
  '/backend': {
    title: 'Backend Development Experts | Suloke',
    description: 'Robust and scalable backend solutions to power your applications.',
    image: '/suloke-logo.png',
  },
  '/contact': {
    title: 'Contact Us | Suloke',
    description: 'Get in touch with us for inquiries, support, or collaboration.',
    image: '/suloke-logo.png',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Suloke',
    description: 'Learn about our privacy practices and how we handle your data.',
    image: '/suloke-logo.png',
  },
};

// Utility function to generate metadata
export function generateMetaData(pathname) {
  const pageData = PAGE_METADATA[pathname] || {};

  const title = pageData.title || DEFAULT_TITLE;
  const description = pageData.description || DEFAULT_DESCRIPTION;
  const image = pageData.image || DEFAULT_IMAGE;

  const url = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `${BASE_URL}${image}`,
          width: 1286,
          height: 431,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  };
}
