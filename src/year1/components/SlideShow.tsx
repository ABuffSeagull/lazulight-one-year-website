import React from 'react'

// Slide show dependencies
// Doc: https://react-slick.neostack.com/docs/api
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import classes from '../components/SlideShow.module.scss'

function SlideShowNextArrow (props: CustomArrowProps): JSX.Element {
  const { className, style, onClick } = props
  return (
    <button
      className={`${classes.next} ${className === undefined ? '' : className}`}
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
      className={`${classes.prev} ${className === undefined ? '' : className}`}
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
    className: classes.container,
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
    <Slider {...slideShowSettings}>
      {props.children}
    </Slider>
  )
}
