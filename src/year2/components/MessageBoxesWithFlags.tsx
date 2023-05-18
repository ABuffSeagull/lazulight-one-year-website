import React from 'react'
import Image from '../../year1/components/Image'
import { MessageForFlags } from '../../year2/components/ImportMessages'
// import '../../year1/components/TalentLayout.scss'
import classes from './MessageBoxesWithFlags.module.scss'
import ExLink from '../../shared/components/ExLink'

export default function MessageBoxesWithFlags ({
  messages
}: {
  messages: MessageForFlags[]
}): JSX.Element {
  return (
    <>
      {messages.map((message, idx) => (
        <div key={'msg' + idx.toString()} className={`${classes['fan-submissions-submission']}`}>
          <Image className={`${classes['fan-submissions-poststamp']}`} src={message.flag} />
          <div className={`${classes['fan-submissions-message']} ${classes[`${message.border}-border`]}`}>
            <h4 className='text-lg'>
              {message.social_url === '' ? (message.name) : (<ExLink href={message.social_url}>{message.name}</ExLink>)}
            </h4>
            {(message.msg !== '' && message.art === '') && <p>{message.msg}</p>}
            {message.art !== '' && (<Image className={`${classes['fan-submissions-fanart']}`} src={message.art} alt={message.msg} enableZoom />)}
          </div>
        </div>
      ))}
    </>
  )
}
