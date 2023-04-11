import React from 'react'
import './TalentLayout.scss'

export default function MessageBoxesLayout ({
  titleType,
  heading,
  page,
  enableFolding = false,
  children
}: {
  titleType: string
  heading: string
  page: string
  enableFolding?: boolean
  children: React.ReactNode
}): JSX.Element {
  const [showAllMessages, setShowAllMessages] = React.useState(
    !enableFolding
  )

  return (
    <div className='fan-submissions-container'>
      <h3 className={`talent-title ${titleType}`}>{heading}</h3>
      <div className={`${showAllMessages ? 'fan-submissions-box-expanded' : 'fan-submissions-box-faded'}`}>
        <div className='fan-submissions-box'>
          {children}
        </div>
      </div>
      {!showAllMessages && (
        <button onClick={() => { setShowAllMessages(true) }} className={`${page}-border fan-submissions-container-button`}>
          view all
        </button>
      )}
      {showAllMessages && (
        <button
          onClick={() => { setShowAllMessages(false) }}
          className={`${page}-border fan-submissions-container-button fan-submissions-container-button-hide`}
        >
          Hide Section
        </button>
      )}
    </div>
  )
}
