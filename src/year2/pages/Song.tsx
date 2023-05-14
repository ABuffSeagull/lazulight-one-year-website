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
    return <>Coming Soon</>
  }
  // Render countdown
  return (
    <>{hours + (days * 24)}h:{minutes}m:{seconds}s</>
  )
}

const releaseDate = '2023-05-16T12:12:00+21:00'

export default function Song (): JSX.Element {
  return (
    <p style={{
      fontSize: '10vw',
      color: 'white',
      textAlign: 'center',
      paddingTop: '10vh'
    }}
    >
      <Countdown date={releaseDate} renderer={countdownRenderer} />
    </p>
  )
}
