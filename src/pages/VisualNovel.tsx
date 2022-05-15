import React from 'react'
// Countdown timer
// Doc: https://github.com/ndresx/react-countdown
import Countdown, { CountdownRenderProps } from 'react-countdown'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
// Slide show dependencies
// Doc: https://react-slick.neostack.com/docs/api
import 'slick-carousel/slick/slick.css'
import EliraFrame from '../assets/Corners/Elira-LiverCorner.webp'
import FinanaFrame from '../assets/Corners/Finana-LiverCorner.webp'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'
import PomuFrame from '../assets/Corners/Pomu-LiverCorner.webp'
// Slide show slides
import Slide1 from '../assets/VN/cg_elira_classroom_hair_tuck_watermark.webp'
import Slide2 from '../assets/VN/cg_finana_rooftop_lunch_watermark.webp'
import Slide3 from '../assets/VN/cg_pomu_pomusuke_ver1_watermark.webp'
import Slide4 from '../assets/VN/vn-screenshot1.webp'
import Slide5 from '../assets/VN/vn-screenshot2.webp'

import EliraImage from '../assets/VN/elira school happy_cf50.webp'
import FinanaImage from '../assets/VN/finana school happy_cf50.webp'
import VisualNovelLogo from '../assets/VN/lazulight_vn_logo_cf50.webp'
import PomuImage from '../assets/VN/pomu school happy_cf50.webp'
import Image from '../components/Image'
import '../components/ProjectPages.scss'
import '../components/TalentLayout.scss'

interface Props {
  page: string
}

interface Character {
  portrait: string
  frame: string
  firstNameLower: string
  name: string
  info: string[]
}

export default function VisualNovel (props: Props): JSX.Element {
  const characters: Character[] = [
    {
      portrait: EliraImage,
      frame: EliraFrame,
      firstNameLower: 'elira',
      name: 'Elira Pendora',
      info: [
        'A shy president that while commands respect from her classmates, finds herself in an awkward position without a club to join for the exact same reason',
        'She loves playing the violin, but it seems she focused on the piano when she was little. What lead to the change? A simple change of heart? Or a deeper secret she’s trying to hide...'
      ]
    },
    {
      portrait: PomuImage,
      frame: PomuFrame,
      firstNameLower: 'pomu',
      name: 'Pomu Rainpuff',
      info: [
        'A forest fairy with a true passion for cross country. She loves the feeling of the wind blowing through her hair while running or being in high places more than anything.',
        'She’s always bubbly and energetic on the outside, but deep inside she’s also compassionate and thoughtful toward her friends. And once you get her nerding out about her interests, you’ll never be able to get her to stop.'
      ]
    },
    {
      portrait: FinanaImage,
      frame: FinanaFrame,
      firstNameLower: 'finana',
      name: 'Finana Ryugu',
      info: [
        'A quiet student during the day but a fierce gamer at night, Finana Ryugu is the type of person who seems to always be living in her own world.',
        'She’s usually soft spoken and can be a little… questionable sometimes, but she tries her best to express her feelings to everyone.',
        'She loves teaching others about her interests, but what happens when she’s the one looking for help?'
      ]
    }
  ]

  const slideShowSettings = {
    className: 'center',
    dots: true,
    // adaptiveHeight: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: '10%',
    slidesToShow: 1,
    speed: 500
  }

  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }: CountdownRenderProps): JSX.Element => {
    if (completed) {
      return <span>Hopefully Very Soon</span>
    }
    // Render countdown
    return (
      <span>
        {days} days, {hours}h, {minutes}min, {seconds}s
      </span>
    )
  }

  return (
    <div className='talent-layout-container'>
      {/* Heading */}
      <div className='project-heading-container'>
        <Image
          src={VisualNovelLogo}
          className='project-heading-logo'
          enableZoom
        />
      </div>

      {/* Slide Show */}
      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <Slider {...slideShowSettings} className='slideshow-container'>
            <div className='slideshow-slide'>
              <div className='video-container'>
                <iframe
                  src='https://www.youtube.com/embed/jsJJPGwZpn0'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <Image src={Slide1} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={Slide2} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={Slide3} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={Slide4} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={Slide5} className='slideshow-slide' enableZoom />
            </div>
          </Slider>

          {/* Description & Download */}
          <div className='project-description-container'>
            <h3>A LazuLight Visual Novel</h3>
            <p>
              Like a star pulled from the skies, a bird torn of its wings, you
              were bound to the Earth that day. You once ruled the skies,
              feeling the air rush through your hair as you flew between the
              clouds, clothes fluttering in the wind as you raced higher and
              higher. However, that's all in the past now, ever since the
              accident.{' '}
            </p>
            <p>
              Now, completely opposite to what you once felt, the world is
              monotonous, gray, and dead. You find no meaning in life, as if
              frozen in time, now that your freedom was taken away from you.{' '}
            </p>
            <p>
              However, that would all come to change with three fated
              encounters. The appearance of an old acquaintance from the track
              team, a reserved class president that seems to be hiding
              something, and a kindred soul seeking solace in the silence.
            </p>
            <p>
              Faced with these new people who suddenly appeared in your life,
              you have to make the choice. Do you wallow in your failure in this
              monochrome prison, or do you take their hand and repaint this
              world?
            </p>
            <p>
              By their side, the hands of the clock start ticking once more.
            </p>

            <h3>Permissions &amp; Notice</h3>
            <p>
              We give permission to all Nijisanji Livers to monetize playing
              this game by any means, including livestream and video
              publication. We declare that the game does not contain any
              copyrighted material other than that which is property of ANYCOLOR
              Inc. We declare that this game does not contain any material that
              violates the YouTube Community Guidelines.
            </p>
            <p>
              This is a work of fiction. Any similarity to real businesses,
              locations, and events is purely coincidental. The characters
              portrayed in this story are not intended to represent the views
              and opinions of the actual talents, Nijisanji, or ANYCOLOR Inc.
            </p>
            <p>
              This is a fan-made game intended for the enjoyment of other fans
              and the talents in celebration of LazuLight's one year
              anniversary. The creators are in no way related to ANYCOLOR Inc,
              Nijisanji, or the talents portrayed in this game.
            </p>

            <h3>Download</h3>
            <h4>Full Game</h4>
            <p>
              Available: June 18, 10pm JST (
              <Countdown
                date='2022-06-18T22:00:00+09:00'
                renderer={countdownRenderer}
              />
              )
            </p>
            <h4>Demo</h4>
            <p>COMING SOON</p>
            {/* <a href='/downloads/vn' download >
              <button className='project-download-button lazulight-border'>Download Demo</button>
            </a> */}
          </div>
        </div>
      </div>

      {/* Character Profiles */}
      {characters.map((character: Character, idx: number) => (
        <div className='vn-profile-container' key={idx}>
          <div
            className={`vn-picture-box vn-picture-box-${character.firstNameLower}`}
          >
            <Image src={character.portrait} enableZoom />
          </div>
          <div className='vn-info-container'>
            <div className='talent-text-container'>
              <Image className='talent-corner' src={character.frame} />
              <div
                className={`talent-text-inner ${character.firstNameLower}-border`}
              >
                <h2>{character.name}</h2>
                {character.info.map((paragraph, idx2) => (
                  <p key={idx2}>{paragraph}&nbsp;</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Credits */}
      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
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
        <li>
          <p>
            <a href='https://twitter.com/HirokawaKiro'>Kiro</a>
          </p>
        </li>
      </ul>
      <h4>VN Team Leader &amp; Producer</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/Treebobber1'>SinSin</a>
          </p>
        </li>
      </ul>
      <h4>VN Team Assistant Leader</h4>
      <ul>
        <li>
          <p>Carateca</p>
        </li>
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
        <li>
          <p>
            <a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a>
          </p>
        </li>
      </ul>
      <h4>Scenario</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/aikatsukin'>Akatsukin</a>
          </p>
        </li>
      </ul>
      <h4>Common Route Writer</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a>
          </p>
        </li>
      </ul>
      <h4>Elira Route Writer</h4>
      <ul>
        <li>
          <p>
            <a href='https://www.instagram.com/brainstorm_13201/'>
              ShittyDrawer’s Den
            </a>
          </p>
        </li>
      </ul>
      <h4>Pomu Route Writer</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/aikatsukin'>Akatsukin</a>
          </p>
        </li>
      </ul>
      <h4>Finana Route Writer</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/keekispecial'>Keektang</a>
          </p>
        </li>
        <li>
          <p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p>
        </li>
      </ul>
      <h4>??? Route Writer</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/aikatsukin'>Akatsukin</a>
          </p>
        </li>
      </ul>
      <h4>Proofreaders</h4>
      <ul>
        <li>
          <p>Johnny Lacone</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/wildnexus'>wildnexus</a>
          </p>
        </li>
        <li>
          <p>Zephyr Kitten</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/JF__ND'>JFND</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/reiykhuu'>Saeren</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/citrusblush'>Calix</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/erawanLH'>Erawan</a>
          </p>
        </li>
      </ul>

      <h3>Art Team</h3>
      <h4>Art Team Leader (Organizational)</h4>
      <ul>
        <li>
          <p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p>
        </li>
      </ul>
      <h4>Art Team Leader (Art QC &amp; Feedback)</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</a>
          </p>
        </li>
      </ul>
      <h3>Sprite Artists</h3>
      <h4>Elira Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/ann_teasocial'>Ann_TeaSocial</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Lost_B_unny'>Lost B'unny</a>
          </p>
        </li>
      </ul>
      <h4>Pomu Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/MizMillificent'>MizMillificent</a>
          </p>
        </li>
      </ul>
      <h4>Finana Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/amechi_doki'>Amechi</a> &nbsp;(Lineart)
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Vitaminechan'>Vitaminechan</a>{' '}
            &nbsp;(Colouring)
          </p>
        </li>
      </ul>
      <h4>Selen Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/SkullGrimoire'>Grim</a>
          </p>
        </li>
      </ul>
      <h4>Rosemi Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/YukiBaskerville'>Yuki Baskerville</a>
          </p>
        </li>
        <li>
          <p>Arien</p>
        </li>
      </ul>
      <h4>Petra Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/amechi_doki'>Amechi</a>
          </p>
        </li>
      </ul>
      <h4>Oliver-sensei Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/flakesnpie'>Bee</a>
          </p>
        </li>
      </ul>
      <h4>Pikl Sprites</h4>
      <ul>
        <li>
          <p>
            <a href='https://www.instagram.com/brainstorm_13201/'>
              ShittyDrawer’s Den
            </a>
          </p>
        </li>
      </ul>
      <h4>CG Artists</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/anatom_orange'>Anatom</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/gudanco'>Guda</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/yexinR5'>R5</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/snowharasho'>Squish</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/SyxhSevenEight'>Syxh</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/sejvon'>VonB</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/natttsume'>Nattsume</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/aelis_k5'>Aeri</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/tsukinaga_b'>tsukinaga</a>
          </p>
        </li>
        <li>
          <p>Dokuro_DX</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/ginga_elyka'>naokomama</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/art_pixelnoodle'>sleepy</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/TakezoMitsurugi'>Takezo</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/ACatKat'>A.Cat</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/sheep_tamura'>ひつじ</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/_namestaken_'>Name Taken</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/AliceVu134'>Alice Vu</a>
          </p>
        </li>
        <li>
          <p>Arien</p>
        </li>
        <li>
          <p>FragileQ</p>
        </li>
        <li>
          <p>Neroshi</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Jeamteerasakul'>RockyBirdy</a>
          </p>
        </li>
      </ul>
      <h4>Backgrounds</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/ajaniiiiiii'>Ajani Akasakaspicy</a>
          </p>
        </li>
        <li>
          <p>Arien</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Arqodeon'>arqo</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/flakesnpie'>Bee</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/rem26_art'>fyretruck</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Lost_B_unny'>Lost B'unny</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/miuzhik_'>Michi</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/snowharasho'>Squish</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/wizwaaz'>wizwaaz</a>
          </p>
        </li>
      </ul>
      <h4>UI/Assets</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/ACatKat'>A.Cat</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/juiceinkf'>juice</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/miuzhik_'>Michi</a>
          </p>
        </li>
        <li>
          <p>mrj</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/TakezoMitsurugi'>Takezo</a>
          </p>
        </li>
        <li>
          <p>The Holy Wooomy with 69 Nuggets of Toasted Squidies</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/questipher'>questipher</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/coldace_24'>Zephyr_Monochrome</a>
          </p>
        </li>
      </ul>

      <h3>Programming Team</h3>
      <h4>Programming Team Leader</h4>
      <ul>
        <li>
          <p>Usaruru</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/tevilchicken'>tecnd</a>
          </p>
        </li>
      </ul>
      <h4>Programmers</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/tevilchicken'>tecnd</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/kanasquared'>kana²</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/BadScribbler'>BadScribbler</a>
          </p>
        </li>
        <li>
          <p>mrj</p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Treebobber1'>SinSin</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/tsukinaga_b'>tsukinaga</a>
          </p>
        </li>
      </ul>
      <h4>Visual Novel Engine</h4>
      <ul>
        <li>
          <p>Ren’Py</p>
        </li>
      </ul>

      <h3>BGM Team</h3>
      <h4>BGM Team Leader</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/HirokawaKiro'>Kiro</a>
          </p>
        </li>
      </ul>
      <h4>BGM Team Assistant Leader</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/itsbreeziness'>breeziness</a>
          </p>
        </li>
      </ul>
      <h4>Composers</h4>
      <ul>
        <li>
          <p>
            <a href='https://www.youtube.com/channel/UCV1NmC2vTGSLPegKcp83k4A'>
              Nikolai Levnekov
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/itsbreeziness'>breeziness</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/SonicFan53alt'>SonicFan53</a>
          </p>
        </li>
      </ul>
      <h4>Instrumentalists</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/peeboggs'>Pendora’s Box</a>{' '}
            &nbsp;(Guitar)
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/HiiragiEmuri'>Hiiragi Emuri</a>{' '}
            &nbsp;(Violin)
          </p>
        </li>
      </ul>
      <h4>Sound Effects</h4>
      <ul>
        <li>
          <p>
            <a href='https://freesound.org'>
              freesound.org under the CC0 license
            </a>
          </p>
        </li>
      </ul>

      <h3>Video Team</h3>
      <h4>Video Team Leaders</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/HirokawaKiro'>Kiro</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/kanasquared'>kana²</a>
          </p>
        </li>
      </ul>
      <h4>Video Editors</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/PomuPowerCenter'>
              PomuPower Distribution Center
            </a>{' '}
            &nbsp;(Opening Video)
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/peeboggs'>Pendora’s Box</a>{' '}
            &nbsp;(Credits)
          </p>
        </li>
      </ul>
      <h3>Community Feedback</h3>
      <h4>Initial Scenario Ideas</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/coldace_24'>Zephyr Monochrome</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/suminoja'>suminoja</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/aikatsukin'>Akatsukin</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://www.instagram.com/brainstorm_13201/'>
              ShittyDrawer’s Den
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Kei_Shiromiya'>Kei Shiromiya</a>
          </p>
        </li>
      </ul>
      <h4>Feedback</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/gonxale0'>Gonxaleo</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/Feet_man69'>Feetman69</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/JF__ND'>JFND</a>
          </p>
        </li>
        <li>
          <p>
            <a href='https://twitter.com/kanasquared'>kana²</a>
          </p>
        </li>
        <li>
          <p>All VN Team Members</p>
        </li>
      </ul>
      <h4>Feet Quality Inspector</h4>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/Feet_man69'>Feetman69</a>
          </p>
        </li>
      </ul>

      <h3>Special Thanks To</h3>
      <ul className='credits-text-special-final'>
        <li>
          <p>LazuLight 1st Anniversary Website Team</p>
        </li>
        <li>
          <p>Nijisanji EN Fan Discord Server</p>
        </li>
        <li>
          <p>Elicord Discord Server</p>
        </li>
        <li>
          <p>Pomucord Discord Server</p>
        </li>
        <li>
          <p>Finanacord Discord Server</p>
        </li>
        <li>
          <p>PPDC’s Right Hand</p>
        </li>
        <li>
          <p>
            And every member of the NijiEN community who helped us out, or
            showed their support for our project!
          </p>
        </li>
      </ul>
    </div>
  )
}
