import React from 'react'
import ArtBoardLayout, { ArtBoardEnum } from '../components/ArtBoardLayout'
import MessageBoxesLayout from '../components/MessageBoxesLayout'

import RowOfGifs from '../components/RowOfGifs'
import Weewa from '../assets/Animations/Elira-Animation_500px.gif'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.gif'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.gif'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.gif'

interface Props {
  page: string
}

export default function Art (props: Props): JSX.Element {
  return (
    <>
      <RowOfGifs
        gif1={Weewa}
        gif2={RyuguardA}
        gif3={Pomudachi}
        gif4={RyuguardB}
      />

      <ArtBoardLayout
        artBoard={ArtBoardEnum.lazulight}
        heading='Community Collage'
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight
        titleType='all'
        enableElira
        enablePomu
        enableFinana
        enableDcl={false}
        enableFolding={false}
        enableArt
        heading='All Fan Art'
        page={props.page}
      />
    </>
  )
}
