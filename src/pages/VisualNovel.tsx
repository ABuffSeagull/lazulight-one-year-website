import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

interface Props {
  page: string
}

export default function VisualNovel (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>a</h2>
          <h2>a</h2>
          <p>TODO</p>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>Credits</h2>
          <VisualNovelCredits />
        </div>
      </div>

    </div>
  )
}

function VisualNovelCredits (): JSX.Element {
  return (
    <div className='credits-text'>
      <h3>Management Team</h3>
      <h4>Organizer &amp; Producer</h4>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
      </ul>
      <h4>VN Team Leader &amp; Producer</h4>
      <ul>
        <li><p><a href='https://twitter.com/Treebobber1'>SinSin</a></p></li>
      </ul>
      <h4>VN Team Assistant Leader</h4>
      <ul>
        <li><p>Carateca</p></li>
      </ul>
      {/*
      (BRANDON) Perhaps this could work better, if someone can get it working nicely
      <ul>
        <li>
          <h4>Organizer &amp; Producer</h4>
          <p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p>
        </li>
        <li>
          <h4>VN Team Leader &amp; Producer</h4>
          <p><a href='https://twitter.com/Treebobber1'>SinSin</a></p>
        </li>
        <li>
          <h4>VN Team Assistant Leader</h4>
          <p>Carateca</p>
        </li>
      </ul>
      */}

      <h3>Writing Team</h3>
      <h4>Writing Team Leader</h4>
      <ul>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
      </ul>
      <h4>Scenario</h4>
      <ul>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
        <li><p><a href='https://twitter.com/aikatsukin'>Akatsukin</a></p></li>
      </ul>
      <h4>Common Route Writer</h4>
      <ul>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
      </ul>
      <h4>Elira Route Writer</h4>
      <ul>
        <li><p><a href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</a></p></li>
      </ul>
      <h4>Pomu Route Writer</h4>
      <ul>
        <li><p><a href='https://twitter.com/aikatsukin'>Akatsukin</a></p></li>
      </ul>
      <h4>Finana Route Writer</h4>
      <ul>
        <li><p><a href='https://twitter.com/keekispecial'>Keektang</a></p></li>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
      </ul>
      <h4>??? Route Writer</h4>
      <ul>
        <li><p><a href='https://twitter.com/aikatsukin'>Akatsukin</a></p></li>
      </ul>
      <h4>Proofreaders</h4>
      <ul>
        <li><p>Johnny Lacone</p></li>
        <li><p><a href='https://twitter.com/wildnexus'>wildnexus</a></p></li>
        <li><p>Zephyr Kitten</p></li>
        <li><p><a href='https://twitter.com/JF__ND'>JFND</a></p></li>
        <li><p><a href='https://twitter.com/reiykhuu'>Saeren</a></p></li>
        <li><p><a href='https://twitter.com/citrusblush'>Calix</a></p></li>
        <li><p><a href='https://twitter.com/erawanLH'>Erawan</a></p></li>
      </ul>

      <h3>Art Team</h3>
      <h4>Art Team Leader (Organizational)</h4>
      <ul>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
      </ul>
      <h4>Art Team Leader (Art QC &amp; Feedback)</h4>
      <ul>
        <li><p><a href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</a></p></li>
      </ul>
      <h3>Sprite Artists</h3>
      <h4>Elira Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</a></p></li>
        <li><p><a href='https://twitter.com/Lost_B_unny'>Lost B'unny</a></p></li>
      </ul>
      <h4>Pomu Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/MizMillificent'>MizMillificent</a></p></li>
      </ul>
      <h4>Finana Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/amechi_doki'>Amechi</a> &nbsp;(Lineart)</p></li>
        <li><p><a href='https://twitter.com/Vitaminechan'>Vitaminechan</a> &nbsp;(Colouring)</p></li>
      </ul>
      <h4>Selen Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/SkullGrimoire'>Grim</a></p></li>
      </ul>
      <h4>Rosemi Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</a></p></li>
        <li><p>Arien</p></li>
      </ul>
      <h4>Petra Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/amechi_doki'>Amechi</a></p></li>
      </ul>
      <h4>Oliver-sensei Sprites</h4>
      <ul>
        <li><p><a href='https://twitter.com/flakesnpie'>Bee</a></p></li>
      </ul>
      <h4>Pikl Sprites</h4>
      <ul>
        <li><p><a href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</a></p></li>
      </ul>
      <h4>CG Artists</h4>
      <ul>
        <li><p><a href='https://twitter.com/anatom_orange'>Anatom</a></p></li>
        <li><p><a href='https://twitter.com/gudanco'>Guda</a></p></li>
        <li><p><a href='https://twitter.com/yexinR5'>R5</a></p></li>
        <li><p><a href='https://twitter.com/snowharasho'>Squish</a></p></li>
        <li><p><a href='https://twitter.com/SyxhSevenEight'>Syxh</a></p></li>
        <li><p><a href='https://twitter.com/sejvon'>VonB</a></p></li>
        <li><p><a href='https://twitter.com/natttsume'>Nattsume</a></p></li>
        <li><p><a href='https://twitter.com/aelis_k5'>Aeri</a></p></li>
        <li><p><a href='https://twitter.com/tsukinaga_b'>tsukinaga</a></p></li>
        <li><p>Dokuro_DX</p></li>
        <li><p><a href='https://twitter.com/ginga_elyka'>naokomama</a></p></li>
        <li><p><a href='https://twitter.com/art_pixelnoodle'>sleepy</a></p></li>
        <li><p><a href='https://twitter.com/TakezoMitsurugi'>Takezo</a></p></li>
        <li><p><a href='https://twitter.com/ACatKat'>A.Cat</a></p></li>
        <li><p><a href='https://twitter.com/sheep_tamura'>ひつじ</a></p></li>
        <li><p><a href='https://twitter.com/_namestaken_'>Name Taken</a></p></li>
        <li><p><a href='https://twitter.com/AliceVu134'>Alice Vu</a></p></li>
        <li><p>Arien</p></li>
        <li><p>FragileQ</p></li>
        <li><p>Neroshi</p></li>
        <li><p><a href='https://twitter.com/Jeamteerasakul'>RockyBirdy</a></p></li>
      </ul>
      <h4>Backgrounds</h4>
      <ul>
        <li><p><a href='https://twitter.com/ajaniiiiiii'>Ajani Akasakaspicy</a></p></li>
        <li><p>Arien</p></li>
        <li><p><a href='https://twitter.com/Arqodeon'>arqo</a></p></li>
        <li><p><a href='https://twitter.com/flakesnpie'>Bee</a></p></li>
        <li><p><a href='https://twitter.com/rem26_art'>fyretruck</a></p></li>
        <li><p><a href='https://twitter.com/Lost_B_unny'>Lost B'unny</a></p></li>
        <li><p><a href='https://twitter.com/miuzhik_'>Michi</a></p></li>
        <li><p><a href='https://twitter.com/snowharasho'>Squish</a></p></li>
        <li><p><a href='https://twitter.com/wizwaaz'>wizwaaz</a></p></li>
      </ul>
      <h4>UI/Assets</h4>
      <ul>
        <li><p><a href='https://twitter.com/ACatKat'>A.Cat</a></p></li>
        <li><p><a href='https://twitter.com/juiceinkf'>juice</a></p></li>
        <li><p><a href='https://twitter.com/miuzhik_'>Michi</a></p></li>
        <li><p>mrj</p></li>
        <li><p><a href='https://twitter.com/TakezoMitsurugi'>Takezo</a></p></li>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
        <li><p><a href='https://twitter.com/questipher'>questipher</a></p></li>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr_Monochrome</a></p></li>
      </ul>

      <h3>Programming Team</h3>
      <h4>Programming Team Leader</h4>
      <ul>
        <li><p>Usaruru</p></li>
      </ul>
      <h4>Programmers</h4>
      <ul>
        <li><p><a href='https://twitter.com/tevilchicken'>tecnd</a></p></li>
        <li><p><a href='https://twitter.com/kanasquared'>kana²</a></p></li>
        <li><p><a href='https://twitter.com/BadScribbler'>BadScribbler</a></p></li>
        <li><p>mrj</p></li>
        <li><p><a href='https://twitter.com/Treebobber1'>SinSin</a></p></li>
        <li><p><a href='https://twitter.com/tsukinaga_b'>tsukinaga</a></p></li>
      </ul>
      <h4>Visual Novel Engine</h4>
      <ul>
        <li><p>Ren’Py</p></li>
      </ul>

      <h3>BGM Team</h3>
      <h4>BGM Team Leader</h4>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
      </ul>
      <h4>BGM Team Assistant Leader</h4>
      <ul>
        <li><p><a href='https://twitter.com/itsbreeziness'>breeziness</a></p></li>
      </ul>
      <h4>Composers</h4>
      <ul>
        <li><p><a href='https://www.youtube.com/channel/UCV1NmC2vTGSLPegKcp83k4A'>Nikolai Levnekov</a></p></li>
        <li><p><a href='https://twitter.com/itsbreeziness'>breeziness</a></p></li>
        <li><p><a href='https://twitter.com/SonicFan53alt'>SonicFan53</a></p></li>
      </ul>
      <h4>Instrumentalists</h4>
      <ul>
        <li><p><a href='https://twitter.com/peeboggs'>Pendora’s Box</a> &nbsp;(Guitar)</p></li>
        <li><p><a href='https://twitter.com/HiiragiEmuri'>Hiiragi Emuri</a> &nbsp;(Violin)</p></li>
      </ul>

      <h3>Video Team</h3>
      <h4>Video Team Leaders</h4>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
        <li><p><a href='https://twitter.com/kanasquared'>kana²</a></p></li>
      </ul>
      <h4>Video Editors</h4>
      <ul>
        <li><p><a href='https://twitter.com/PomuPowerCenter'>PomuPower Distribution Center</a> &nbsp;(Opening Video)</p></li>
        <li><p><a href='https://twitter.com/peeboggs'>Pendora’s Box</a> &nbsp;(Credits)</p></li>
      </ul>
      <h3>Community Feedback</h3>
      <h4>Initial Scenario Ideas</h4>
      <ul>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
        <li><p><a href='https://twitter.com/suminoja'>suminoja</a></p></li>
        <li><p><a href='https://twitter.com/aikatsukin'>Akatsukin</a></p></li>
        <li><p><a href='https://www.instagram.com/brainstorm_13201/'>ShittyDrawer’s Den</a></p></li>
        <li><p><a href='https://twitter.com/Kei_Shiromiya'>Kei Shiromiya</a></p></li>
      </ul>
      <h4>Feedback</h4>
      <ul>
        <li><p><a href='https://twitter.com/gonxale0'>Gonxaleo</a></p></li>
        <li><p><a href='https://twitter.com/feetman_69'>Feetman69</a></p></li>
        <li><p><a href='https://twitter.com/JF__ND'>JFND</a></p></li>
        <li><p><a href='https://twitter.com/kanasquared'>kana²</a></p></li>
        <li><p>All VN Team Members</p></li>
      </ul>
      <h4>Feet Quality Inspector</h4>
      <ul>
        <li><p><a href='https://twitter.com/feetman_69'>Feetman69</a></p></li>
      </ul>

      <h3>Special Thanks To</h3>
      <ul className='credits-text-special-final'>
        <li><p>LazuLight 1st Anniversary Website Team</p></li>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>PPDC’s Right Hand</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
    </div>
  )
}
