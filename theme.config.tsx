import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Provably Safe AI</span>,
  project: {
    link: 'https://provablysafe.ai',
  },
  chat: {
    link: 'https://discord.provablysafe.ai',
  },
  docsRepositoryBase: 'https://github.com/provablysafeai/website',
  footer: {
    text: 'Provably Safe AI',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Provably Safe AI',
      }
    }
  },
}

export default config
