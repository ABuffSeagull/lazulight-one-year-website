import Image from './Image'

import FinanaBubble1 from '../assets/BG/Finana-BG-Bubbles1.svg'
import FinanaFish from '../assets/BG/Finana-BG-Fish.svg'
import { useEffect, useRef, useState } from 'react'

function Bubble (): JSX.Element {
  // Heavy use of useRef to avoid Math.random() calls on every render

  const left = useRef(Math.random() * 100)
  const delay = useRef(Math.random() * 7)

  const avgSpeed = 350 // average px / sec
  const speed = useRef(avgSpeed * (0.7 + Math.random() * 0.6)) // speed with variation
  const scale = 1 / (speed.current / avgSpeed) // faster coins are "closer" to create depth

  const [animationDuration, setAnimationDuration] = useState(0)

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const bodyHeight = entries[0].target.clientHeight
      setAnimationDuration(bodyHeight / speed.current)
    })

    resizeObserver.observe(document.body)
  }, [])

  return (
    <Image
      className='page-bg-animation-finana-bubble'
      src={FinanaBubble1}
      style={{
        left: `${left.current}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${delay.current}s`,
        transform: `scale(${scale})`
      }}
    />
  )
}

export default function FinanaBgAnimation () {
  const finanaBubbleCount: number = 30
  const finanaFishCount: number = 30

  return (
    <>
      <div>
        {Array.from({ length: finanaBubbleCount }, (_el, i: number) => (
          <Bubble />
        ))}
      </div>
      <div>
        {Array.from({ length: finanaFishCount }, (_el, i: number) => (
          <Image className='page-bg-animation-finana-fish' src={FinanaFish} />
        ))}
      </div>
    </>
  )
}
