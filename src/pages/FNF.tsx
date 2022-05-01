import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

interface Props {
  page: string
}

export default function Fnf (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>Lazunight Funkin</h2>
          <p>Step into the shoes of Pomu, who, in celebration of LazuLight's upcoming first year anniversary, will be rehearsing for their grand concert with her friends Finana and Elira in the hopes of giving their fans the best performance possible!</p>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>Credits</h2>
          <LazunightFunkinCredits />
        </div>
      </div>

    </div>
  )
}
function LazunightFunkinCredits (): JSX.Element {
  return (
    <div className='credits-text'>
      <h3>Director, UI Artist</h3>
      <ul><li><p><a href='https://www.youtube.com/c/CoZm0Plays'>CoZm0</a></p></li></ul>
      <h3>Animator, Programmer, Modder</h3>
      <ul><li><p><a href='https://www.youtube.com/c/KVNK3VIN'>KVN</a></p></li></ul>
      <h3>Character Sprite Artist, Animator Supervisor</h3>
      <ul><li><p><a href='https://twitter.com/That1PlantGuy'>Plant Guy</a></p></li></ul>
      <h3>Main Menu Artist</h3>
      <ul><li><p>TIP</p></li></ul>
      <h3>Character Portrait Artist</h3>
      <ul><li><p>cooper</p></li></ul>
      <h3>Character Portrait Designer</h3>
      <ul><li><p>Agora</p></li></ul>
      <h3>Background Artist</h3>
      <ul><li><p>Neyecole</p></li></ul>
      <h3>Background Art Designer</h3>
      <ul><li><p><a href='https://twitter.com/nobu_okt'>Professor Nobu</a></p></li></ul>
      <h3>Musician</h3>
      <ul><li><p><a href='https://www.youtube.com/channel/UCTmBhasnypdfoBUe3bpSb5g'>Maarbble</a></p></li></ul>
      <h3>Musician</h3>
      <ul><li><p><a href='https://www.youtube.com/c/eivesohn'>Eivesohn</a></p></li></ul>
      <h3>Charter</h3>
      <ul><li><p><a href='https://twitter.com/TheCoolStalker'>CoolStalker</a></p></li></ul>
    </div>
  )
}
