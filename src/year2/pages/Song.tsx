import React from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { Textbox } from '../components/Textbox'
import classesVideo from '../../year1/components/Video.module.scss'

const countdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}: CountdownRenderProps): JSX.Element => {
  if (completed) {
    return <>Soon</>
  }
  // Render countdown
  return (
    <>{days} days, {hours}h:{minutes}m:{seconds}s</>
  )
}

const releaseDate = '2023-06-16T03:00:00+09:00'

export default function Song (): JSX.Element {
  return (
    <>
      <Textbox>
        <div className={classesVideo.container}>
          <iframe
            src='https://www.youtube.com/embed/2w9x1dfV9lA'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <p style={{
          marginTop: '2rem',
          fontSize: '4.5vw',
          textAlign: 'center'
        }}
        >
          Release: <Countdown date={releaseDate} renderer={countdownRenderer} />
        </p>
        <p style={{
          fontSize: '2.5vw',
          textAlign: 'center'
        }}
        >
          (16th June 2023)
        </p>

      </Textbox>
    </>
  )
}
