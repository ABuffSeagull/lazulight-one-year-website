import React from 'react'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'

export default function Elira (): JSX.Element {
  const firstName = 'Elira'
  const firstNameLower = firstName.toLowerCase()

  return (
  // <div>
  //   test
  // </div>

    <>
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableElira: true })} />
      </MessageBoxesLayout>

    </>
  )
}
