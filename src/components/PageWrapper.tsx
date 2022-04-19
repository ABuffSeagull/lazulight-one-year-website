import React from 'react'
import './PageWrapper.scss'
import SiteHeader from './SiteHeader'
import Image from './Image'
import EliraCloud1 from '../assets/BG/Elira-BG-Cloud1.webp'
import EliraCloud2 from '../assets/BG/Elira-BG-Cloud2.webp'
import EliraCloud3 from '../assets/BG/Elira-BG-Cloud3.webp'
import EliraCloud4 from '../assets/BG/Elira-BG-Cloud4.webp'
import EliraStar1 from '../assets/BG/Elira-BG-Star1.webp'
import PomuCoinGold from '../assets/BG/Pomu-BG-PomuCoinGold.svg'
import PomuCoinSilver from '../assets/BG/Pomu-BG-PomuCoinSilver.svg'
import FinanaBubble1 from '../assets/BG/Finana-BG-Bubbles1.svg'
import FinanaFish from '../assets/BG/Finana-BG-Fish.svg'

interface Props {
  children: React.ReactNode
  page: string
}

export function PageWrapper (props: Props): JSX.Element {
  // (Brandon) These constants must match values in class 'page-bg-animation-${props.page}-element'
  const eliraCloudCount: number = 4 * 4 // Should be multiple of 4
  const eliraStarCount: number = 60
  const pomuCoinCount: number = 2 * 30 // Should be multiple of 2
  const finanaBubbleCount: number = 30
  const finanaFishCount: number = 30

  const [AnimationOn, toggleAnimationState] = React.useState(true)

  return (
    <div className={`container page-bg-static-${props.page} page-bg-animation-${props.page}`}>
      <div className={`page-bg-animation-${props.page}-container ${AnimationOn ? `page-bg-animation-${props.page}-container-on` : `page-bg-animation-${props.page}-container-off`}`}>
        {props.page === 'pomu' && (
          <div>
            {Array.from({ length: pomuCoinCount / 2 }, (i: number) =>
              <Image className='page-bg-animation-pomu-coin' src={PomuCoinGold} />)}
            {Array.from({ length: pomuCoinCount / 2 }, (i: number) =>
              <Image className='page-bg-animation-pomu-coin' src={PomuCoinSilver} />)}
          </div>
        )}
        {props.page === 'elira' && (
          <div>
            {/* Separate div's because of the nth-child selector */}
            <div>
              {Array.from({ length: eliraCloudCount / 4 }, (i: number) =>
                <Image className='page-bg-animation-elira-cloud' src={EliraCloud1} />)}
              {Array.from({ length: eliraCloudCount / 4 }, (i: number) =>
                <Image className='page-bg-animation-elira-cloud' src={EliraCloud2} />)}
              {Array.from({ length: eliraCloudCount / 4 }, (i: number) =>
                <Image className='page-bg-animation-elira-cloud' src={EliraCloud3} />)}
              {Array.from({ length: eliraCloudCount / 4 }, (i: number) =>
                <Image className='page-bg-animation-elira-cloud' src={EliraCloud4} />)}
            </div>
            <div>
              {Array.from({ length: eliraStarCount }, (i: number) =>
                <Image className='page-bg-animation-elira-star' src={EliraStar1} />)}
            </div>
          </div>
        )}
        {props.page === 'finana' && (
          <div>
            {/* Separate div's because of the nth-child selector */}
            <div>{Array.from({ length: finanaBubbleCount }, (i: number) =>
              <Image className='page-bg-animation-finana-bubble' src={FinanaBubble1} />)}
            </div>
            <div>{Array.from({ length: finanaFishCount }, (i: number) =>
              <Image className='page-bg-animation-finana-fish' src={FinanaFish} />)}
            </div>
          </div>
        )}
      </div>

      {/* TODO: Find somewhere to put toggleAnimation button in menu */}
      <SiteHeader />
      {/* <nav>
        <Link className='link' to='/finana'>Finana</Link>
        <Link className='link' to='/pomu'>Pomu</Link>
        <Link className='link' to='/elira'>Elira</Link>
        <Link className='link' to='/project-secret'>Secret</Link>
        <Link className='link' to='/project-dcl'>DCL</Link>
        <Link className='link' to='/project-vn'>VN</Link>
        <Link className='link' to='/all-art'>Art</Link>
        <Link className='link' to='/all-messages'>Messages</Link>
        <Link className='link' to='/about'>About</Link>
      </nav> */}
      <button onClick={() => { toggleAnimationState(state => !state) }} className='link animation-toggle'>
        {AnimationOn ? 'Animation On' : 'Animation Off'}
      </button>

      {/* This is the body of the page */}
      {props.children}

      {/* TODO: Insert footer here */}

      {/* Scripts for background animation */}
      {/* See source in: https://codepen.io/matthewyingtao/pen/mdqoZPg */}
      {/* {props.page == 'finana' && (<script type="text/javascript" src='/src/components/BGAnimationFinana.js' />)} */}
    </div>
  )
}
