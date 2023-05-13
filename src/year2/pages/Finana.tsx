import React from 'react'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'

export default function Finana (): JSX.Element {
  const firstName = 'Finana'
  const firstNameLower = firstName.toLowerCase()

  return (
  // <div>
  //   test
  // </div>

    <>
      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableFinana: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableFinana: true, enableArt: true })} />
      </MessageBoxesLayout>

    </>
  )
}
