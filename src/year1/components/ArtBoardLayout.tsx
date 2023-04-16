import React from 'react'
import './TalentLayout.scss'
import ab from './ArtBoardLayout.module.scss'
import FramedTextbox from './FramedTextbox'
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
import { Y1LazuType, Y1LiverType } from './PageTypes'

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
  social_url: string
}

interface PageOptions {
  corner: string
  borderStyle: string
  artBoard: string
}

export default function ArtBoardLayout ({
  artBoard,
  heading
}: {
  artBoard: Y1LazuType | Y1LiverType
  heading: string
}): JSX.Element {
  // Extract all messages from JSON file, filter by enabled type, format, then output
  const renderMascotArtistCredits = (): MascotArtist[] => {
    const messageListRaw = messageListImport.all as MessageRaw[]
    const Messages: MascotArtist[] = []
    messageListRaw.forEach((msg: MessageRaw): void => {
      if (
        (artBoard === 'elira' && Boolean(msg.art_weewa)) ||
        (artBoard === 'pomu' && Boolean(msg.art_pomudachi)) ||
        (artBoard === 'finana' && Boolean(msg.art_ryuguard)) ||
        (artBoard === 'lazulight' &&
          (Boolean(msg.art_weewa) ||
            Boolean(msg.art_pomudachi) ||
            Boolean(msg.art_ryuguard)))
      ) {
        Messages.push({
          name: msg.name,
          social_url: msg.social_url
        })
      }
    })
    return Messages
  }

  // Switch other parameters
  const choosePageOptions = (): PageOptions => {
    if (artBoard === 'elira') {
      return {
        corner: EliraCorner,
        borderStyle: 'elira',
        artBoard: EliraArtBoard
      }
    }
    if (artBoard === 'pomu') {
      return {
        corner: PomuCorner,
        borderStyle: 'pomu',
        artBoard: PomuArtBoard
      }
    }
    if (artBoard === 'finana') {
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
    <FramedTextbox corner={pageOptions.corner} border={pageOptions.borderStyle} className={ab.artboard}>
      <h3 className='text-xl'>{heading}</h3>
      <Image
        className={ab['artboard-image']}
        src={pageOptions.artBoard}
        enableZoom
      />
      <h3>Credits:</h3>
      <ul className={`${ab['artboard-credits']} ${ab[`artboard-credits-${artBoard}`]}`}>
        {renderMascotArtistCredits().map((artist, idx) => (
          <li key={idx}>
            {artist.social_url === ''
              ? (
                <span>{artist.name}</span>
                )
              : (
                <a href={artist.social_url}>
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
    </FramedTextbox>
  )
}
