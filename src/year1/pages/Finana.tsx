import React from 'react'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaFrame from '../assets/Corners/Finana-LiverCorner.webp'
import Ryuguard from '../assets/Animations/Finana-AnimationA_500px.gif'

import ArtBoardLayout, { ArtBoardEnum } from '../components/ArtBoardLayout'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import TalentProfile from '../components/TalentProfile'
import ImportMessages from '../components/ImportMessages'
import MessageBoxesWithCorners from '../components/MessageBoxesWithCorners'

export default function Finana (): JSX.Element {
  const firstName = 'Finana'
  const firstNameLower = firstName.toLowerCase()
  return (
    <>
      <TalentProfile
        name='Finana Ryugu'
        portrait={FinanaImage}
        animation={Ryuguard}
        frame={FinanaFrame}
        youtube='https://www.youtube.com/c/FinanaRyugu-NIJISANJIEN'
        twitter='https://twitter.com/FinanaRyugu'
        discord='https://discord.gg/425bxuSsff'
        quote='Fish and chips, anyone?'
      >
        <p>Nickname(s): Fina, Feesh, Finaurnaur</p>
        <p>Finana Ryugu (フィナーナ 竜宮) is a mermaid who spends her time with tropical fish in the sea of coral reefs and is affiliated with NIJISANJI EN’s first wave “LazuLight”. She has a heart as clear and pure as the calm and beautiful sea.</p>
        <p>Surfacing from the sea, Finana heard of the advent of VTubers from her tropical fish companions and left her home to investigate. She has since learned a great deal above the ocean, such as what a solar is, and has also shared her own experience in keyboards as well as forbidden knowledge of egg-shaped objects and the way of the future.</p>
        <p>And beyond learning and teaching, Finana has found and diligently trained new ways to interact with her loyal Ryugards and Ryugals and the world at large. Though initially reserved about her voice, she stormed onto the scene with the debut of her first original song, Tsunami, proving that her singing is a natural disaster to our playlists and a blessing to our ears. She even donned a new outfit for the occasion, proudly showing us all that this Feesh has got drip</p>
      </TalentProfile>

      <ArtBoardLayout
        artBoard={ArtBoardEnum.finana}
        heading='Community Ryuguard Collage'
      />

      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enableFinana: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enableFinana: true, enableArt: true })} />
      </MessageBoxesLayout>
    </>
  )
}
