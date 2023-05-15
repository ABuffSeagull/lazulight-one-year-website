import React from 'react'

import { Timeline } from '../components/Timeline'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'
import hp from '../../year1/components/HomePage.module.scss'

export default function Home (): JSX.Element {
  const firstName = 'Lazulight'
  const firstNameLower = firstName.toLowerCase()

  return (
    <>

      <div>
        <h1 className={hp['home-heading']}>
          <span>Happy</span>
          <span> 2nd</span> <span>Anniversary</span> <span>Lazulight!</span>
        </h1>
      </div>

      <Timeline
        memories={[
          {
            type: 'youtube',
            submitterName: 'Brandon Johns',
            videoId: 'YS4hXn41ns8',
            title: 'LazuLight go to space',
            member: 'lazulight',
            date: new Date(
              2022,
              5,
              16
            )
          },
          {
            type: 'youtube',
            submitterName: 'CrimsonSilver4',
            videoId: 'LD3JjOzO8a4',
            title: "Lazulight's 2nd Lunch Lady Collab",
            member: 'lazulight',
            date: new Date(
              2022,
              6,
              2
            )
          },
          {
            type: 'youtube',
            submitterName: 'CrimsonSilver4',
            videoId: 'ZnP0cKNPE04',
            title: 'Diamond City Lights reaches 5M views',
            member: 'lazulight',
            date: new Date(
              2022,
              7,
              14
            )
          },
          {
            type: 'youtube',
            submitterName: 'CrimsonSilver4',
            videoId: 'bagZl3g_jF0',
            title: "Lazulight's 1st offline collab",
            member: 'lazulight',
            date: new Date(
              2022,
              11,
              21
            )
          },
          {
            type: 'youtube',
            submitterName: 'CrimsonSilver4',
            videoId: 'Fzeb0S-OoGs',
            title: "Lazulight's 1st offline karaoke",
            member: 'lazulight',
            date: new Date(
              2022,
              11,
              25
            )
          },
          {
            type: 'youtube',
            submitterName: 'CrimsonSilver4',
            videoId: 'Cb9GzZW7WVY',
            title: "Lazulight plays 'Lazulight: By Your Side'",
            member: 'lazulight',
            date: new Date(
              2023,
              1,
              6
            )
          },
          {
            type: 'youtube',
            submitterName: 'Brandon Johns',
            videoId: 'zmSlfVTUUUY?start=1066',
            title: 'LazuLight play beach Trivia',
            member: 'lazulight',
            date: new Date(
              2023,
              3,
              30
            )
          },
          {
            type: 'youtube',
            submitterName: 'Brandon Johns',
            videoId: 'btCTJTjS6i8',
            title: 'Higan: Eruthyll release their original song Cage of Desire',
            member: 'lazulight',
            date: new Date(
              2023,
              4,
              3
            )
          },
          {
            type: 'youtube',
            submitterName: 'Brandon Johns',
            videoId: 'vvQVVTe-D2o?start=1192',
            title: 'Lazulight (ft. Finanasaur) play the board game of doom in 3D',
            member: 'lazulight',
            date: new Date(
              2023,
              4,
              5
            )
          },
          {
            type: 'youtube',
            submitterName: 'Brandon Johns',
            videoId: 'O-mJralH_OY',
            title: 'Elipomu cover Turing Love',
            member: 'lazulight',
            date: new Date(
              2023,
              5,
              2
            )
          }
        ]}
      />

      {/* Messages */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Messages To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableLazulight: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType={firstNameLower}
        heading={`Art To ${firstName}`}
        page={firstNameLower}
        enableFolding
      >
        <MessageBoxesWithFlags messages={ImportMessages({ enableLazulight: true, enableArt: true })} />
      </MessageBoxesLayout>
    </>
  )
}
