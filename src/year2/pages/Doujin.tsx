import React from 'react'

import DoujinViewer from '../components/DoujinViewer'
import DoujinCredits from '../components/DoujinCredits'
import { Textbox } from '../components/Textbox'

import classes from '../components/Doujin.module.scss'
import ExLink from '../../shared/components/ExLink'

export default function Doujin (): JSX.Element {
  return (
    <>
      <DoujinViewer />

      <div className={`${classes['doujin-download-button']}`}>
        <ExLink href='https://drive.google.com/drive/folders/1AwmZmrWzmqs6wryZh0omL0qNOAUhPCs8'>
          <button className='lazulight-border'>Download pdf</button>
        </ExLink>
      </div>

      <Textbox>
        <DoujinCredits />
      </Textbox>

    </>
  )
}
