import * as messageListImport from '../assets/messages.json'
import * as artListImport from '../assets/art.json'

interface MessageRaw {
  name: string
  social?: string
  flag?: string
  lazulight?: string
  elira?: string
  pomu?: string
  finana?: string
  card_lazulight?: string
  card_elira?: string
  card_pomu?: string
  card_finana?: string
}

export interface Message {
  name: string
  social_url: string
  msg: string
  art: string
}

export interface MessageForFlags extends Message {
  flag: string
  border: string
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
  msg: string,
  cardMsg: string
): boolean {
  const fanCardAvailable: boolean = cardMsg !== ''
  const msgOrArtAvailable: boolean = msg !== ''
  return (
    enable &&
    (msgOrArtAvailable || fanCardAvailable)
  )
}

// Extract all messages from JSON file, filter by enabled type, format, random shuffle, then output
export default function ImportMessages ({
  enableLazulight = false,
  enableElira = false,
  enablePomu = false,
  enableFinana = false,
  enableArt = false
}: {
  enableLazulight?: boolean
  enableElira?: boolean
  enablePomu?: boolean
  enableFinana?: boolean
  enableDcl?: boolean
  enableArt?: boolean
}): MessageForFlags[] {

  const messageListRaw = !enableArt
    ? messageListImport.all as MessageRaw[]
    : artListImport.all as MessageRaw[]

  const Messages: MessageForFlags[] = []
  messageListRaw.forEach((msg: MessageRaw): void => {
    // (Brandon): ForEach loop didn't work for some reason
    if (msg.social === undefined) { msg.social = '' }
    if (msg.flag === undefined) { msg.flag = '' }
    if (msg.lazulight === undefined) { msg.lazulight = '' }
    if (msg.elira === undefined) { msg.elira = '' }
    if (msg.pomu === undefined) { msg.pomu = '' }
    if (msg.finana === undefined) { msg.finana = '' }
    if (msg.card_lazulight === undefined) { msg.card_lazulight = '' }
    if (msg.card_elira === undefined) { msg.card_elira = '' }
    if (msg.card_pomu === undefined) { msg.card_pomu = '' }
    if (msg.card_finana === undefined) { msg.card_finana = '' }

    if (msg.flag === '') { msg.flag = '/anniversary2/stamps/Stamp-Unknown.webp' };

    if (filterMessage(
      enableLazulight,
      msg.lazulight,
      msg.card_lazulight
    )) {
      Messages.push({
        name: msg.name,
        flag: msg.flag,
        social_url: msg.social,
        msg: msg.lazulight,
        art: enableArt ? msg.lazulight : msg.card_lazulight,
        border: 'lazulight'
      })
    }
    if (filterMessage(
      enableElira,
      msg.elira,
      msg.card_elira
    )) {
      Messages.push({
        name: msg.name,
        flag: msg.flag,
        social_url: msg.social,
        msg: msg.elira,
        art: enableArt ? msg.elira : msg.card_elira,
        border: 'elira'
      })
    }
    if (filterMessage(
      enablePomu,
      msg.pomu,
      msg.card_pomu
    )) {
      Messages.push({
        name: msg.name,
        flag: msg.flag,
        social_url: msg.social,
        msg: msg.pomu,
        art: enableArt ? msg.pomu : msg.card_pomu,
        border: 'pomu'
      })
    }
    if (filterMessage(
      enableFinana,
      msg.finana,
      msg.card_finana
    )) {
      Messages.push({
        name: msg.name,
        flag: msg.flag,
        social_url: msg.social,
        msg: msg.finana,
        art: enableArt ? msg.finana : msg.card_finana,
        border: 'finana'
      })
    }
  })
  shuffleMessages(Messages)

  return Messages
}
