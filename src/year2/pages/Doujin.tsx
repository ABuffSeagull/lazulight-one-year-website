import React from 'react'

import DoujinViewer from '../components/DoujinViewer'
import DoujinCredits from '../components/DoujinCredits'
import { Textbox } from '../components/Textbox'

import classes from '../components/Doujin.module.scss'

export default function Doujin (): JSX.Element {
  return (
    <>
      <DoujinViewer />

      <div className={`${classes['doujin-download-button']}`}>
        <a href='https://drive.google.com/drive/folders/1AwmZmrWzmqs6wryZh0omL0qNOAUhPCs8' download>
          <button className='lazulight-border'>Download pdf</button>
        </a>
      </div>

      <Textbox>
        <DoujinCredits />
      </Textbox>

    </>
  )
}
