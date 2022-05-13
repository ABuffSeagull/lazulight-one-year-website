import Image from './Image'

import CyalumeElira from '../assets/BG/DCL-BG-CyalumeE.webp'
import CyalumePomu from '../assets/BG/DCL-BG-CyalumeP.webp'
import CyalumeFinana from '../assets/BG/DCL-BG-CyalumeF.webp'
import { useEffect, useRef, useState } from 'react'

function Cyalume ({ color, bodyHeight }: { color: 'elira' | 'pomu' | 'finana', bodyHeight: number }): JSX.Element {
  // Heavy use of useRef to avoid Math.random() calls on every render

  const left = useRef(Math.random() * 100)
  const delay = useRef(-1 * Math.random() * 50) // Negative delay starts animation mid cycle
  const rot = useRef(Math.random() * 360)

  const avgSpeed = 200 // average px / sec
  const speed = useRef(avgSpeed * (0.7 + Math.random() * 0.6)) // speed with variation
  const scale = 1 / (speed.current / avgSpeed) // faster cyalume are "closer" to create depth

  const styles: Record<string, string | number> = {
    left: `${left.current}%`,
    animationDuration: `${bodyHeight / speed.current}s`,
    animationDelay: `${delay.current}s`,
    '--rotation': `${rot.current}deg`,
    '--scale': scale
  }

  return (
    <Image
      className='page-bg-animation-dcl-cyalume'
      src={color === 'elira' ? CyalumeElira : (color === 'pomu' ? CyalumePomu : CyalumeFinana)}
      style={styles}
    />
  )
}

export default function DclBgAnimation (): JSX.Element {
  const cyalumeCount: number = 100

  const [bodyHeight, setBodyHeight] = useState(0)
  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setBodyHeight(entry.target.clientHeight)
    })

    resizeObserver.observe(document.body)
    return () => resizeObserver.disconnect()
  }, [])

  const styles: Record<string, string> = { '--body-height': `${bodyHeight}px` }

  return (
    <div style={styles}>
      {Array.from({ length: cyalumeCount }, (_el, i: number) => (
        <Cyalume key={i} color={i % 3 === 0 ? 'elira' : (i % 3 === 1 ? 'pomu' : 'finana')} bodyHeight={bodyHeight} />
      ))}
    </div>
  )
}
