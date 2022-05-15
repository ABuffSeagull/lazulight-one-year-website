import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import PomuImage from '../assets/Portraits/Pomu-Portrait_BJ_cf50.webp?format=png;avif;webp&imagetools&meta'
import TwerkPomu from '../assets/DCL/twerk_pomu_t.gif'
import TwerkElira from '../assets/DCL/twerk_elira_t.gif'
import TwerkFinana from '../assets/DCL/twerk_finana_t.gif'
import SusElira from '../assets/DCL/Elira_sus_small.png'

interface Props {
  page: string
}

export default function DiamondCityLights (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      {/* Heading */}
      <div className='project-heading-container'>
        <Image src={PomuImage} className='project-heading-image' enableZoom />
        <h1 className='project-heading-text-dcl project-heading-text-bg'>Diamond City<br />Lights Cover</h1>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>

          <h2>COMING SOON</h2>
          {/* <div className='video-container'>
            <iframe
              src='https://www.youtube.com/embed/' // TODO: Replace
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div> */}
          {/* Description */}
          <div className='project-description-container'>
            <h3>A Fan Cover Song</h3>
            <p>In celebration of Lazulight's first anniversary, fans from the LazuLight Fan Discord servers have come together to sing and make music, covering Lazulight's famous, twerkable, banger of a song, Diamond City Lights.</p>
            <p>We'd like to thank Finana, Pomu, and Elira for being a big inspiration to all of us, and for being a great source of joy and happiness. We also thank everyone who has worked hard to complete this project. It is your passion and effort that made all of this possible. Thank you.</p>
            <h3>Calls/Mix/Chants:</h3>
            <p>For those who are wondering about the chanting in the middle of the song, this chant is commonly referred to as a ‘mix’. Mixing is associated with Japanese Idol concerts where the crowd mix to the performance. For further information, please refer to <a href='https://www.youtube.com/watch?v=YuLfQC4LCdM'> 【IDOL CALLS】Learning wotagei with Pomu Sensei!【NIJISANJI EN | Pomu Rainpuff】</a> and <a href='https://en.wikipedia.org/wiki/Wotagei'>the Wikipedia page on Wotagei</a>. IETTAIGA!</p>

            <h3>Permissions &amp; Notice</h3>
            <p>Diamond City Lights is the property of ANYCOLOR Inc.</p>
            <p>We give permission to all Nijisanji Livers to monetize this cover by any means, including livestream and video publication.</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight={false}
        enableElira={false}
        enablePomu={false}
        enableFinana={false}
        enableDcl
        enableFolding
        enableArt={false}
        heading='Messages from the DCL Team'
        page='dcl'
      />

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <h2>Credits</h2>
          <DiamondCityLightsCredits />
        </div>
      </div>

    </div>
  )
}

function DiamondCityLightsCredits (): JSX.Element {
  return (
    <div className='credits-text'>
      <h3>Organizer &amp; Leader</h3>
      <ul>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
      </ul>
      <h3>Sound Mixer</h3>
      <ul>
        <li><p><a href='https://twitter.com/TCBNmusic'>Tachibana Music</a></p></li>
      </ul>
      <h3>Instrumentals</h3>
      <ul>
        <li><p><a href='https://twitter.com/darylbarnes'>Daryl Barnes of UTAlive</a></p></li>
      </ul>
      <h3>MV Director</h3>
      <ul>
        <li><p><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></p></li>
      </ul>
      <h3>Video Editors</h3>
      <ul>
        <li><p><a href='https://twitter.com/PomuPowerCenter'>Pomu Power Distribution Center</a></p></li>
        <li><p><a href='https://twitter.com/peeboggs'>Pendora’s Box</a></p>
          <div className='dcl-twerk-container'><Image className='dcl-twerk-gif' src={SusElira} /></div>
        </li>
        <li><p>Rex</p></li>
      </ul>
      <h3>Sprite Artists</h3>
      <ul>
        <li><p><a href='https://twitter.com/lemonostril'>Lemon</a></p></li>
        <li><p><a href='https://twitter.com/hyunicat'>hyuni</a></p></li>
      </ul>
      <h3>Video Assets</h3>
      <ul>
        <li><p><a href='https://twitter.com/wizwaaz'>wizwaaz</a></p></li>
        <li><p><a href='https://twitter.com/keekispecial'>Keektang</a></p></li>
        <li><p><a href='https://twitter.com/a1d8e2316745'>Mini</a></p></li>
        <li><p><a href='https://twitter.com/rem26_art'>fyretruck</a></p></li>
        <li><p><a href='https://twitter.com/ajaniiiiiii'>Ajani Akasakaspicy</a></p></li>
        <li><p><a href='https://twitter.com/snowharasho'>Squish</a></p></li>
        <li><p><a href='https://twitter.com/Arqodeon'>arqo</a></p></li>
      </ul>
       <h3>Credits BGM</h3>
      <ul>
        <li><p><a href='https://twitter.com/SonicFan53alt'>SonicFan53</a></p></li>
      </ul>
      <h3>Elira Vocalists</h3>
      <ul>
        <li><p>Tzu</p></li>
        <li><p>Thunderwing</p></li>
        <li><p><a href='https://twitter.com/hyunicat'>hyuni</a></p></li>
        <li><p><a href='https://twitter.com/_kaerrie_'>Kaerrie</a></p></li>
        <li><p><a href='https://twitter.com/sinibladekat'>thatmtrx</a></p></li>
        <li><p><a href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</a></p></li>
        <li><p><a href='https://twitter.com/hikikneekomori'>ottrbottl</a></p></li>
        <li><p><a href='https://twitter.com/eia_vsinger'>Eia Mhara</a></p></li>
        <li><p><a href='https://twitter.com/csenge_furi'>Sen</a></p></li>
        <li><p><a href='https://twitter.com/_arisamisaki_'>jessica</a></p></li>
      </ul>
      <h3>Pomu Vocalists</h3>
      <ul>
        <li><p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p></li>
        <li><p>xchgeaxeax</p></li>
        <li><p><a href='https://twitter.com/acidpiss_'>Acid</a></p></li>
        <li><p><a href='https://twitter.com/Phin86_'>PhinAgain</a></p></li>
        <li><p><a href='https://twitter.com/ACWalker20'>AC Walker</a></p></li>
        <li><p><a href='https://twitter.com/PastelSonico'>PastelSonico</a></p></li>
        <li><p><a href='https://twitter.com/Soul_Jamelson'>Soul Jam</a></p></li>
        <li><p><a href='https://twitter.com/Kohibeats1'>Kohibeats</a></p></li>
        <li><p><a href='https://twitter.com/outhaleart'>Outhale</a></p></li>
        <li><p><a href='https://twitter.com/rocky_2d'>rocky.</a></p></li>
      </ul>
      <h3>Finana Vocalists</h3>
      <ul>
        <li><p>mashirooo</p></li>
        <li><p>Pink/ジン</p></li>
        <li><p>Aibi</p></li>
        <li><p>shushidesu</p></li>
        <li><p><a href='https://twitter.com/DrSuccessful_'>DrSuccessful</a></p></li>
        <li><p><a href='https://twitter.com/P1usJ'>PlusJ</a></p></li>
        <li><p><a href='https://twitter.com/lemonostril'>Lemon</a></p></li>
        <li><p><a href='https://twitter.com/dead_ninja1'>DeadNinja1</a></p></li>
        <li><p><a href='https://twitter.com/jotamide'>Jotamide</a></p></li>
        <li><p><a href='https://twitter.com/CoughAMania'>Fonzie</a></p></li>
      </ul>
      <h3>Mixes</h3>
      <ul>
        <li><p>root1overXcubed</p></li>
        <li><p>Splinterman</p></li>
        <li><p>WildestDuck</p></li>
        <li><p>KiluDoz</p></li>
        <li><p>hafiezer</p></li>
        <li><p>Akatsukin</p></li>
        <li><p>Gay for pomu</p></li>
        <li><p>Oh Deer</p></li>
        <li><p>mashirooo</p></li>
        <li><p>YamateRailgun</p></li>
        <li><p>troosh</p></li>
        <li><p>ChizuDesu</p></li>
        <li><p>Yasusi</p></li>
        <li><p>Remoam</p></li>
        <li><p>Fero</p></li>
        <li><p><a href='https://twitter.com/JF__ND'>JFND</a></p></li>
        <li><p><a href='https://twitter.com/DrSuccessful_'>DrSuccessful</a></p></li>
        <li><p><a href='https://twitter.com/ErawanLH'>Erawan</a></p></li>
        <li><p><a href='https://twitter.com/kid_poro'>Poro</a></p></li>
        <li><p><a href='https://twitter.com/NoxShadow24904'>NoxShadow</a></p></li>
        <li><p><a href='https://twitter.com/HirokawaKiro'>Kiro</a></p></li>
        <li><p><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></p>
          <div className='dcl-twerk-container'><Image className='dcl-twerk-gif' src={TwerkPomu} /></div>
        </li>
        <li><p><a href='https://twitter.com/_arisamisaki_'>jessica</a></p></li>
        <li><p><a href='https://twitter.com/KeZunjian'>Kei_ZJ (Hanashi)</a></p></li>
        <li><p><a href='https://twitter.com/third12_'>third12</a></p></li>
        <li><p><a href='https://twitter.com/wildnexus'>wildnexus</a></p>
          <div className='dcl-twerk-container'><Image className='dcl-twerk-gif' src={TwerkElira} /></div>
        </li>
        <li><p><a href='https://twitter.com/aletheia024'>Aletheia</a></p></li>
        <li><p><a href='https://twitter.com/Ghirocks_Log'>Ghirocks_Log</a></p></li>
        <li><p><a href='https://twitter.com/reiykhuu'>Saeren</a></p></li>
        <li><p><a href='https://twitter.com/KakaTan91'>KakaTan</a></p></li>
        <li><p><a href='https://twitter.com/pumpurumpum2'>Sleep</a></p></li>
        <li><p><a href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</a></p></li>
        <li><p><a href='https://twitter.com/Phin86_'>PhinAgain</a></p></li>
        <li><p><a href='https://twitter.com/Roboticpaladin'>Robotic Paladin</a></p></li>
        <li><p><a href='https://twitter.com/sinibladekat'>thatmtrx</a></p></li>
        <li><p><a href='https://twitter.com/THEEBINNS'>Binns</a></p></li>
        <li><p><a href='https://twitter.com/cyanara_o7'>cyanara</a></p></li>
        <li><p><a href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</a></p></li>
        <li><p><a href='https://twitter.com/akaasianguy'>akaasianguy</a></p></li>
        <li><p><a href='https://twitter.com/HiNu_Nova'>NovaNazo</a></p></li>
        <li><p><a href='https://twitter.com/Bel_something'>Belsomething</a></p></li>
        <li><p><a href='https://twitter.com/csenge_furi'>Sen</a></p></li>
        <li><p><a href='https://twitter.com/rockyyy_dp'>rocky.</a></p></li>
      </ul>
      <h3>Special Thanks to</h3>
      <ul className='credits-text-special-final'>
        <li><p><a href='https://twitter.com/NoxShadow24904'>NoxShadow</a></p></li>
        <li><p>KB</p></li>
        <li><p>LazuLight 1st Anniversary Website Team</p></li>
        <li><p>Nijisanji EN Fan Discord Server</p></li>
        <li><p>Elicord Discord Server</p></li>
        <li><p>Pomucord Discord Server</p></li>
        <li><p>Finanacord Discord Server</p></li>
        <li><p>And every member of the NijiEN community who helped us out, or showed their support for our project!</p></li>
      </ul>
      <div className='dcl-twerk-container'><Image className='dcl-twerk-gif' src={TwerkFinana} /></div>
    </div>
  )
}
