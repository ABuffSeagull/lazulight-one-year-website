import React from 'react'
import ArtBoardLayout, { ArtBoardEnum } from './ArtBoardLayout'
import FramedTextbox from './FramedTextbox'
import Image from './Image'
import MessageBoxesLayout from './MessageBoxesLayout'
import './TalentLayout.scss'

interface Props {
  name: string
  artBoardHeading: string
  frame: string
  animation: string
  corner: string
  portrait: string | metadata[]
  quote: string
  info: string[]
  youtube: string
  twitter: string
  discord: string
}

function TalentLayout (props: Props): JSX.Element {
  const firstName = props.name.split(' ')[0]
  const firstNameLower = firstName.toLowerCase()

  // Switch art board
  // Brandon somewhat regrets deciding to use enums here
  const chooseArtBoard = (): ArtBoardEnum => {
    if (firstNameLower === 'elira') {
      return ArtBoardEnum.elira
    }
    if (firstNameLower === 'pomu') {
      return ArtBoardEnum.pomu
    }
    if (firstNameLower === 'finana') {
      return ArtBoardEnum.finana
    }
    return ArtBoardEnum.lazulight
  }

  return (
    <>
      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <div className='talent-picture-box-liver'><Image src={props.portrait} enableZoom /></div>
          {/* (Brandon): Number of images is hardcoded into 'talent-picture-box' */}
          <div className='talent-picture-box-mascot'><Image src={props.animation} enableZoom /></div>
          <div className='talent-picture-box-mascot'><Image src={props.animation} enableZoom /></div>
        </div>
        <div className='talent-info-container'>
          <FramedTextbox corner={props.frame} border={firstNameLower}>
            <h2>{props.name}</h2>
            <p>
              <i>{props.quote}</i>
            </p>
            {props.info.map((paragraph, idx) => (
              <p key={idx}>{paragraph}&nbsp;</p>
            ))}
            <div className='talent-links-container'>
              <a className='external-link-text' href={props.youtube}>{firstName}'s Youtube</a>
              <a className='external-link-text' href={props.twitter}>{firstName}'s Twitter</a>
              <a className='external-link-text' href={props.discord}> Fan Discord</a>
            </div>
          </FramedTextbox>
          <div className='talent-animation-container hide-on-tablet'>
            {/* (Brandon): Number of images is hardcoded into 'talent-animation-container' */}
            <Image src={props.animation} enableZoom />
            <Image src={props.animation} enableZoom />
            <Image src={props.animation} enableZoom />
            <Image src={props.animation} enableZoom />
          </div>
        </div>
      </div>

      <ArtBoardLayout
        artBoard={chooseArtBoard()}
        heading={props.artBoardHeading}
      />

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight={false}
        titleType={firstNameLower}
        enableElira={firstNameLower === 'elira'}
        enablePomu={firstNameLower === 'pomu'}
        enableFinana={firstNameLower === 'finana'}
        enableDcl={false}
        enableFolding
        enableArt={false}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight={false}
        titleType={firstNameLower}
        enableElira={firstNameLower === 'elira'}
        enablePomu={firstNameLower === 'pomu'}
        enableFinana={firstNameLower === 'finana'}
        enableDcl={false}
        enableFolding
        enableArt
        heading={`Art To ${firstName}`}
        page={firstNameLower}
      />
    </>
  )
}

export default TalentLayout
