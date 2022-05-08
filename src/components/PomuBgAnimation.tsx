import Image from './Image';

import PomuCoinGold from '../assets/BG/Pomu-BG-PomuCoinGold.svg';
import PomuCoinSilver from '../assets/BG/Pomu-BG-PomuCoinSilver.svg';
import { useEffect, useRef, useState } from 'react';

function PomuCoin({ color }: { color: 'gold' | 'silver' }): JSX.Element {
  // Heavy use of useRef to avoid Math.random() calls on every render

  const avgSpeed = 350; // average px / sec
  const speed = useRef(avgSpeed * (0.7 + Math.random() * 0.6)); // speed with variation
  const delay = useRef(Math.random() * 7);
  const left = useRef(Math.random() * 100); // +5% to avoid offscreen coins
  const rot = useRef(Math.random() * 360);
  const scale = 1 / (speed.current / avgSpeed); // faster coins are "closer" to create depth

  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const bodyHeight = entries[0].target.clientHeight;
      setAnimationDuration(bodyHeight / speed.current);
    });

    resizeObserver.observe(document.body);
  }, []);

  return (
    <Image
      className="page-bg-animation-pomu-coin"
      src={color === 'gold' ? PomuCoinGold : PomuCoinSilver}
      style={{
        left: `${left.current}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${delay.current}s`,
        transform: `rotate(${rot.current}deg) scale(${scale})`,
      }}
    />
  );
}

export default function PomuBgAnimation() {
  const pomuCoinCount: number = 60;

  return (
    <>
      {Array.from({ length: pomuCoinCount }, (_el, i: number) => (
        <PomuCoin key={i} color={i % 2 === 0 ? 'gold' : 'silver'} />
      ))}
    </>
  );
}
