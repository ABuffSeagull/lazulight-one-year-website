import React, { useState } from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import pw from './PageWrapper.module.scss'
import pomu from '../assets/background/Space-Pomu.png'
import elira from '../assets/background/Space-Elira.png'
import finana from '../assets/background/Space-Finana.png'

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  const [background, setBackground] = useState('page-bg-image')
  let spacesuit

  if (pageTheme == 'elira') {
    spacesuit = elira
  } else if (pageTheme == 'finana') {
    spacesuit = finana
  } else if (pageTheme == 'pomu') {
    spacesuit = pomu
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      setBackground('page-bg-imagebg')
    } else {
      setBackground('page-bg-image')
    }
  })

  return (
    <div className={`  ${pw['page-container}']} `}>
      <SiteHeader />
      <img src={spacesuit} className={`  ${pw[background]} `} />
      <div className={`  ${pw['page-box']} `}> </div>
      {/* This is the body of the page */}
      <div>
        {children}
      </div>

      <SiteFooter theme='lazulight' />
    </div>

  )
}
