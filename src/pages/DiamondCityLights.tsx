import React from 'react'
import '../components/TalentLayout.scss'
import '../components/ProjectPages.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp' // TODO: Requires asset

interface Props {
  page: string
}

export default function DiamondCityLights (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>Diamond City Lights</h2>
          <h2>Fan Cover Song</h2>
          <p>TODO</p>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
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
        <li><a href='https://twitter.com/HirokawaKiro'>Kiro</a></li>
      </ul>
      <h3>Sound Mixer</h3>
      <ul>
        <li><a href='https://twitter.com/TCBNmusic'>Tachibana Music</a></li>
      </ul>
      <h3>Instrumentals</h3>
      <ul>
        <li><a href='https://twitter.com/darylbarnes'>Daryl Barnes of UTAlive</a></li>
      </ul>
      <h3>MV Director</h3>
      <ul>
        <li><a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a></li>
      </ul>
      <h3>Video Editors</h3>
      <ul>
        <li><a href='https://twitter.com/PomuPowerCenter'>Pomu Power Distribution Center</a></li>
        <li><a href='https://twitter.com/peeboggs'>Pendora’s Box</a></li>
        <li>Rex</li>
      </ul>
      <h3>Sprite Artists</h3>
      <ul>
        <li><a href='https://twitter.com/lemonostril'>Lemon</a></li>
        <li><a href='https://twitter.com/hyunicat'>hyuni</a></li>
      </ul>
      <h3>Video Assets</h3>
      <ul>
        <li><a href='https://twitter.com/wizwaaz'>wizwaaz</a></li>
        <li><a href='https://twitter.com/keekispecial'>Keektang</a></li>
        <li><a href='https://twitter.com/a1d8e2316745'>Mini</a></li>
      </ul>
      <h3>Elira Vocalists</h3>
      <ul>
        <li>Tzu</li>
        <li>Thunderwing</li>
        <li><a href='https://twitter.com/hyunicat'>hyuni</a></li>
        <li><a href='https://twitter.com/_kaerrie_'>Kaerrie</a></li>
        <li><a href='https://twitter.com/sinibladekat'>thatmtrx</a></li>
        <li><a href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</a></li>
        <li><a href='https://twitter.com/hikikneekomori'>ottrbottl</a></li>
        <li><a href='https://twitter.com/eia_vsinger'>Eia Mhara</a></li>
        <li><a href='https://twitter.com/csenge_furi'>Sen</a></li>
        <li><a href='https://twitter.com/_arisamisaki_'>jessica</a></li>
      </ul>
      <h3>Pomu Vocalists</h3>
      <ul>
        <li>The Holy Wooomy with 69 Nuggets of Toasted Squidies</li>
        <li>xchgeaxeax</li>
        <li><a href='https://twitter.com/acidpiss_'>Acid</a></li>
        <li><a href='https://twitter.com/Phin86_'>PhinAgain</a></li>
        <li><a href='https://twitter.com/ACWalker20'>AC Walker</a></li>
        <li><a href='https://twitter.com/PastelSonico'>PastelSonico</a></li>
        <li><a href='https://twitter.com/Soul_Jamelson'>Soul Jam</a></li>
        <li><a href='https://twitter.com/Kohibeats1'>Kohibeats</a></li>
        <li><a href='https://twitter.com/outhaleart'>Outhale</a></li>
        <li><a href='https://twitter.com/rocky_2d'>rocky.</a></li>
      </ul>
      <h3>Finana Vocalists</h3>
      <ul>
        <li>mashirooo</li>
        <li>Pink/ジン</li>
        <li>Aibi</li>
        <li>shushidesu</li>
        <li><a href='https://twitter.com/DrSuccessful_'>DrSuccessful</a></li>
        <li><a href='https://twitter.com/P1usJ'>PlusJ</a></li>
        <li><a href='https://twitter.com/lemonostril'>Lemon</a></li>
        <li><a href='https://twitter.com/dead_ninja1'>DeadNinja1</a></li>
        <li><a href='https://twitter.com/jotamide'>Jotamide</a></li>
        <li><a href='https://twitter.com/CoughAMania'>Fonzie</a></li>
      </ul>
      <h3>Mixes</h3>
      <ul>
        <li>root1overXcubed</li>
        <li>Splinterman</li>
        <li>WildestDuck</li>
        <li>KiluDoz</li>
        <li>hafiezer</li>
        <li>Akatsukin</li>
        <li>Gay for pomu</li>
        <li>Oh Deer</li>
        <li>mashirooo</li>
        <li>YamateRailgun</li>
        <li>troosh</li>
        <li>ChizuDesu</li>
        <li>Yasusi</li>
        <li>Remoam</li>
        <li>Fero</li>
        <li><a href='https://twitter.com/JF__ND'>JFND</a></li>
        <li><a href='https://twitter.com/DrSuccessful_'>DrSuccessful</a></li>
        <li><a href='https://twitter.com/ErawanLH'>Erawan</a></li>
        <li><a href='https://twitter.com/kid_poro'>Poro</a></li>
        <li><a href='https://twitter.com/NoxShadow24904'>NoxShadow</a></li>
        <li><a href='https://twitter.com/HirokawaKiro'>Kiro</a></li>
        <li><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></li>
        <li><a href='https://twitter.com/_arisamisaki_'>jessica</a></li>
        <li><a href='https://twitter.com/KeZunjian'>Kei_ZJ (Hanashi)</a></li>
        <li><a href='https://twitter.com/third12_'>third12</a></li>
        <li><a href='https://twitter.com/wildnexus'>wildnexus</a></li>
        <li><a href='https://twitter.com/aletheia024'>Aletheia</a></li>
        <li><a href='https://twitter.com/Ghirocks_Log'>Ghirocks_Log</a></li>
        <li><a href='https://twitter.com/reiykhuu'>Saeren</a></li>
        <li><a href='https://twitter.com/KakaTan91'>KakaTan</a></li>
        <li><a href='https://twitter.com/pumpurumpum2'>Sleep</a></li>
        <li><a href='https://twitter.com/Icy_Meerkat'>IcyMeerkat</a></li>
        <li><a href='https://twitter.com/Phin86_'>PhinAgain</a></li>
        <li><a href='https://twitter.com/Roboticpaladin'>Robotic Paladin</a></li>
        <li><a href='https://twitter.com/sinibladekat'>thatmtrx</a></li>
        <li><a href='https://twitter.com/THEEBINNS'>Binns</a></li>
        <li><a href='https://twitter.com/cyanara_o7'>cyanara</a></li>
        <li><a href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</a></li>
        <li><a href='https://twitter.com/akaasianguy'>akaasianguy</a></li>
        <li><a href='https://twitter.com/HiNu_Nova'>NovaNazo</a></li>
        <li><a href='https://twitter.com/Bel_something'>Belsomething</a></li>
        <li><a href='https://twitter.com/csenge_furi'>Sen</a></li>
        <li><a href='https://twitter.com/rockyyy_dp'>rocky.</a></li>
      </ul>
      <h3>Special Thanks to</h3>
      <ul className='credits-text-special-final'>
        <li><a href='https://twitter.com/NoxShadow24904'>NoxShadow</a></li>
        <li>KB</li>
        <li>LazuLight 1st Anniversary Website Team</li>
        <li>Nijisanji EN Fan Discord Server</li>
        <li>Elicord Discord Server</li>
        <li>Pomucord Discord Server</li>
        <li>Finanacord Discord Server</li>
        <li>And every member of the NijiEN community who helped us out, or showed their support for our project!</li>
      </ul>
    </div>
  )
}
