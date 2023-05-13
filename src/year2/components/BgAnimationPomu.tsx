import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spacePomu from '../assets/background/Space-Pomu.webp'

export default function BgAnimationPomu (): JSX.Element {
  return (
    <>
      <Image src={spacePomu} className={pw['page-bg-image']} />
    </>
  )
}
