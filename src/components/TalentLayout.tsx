import React from 'react'
import './TalentLayout.scss'
import Image from './Image'
import MessageBoxesLayout from './MessageBoxesLayout'
import ArtBoardLayout, { ArtBoardEnum } from './ArtBoardLayout'

// TODO(abuffseagull) 2022-03-17: need to remove this
// Probably just generate some random ids on the messages at load time
/* eslint-disable react/jsx-key */

interface Props {
  name: string
  artBoardHeading: string
  artBoardText: string
  frame: string
  mascot: (delay: number) => JSX.Element
  corner: string
  portrait: string | metadata[]
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
    if (firstNameLower === 'elira') { return ArtBoardEnum.elira }
    if (firstNameLower === 'pomu') { return ArtBoardEnum.pomu }
    if (firstNameLower === 'finana') { return ArtBoardEnum.finana }
    return ArtBoardEnum.lazulight
  }

  return (
    <div className='talent-layout-container'>
      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <Image src={props.portrait} enableZoom />
          {/* (Brandon): Number of images is hardcoded into 'talent-picture-box' */}
          {Array.from({ length: 2 }, (_, index) => props.mascot(index * 100))}
        </div>
        <div className='talent-info-container'>
          <div className='talent-text-container'>
            <Image className='talent-corner' src={props.frame} />
            <div className={`talent-text-inner ${firstNameLower}-border`}>
              <h2>{props.name}</h2>
              {props.info.map((paragraph, idx) => (
                <p key={idx}>{paragraph}&nbsp;</p>
              ))}
              <div className='talent-links-container'>
                <a href={props.youtube}>{firstName}'s Youtube</a>
                <a href={props.twitter}>{firstName}'s Twitter</a>
                <a href={props.discord}> Fan Discord</a>
              </div>
            </div>
          </div>
          <div className='talent-animation-container hide-on-tablet'>
            {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
            {Array.from({ length: 4 }, (_, index) => props.mascot(index * 50))}
          </div>
        </div>
      </div>

      <ArtBoardLayout
        artBoard={chooseArtBoard()}
        heading={props.artBoardHeading}
        message={props.artBoardText}
      />

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight={false}
        enableElira={firstNameLower === 'elira'}
        enablePomu={firstNameLower === 'pomu'}
        enableFinana={firstNameLower === 'finana'}
        enableFolding
        enableArt={false}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight={false}
        enableElira={firstNameLower === 'elira'}
        enablePomu={firstNameLower === 'pomu'}
        enableFinana={firstNameLower === 'finana'}
        enableFolding
        enableArt
        heading={`Art To ${firstName}`}
        page={firstNameLower}
      />
    </div>
  )
}

export default TalentLayout
