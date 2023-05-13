import Image from '../../year1/components/Image'
import pw from './PageWrapper.module.scss'

import spaceFinana from '../assets/background/Space-Finana.webp'

export default function BgAnimationFinana (): JSX.Element {
  return (
    <>
      <Image src={spaceFinana} className={pw['page-bg-image']} />
    </>
  )
}
