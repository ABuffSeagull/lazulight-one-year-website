import React from 'react'
import './TalentLayout.scss'
import Image from './Image'

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
  const [showAllMessages, setShowAllMessages] = React.useState(false)
  const [showAllFanart, setShowAllFanart] = React.useState(false)

  const renderMessages = (): Message[] => {
    return props.messages
  }

  const renderArt = (): Fanart[] => {
    return props.fanarts
  }

  return (
    <div className={`talent-layout-container background-page-${firstNameLower}`}> {/* TODO: Move BG class to root div */}

      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <Image src={props.portrait} />
        </div>
        <div className='talent-info-container'>
          <div className={`talent-text-container talent-text-container-${firstNameLower}`}>
            <Image className='talent-corner' src={props.frame} />
            <div className={`talent-text-inner ${firstNameLower}-border`}>
              <h2>{props.name}</h2>
              {props.info.map(paragraph =>
                <p>{paragraph}&nbsp;</p>
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
            <Image src='/src/sheesh-pog-based.png' />
            <Image src='/src/sheesh-pog-based.png' />
            <Image src='/src/sheesh-pog-based.png' />
            <Image src='/src/sheesh-pog-based.png' className='hide-on-tablet' />
          </div>
        </div>
      </div>

      <div className='fan-submissions-container'>
        <h3 className={`${firstNameLower}-border`}>Messages To {firstName}</h3>
        <div className={`${showAllMessages ? 'fan-submissions-box-expanded' : 'fan-submissions-box-faded'}`}>
          <div className='fan-submissions-box'>
            {renderMessages().map((message) => (
              <div className='fan-submissions-submission'>
                <Image className='fan-submissions-corner' src={props.corner} />
                <div className={`fan-submissions-message ${firstNameLower}-border`}>
                  <h4>{message.name} ({message.twitter})</h4>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!showAllMessages && (
          <button
            onClick={() => { setShowAllMessages(true) }}
            className={`${firstNameLower}-border`}
          >
            view all
          </button>
        )}
      </div>

      <div className='fan-submissions-container'>
        <h3 className={`${firstNameLower}-border`}>Art For {firstName}</h3>
        <div className={`${showAllFanart ? 'fan-submissions-box-expanded' : 'fan-submissions-box-faded'}`}>
          <div className='fan-submissions-box'>
            {renderArt().map((fanart) => (
              <div className='fan-submissions-submission'>
                <Image className='fan-submissions-corner' src={props.corner} />
                <div className={`fan-submissions-fanart ${firstNameLower}-border`}>
                  <h4>{fanart.name} ({fanart.twitter})</h4>
                  <p>{fanart.text}</p>
                  <Image className='fan-submissions-fanarti' src={fanart.artUrl} alt='' />
                </div>
              </div>
            ))}
          </div>
        </div>
        {!showAllFanart && (
          <button
            onClick={() => { setShowAllFanart(true) }}
            className={`${firstNameLower}-border`}
          >
            view all
          </button>
        )}
      </div>
    </div>
  )
}

export default TalentLayout
