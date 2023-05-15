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
        <a href='https://drive.google.com/drive/folders/1EbgBFk-EwnH3JOuhd_PkyVbIG10PM0wI' download>
          <button className='lazulight-border'>Download pdf</button>
        </a>
      </div>

      <Textbox>
        <DoujinCredits />
      </Textbox>

    </>
  )
}
