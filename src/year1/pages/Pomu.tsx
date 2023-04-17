import React from 'react'
import PomuImage from '../assets/Portraits/Pomu-Portrait-WN_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuFrame from '../assets/Corners/Pomu-LiverCorner.webp'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.gif'

import ArtBoardLayout from '../components/ArtBoardLayout'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import TalentProfile from '../components/TalentProfile'
import ImportMessages from '../components/ImportMessages'
import MessageBoxesWithCorners from '../components/MessageBoxesWithCorners'

function Pomu (): JSX.Element {
  const firstName = 'Pomu'
  const firstNameLower = firstName.toLowerCase()
  return (
    <>
      <TalentProfile
        name='Pomu Rainpuff'
        portrait={PomuImage}
        animation={Pomudachi}
        frame={PomuFrame}
        youtube='https://www.youtube.com/channel/UCP4nMSTdwU1KqYWu3UH5DHQ'
        twitter='https://twitter.com/PomuRainpuff'
        discord='https://discord.gg/pomu'
        quote='Biiig Pomu energy!'
      >
        <p>Nickname(s): Pogmu, PP Fairy</p>
        <p>Pomu Rainpuff (ぽむ れいんぱふ) is a fairy who lives in a lush forest and is affiliated with NIJISANJI EN’s first wave “LazuLight”. Supple like a flower in the breeze, she is cheerful and optimistic.</p>
        <p>Hailing from Virtual Neverland, Pomu is losing her magic powers because of a decline in the belief of fairies. She decided to become a VTuber after researching ways of restoring belief in fairies and is now determined to become the world’s strongest fairy and achieve world domination---er Pomufication.</p>
        <p>Along the way, Pomu and her Pomudachis have gotten involved in a fair share of mischief. Soon after debut it became apparent that the Pomufication was spreading as numerous alter egos made appearances, ranging from the elegantly mustachioed Da Pomky to the smooth-voiced and mysterious Pomura Inpuff. Despite threats of a mounting resistance, Pomu not only showcased her singing in two covers but also performed alongside well-known Touhou music artist beatmario. Pomufication is going global ₳₦Đ ⱤɆ₴ł₴₮₳₦₵Ɇ ł₴ ₣Ʉ₮łⱠɆ</p>
      </TalentProfile>

      <ArtBoardLayout
        artBoard='pomu'
        heading='Community Pomudachi Collage'
      />

      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enablePomu: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enablePomu: true, enableArt: true })} />
      </MessageBoxesLayout>
    </>
  )
}

export default Pomu
