import React from 'react'
import Image from '../../year1/components/Image'
import { MessageForFlags } from '../../year2/components/ImportMessages'
import './TalentLayout.scss'

export default function MessageBoxesWithFlags ({
  messages
}: {
  messages: MessageForFlags[]
}): JSX.Element {
  return (
    <>
      {messages.map((message, idx) => (
        <div key={'msg' + idx.toString()} className='fan-submissions-submission'>
          <Image className='fan-submissions-poststamp' src={message.countryFlag} />
          <div className={`fan-submissions-message ${message.border}-border`}>
            <h4 className='text-lg'>
              {message.social_url === '' ? (message.name) : (<a href={message.social_url}>{message.name}</a>)}
            </h4>
            {message.msg !== '' && <p>{message.msg}</p>}
            {message.art !== '' && (<Image className='fan-submissions-fanarti' src={message.art} alt='' enableZoom />)}
          </div>
        </div>
      ))}
    </>
  )
}
