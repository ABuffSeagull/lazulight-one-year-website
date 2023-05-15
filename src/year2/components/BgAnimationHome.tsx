import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import lazuElira from '../assets/background/LZL-Elira2-fade.webp'
import lazuPomu from '../assets/background/LZL-Pomu-fade.webp'
import lazuFinana from '../assets/background/LZL-Finana-fade.webp'

export default function BgAnimationFinana (): JSX.Element {
  return (
    <>
      <Image src={lazuElira} className={pw['home-bg-animation-elira']} />
      <Image src={lazuPomu} className={pw['home-bg-animation-pomu']} />
      <Image src={lazuFinana} className={pw['home-bg-animation-finana']} />
    </>
  )
}
