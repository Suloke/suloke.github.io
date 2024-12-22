/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'suloke-white': '#FFF3e0',
        'suloke-black': '#2D2A26',
        'suloke-grey': '#393530',
        'suloke-magenta': '#A3004C',
        'suloke-magentalight': '#BE0059',
        'suloke-cyan': '#095E5E',
        'suloke-cyanlight': '#046A6A',
        'suloke-yellow': '#8C6C00',
        'suloke-yellowlight': '#947201',
      },
      typography: (theme) => ({
        suloke: {
          css: {
            // Light mode styles
            a: {
              color: theme('colors.suloke-magentalight'), // Default link color
              textDecoration: 'none',
              transition: 'color 0.3s ease-in-out', // Smooth transition
              '&:hover': {
                color: theme('colors.suloke-magenta'), // Hover color
              },
            },
            // Dark mode styles
            '[class~="dark"] &': {
              a: {
                color: theme('colors.suloke-cyanlight'), // Default link color in dark mode
                '&:hover': {
                  color: theme('colors.suloke-cyan'), // Hover color in dark mode
                },
              },
            },
            // Other typography colors (adjusted to match your theme)
            '--tw-prose-body': theme('colors.suloke-white'),
            '--tw-prose-headings': theme('colors.suloke-white'),
            '--tw-prose-lead': theme('colors.suloke-white'),
            '--tw-prose-links': theme('colors.suloke-magentalight'),
            '--tw-prose-bold': theme('colors.suloke-white'),
            '--tw-prose-counters': theme('colors.suloke-white'),
            '--tw-prose-bullets': theme('colors.suloke-white'),
            '--tw-prose-hr': theme('colors.suloke-white'),
            '--tw-prose-quotes': theme('colors.suloke-white'),
            '--tw-prose-quote-borders': theme('colors.suloke-white'),
            '--tw-prose-captions': theme('colors.suloke-white'),
            '--tw-prose-kbd': theme('colors.suloke-white'),
            '--tw-prose-kbd-shadows': theme('colors.suloke-white'),
            '--tw-prose-code': theme('colors.suloke-white'),
            '--tw-prose-pre-code': theme('colors.suloke-white'),
            '--tw-prose-pre-bg': theme('colors.suloke-grey'),
            '--tw-prose-th-borders': theme('colors.suloke-white'),
            '--tw-prose-td-borders': theme('colors.suloke-white'),
            '--tw-prose-invert-body': theme('colors.suloke-white'),
            '--tw-prose-invert-headings': theme('colors.suloke-white'),
            '--tw-prose-invert-lead': theme('colors.suloke-white'),
            '--tw-prose-invert-links': theme('colors.suloke-cyanlight'),
            '--tw-prose-invert-bold': theme('colors.suloke-white'),
            '--tw-prose-invert-counters': theme('colors.suloke-white'),
            '--tw-prose-invert-bullets': theme('colors.suloke-white'),
            '--tw-prose-invert-hr': theme('colors.suloke-white'),
            '--tw-prose-invert-quotes': theme('colors.suloke-white'),
            '--tw-prose-invert-quote-borders': theme('colors.suloke-white'),
            '--tw-prose-invert-captions': theme('colors.suloke-white'),
            '--tw-prose-invert-kbd': theme('colors.suloke-white'),
            '--tw-prose-invert-kbd-shadows': theme('colors.suloke-white'),
            '--tw-prose-invert-code': theme('colors.suloke-white'),
            '--tw-prose-invert-pre-code': theme('colors.suloke-white'),
            '--tw-prose-invert-pre-bg': theme('colors.suloke-black'),
            '--tw-prose-invert-th-borders': theme('colors.suloke-white'),
            '--tw-prose-invert-td-borders': theme('colors.suloke-white'),
          },
        },
      }),
    },
  },
  fontFamily: {
    hubballi: ['Hubballi', 'sans-serif'],
    inter: ['Open_Sans', 'sans-serif'],
  },
  screens: {
    sm: '1024px',
    md: '1280px',
    lg: '1600px',
    '2xl': '1536px',
  },
  plugins: [require('@tailwindcss/typography')],
};
