import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import FramedTextbox from '../components/FramedTextbox'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

interface Props {
  page: string
}

export default function About (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>
      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>About Nijisanji</h2>
        <p>Founded in February 2018 and managed by ANYCOLOR Inc., Nijisanji is one of the most premier virtual liver agencies, boasting over 207 livers across a variety of platforms and languages, including VirtualReal, a joint venture between ANYCOLOR and Bilibili.</p>
        <p>In May 2021 Nijisanji launched its English branch, comprising of livers Elira Pendora, Pomu Rainpuff, and Finana Ryugu. Since then, NijiEN has grown to include 20 livers, including 10 females and 10 males across five waves.</p>
      </FramedTextbox>

      
      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>About This site</h2>
        <p>This fan website showcases our thanks and congratulations to Elira, Pomu, and Finana (LazuLight) of Nijisanji EN on their first full year of streaming.</p>
        <p>Fans of LazuLight from across the world and from all walks of life joined together to create this expression of thanks. Every showcased message, art, music, game, and this website itself was created specifically for this purpose. This project is the culmination of over 4 months of efforts from artists, programmers, writers, and many others.</p>
        <p>The fruits of this labor include artwork, a cover of Diamond City Lights, a mod for Friday Night Funkin, and an entire visual novel. Thank you to the LazuLight fan discords, contributors, and all the fans for your hard work and support.</p>
        <h3>Fan Discord Links</h3>
        <p><a className='external-link-text' href='https://discord.gg/2434club'>Nijisanji EN Fanserver</a></p>
        <p><a className='external-link-text' href='https://discord.gg/pomu'>Pomucord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/gWUFJS2JtF'>Elicord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/425bxuSsff'>Finana Finclub</a></p>
      </FramedTextbox>

      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>Website Team Credits</h2>
        <WebTeamCredits />
      </FramedTextbox>
    </div>
  )
}
function WebTeamCredits (): JSX.Element {
  return (
    <div className='credits-text'>
      <h3>Management Team</h3>
      <h4>Organiser</h4>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
      </ul>
      <h4>Leaders</h4>
      <ul>
        <li><p><a href='https://twitter.com/kfpcalendar'>Sant268</a></p></li>
        <li><p><a href='https://twitter.com/NoxShadow24904'>NoxShadow</a></p></li>
        <li><p>ABuffSeagull</p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
      </ul>

      <h3>Domain Owner</h3>
      <ul>
        <li><p>Xan</p></li>
      </ul>

      <h3>Server Hosting</h3>
      <ul>
        <li><p><a href='https://twitter.com/thundercookie15'>thundercookie15</a></p></li>
      </ul>

      <h3>Programming</h3>
      <ul>
        <li><p>Matthew Tao</p></li>
        <li><p><a href='https://twitter.com/monkey2821920'>Austinx88</a></p></li>
        <li><p><a href='https://twitter.com/_tecnd'>tecnd</a></p></li>
        <li><p><a href='https://twitter.com/kawaru_2601'>Yuki</a></p></li>
        <li><p>Kalesvol</p></li>
        <li><p><a href='https://twitter.com/Yahiko_Daichi'>YahikoDaichi</a></p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
      </ul>

      <h3>Design</h3>
      <ul>
        <li><p>Matthew Tao</p></li>
        <li><p><a href='https://twitter.com/NobleNoisii'>NobleNoisii</a></p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
      </ul>

      <h3>Art Assets</h3>
      <ul>
        <li><p><a href='https://twitter.com/wildnexus'>wildnexus</a></p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
        <li><p><a href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</a></p></li>
      </ul>

      <h3>Text Content</h3>
      <ul>
        <li><p><a href='https://twitter.com/wildnexus'>wildnexus</a></p></li>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
        <li><p><a href='https://twitter.com/ZephyrKitten'>Zephyr Kitten</a></p></li>
        <li><p><a href='https://twitter.com/JF__ND'>JFND</a></p></li>
        <li><p><a href='https://twitter.com/Yahiko_Daichi'>YahikoDaichi</a></p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
        <li><p><a href='https://www.instagram.com/brainstorm_13201'>ShittyWriter’s Den</a></p></li>
      </ul>

      <h3>Feedback</h3>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
      </ul>

      <h3>Additional Credits</h3>
      <ul>
        <li><p><a href='https://twitter.com/AliceVu134'>Alice Vu (Ryuguard Design A)</a></p></li>
        <li><p><a href='https://twitter.com/MelonbreadFBP'>Melonbread (Ryuguard Design B)</a></p></li>
        <li><p><a href='https://twitter.com/suminoja'>Suminoja (Twerking LazuLight Gifs)</a></p></li>
        <li><p><a href='https://grabcad.com/library/diamond-round-brilliant-cut-2'>Edgar Gidoni (Diamond 3D model)</a></p></li>
      </ul>
      <h3>Special Thanks</h3>
      <ul className='credits-text-special-final'>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
    </div>
  )
}
