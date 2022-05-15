import React, { useRef } from 'react'
import Weewa from '../assets/Animations/Elira-Animation_500px.webm'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.webm'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.webm'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.webm'
import MascotAnimation from '../components/MascotAnimation'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import '../components/TalentLayout.scss'

interface Props {
  page: string
}

export default function Messages (props: Props): JSX.Element {
  const vid0 = useRef<HTMLVideoElement>(null)
  const vid1 = useRef<HTMLVideoElement>(null)
  const vid2 = useRef<HTMLVideoElement>(null)
  const vid3 = useRef<HTMLVideoElement>(null)

  return (
    <div className='talent-layout-container'>
      <div className='talent-animation-container'>
        {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
        <MascotAnimation id={vid0} delay={0} src={Weewa} />
        <MascotAnimation id={vid1} delay={50} src={RyuguardA} />
        <MascotAnimation id={vid2} delay={100} src={Pomudachi} />
        <div className='hide-on-tablet'>
          <MascotAnimation id={vid3} delay={150} src={RyuguardB} />
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
    </div>
  )
}
