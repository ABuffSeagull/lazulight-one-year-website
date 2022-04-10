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
  quote: string // NOTE (Brandon): Slight design change. Removed quote
  info: string
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
    <div className='talent-layout-container'>
      
      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <Image src={props.portrait} />
        </div>
        <div className='talent-info-container'>
          <div className={`talent-text-container ${firstNameLower}-border`}>
            <Image className={`talent-${firstNameLower}frame`} src={props.frame} />
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            <div className='talent-links-container'>
              <a href={props.youtube}>Youtube</a>
              <a href={props.twitter}>Twitter</a>
              <a href={props.discord}>Discord</a>
            </div>
          </div>
          <div className='talent-animation-container'>TODO: animated decorations goes here</div>
        </div>
      </div>

      <div className='fan-submissions-container'>
        <h3 className={`${firstNameLower}-border`}>Messages To {firstName}</h3>
        <div className= {`${showAllMessages ? 'fan-submissions-box-expanded' : 'fan-submissions-box-faded'}`} >
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
        <div className= {`${showAllFanart ? 'fan-submissions-box-expanded' : 'fan-submissions-box-faded'}`} >
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

      <div className='extra-info'>TODO: For credits, disclaimers, etc.</div>
    </div>
  )
}

export default TalentLayout
