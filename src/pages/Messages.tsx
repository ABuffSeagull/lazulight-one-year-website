import React from 'react'
import '../components/TalentLayout.scss'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import MascotAnimation from '../components/MascotAnimation'
import Weewa from '../assets/Animations/Elira-Animation_500px.webm'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.webm'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.webm'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.webm'

interface Props {
  page: string
}

export default function Messages (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-animation-container'>
        {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
        <MascotAnimation delay={0} src={Weewa} />
        <MascotAnimation delay={50} src={RyuguardA} />
        <MascotAnimation delay={100} src={Pomudachi} />
        <div className='hide-on-tablet'><MascotAnimation delay={150} src={RyuguardB} /></div>
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight
        enableElira
        enablePomu
        enableFinana
        enableFolding={false}
        enableArt={false}
        heading='All Fan Messages'
        page={props.page}
      />
    </div>
  )
}
