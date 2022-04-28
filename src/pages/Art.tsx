import React, { useRef } from 'react'
import '../components/TalentLayout.scss'
import Image from '../components/Image'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import MascotAnimation from '../components/MascotAnimation'
import Weewa from '../assets/Animations/Elira-Animation_500px.webm'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.webm'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.webm'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.webm'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import ArtBoardLazulight from '../assets/ArtBoards/Pomu-ArtBoard.webp'

interface Props {
  page: string
}

export default function Art (props: Props): JSX.Element {
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
        <div className='hide-on-tablet'><MascotAnimation id={vid3} delay={150} src={RyuguardB} /></div>
      </div>

      {/* Art Board */}
      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className='talent-text-inner lazulight-border'>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h3>Community Collage</h3>
          <p>Love from Pomucord, Fincord, and Elicord</p>
          <Image className='artboard-image' src={ArtBoardLazulight} />
        </div>
      </div>

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight
        enableElira
        enablePomu
        enableFinana
        enableFolding={false}
        enableArt
        heading='All Fan Art'
        page={props.page}
      />
    </div>
  )
}
