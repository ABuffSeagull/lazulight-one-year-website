import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spaceFinana from '../assets/background/Space-Finana.webp'
import animate1 from '../assets/background/Finana-egg.webp'
import animate2 from '../assets/background/Finana-toothbrush.webp'
import animate3 from '../assets/background/Finana-helmet.webp'

export default function BgAnimationFinana (): JSX.Element {
  return (
    <>
      <Image src={spaceFinana} className={pw['page-bg-animation-liver']} />
      <Image src={animate1} className={pw['page-bg-animation-finana-a']} />
      <Image src={animate2} className={pw['page-bg-animation-finana-b']} />
      <Image src={animate3} className={pw['page-bg-animation-finana-c']} />
      
      
    </>
  )
}
