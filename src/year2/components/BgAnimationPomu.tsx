import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spacePomu from '../assets/background/Space-Pomu.webp'
import animate1 from '../assets/background/Pomu-Balloon1.png'
import animate2 from '../assets/background/Pomu-Balloon2.png'

export default function BgAnimationPomu (): JSX.Element {
  return (
    <>
      <Image src={spacePomu} className={pw['page-bg-animation-liver']} />
      <Image src={animate1} className={pw['page-bg-animation-pomu-a']} />
      <Image src={animate2} className={pw['page-bg-animation-pomu-b']} />
    </>
  )
}
