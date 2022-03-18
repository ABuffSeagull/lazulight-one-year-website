import React from 'react'
import './TalentLayout.scss'

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
  messages: Message[]
  fanarts: Fanart[]
  portrait: string
  quote: string
  info: string
  youtube: string
  twitter: string
  discord: string
}

function TalentLayout (props: Props): JSX.Element {
  const firstName = props.name.split(' ')[0]
  const [showAllMessages, setShowAllMessages] = React.useState(false)
  const [showAllFanart, setShowAllFanart] = React.useState(false)

  const renderMessageColumns = (): Message[][] => {
    const result: Message[][] = [[], [], []]

    props.messages.forEach((message: any, i: number): void => {
      result[i % 3].push(message)
    })

    return result
  }

  const renderArtColumns = (): Fanart[][] => {
    const result: Fanart[][] = [[], [], []]

    props.fanarts.forEach((message: any, i: number): void => {
      result[i % 3].push(message)
    })

    return result
  }

  return (
    <div className='talent-layout-container'>
      <div className='talent-profile-container'>
        <div className='talent-picture-box'>
          <img src={props.portrait} />
          <div className='talent-quote'>
            <span>{props.quote}</span>
          </div>
        </div>
        <div className='talent-info-container'>
          <div className={`talent-text-container ${firstName.toLowerCase()}-border`}>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            <div className='talent-links-container'>
              <a href={props.youtube}>Youtube</a>
              <a href={props.twitter}>Twitter</a>
              <a href={props.discord}>Discord</a>
            </div>
          </div>
          <div className='talent-animation-container'>{/* animated decorations goes here */}</div>
        </div>
      </div>
      <div className='fan-submissions-container'>
        <h3 className={`${firstName.toLowerCase()}-border`}>Messages To {firstName}</h3>
        <div className='fan-submissions-box' style={{ maxHeight: `${showAllMessages ? '100%' : '50rem'}` }}>
          {!showAllMessages && <div className='fan-submissions-box-fade' />}
          {renderMessageColumns().map((column) => (
            <div className='fan-submissions-column'>
              {column.map((message) => (
                <div className={`fan-submissions-message ${firstName.toLowerCase()}-border`}>
                  <h4>
                    {message.name} ({message.twitter})
                  </h4>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
          ))}
          {!showAllMessages && (
            <button
              onClick={() => {
                setShowAllMessages(true)
              }}
              className={`${firstName.toLowerCase()}-border`}
            >
              view all
            </button>
          )}
        </div>
      </div>
      <div className='fan-submissions-container'>
        <h3 className={`${firstName.toLowerCase()}-border`}>Art For {firstName}</h3>
        <div className='fan-submissions-box' style={{ maxHeight: `${showAllFanart ? '100%' : '50rem'}` }}>
          {!showAllFanart && <div className='fan-submissions-box-fade' />}
          {renderArtColumns().map((column) => (
            <div className='fan-submissions-column'>
              {column.map((fanart) => (
                <div className={`fan-submissions-fanart ${firstName.toLowerCase()}-border`}>
                  <h4>
                    {fanart.name} ({fanart.twitter})
                  </h4>
                  <p>{fanart.text}</p>
                  <img src={fanart.artUrl} alt='' />
                </div>
              ))}
            </div>
          ))}
          {!showAllFanart && (
            <button
              onClick={() => {
                setShowAllFanart(true)
              }}
              className={`${firstName.toLowerCase()}-border`}
            >
              view all
            </button>
          )}
        </div>
      </div>
      <div className='extra-info'>{/* For credits, disclaimers, etc. */}</div>
    </div>
  )
}

export default TalentLayout
