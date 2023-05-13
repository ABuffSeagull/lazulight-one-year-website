import React from 'react'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'

export default function Pomu (): JSX.Element {
  const firstName = 'Pomu'
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
        <MessageBoxesWithFlags messages={ImportMessages({ enablePomu: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enablePomu: true, enableArt: true })} />
      </MessageBoxesLayout>

    </>
  )
}
