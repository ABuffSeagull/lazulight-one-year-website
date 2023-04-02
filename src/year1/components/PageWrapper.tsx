import React from 'react'
import './PageWrapper.scss'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import Image from './Image'
import EliraCloud1 from '../assets/BG/Elira-BG-Cloud1.webp'
import EliraCloud2 from '../assets/BG/Elira-BG-Cloud2.webp'
import EliraCloud3 from '../assets/BG/Elira-BG-Cloud3.webp'
import EliraCloud4 from '../assets/BG/Elira-BG-Cloud4.webp'
import EliraStar1 from '../assets/BG/Elira-BG-Star1.webp'
import PomuBgAnimation from './PomuBgAnimation'
import FinanaBgAnimation from './FinanaBgAnimation'
import DclBgAnimation from './DclBgAnimation'
import LazulightArtBoard from '../assets/ArtBoards/Group Collage 2160 x 1920 Transparent.webp'
interface Props {
  children: React.ReactNode
  page: string
  animation: string
}

export function PageWrapper (props: Props): JSX.Element {
  // (Brandon) These constants must match values in class 'page-bg-animation-${props.page}-element'
  const eliraCloudCount: number = 4 * 4 // Should be multiple of 4
  const eliraStarCount: number = 60
  const vnCloudCount: number = 8 * 4 // Should be multiple of 4

  const [AnimationOn, toggleAnimationState] = React.useState(true)

  return (
    <div className={`container ${props.page} page-bg-static-${props.page} page-bg-animation-${props.page}`}>
      <SiteHeader />

      {/* Background */}
      <div
        className={`page-bg-animation-${props.page}-container ${
          AnimationOn
            ? `page-bg-animation-${props.page}-container-on`
            : `page-bg-animation-${props.page}-container-off`
        }`}
      >
        {props.page === 'pomu' && <PomuBgAnimation />}
        {props.page === 'elira' && (
          <div>
            {/* Separate div's because of the nth-child selector */}
            <div>
              {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
                <Image key={'eliCloud1' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud1} />
              ))}
              {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
                <Image key={'eliCloud2' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud2} />
              ))}
              {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
                <Image key={'eliCloud3' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud3} />
              ))}
              {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
                <Image key={'eliCloud4' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud4} />
              ))}
            </div>
            <div>
              {Array.from({ length: eliraStarCount }, (_el, i: number) => (
                <Image key={'eliStar' + i.toString()} className='page-bg-animation-elira-star' src={EliraStar1} />
              ))}
            </div>
          </div>
        )}
        {props.page === 'finana' && <FinanaBgAnimation />}
        {props.page === 'vn' && (
          <div>
            {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
              <Image key={'vnCloud1' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud1} />
            ))}
            {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
              <Image key={'vnCloud2' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud2} />
            ))}
            {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
              <Image key={'vnCloud3' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud3} />
            ))}
            {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
              <Image key={'vnCloud4' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud4} />
            ))}
          </div>
        )}
        {props.page === 'dcl' && <DclBgAnimation />}
      </div>

      {props.page === 'home' && (
        <div className='home-collage'>
          <Image src={LazulightArtBoard} />
        </div>
      )}

      <button
        onClick={() => {
          toggleAnimationState((state) => !state)
        }}
        className={`animation-toggle-${props.animation}`}
      >
        {AnimationOn ? 'Animation On' : 'Animation Off'}
      </button>

      {/* This is the body of the page */}
      <div className='container-inner'>
        {props.children}
      </div>

      <SiteFooter page={props.page} />
    </div>
  )
}
