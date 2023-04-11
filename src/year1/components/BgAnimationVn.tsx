import React from 'react'
import Image from './Image'
import EliraCloud1 from '../assets/BG/Elira-BG-Cloud1.webp'
import EliraCloud2 from '../assets/BG/Elira-BG-Cloud2.webp'
import EliraCloud3 from '../assets/BG/Elira-BG-Cloud3.webp'
import EliraCloud4 from '../assets/BG/Elira-BG-Cloud4.webp'

export default function BgAnimationVn (): JSX.Element {
  // (Brandon) These constants must match values in class 'page-bg-animation-${props.page}-element'
  const vnCloudCount: number = 8 * 4 // Should be multiple of 4

  return (
    <div>
      {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
        <Image key={'vnCloud1' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud1} />
      ))}
      {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
        <Image key={'vnCloud2' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud2} />
      ))}
      {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
        <Image key={'vnCloud3' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud3} />
      ))}
      {Array.from({ length: vnCloudCount / 4 }, (_el, i: number) => (
        <Image key={'vnCloud4' + i.toString()} className='page-bg-animation-vn-cloud' src={EliraCloud4} />
      ))}
    </div>
  )
}
