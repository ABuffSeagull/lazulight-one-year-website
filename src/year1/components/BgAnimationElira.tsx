import React from 'react'
import Image from './Image'
import EliraCloud1 from '../assets/BG/Elira-BG-Cloud1.webp'
import EliraCloud2 from '../assets/BG/Elira-BG-Cloud2.webp'
import EliraCloud3 from '../assets/BG/Elira-BG-Cloud3.webp'
import EliraCloud4 from '../assets/BG/Elira-BG-Cloud4.webp'
import EliraStar1 from '../assets/BG/Elira-BG-Star1.webp'

export default function BgAnimationElira (): JSX.Element {
  // (Brandon) These constants must match values in class 'page-bg-animation-${props.page}-element'
  const eliraCloudCount: number = 4 * 4 // Should be multiple of 4
  const eliraStarCount: number = 60

  return (
    <div>
      {/* Separate div's because of the nth-child selector */}
      <div>
        {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
          <Image key={'eliCloud1' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud1} />
        ))}
        {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
          <Image key={'eliCloud2' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud2} />
        ))}
        {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
          <Image key={'eliCloud3' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud3} />
        ))}
        {Array.from({ length: eliraCloudCount / 4 }, (_el, i: number) => (
          <Image key={'eliCloud4' + i.toString()} className='page-bg-animation-elira-cloud' src={EliraCloud4} />
        ))}
      </div>
      <div>
        {Array.from({ length: eliraStarCount }, (_el, i: number) => (
          <Image key={'eliStar' + i.toString()} className='page-bg-animation-elira-star' src={EliraStar1} />
        ))}
      </div>
    </div>
  )
}
