import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  return (
    <>
      <SiteHeader />

      {/* This is the body of the page */}
      <div>
        {children}
      </div>

      <SiteFooter theme='lazulight' />
    </>
  )
}
