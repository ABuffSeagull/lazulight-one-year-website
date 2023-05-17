import React from 'react'
import classesCredits from '../components/Credits.module.scss'
import FramedTextbox from '../components/FramedTextbox'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import ExLinkA from '../../shared/components/ExLinkA'

interface Props {
  page: string
}

export default function About (props: Props): JSX.Element {
  return (
    <>
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
        <p><ExLinkA href='https://discord.gg/2434club'>Nijisanji EN Fanserver</ExLinkA></p>
        <p><ExLinkA href='https://discord.gg/pomu'>Pomucord</ExLinkA></p>
        <p><ExLinkA href='https://discord.gg/gWUFJS2JtF'>Elicord</ExLinkA></p>
        <p><ExLinkA href='https://discord.gg/425bxuSsff'>Finana Finclub</ExLinkA></p>
      </FramedTextbox>

      <FramedTextbox corner={LazulightCorner} border={props.page}>
        <h2>Website Team Credits</h2>
        <WebTeamCredits />
      </FramedTextbox>
    </>
  )
}
function WebTeamCredits (): JSX.Element {
  return (
    <div className={classesCredits.text}>
      <h3>Management Team</h3>
      <h4>Organiser</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
      </ul>
      <h4>Leaders</h4>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/kfpcalendar'>Sant268</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/NoxShadow24904'>NoxShadow</ExLinkA></p></li>
        <li><p>ABuffSeagull</p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p></li>
      </ul>

      <h3>Domain Owner</h3>
      <ul>
        <li><p>Xan</p></li>
      </ul>

      <h3>Server Hosting</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/thundercookie15'>thundercookie15</ExLinkA></p></li>
      </ul>

      <h3>Programming</h3>
      <ul>
        <li><p>Matthew Tao</p></li>
        <li><p><ExLinkA href='https://twitter.com/monkey2821920'>Austinx88</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/_tecnd'>tecnd</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/kawaru_2601'>Yuki</ExLinkA></p></li>
        <li><p>Kalesvol</p></li>
        <li><p><ExLinkA href='https://twitter.com/Yahiko_Daichi'>YahikoDaichi</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p></li>
      </ul>

      <h3>Design</h3>
      <ul>
        <li><p>Matthew Tao</p></li>
        <li><p><ExLinkA href='https://twitter.com/NobleNoisii'>NobleNoisii</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p></li>
      </ul>

      <h3>Art Assets</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</ExLinkA></p></li>
      </ul>

      <h3>Text Content</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/ZephyrKitten'>Zephyr Kitten</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFND</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/Yahiko_Daichi'>YahikoDaichi</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLinkA></p></li>
        <li><p><ExLinkA href='https://www.instagram.com/brainstorm_13201'>ShittyWriter’s Den</ExLinkA></p></li>
      </ul>

      <h3>Feedback</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/HirokawaKiro'>Kiro</ExLinkA></p></li>
      </ul>

      <h3>Additional Credits</h3>
      <ul>
        <li><p><ExLinkA href='https://twitter.com/AliceVu134'>Alice Vu (Ryuguard Design A)</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/MelonbreadFBP'>Melonbread (Ryuguard Design B)</ExLinkA></p></li>
        <li><p><ExLinkA href='https://twitter.com/suminoja'>Suminoja (Twerking LazuLight Gifs)</ExLinkA></p></li>
        <li><p><ExLinkA href='https://grabcad.com/library/diamond-round-brilliant-cut-2'>Edgar Gidoni (Diamond 3D model)</ExLinkA></p></li>
      </ul>
      <h3>Special Thanks</h3>
      <ul className={classesCredits['text-special-final']}>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
    </div>
  )
}
