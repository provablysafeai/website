import React from 'react'
import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { DocsThemeConfig, LocaleSwitch, useConfig } from 'nextra-theme-docs'
import cn from 'clsx'

export function renderComponent<T>(
  ComponentOrNode: FC<T> | ReactNode,
  props?: T
) {
  if (!ComponentOrNode) return null
  if (typeof ComponentOrNode !== 'function') return ComponentOrNode
  return <ComponentOrNode {...props} />
}

const config: DocsThemeConfig = {
  logo: <span>Provably Safe AI</span>,
  project: {
    link: 'https://github.com/provablysafeai',
  },
  chat: {
    link: 'https://discord.provablysafe.ai',
  },
  docsRepositoryBase: 'https://github.com/provablysafeai/website/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Provably Safe AI',
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://provablysafe.ai' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || 'Provably Safe AI'}
        />
        <meta
          property="og:description"
          content={frontMatter.description || 'Formal Methods for AI Safety'}
        />
      </>
    )
  },
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: 'Give feedback',
    useLink: () => 'https://github.com/provablysafeai/website/issues/new',
  },
  footer: {
    text: 'Provably Safe AI',
    component: () => {
      const config = useConfig()
      return (
        <>
          <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
            <div
              className={cn(
                'nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start',
                'nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]'
              )}
            >
              {renderComponent(config.footer.text)}
            </div>
          </footer>
          <SpeedInsights />
          <Analytics />
        </>
      )
    },
  },
}

export default config
