import React from 'react'
import { Textbox } from '../components/Textbox'
import classesCredits from '../components/Credits.module.scss'

export default function About (): JSX.Element {
  return (
    <>
      <Textbox>
        <h2>About</h2>
        <p>This fan website showcases our thanks and congratulations to Elira, Pomu, and Finana (LazuLight) of Nijisanji EN for all their content from 2 years of streaming.</p>
        <p>Fans of LazuLight from across the world and from all walks of life joined together to create this expression of thanks. Every showcased message, art, music, 4-koma, doujin, and this website itself was created specifically for this purpose. This project is the culmination of many months of efforts from artists, programmers, writers, and many others.</p>
        <p>The fruits of this labour include this website, an anthology and a song. Thank you to the LazuLight fan discords, contributors, and all the fans for your hard work and support.</p>
        <h3>Fan Discord Links</h3>
        <p><a className='external-link-text' href='https://discord.gg/2434club'>Nijisanji EN Fanserver</a></p>
        <p><a className='external-link-text' href='https://discord.gg/pomu'>Pomucord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/gWUFJS2JtF'>Elicord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/425bxuSsff'>Finana Finclub</a></p>
      </Textbox>

      <Textbox>
        <h2>Credits</h2>
        <div className={classesCredits.text}>
          <h3>Management Team</h3>
          <h4>Organiser</h4>
          <ul>
            <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
          </ul>
          <h4>Leaders</h4>
          <ul>
            <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
            <li><p><a href='https://twitter.com/kfpcalendar'>Sant268</a></p></li>
            <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
          </ul>

          <h3>Domain Owner &amp; Server Hosting</h3>
          <ul>
            <li><p><a href='https://twitter.com/thundercookie15'>thundercookie15</a></p></li>
          </ul>

          <h3>Programming</h3>
          <ul>
            <li><p>Austinx88</p></li>
            <li><p><a href='https://www.twitter.com/jtao_'>Jay Tau</a></p></li>
            <li><p><a href='https://twitter.com/_tecnd'>tecnd</a></p></li>
            <li><p><a href='https://twitter.com/av8tor8988'>Ava</a></p></li>
            <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
            <li><p><a href='https://youtube.com/@Pyrospower'>Pyrospower</a></p></li>
          </ul>

          <h3>Design</h3>
          <ul>
            <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
            <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
          </ul>

          <h3>Art Assets</h3>
          <ul>
            <li><p><a href='https://twitter.com/wildnexus'>wildnexus</a></p></li>
            <li><p><a href='https://twitter.com/ACatKat'>A.Cat</a></p></li>
            <li><p><a href='https://twitter.com/BPikmin11'>BluePikmin11</a></p></li>
            <li><p>ShittyDrawer’s Den</p></li>
            <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p></li>
          </ul>

          <h3>Milestone Submissions</h3>
          <ul>
            <li><p>CrimsonSilver4</p></li>
            <li><p>WildestDuck</p></li>
            <li><p>Blu-chan</p></li>
            <li><p>Faculity</p></li>
            <li><p>shurilampio</p></li>
            <li><p>Pyrospower</p></li>
            <li><p>Jackson</p></li>
            <li><p>Brandon Johns</p></li>
          </ul>

          <h3>Additional Credits</h3>
          <ul>
            <li><p><a href='https://twitter.com/MelonbreadFBP'>Melonbread (Ryuguard)</a></p></li>
            <li><p><a href='https://twitter.com/tsukinaga_b'>tsukinaga_b (Base of Doujin Icon)</a></p></li>
            <li><p><a href='https://www.vecteezy.com/free-png/postage-stamp'>Vecteezy (Postage Stamp Overlay)</a></p></li>
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
      </Textbox>
    </>
  )
}
