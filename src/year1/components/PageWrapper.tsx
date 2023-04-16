import React from 'react'
import classes from './PageWrapper.module.scss'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Image from './Image'
import BgAnimationPomu from './BgAnimationPomu'
import BgAnimationFinana from './BgAnimationFinana'
import BgAnimationElira from './BgAnimationElira'
import BgAnimationDcl from './BgAnimationDcl'
import BgAnimationVn from './BgAnimationVn'
import LazulightArtBoard from '../assets/ArtBoards/Group Collage 2160 x 1920 Transparent.webp'
import { Y1HomeType, Y1LiverType, Y1ProjectType, isY1LiverType } from './PageTypes'

export function PageWrapper ({
  children,
  pageTheme,
  animatedBackground = false
}: {
  children: React.ReactNode
  pageTheme: Y1HomeType | Y1LiverType | Y1ProjectType
  animatedBackground?: boolean
}): JSX.Element {
  const [AnimationOn, toggleAnimationState] = React.useState(true)

  return (
    // For many of these "${pageTheme}-something", no class exists. e.g. if there is no bg animation
    // But there are not needed on those pages
    <div className={`${classes.container} ${classes[pageTheme]} ${classes[`page-bg-static-${pageTheme}`]} ${classes[`page-bg-animation-${pageTheme}`]}`}>
      <SiteHeader />

      {/* Background */}
      <div
        className={`${classes[`page-bg-animation-${pageTheme}-container`]} ${
          AnimationOn
            ? `${classes[`page-bg-animation-${pageTheme}-container-on`]}`
            : `${classes[`page-bg-animation-${pageTheme}-container-off`]}`
        }`}
      >
        {pageTheme === 'pomu' && <BgAnimationPomu />}
        {pageTheme === 'elira' && <BgAnimationElira />}
        {pageTheme === 'finana' && <BgAnimationFinana />}
        {pageTheme === 'vn' && <BgAnimationVn />}
        {pageTheme === 'dcl' && <BgAnimationDcl />}
      </div>

      {pageTheme === 'home' && (
        <div className={classes['home-collage']}>
          <Image src={LazulightArtBoard} />
        </div>
      )}

      {animatedBackground && (
        <button onClick={() => { toggleAnimationState((state) => !state) }} className={classes['animation-toggle-on']}>
          {AnimationOn ? 'Animation On' : 'Animation Off'}
        </button>
      )}

      {/* This is the body of the page */}
      <div className={classes['container-inner']}>
        {children}
      </div>

      <SiteFooter theme={isY1LiverType(pageTheme) ? pageTheme as Y1LiverType : 'lazulight'} />
    </div>
  )
}
