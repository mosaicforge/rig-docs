import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Home } from 'lucide-react'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Rig Crate Documentation" />
      <meta name="author" content="0xPlaygrounds" />
      <meta name="keywords" content="Rig, Docs, 0xPlaygrounds" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <>
      <Home />
      <img src="/rig-dark.svg" style={{ height: '2.5rem' }} alt="Rig Logo" className="dark-mode-logo" />
      <img src="/rig-light.svg" style={{ height: '2.5rem' }} alt="Rig Logo" className="light-mode-logo" />
      <style jsx>{`
        .dark-mode-logo {
          display: none;
        }
        .light-mode-logo {
          display: none;
        }
        @media (prefers-color-scheme: dark) {
          .dark-mode-logo {
            display: block;
          }
        }
        @media (prefers-color-scheme: light) {
          .light-mode-logo {
            display: block;
          }
        }
      `}</style>
    </>
  ),
  project: {
    link: 'https://github.com/0xPlaygrounds/rig',
  },
  chat: {
    link: 'https://discord.gg/playgrounds',
  },
  docsRepositoryBase: 'https://github.com/0xPlaygrounds/rig-docs',
  footer: {
    content: 'Rig Docs',
  },
}

export default config
