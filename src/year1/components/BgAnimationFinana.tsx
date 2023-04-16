import Image from './Image'
import pw from './PageWrapper.module.scss'

import FinanaBubble1 from '../assets/BG/Finana-BG-Bubbles1.svg'
import FinanaFish from '../assets/BG/Finana-BG-Fish.svg'
import { useEffect, useRef, useState } from 'react'

function Bubble ({ bodyHeight }: {bodyHeight: number}): JSX.Element {
  // Heavy use of useRef to avoid Math.random() calls on every render

  const left = useRef(Math.random() * 100)
  const delay = useRef(-1 * Math.random() * 7) // Negative delay starts animation mid cycle

  const avgSpeed = 350 // average px / sec
  const speed = useRef(avgSpeed * (0.7 + Math.random() * 0.6)) // speed with variation
  const scale = 1 / (speed.current / avgSpeed) // faster coins are "closer" to create depth

  const styles: Record<string, string | number> = {
    left: `${left.current}%`,
    animationDelay: `${delay.current}s`,
    animationDuration: `${bodyHeight / speed.current}s`,
    '--scale-factor': scale
  }

  return (
    <Image
      className={pw['page-bg-animation-finana-bubble']}
      src={FinanaBubble1}
      style={styles}
    />
  )
}

export default function BgAnimationFinana (): JSX.Element {
  const finanaBubbleCount: number = 30
  const finanaFishCount: number = 30

  const [bodyHeight, setBodyHeight] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setBodyHeight(entry.target.clientHeight)
    })

    resizeObserver.observe(document.body)
    return () => resizeObserver.disconnect()
  }, [])

  const styles: Record<string, string> = {
    '--page-height': `${bodyHeight}px`
  }

  return (
    <>
      <div style={styles}>
        {Array.from({ length: finanaBubbleCount }, (_el, i: number) => (
          <Bubble key={'finBubble' + i.toString()} bodyHeight={bodyHeight} />
        ))}
      </div>
      <div>
        {Array.from({ length: finanaFishCount }, (_el, i: number) => (
          <Image key={'finFish' + i.toString()} className={pw['page-bg-animation-finana-fish']} src={FinanaFish} />
        ))}
      </div>
    </>
  )
}
