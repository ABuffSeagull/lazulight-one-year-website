import React from 'react'
import '../components/TalentLayout.scss'
import Image from '../components/Image'
import LazulightCorner from '../assets/Corners/LazuLight-Corner.webp'

interface Props {
  page: string
}

export default function About (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>About Nijisanji</h2>
          <p>TODO</p>
        </div>
      </div>

      <div className='talent-text-container'>
        <Image className='talent-corner' src={LazulightCorner} />
        <div className={`talent-text-inner ${props.page}-border`}>
          {/* TODO: just hard code in the content here. No need to spend more time on anything fancy */}
          <h2>About This site</h2>
          <p>Fan site disclaimer here?</p>
        </div>
      </div>

    </div>
  )
}
