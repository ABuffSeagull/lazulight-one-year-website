import React from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'

const countdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}: CountdownRenderProps): JSX.Element => {
  if (completed) {
    return <>Done</>
  }
  // Render countdown
  return (

    <span> {hours}:{minutes}:{seconds}</span>

  )
}

const releaseDate = '2023-05-16T12:12:00+09:00'

export default function Song (): JSX.Element {
  return (
    <div style={{ fontSize: '300px', color: 'white' }}>
      <Countdown date={releaseDate} renderer={countdownRenderer} />
    </div>
  )
}
