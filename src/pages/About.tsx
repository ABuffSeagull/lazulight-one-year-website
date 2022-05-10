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
          <h2>About Nijisanji</h2>
          <p>Founded in February 2018 and managed by ANYCOLOR Inc., Nijisanji is one of the most premier virtual liver agencies, boasting over 207 livers across a variety of platforms and languages, including Virtual Real, a joint venture between ANYCOLOR and Bilibili.</p>
          <p>In May 2021 Nijisanji launched its English branch, comprising of livers Elira Pendora, Pomu Rainpuff, and Finana Ryugu. Since then, NijiEN has grown to include 20 livers, including 10 females and 10 males across five waves.</p>
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
