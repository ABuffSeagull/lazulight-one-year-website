import React from 'react'
import './TalentLayout.scss'
import Image from './Image'

interface Props {
  page: string
  frame: string
}

export default function FullWidthBox (props: Props): JSX.Element {
  return (
    <div className='fan-submissions-container'>

      <div className='talent-profile-container'>
        <div className='talent-info-container'>
          <div className='talent-text-container'>
            <Image className='talent-corner' src={props.frame} />
            <div className={`talent-text-inner ${props.page}-border`}>
              <h2>About</h2>
              <p>TODO</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
