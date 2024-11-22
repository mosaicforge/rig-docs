import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
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
