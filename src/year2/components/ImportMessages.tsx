import * as messageListImport from '../../year1/assets/messageList.json'
import EliraCorner from '../../year1/assets/Corners/Elira-MsgCorner.webp'
import FinanaCorner from '../../year1/assets/Corners/Finana-MsgCorner.webp'
import LazulightCorner from '../../year1/assets/Corners/LazuLight-Corner.webp'
import PomuCorner from '../../year1/assets/Corners/Pomu-MsgCorner.webp'

interface MessageRaw {
  name: string
  social_url?: string
  country?: string
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

export interface Message {
  name: string
  social_url: string
  msg: string
  art: string
}

export interface MessageForCornerBoxes extends Message {
  corner: string
  border: string
}

export interface MessageForFlags extends MessageForCornerBoxes {
  countryFlag: string
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
    ((!enableArt && msg !== '' && !ArtIsAvailable) || (enableArt && ArtIsAvailable))
  )
}

function chooseArt (
  enableArt: boolean,
  artLiver: string,
  artMascot: string
): string {
  if (!enableArt) { return '' }
  if (artLiver !== '') { return artLiver }
  if (artMascot !== '') { return artMascot }
  // Default for no art
  return ''
}

// Extract all messages from JSON file, filter by enabled type, format, random shuffle, then output
export default function ImportMessages ({
  enableLazulight = false,
  enableElira = false,
  enablePomu = false,
  enableFinana = false,
  enableDcl = false,
  enableArt = false
}: {
  enableLazulight?: boolean
  enableElira?: boolean
  enablePomu?: boolean
  enableFinana?: boolean
  enableDcl?: boolean
  enableArt?: boolean
}): MessageForFlags[] {
  const messageListRaw = messageListImport.all as MessageRaw[]

  const Messages: MessageForFlags[] = []
  messageListRaw.forEach((msg: MessageRaw): void => {
    // (Brandon): ForEach loop didn't work for some reason
    if (msg.social_url === undefined) { msg.social_url = '' }
    if (msg.country === undefined) { msg.country = '/stamps/Stamp-Unknown.webp' }
    if (msg.art_lazulight === undefined) { msg.art_lazulight = '' }
    if (msg.art_elira === undefined) { msg.art_elira = '' }
    if (msg.art_pomu === undefined) { msg.art_pomu = '' }
    if (msg.art_finana === undefined) { msg.art_finana = '' }
    if (msg.msg_lazulight === undefined) { msg.msg_lazulight = '' }
    if (msg.msg_elira === undefined) { msg.msg_elira = '' }
    if (msg.msg_pomu === undefined) { msg.msg_pomu = '' }
    if (msg.msg_finana === undefined) { msg.msg_finana = '' }
    if (msg.art_weewa === undefined) { msg.art_weewa = '' }
    if (msg.art_pomudachi === undefined) { msg.art_pomudachi = '' }
    if (msg.art_ryuguard === undefined) { msg.art_ryuguard = '' }
    if (msg.msg_dcl === undefined) { msg.msg_dcl = '' }

    if (
      filterMessage(
        enableLazulight,
        enableArt,
        msg.msg_lazulight,
        msg.art_lazulight,
        ''
      )
    ) {
      Messages.push({
        name: msg.name,
        countryFlag: msg.country,
        social_url: msg.social_url,
        msg: msg.msg_lazulight,
        art: enableArt ? msg.art_lazulight : '',
        corner: LazulightCorner,
        border: 'lazulight'
      })
    }
    if (
      filterMessage(
        enableElira,
        enableArt,
        msg.msg_elira,
        msg.art_elira,
        msg.art_weewa
      )
    ) {
      Messages.push({
        name: msg.name,
        countryFlag: msg.country,
        social_url: msg.social_url,
        msg: msg.msg_elira,
        art: chooseArt(enableArt, msg.art_elira, msg.art_weewa),
        corner: EliraCorner,
        border: 'elira'
      })
    }
    if (
      filterMessage(
        enablePomu,
        enableArt,
        msg.msg_pomu,
        msg.art_pomu,
        msg.art_pomudachi
      )
    ) {
      Messages.push({
        name: msg.name,
        countryFlag: msg.country,
        social_url: msg.social_url,
        msg: msg.msg_pomu,
        art: chooseArt(enableArt, msg.art_pomu, msg.art_pomudachi),
        corner: PomuCorner,
        border: 'pomu'
      })
    }
    if (
      filterMessage(
        enableFinana,
        enableArt,
        msg.msg_finana,
        msg.art_finana,
        msg.art_ryuguard
      )
    ) {
      Messages.push({
        name: msg.name,
        countryFlag: msg.country,
        social_url: msg.social_url,
        msg: msg.msg_finana,
        art: chooseArt(enableArt, msg.art_finana, msg.art_ryuguard),
        corner: FinanaCorner,
        border: 'finana'
      })
    }
    if (
      filterMessage(enableDcl, enableArt, msg.msg_dcl, '', '')
    ) {
      Messages.push({
        name: msg.name,
        countryFlag: msg.country,
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
