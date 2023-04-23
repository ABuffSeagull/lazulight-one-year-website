import React from 'react'
import Image from './Image'
import { MessageForCornerBoxes } from './ImportMessages'
import './TalentLayout.scss'

export default function MessageBoxesWithCorners ({
  messages
}: {
  messages: MessageForCornerBoxes[]
}): JSX.Element {
  return (
    <>
      {messages.map((message, idx) => (
        <div key={'msg' + idx.toString()} className='fan-submissions-submission'>
          <Image className='fan-submissions-corner' src={message.corner} />
          <div className={`fan-submissions-message ${message.border}-border`}>
            <h4 className='text-lg'>
              {message.social_url === '' ? (message.name) : (<a href={message.social_url}>{message.name}</a>)}
            </h4>
            {message.msg !== '' && <p>{message.msg}</p>}
            {message.art !== '' && (<Image src={message.art} alt='' enableZoom />)}
          </div>
        </div>
      ))}
    </>
  )
}
