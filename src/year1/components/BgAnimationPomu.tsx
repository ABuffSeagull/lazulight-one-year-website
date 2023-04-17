import Image from './Image'
import pw from './PageWrapper.module.scss'

import PomuCoinGold from '../assets/BG/Pomu-BG-PomuCoinGold.svg'
import PomuCoinSilver from '../assets/BG/Pomu-BG-PomuCoinSilver.svg'
import { useEffect, useRef, useState } from 'react'

function PomuCoin ({ color, bodyHeight }: { color: 'gold' | 'silver', bodyHeight: number }): JSX.Element {
  // Heavy use of useRef to avoid Math.random() calls on every render

  const left = useRef(Math.random() * 100)
  const delay = useRef(-1 * Math.random() * 7) // Negative delay starts animation mid cycle
  const rot = useRef(Math.random() * 360)

  const avgSpeed = 350 // average px / sec
  const speed = useRef(avgSpeed * (0.7 + Math.random() * 0.6)) // speed with variation
  const scale = 1 / (speed.current / avgSpeed) // faster coins are "closer" to create depth

  const styles: Record<string, string | number> = {
    left: `${left.current}%`,
    animationDuration: `${bodyHeight / speed.current}s`,
    animationDelay: `${delay.current}s`,
    '--rotation': `${rot.current}deg`,
    '--scale': scale
  }

  return (
    <Image
      className={pw['page-bg-animation-pomu-coin']}
      src={color === 'gold' ? PomuCoinGold : PomuCoinSilver}
      style={styles}
    />
  )
}

export default function BgAnimationPomu (): JSX.Element {
  const pomuCoinCount: number = 60

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
      {Array.from({ length: pomuCoinCount }, (_el, i: number) => (
        <PomuCoin key={'pomCoin' + i.toString()} color={i % 2 === 0 ? 'gold' : 'silver'} bodyHeight={bodyHeight} />
      ))}
    </div>
  )
}
