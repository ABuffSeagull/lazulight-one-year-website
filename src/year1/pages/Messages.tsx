import React from 'react'
import Image from '../components/Image'
import Weewa from '../assets/Animations/Elira-Animation_500px.gif'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.gif'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.gif'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.gif'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import '../components/TalentLayout.scss'

interface Props {
  page: string
}

export default function Messages (props: Props): JSX.Element {
  return (
    <>
      <div className='talent-animation-container'>
        {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
        <Image src={Weewa} enableZoom />
        <Image src={RyuguardA} enableZoom />
        <Image src={Pomudachi} enableZoom />
        <div className='hide-on-tablet'>
          <Image src={RyuguardB} enableZoom />
        </div>
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        titleType='all'
        enableLazulight
        enableElira
        enablePomu
        enableFinana
        enableDcl
        enableFolding={false}
        enableArt={false}
        heading='All Fan Messages'
        page={props.page}
      />
    </>
  )
}
