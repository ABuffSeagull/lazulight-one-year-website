import React from 'react';
// Countdown timer
// Doc: https://github.com/ndresx/react-countdown
import Countdown, { CountdownRenderProps } from 'react-countdown';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
// Slide show dependencies
// Doc: https://react-slick.neostack.com/docs/api
import 'slick-carousel/slick/slick.css';
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp';
// Slide show slides
import EliraSlide from '../assets/FNF/Elira Collage_cf50.webp';
import FinanaSlide from '../assets/FNF/Finana Collage_cf50.webp';
import FNFLogo from '../assets/FNF/Lazunight Thumbnail.webp';
import PomuSlide from '../assets/FNF/Pomu Collage_cf50.webp';
import Image from '../components/Image';
import '../components/ProjectPages.scss';
import '../components/TalentLayout.scss';

interface Props {
  page: string;
}

export default function Fnf(props: Props): JSX.Element {
  const slideShowSettings = {
    className: 'center',
    dots: true,
    // adaptiveHeight: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: '10%',
    slidesToShow: 1,
    speed: 500,
  };

  const countdownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps): JSX.Element => {
    if (completed) {
      return <span>Hopefully Very Soon</span>;
    }
    // Render countdown
    return (
      <span>
        {days} days, {hours}h, {minutes}min, {seconds}s
      </span>
    );
  };

  return (
    <div className="talent-layout-container">
      {/* Heading */}
      <div className="project-heading-container">
        <Image src={FNFLogo} className="project-heading-logo" enableZoom />
      </div>

      {/* Slide Show */}
      <div className="talent-text-container">
        <Image className="talent-corner" src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <Slider {...slideShowSettings} className="slideshow-container">
            {/* <div className='slideshow-slide'>
              <div className='video-container'>
                <iframe
                  src='https://www.youtube.com/embed/'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div> */}
            <div>
              <Image src={EliraSlide} className="slideshow-slide" />
            </div>
            <div>
              <Image src={PomuSlide} className="slideshow-slide" />
            </div>
            <div>
              <Image src={FinanaSlide} className="slideshow-slide" />
            </div>
          </Slider>

          {/* Description & Download */}
          <div className="project-description-container">
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

            <h3>Download</h3>
            <h4>Full Game</h4>
            <p>
              Available: June 1 (
              <Countdown
                date="2022-06-01T00:00:00+00:00"
                renderer={countdownRenderer}
              />
              )
            </p>
            {/* <a href='/downloads/vn' download >
              <button className='project-download-button lazulight-border'>Download Game</button>
            </a> */}
          </div>
        </div>
      </div>

      <div className="talent-text-container">
        <Image className="talent-corner" src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          <h2>Credits</h2>
          <LazunightFunkinCredits />
        </div>
      </div>
    </div>
  );
}
function LazunightFunkinCredits(): JSX.Element {
  return (
    <div className="credits-text">
      <h3>Director, UI Artist</h3>
      <ul>
        <li>
          <p>
            <a href="https://www.youtube.com/c/CoZm0Plays">CoZm0</a>
          </p>
        </li>
      </ul>
      <h3>Animator, Programmer, Modder</h3>
      <ul>
        <li>
          <p>
            <a href="https://www.youtube.com/c/KVNK3VIN">KVN</a>
          </p>
        </li>
      </ul>
      <h3>Character Sprite Artist, Animator Supervisor</h3>
      <ul>
        <li>
          <p>
            <a href="https://twitter.com/That1PlantGuy">Plant Guy</a>
          </p>
        </li>
      </ul>
      <h3>Main Menu Artist</h3>
      <ul>
        <li>
          <p>TIP</p>
        </li>
      </ul>
      <h3>Character Portrait Artist</h3>
      <ul>
        <li>
          <p>cooper</p>
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
            <a href="https://twitter.com/nobu_okt">Professor Nobu</a>
          </p>
        </li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li>
          <p>
            <a href="https://www.youtube.com/channel/UCTmBhasnypdfoBUe3bpSb5g">
              Maarbble
            </a>
          </p>
        </li>
      </ul>
      <h3>Musician</h3>
      <ul>
        <li>
          <p>
            <a href="https://www.youtube.com/c/eivesohn">Eivesohn</a>
          </p>
        </li>
      </ul>
      <h3>Charter</h3>
      <ul>
        <li>
          <p>
            <a href="https://twitter.com/TheCoolStalker">CoolStalker</a>
          </p>
        </li>
      </ul>
      <h3>Special Thanks</h3>
      <h3>Improving Chromatics</h3>
      <ul>
        <li>
          <p>
            <a href="https://twitter.com/GGalactigal">GGalactigal</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
