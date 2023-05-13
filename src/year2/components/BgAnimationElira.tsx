import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spaceElira from '../assets/background/Space-Elira.webp'
import animate1 from '../assets/background/SDD-KagamineLen.png'
import animate2 from '../assets/background/SDD-SpaceWeewa.png'

export default function BgAnimationElira (): JSX.Element {
  return (
    <>
      <Image src={spaceElira} className={pw['page-bg-animation-liver']} />
      <Image src={animate1} className={pw['page-bg-animation-elira-a']} />
      <Image src={animate2} className={pw['page-bg-animation-elira-b']} />
    </>
  )
}
