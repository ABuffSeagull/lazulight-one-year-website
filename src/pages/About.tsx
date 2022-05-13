import React from 'react'
import '../components/TalentLayout.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

interface Props {
  page: string
}

export default function About (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <h2>About Nijisanji</h2>
          <p>Founded in February 2018 and managed by ANYCOLOR Inc., Nijisanji is one of the most premier virtual liver agencies, boasting over 207 livers across a variety of platforms and languages, including VirtualReal, a joint venture between ANYCOLOR and Bilibili.</p>
          <p>In May 2021 Nijisanji launched its English branch, comprising of livers Elira Pendora, Pomu Rainpuff, and Finana Ryugu. Since then, NijiEN has grown to include 20 livers, including 10 females and 10 males across five waves.</p>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <h2>About This site</h2>
          <p>This fan website showcases our thanks and congratulations to Elira, Pomu, and Finana (LazuLight) of Nijisanji EN on their first full year of streaming.</p>
          <p>Fans of LazuLight from across the world and from all walks of life joined together to create this expression of thanks. Every showcased message, art, music, game, and this website itself was created specifically for this purpose. This project is the culmination of over 4 months of efforts from artists, programmers, writers, and many others.</p>
          <p>The fruits of this labor include artwork, a cover of Diamond City Lights, a mod for Friday Night Funkin, and an entire visual novel. Thank you to the LazuLight fan discords, contributors, and all the fans for your hard work and support.</p>
          <h3>Fan Discord Links</h3>
          <p><a href='https://discord.gg/2434club'>Nijisanji EN Fanserver</a></p>
          <p><a href='https://discord.gg/pomu'>Pomucord</a></p>
          <p><a href='https://discord.gg/gWUFJS2JtF'>Elicord</a></p>
          <p><a href='https://discord.gg/425bxuSsff'>Finana Finclub</a></p>
        </div>
      </div>

    </div>
  )
}
