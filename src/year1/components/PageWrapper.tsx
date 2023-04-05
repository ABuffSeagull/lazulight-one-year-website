import React from 'react'
import './PageWrapper.scss'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Image from './Image'
import BgAnimationPomu from './BgAnimationPomu'
import BgAnimationFinana from './BgAnimationFinana'
import BgAnimationElira from './BgAnimationElira'
import BgAnimationDcl from './BgAnimationDcl'
import BgAnimationVn from './BgAnimationVn'
import LazulightArtBoard from '../assets/ArtBoards/Group Collage 2160 x 1920 Transparent.webp'

export function PageWrapper ({
  children,
  page,
  animatedBackground = false
}: {
  children: React.ReactNode
  page: string
  animatedBackground?: boolean
}): JSX.Element {
  const [AnimationOn, toggleAnimationState] = React.useState(true)

  return (
    <div className={`container ${page} page-bg-static-${page} page-bg-animation-${page}`}>
      <SiteHeader />

      {/* Background */}
      <div
        className={`page-bg-animation-${page}-container ${
          AnimationOn
            ? `page-bg-animation-${page}-container-on`
            : `page-bg-animation-${page}-container-off`
        }`}
      >
        {page === 'pomu' && <BgAnimationPomu />}
        {page === 'elira' && <BgAnimationElira />}
        {page === 'finana' && <BgAnimationFinana />}
        {page === 'vn' && <BgAnimationVn />}
        {page === 'dcl' && <BgAnimationDcl />}
      </div>

      {page === 'home' && (
        <div className='home-collage'>
          <Image src={LazulightArtBoard} />
        </div>
      )}

      {animatedBackground && (
        <button onClick={() => { toggleAnimationState((state) => !state) }} className='animation-toggle-on'>
          {AnimationOn ? 'Animation On' : 'Animation Off'}
        </button>
      )}

      {/* This is the body of the page */}
      <div className='container-inner'>
        {children}
      </div>

      <SiteFooter page={page} />
    </div>
  )
}
