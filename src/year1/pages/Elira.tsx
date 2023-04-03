import React from 'react'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import EliraFrame from '../assets/Corners/Elira-LiverCorner.webp'
import Weewa from '../assets/Animations/Elira-Animation_500px.gif'

import ArtBoardLayout, { ArtBoardEnum } from '../components/ArtBoardLayout'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import TalentProfile from '../components/TalentProfile'

export default function Elira (): JSX.Element {
  const firstName = 'Elira'
  const firstNameLower = firstName.toLowerCase()
  return (
    <>
      <TalentProfile
        name='Elira Pendora'
        portrait={EliraImage}
        animation={Weewa}
        frame={EliraFrame}
        youtube='https://www.youtube.com/channel/UCIeSUTOTkF9Hs7q3SGcO-Ow'
        twitter='https://twitter.com/EliraPendora'
        discord='https://discord.gg/gWUFJS2JtF'
        quote='Love at first light.'
      >
        <p>Nickname(s): Ewiwa, Eli, Sheesh Dragon</p>
        <p>Elira Pendora (エリーラ ペンドラ) is a solar sky dragon who comes from the heavens closest to the sun and is affiliated with NIJISANJI EN’s first wave “LazuLight”. She has the kindness and receptiveness that makes the light of a sunny day fall equally on all.</p>
        <p>Descending from the sun, Elira traveled to Earth at some unspecified point in time before settling down and assimilating human culture. Despite her unknown age, Elira has demonstrated that she is hip and up to date with today’s memes and trends. Sheesh Pog Based indeed.</p>
        <p>Since her arrival on Earth, Elira has tested her FamElira of Weewas to their limits. Very quickly she made clear her dragon endurance as she pressed a button continuously for over eight hours, a feat she accomplished not once, not twice, but three times. And then on Halloween, minds broke and booties shook as Elira unveiled forbidden knowledge that would change the FamElira and the world at large forever. Now a single note of Diamond City Lights is enough to send any affected listener into a twerking frenzy</p>
      </TalentProfile>

      <ArtBoardLayout
        artBoard={ArtBoardEnum.elira}
        heading='Community Weewa Collage'
      />

      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableElira
        enableFolding
      />

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableElira
        enableFolding
        enableArt
      />
    </>
  )
}
