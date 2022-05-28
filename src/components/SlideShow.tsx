import React from 'react'

// Slide show dependencies
// Doc: https://react-slick.neostack.com/docs/api
// IMPORTANT: The order of imports matters here for the 'slideshow-prev' and 'slideshow-next' overrides
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './ProjectPages.scss'

function SlideShowNextArrow (props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props
  return (
    <button
      className={`slideshow-next ${className === undefined ? '' : className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      Next
    </button>
  )
}

function SlideShowPrevArrow (props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props
  return (
    <button
      className={`slideshow-prev ${className === undefined ? '' : className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      Next
    </button>
  )
}

interface Props {
  children: React.ReactNode
}

export default function SlideShow (props: Props): JSX.Element {
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
    nextArrow: <SlideShowNextArrow />,
    prevArrow: <SlideShowPrevArrow />
  }

  return (
    <Slider {...slideShowSettings} className='slideshow-container'>
      {props.children}
    </Slider>
  )
}
