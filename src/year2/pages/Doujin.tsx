import React from 'react'

import DoujinViewer from '../components/DoujinViewer'
import DoujinCredits from '../components/DoujinCredits'
import { Textbox } from '../components/Textbox'

export default function Doujin(): JSX.Element {
  return (
    <>
      <DoujinViewer></DoujinViewer>
  
    <Textbox>   
      <DoujinCredits></DoujinCredits>
    </Textbox>
    
    </>
  )
}
