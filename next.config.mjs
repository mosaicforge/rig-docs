import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  output: 'export'
});

export default withNextra();
