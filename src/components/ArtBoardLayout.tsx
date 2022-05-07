import React from 'react'
import './TalentLayout.scss'
import Image from './Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import FinanaCorner from '../assets/Corners/Finana-MsgCorner.webp'
import EliraCorner from '../assets/Corners/Elira-MsgCorner.webp'
import PomuCorner from '../assets/Corners/Pomu-MsgCorner.webp'

import EliraArtBoard from '../assets/ArtBoards/Elira-ArtBoard.webp'
import PomuArtBoard from '../assets/ArtBoards/Pomu-ArtBoard.webp'
import FinanaArtBoard from '../assets/ArtBoards/Finana-ArtBoard.webp'
import LazulightArtBoard from '../assets/ArtBoards/Lazulight-ArtBoard.webp'

import * as messageListImport from '../assets/messageList.json'

interface MessageRaw {
  name: string
  soical_handle: string
  soical_url: string
  msg_lazulight: string
  msg_elira: string
  msg_pomu: string
  msg_finana: string
  art_lazulight: string
  art_elira: string
  art_pomu: string
  art_finana: string
  pomudachi: string
  weewa: string
  ryguard: string
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
  finana
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
        (props.artBoard === ArtBoardEnum.elira && Boolean(msg.weewa)) ||
        (props.artBoard === ArtBoardEnum.pomu && Boolean(msg.pomudachi)) ||
        (props.artBoard === ArtBoardEnum.finana && Boolean(msg.ryguard)) ||
        (props.artBoard === ArtBoardEnum.lazulight && (
          Boolean(msg.weewa) ||
          Boolean(msg.pomudachi) ||
          Boolean(msg.ryguard)
        )
        )
      ) {
        Messages.push({
          name: msg.name,
          soical_url: msg.soical_url
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
    <div className='talent-text-container'>
      <Image className='talent-corner' src={pageOptions.corner} />
      <div className={`talent-text-inner ${pageOptions.borderStyle}-border`}>
        <h3 className='text-xl'>{props.heading}</h3>
        <p>{props.message}</p>
        <Image className='artboard-image' src={pageOptions.artBoard} />
        <ul className='artboard-credits'>
          <li>Credits:</li>
          {renderMascotArtistCredits().map((artist, idx) => (
            <li key={idx}>{
            artist.soical_url === '' ? artist.name : (<a href={artist.soical_url}>{artist.name}</a>)
          }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
