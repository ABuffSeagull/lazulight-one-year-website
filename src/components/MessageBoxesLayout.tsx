import React from 'react'
import EliraCorner from '../assets/Corners/Elira-MsgCorner.webp'
import FinanaCorner from '../assets/Corners/Finana-MsgCorner.webp'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import PomuCorner from '../assets/Corners/Pomu-MsgCorner.webp'
import * as messageListImport from '../assets/messageList.json'
import Image from './Image'
import './TalentLayout.scss'

interface MessageRaw {
  name: string
  social_url?: string
  art_lazulight?: string
  art_elira?: string
  art_pomu?: string
  art_finana?: string
  msg_lazulight?: string
  msg_elira?: string
  msg_pomu?: string
  msg_finana?: string
  art_weewa?: string
  art_pomudachi?: string
  art_ryuguard?: string
  msg_dcl?: string
}

interface Message {
  name: string
  social_url: string
  msg: string
  art: string
  corner: string
  border: string
}

interface Props {
  titleType: string
  enableLazulight: boolean
  enableElira: boolean
  enablePomu: boolean
  enableFinana: boolean
  enableDcl: boolean
  enableFolding: boolean
  enableArt: boolean
  heading: string
  page: string
}

// Shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// Implemented by Ilya Kantor: https://javascript.info/task/shuffle https://javascript.info/terms
function shuffleMessages (array: Message[]): boolean {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return true
}

function filterMessage (
  enable: boolean,
  enableArt: boolean,
  msg: string,
  artLiver: string,
  artMascot: string
): boolean {
  // Msg mode: only allow if user has not submitted art
  // Art mode: allow if user has submitted art
  const ArtIsAvailable: boolean = artLiver !== '' || artMascot !== ''
  return (
    enable &&
    ((!enableArt && msg !== '' && !ArtIsAvailable) ||
      (enableArt && ArtIsAvailable))
  )
}

function chooseArt (
  enableArt: boolean,
  artLiver: string,
  artMascot: string
): string {
  if (!enableArt) {
    return ''
  }
  if (artLiver !== '') {
    return artLiver
  }
  if (artMascot !== '') {
    return artMascot
  }
  // Default for no art
  return ''
}

export default function MessageBoxesLayout (props: Props): JSX.Element {
  const [showAllMessages, setShowAllMessages] = React.useState(
    !props.enableFolding
  )
  const messageListRaw = messageListImport.all as MessageRaw[]

  // Extract all messages from JSON file, filter by enabled type, format, random shuffle, then output
  const renderMessages = (): Message[] => {
    const Messages: Message[] = []
    messageListRaw.forEach((msg: MessageRaw): void => {
      // (Brandon): ForEach loop didn't work for some reason
      if (msg.social_url === undefined) {
        msg.social_url = ''
      }
      if (msg.art_lazulight === undefined) {
        msg.art_lazulight = ''
      }
      if (msg.art_elira === undefined) {
        msg.art_elira = ''
      }
      if (msg.art_pomu === undefined) {
        msg.art_pomu = ''
      }
      if (msg.art_finana === undefined) {
        msg.art_finana = ''
      }
      if (msg.msg_lazulight === undefined) {
        msg.msg_lazulight = ''
      }
      if (msg.msg_elira === undefined) {
        msg.msg_elira = ''
      }
      if (msg.msg_pomu === undefined) {
        msg.msg_pomu = ''
      }
      if (msg.msg_finana === undefined) {
        msg.msg_finana = ''
      }
      if (msg.art_weewa === undefined) {
        msg.art_weewa = ''
      }
      if (msg.art_pomudachi === undefined) {
        msg.art_pomudachi = ''
      }
      if (msg.art_ryuguard === undefined) {
        msg.art_ryuguard = ''
      }
      if (msg.msg_dcl === undefined) {
        msg.msg_dcl = ''
      }

      if (
        filterMessage(
          props.enableLazulight,
          props.enableArt,
          msg.msg_lazulight,
          msg.art_lazulight,
          ''
        )
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url,
          msg: msg.msg_lazulight,
          art: props.enableArt ? msg.art_lazulight : '',
          corner: LazulightCorner,
          border: 'lazulight'
        })
      }
      if (
        filterMessage(
          props.enableElira,
          props.enableArt,
          msg.msg_elira,
          msg.art_elira,
          msg.art_weewa
        )
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url,
          msg: msg.msg_elira,
          art: chooseArt(props.enableArt, msg.art_elira, msg.art_weewa),
          corner: EliraCorner,
          border: 'elira'
        })
      }
      if (
        filterMessage(
          props.enablePomu,
          props.enableArt,
          msg.msg_pomu,
          msg.art_pomu,
          msg.art_pomudachi
        )
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url,
          msg: msg.msg_pomu,
          art: chooseArt(props.enableArt, msg.art_pomu, msg.art_pomudachi),
          corner: PomuCorner,
          border: 'pomu'
        })
      }
      if (
        filterMessage(
          props.enableFinana,
          props.enableArt,
          msg.msg_finana,
          msg.art_finana,
          msg.art_ryuguard
        )
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url,
          msg: msg.msg_finana,
          art: chooseArt(props.enableArt, msg.art_finana, msg.art_ryuguard),
          corner: FinanaCorner,
          border: 'finana'
        })
      }
      if (
        filterMessage(props.enableDcl, props.enableArt, msg.msg_dcl, '', '')
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url,
          msg: msg.msg_dcl,
          art: '',
          corner: LazulightCorner,
          border: 'dcl'
        })
      }
    })
    shuffleMessages(Messages)
    return Messages
  }

  return (
    <div className='fan-submissions-container'>
      <h3 className={`talent-title ${props.titleType}`}>{props.heading}</h3>
      <div
        className={`${
          showAllMessages
            ? 'fan-submissions-box-expanded'
            : 'fan-submissions-box-faded'
        }`}
      >
        <div className='fan-submissions-box'>
          {renderMessages().map((message, idx) => (
            <div
              key={'msg' + idx.toString()}
              className='fan-submissions-submission'
            >
              <Image className='fan-submissions-corner' src={message.corner} />
              <div
                className={`fan-submissions-message ${message.border}-border`}
              >
                <h4 className='text-lg'>
                  {message.social_url === ''
                    ? (
                        message.name
                      )
                    : (
                      <a href={message.social_url}>{message.name}</a>
                      )}
                </h4>
                {message.msg !== '' && <p>{message.msg}</p>}
                {message.art !== '' && (
                  <Image
                    className='fan-submissions-fanarti'
                    src={message.art}
                    alt=''
                    enableZoom
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showAllMessages && (
        <button
          onClick={() => {
            setShowAllMessages(true)
          }}
          className={`${props.page}-border fan-submissions-container-button`}
        >
          view all
        </button>
      )}
      {showAllMessages && (
        <button
          onClick={() => {
            setShowAllMessages(false)
          }}
          className={`${props.page}-border fan-submissions-container-button fan-submissions-container-button-hide`}
        >
          Hide Section
        </button>
      )}
    </div>
  )
}
