import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import pw from './PageWrapper.module.scss'

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  return (

    <div className={`  ${pw[`page-bg-static-${pageTheme}`]} `}>
      <div className={`  ${pw[`page-bg-image-${pageTheme}`]} `}>

        <SiteHeader />

        {/* This is the body of the page */}
        <div>
          {children}
        </div>

        <SiteFooter theme='lazulight' />
      </div>
    </div>
  )
}
