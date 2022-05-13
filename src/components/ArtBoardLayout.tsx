import React from 'react'
import './TalentLayout.scss'
import Image from './Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import FinanaCorner from '../assets/Corners/Finana-MsgCorner.webp'
import EliraCorner from '../assets/Corners/Elira-MsgCorner.webp'
import PomuCorner from '../assets/Corners/Pomu-MsgCorner.webp'

import EliraArtBoard from '../assets/ArtBoards/Weewas Collage 1080p.webp'
import PomuArtBoard from '../assets/ArtBoards/Pomudachi Collage 1080p.webp'
import FinanaArtBoard from '../assets/ArtBoards/Ryuguard Collage 1080p.webp'
import LazulightArtBoard from '../assets/ArtBoards/Group Collage 2160 x 1920 Transparent.webp'

import * as messageListImport from '../assets/messageList.json'

interface MessageRaw {
  name: string
  social_url: string
  art_lazulight: string
  art_elira: string
  art_pomu: string
  art_finana: string
  msg_lazulight: string
  msg_elira: string
  msg_pomu: string
  msg_finana: string
  art_weewa: string
  art_pomudachi: string
  art_ryuguard: string
}

interface MascotArtist {
  name: string
  soical_url: string
}

interface PageOptions {
  corner: string
  borderStyle: string
  artBoard: string
}

export enum ArtBoardEnum {
  lazulight,
  elira,
  pomu,
  finana,
}

interface Props {
  artBoard: ArtBoardEnum
  heading: string
  message: string
}

export default function ArtBoardLayout (props: Props): JSX.Element {
  // Extract all messages from JSON file, filter by enabled type, format, then output
  const renderMascotArtistCredits = (): MascotArtist[] => {
    const messageListRaw = messageListImport.all as MessageRaw[]
    const Messages: MascotArtist[] = []
    messageListRaw.forEach((msg: MessageRaw): void => {
      if (
        (props.artBoard === ArtBoardEnum.elira && Boolean(msg.art_weewa)) ||
        (props.artBoard === ArtBoardEnum.pomu && Boolean(msg.art_pomudachi)) ||
        (props.artBoard === ArtBoardEnum.finana && Boolean(msg.art_ryuguard)) ||
        (props.artBoard === ArtBoardEnum.lazulight &&
          (Boolean(msg.art_weewa) ||
            Boolean(msg.art_pomudachi) ||
            Boolean(msg.art_ryuguard)))
      ) {
        Messages.push({
          name: msg.name,
          soical_url: msg.social_url
        })
      }
    })
    return Messages
  }

  // Switch other parameters
  const choosePageOptions = (): PageOptions => {
    if (props.artBoard === ArtBoardEnum.elira) {
      return {
        corner: EliraCorner,
        borderStyle: 'elira',
        artBoard: EliraArtBoard
      }
    }
    if (props.artBoard === ArtBoardEnum.pomu) {
      return {
        corner: PomuCorner,
        borderStyle: 'pomu',
        artBoard: PomuArtBoard
      }
    }
    if (props.artBoard === ArtBoardEnum.finana) {
      return {
        corner: FinanaCorner,
        borderStyle: 'finana',
        artBoard: FinanaArtBoard
      }
    }
    return {
      corner: LazulightCorner,
      borderStyle: 'lazulight',
      artBoard: LazulightArtBoard
    }
  }
  const pageOptions: PageOptions = choosePageOptions()

  return (
    <div className='talent-text-container artboard'>
      <Image className='talent-corner' src={pageOptions.corner} />
      <div className={`talent-text-inner ${pageOptions.borderStyle}-border`}>
        <h3 className='text-xl'>{props.heading}</h3>
        <p>{props.message}</p>
        <Image
          className='artboard-image'
          src={pageOptions.artBoard}
          enableZoom
        />
        <h3>Credits:</h3>
        <ul className='artboard-credits'>
          {renderMascotArtistCredits().map((artist, idx) => (
            <li key={idx}>
              {artist.soical_url === ''
                ? (
                  <span>{artist.name}</span>
                  )
                : (
                  <a href={artist.soical_url}>
                    {artist.name} {/* Twitter Icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='external-link-icon'
                    >
                      <path d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z' />
                    </svg>
                  </a>
                  )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
