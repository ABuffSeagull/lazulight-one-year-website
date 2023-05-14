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
  const [bgFilterBlur, setBgFilterBlur] = useState(0) // px
  const [bgFilterBright, setBgFilterBright] = useState(1) // fractional
  const [bgFilterSat, setBgFilterSat] = useState(1) // fractional
  const [bgFilterOpacity, setBgFilterOpacity] = useState(1) // fractional

  window.addEventListener('scroll', () => {
    const h = window.innerHeight
    const y = window.scrollY
    const scrollFractionClamped = Math.min(h, y) / h

    setBgFilterBlur(2 * scrollFractionClamped)
    setBgFilterBright(1 - 0.4 * scrollFractionClamped)
    setBgFilterSat(1 - 0.5 * scrollFractionClamped)
    setBgFilterOpacity(1 - 0.5 * scrollFractionClamped)
  })

  return (
    <>
      {/* Background image on a separate div so that we can apply filters to it */}
      <div className={`${pw[`page-bg-static-${pageTheme}`]}`} />
      <div className={`${pw['page-container']}`}>
        <SiteHeader />
        
        {/* Background Animations */}
        <div
          className={`${pw['page-bg-filter']}`}
          style={{
            opacity: bgFilterOpacity,
            filter: 'blur(' + String(bgFilterBlur) + 'px) brightness(' + String(bgFilterBright) + ') saturate(' + String(bgFilterSat) + ')'
          }}
        >
          {pageTheme === 'pomu' && <BgAnimationPomu />}
          {pageTheme === 'elira' && <BgAnimationElira />}
          {pageTheme === 'finana' && <BgAnimationFinana />}
        </div>

        {/* This is the body of the page */}
        <div className={`${pw.container} ${pw[`container-${pageTheme}`]}`}>
          {children}
        </div>

        <SiteFooter theme='lazulight' />
      </div>
    </>
  )
}
