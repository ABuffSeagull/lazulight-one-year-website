import React from 'react'
import TalentLayout from '../components/TalentLayout'
import PomuImage from '../assets/Portraits/Pomu-Portrait-WN_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuFrame from '../assets/Corners/Pomu-LiverCorner.webp'
import corner from '../assets/Corners/Pomu-MsgCorner.webp'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.gif'

function Pomu (): JSX.Element {
  const quote = 'Biiig Pomu energy!'
  const info = [
    'Nickname(s): Pogmu, PP Fairy',
    'Pomu Rainpuff (ぽむ れいんぱふ) is a fairy who lives in a lush forest and is affiliated with NIJISANJI EN’s first wave “LazuLight”. Supple like a flower in the breeze, she is cheerful and optimistic.',
    'Hailing from Virtual Neverland, Pomu is losing her magic powers because of a decline in the belief of fairies. She decided to become a VTuber after researching ways of restoring belief in fairies and is now determined to become the world’s strongest fairy and achieve world domination---er Pomufication.',
    'Along the way, Pomu and her Pomudachis have gotten involved in a fair share of mischief. Soon after debut it became apparent that the Pomufication was spreading as numerous alter egos made appearances, ranging from the elegantly mustachioed Da Pomky to the smooth-voiced and mysterious Pomura Inpuff. Despite threats of a mounting resistance, Pomu not only showcased her singing in two covers but also performed alongside well-known Touhou music artist beatmario. Pomufication is going global ₳₦Đ ⱤɆ₴ł₴₮₳₦₵Ɇ ł₴ ₣Ʉ₮łⱠɆ.'
  ]
  const youtubeLink = 'https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ'
  const twitterLink = 'https://twitter.com/PomuRainpuff'
  const fanDiscordLink = 'https://discord.gg/pomu'

  return (
    <TalentLayout
      name='Pomu Rainpuff'
      artBoardHeading='Community Pomudachi Collage'
      corner={corner}
      frame={PomuFrame}
      animation={Pomudachi}
      portrait={PomuImage}
      quote={quote}
      info={info}
      youtube={youtubeLink}
      twitter={twitterLink}
      discord={fanDiscordLink}
    />
  )
}

export default Pomu
