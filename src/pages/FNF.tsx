import React from 'react'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

import SlideShow from '../components/SlideShow'
import EliraSlide from '../assets/FNF/Elira Collage_cf50.webp'
import FinanaSlide from '../assets/FNF/Finana Collage_cf50.webp'
import FNFLogo from '../assets/FNF/Lazunight Thumbnail.webp'
import PomuSlide from '../assets/FNF/Pomu Collage_cf50.webp'

import Image from '../components/Image'
import '../components/ProjectPages.scss'
import '../components/TalentLayout.scss'

interface Props {
  page: string
}

export default function Fnf (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>
      {/* Heading */}
      <div className='project-heading-container-logo'>
        <Image src={FNFLogo} enableZoom />
      </div>

      {/* Slide Show */}
      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <SlideShow>
            <div className='slideshow-slide'>
              <div className='video-container'>
                <iframe
                  src='https://www.youtube.com/embed/ffP4dpdmK18'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <Image src={EliraSlide} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={PomuSlide} className='slideshow-slide' enableZoom />
            </div>
            <div>
              <Image src={FinanaSlide} className='slideshow-slide' enableZoom />
            </div>
          </SlideShow>

          {/* Description & Download */}
          <div className='project-description-container'>
            <h3>A LazuLight Friday Night Funkin' Mod</h3>
            <p>
              Step into the shoes of Pomu, who, in celebration of LazuLight's
              upcoming first year anniversary, will be rehearsing for their
              grand concert with her friends Finana and Elira in the hopes of
              giving their fans the best performance possible!
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

            <h3>Minimum Requirements</h3>
            <p>6GB RAM required, otherwise this game should run on anything (tested on a 10 year old laptop).</p>

            <h3>Install / Uninstall</h3>
            <p>No installation is required. First download the zip, then unzip the game files into any folder.</p>
            <p>To play, run the file "LazuFunk.exe".</p>
            <p>To remove the game, simply delete the game files.</p>

            <h3>Download for Windows (220MB)</h3>
            <a href='/downloads/LazuFunk-5013a39.zip' download>
              <button className='project-download-button lazulight-border'>Download Game</button>
            </a>
            <a href='https://gamebanana.com/mods/382213'>
              <button className='project-download-button lazulight-border'>Mirror Download at GameBanana</button>
            </a>
            <a href=' https://gamejolt.com/games/lazunight/723472'>
              <button className='project-download-button lazulight-border'>Mirror Download at GameJolt</button>
            </a>
          </div>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
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
      <ul>
        <li>
          <p>
            <a href='https://www.youtube.com/c/CoZm0Plays'>CoZm0</a>
          </p>
        </li>
      </ul>
      <h3>Lead Programmer</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/binpuki_'>Binpuki</a>
          </p>
        </li>
      </ul>
      <h3>Animator, Programmer</h3>
      <ul>
        <li>
          <p>
            <a href='https://www.youtube.com/c/KVNK3VIN'>KVN</a>
          </p>
        </li>
      </ul>
      <h3>Character Sprite Artist, Main Menu Asset Artist, Animator Supervisor</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/That1PlantGuy'>Plant Guy</a>
          </p>
        </li>
      </ul>
      <h3>Main Menu BG Artist</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/flimsytipsy'>TIP</a>
          </p>
        </li>
      </ul>
      <h3>Character Portrait Artist</h3>
      <ul>
        <li>
          <p>
            <a href='https://cooperisswagyoushuldfollow.carrd.co/'>cooper</a>
          </p>
        </li>
      </ul>
      <h3>Character Portrait Designer</h3>
      <ul>
        <li>
          <p>Agora</p>
        </li>
      </ul>
      <h3>Background Artist</h3>
      <ul>
        <li>
          <p>Neyecole</p>
        </li>
      </ul>
      <h3>Background Art Designer</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/nobu_okt'>Professor Nobu</a>
          </p>
        </li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li>
          <p>
            <a href='https://www.youtube.com/channel/UCTmBhasnypdfoBUe3bpSb5g'>
              Maarbble
            </a>
          </p>
        </li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li>
          <p>
            <a href='https://www.youtube.com/c/eivesohn'>Eivesohn</a>
          </p>
        </li>
      </ul>
      <h3>Charter</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/TheCoolStalker'>CoolStalker</a>
          </p>
        </li>
      </ul>
      <h3>Special Thanks</h3>
      <h3>Improving Chromatics</h3>
      <ul>
        <li>
          <p>
            <a href='https://twitter.com/GGalactigal'>GGalactigal</a>
          </p>
        </li>
      </ul>
    </div>
  )
}
