import { Link } from 'wouter'
import React from 'react'
import './PageWrapper.scss'
import Image from './Image'
import PomuCoinGold from '../assets/BG/Pomu-BG-PomuCoinGold.svg'
import PomuCoinSilver from '../assets/BG/Pomu-BG-PomuCoinSilver.svg'

interface Props {
  children: React.ReactNode
  page: string
}

export function PageWrapper (props: Props): JSX.Element {
  return (
    <div className={`page-bg-static-${props.page} page-bg-animation-${props.page}-container`}>
      {props.page === 'pomu' && (
        <div>
          {Array.from({ length: 30 }, i => <Image className='page-bg-animation-pomu-element' src={PomuCoinGold} />)}
          {Array.from({ length: 30 }, i => <Image className='page-bg-animation-pomu-element' src={PomuCoinSilver} />)}
        </div>
      )}

      {/* TODO: Replace with actual menu */}
      <nav>
        <Link className='link' to='/finana'>Finana</Link>
        <Link className='link' to='/pomu'>Pomu</Link>
        <Link className='link' to='/elira'>Elira</Link>
        <Link className='link' to='/project-secret'>Secret</Link>
        <Link className='link' to='/project-dcl'>DCL</Link>
        <Link className='link' to='/project-vn'>VN</Link>
        <Link className='link' to='/all-art'>Art</Link>
        <Link className='link' to='/all-messages'>Messages</Link>
        <Link className='link' to='/about'>About</Link>
      </nav>

      {/* This is the body of the page */}
      {props.children}

      {/* TODO: Insert footer here */}

      {/* Scripts for background animation */}
      {/* See source in: https://codepen.io/matthewyingtao/pen/mdqoZPg */}
      {/* {props.page == 'finana' && (<script type="text/javascript" src='/src/components/BGAnimationFinana.js' />)} */}
    </div>
  )
}
