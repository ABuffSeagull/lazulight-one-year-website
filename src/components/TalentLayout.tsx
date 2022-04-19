import React, { useRef } from 'react'
import './TalentLayout.scss'
import Image from './Image'
import MessageBoxesLayout from './MessageBoxesLayout'
import MascotAnimation from './MascotAnimation'

// TODO(abuffseagull) 2022-03-17: need to remove this
// Probably just generate some random ids on the messages at load time
/* eslint-disable react/jsx-key */

interface Message {
  name: string
  twitter: string
  text: string
}

interface Fanart {
  name: string
  twitter: string
  text: string
  artUrl: string
}

interface Props {
  name: string
  frame: string
  animation: string
  corner: string
  messages: Message[]
  fanarts: Fanart[]
  portrait: string | metadata[]
  info: string[]
  youtube: string
  twitter: string
  discord: string
}

function TalentLayout (props: Props): JSX.Element {
  const firstName = props.name.split(' ')[0]
  const firstNameLower = firstName.toLowerCase()

  const vid0 = useRef<HTMLVideoElement>(null)
  const vid1 = useRef<HTMLVideoElement>(null)
  const vid2 = useRef<HTMLVideoElement>(null)
  const vid3 = useRef<HTMLVideoElement>(null)

  return (
    <div className='talent-layout-container'>

      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <Image src={props.portrait} />
        </div>
        <div className='talent-info-container'>
          <div className={`talent-text-container talent-text-container-${firstNameLower}`}>
            <Image className='talent-corner' src={props.frame} />
            <div className={`talent-text-inner ${firstNameLower}-border`}>
              <h2>{props.name}</h2>
              {props.info.map((paragraph, idx) =>
                <p key={idx}>{paragraph}&nbsp;</p>
              )}
              <div className='talent-links-container'>
                <a href={props.youtube}>{firstName}'s Youtube</a>
                <a href={props.twitter}>{firstName}'s Twitter</a>
                <a href={props.discord}> Fan Discord</a>
              </div>
            </div>
          </div>
          <div className={`talent-animation-container talent-text-container-${firstNameLower}`}>
            {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
            <MascotAnimation id={vid0} delay={0} src={props.animation} />
            <MascotAnimation id={vid1} delay={50} src={props.animation} />
            <MascotAnimation id={vid2} delay={100} src={props.animation} />
            <div className='hide-on-tablet'><MascotAnimation id={vid3} delay={150} src={props.animation} /></div>
          </div>
        </div>
      </div>

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
