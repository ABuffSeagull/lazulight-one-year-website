import React, { useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import pw from './PageWrapper.module.scss'
import BgAnimationPomu from './BgAnimationPomu'
import BgAnimationElira from './BgAnimationElira'
import BgAnimationFinana from './BgAnimationFinana'

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  const [background, setBackground] = useState('page-bg-filter-top')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      setBackground('page-bg-filter-scrolled')
    } else {
      setBackground('page-bg-filter-top')
    }
  })

  return (
    // <div className={`${pw['page-container']} ${pw[`page-bg-static-${pageTheme}`]}`}>
    <div className={`${pw['page-container']}`}>
      <SiteHeader />

      {/* Background Animations */}
      <div className={`${pw['page-bg-filter']} ${pw[background]}`}>
        {pageTheme === 'pomu' && <BgAnimationPomu />}
        {pageTheme === 'elira' && <BgAnimationElira />}
        {pageTheme === 'finana' && <BgAnimationFinana />}
      </div>

      {/* This is the body of the page */}
      <div>
        {children}
      </div>

      <SiteFooter theme='lazulight' />
    </div>

  )
}
