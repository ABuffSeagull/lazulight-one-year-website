import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spaceElira from '../assets/background/Space-Elira.webp'

export default function BgAnimationElira (): JSX.Element {
  return (
    <>
      <Image src={spaceElira} className={pw['page-bg-image']} />
    </>
  )
}
