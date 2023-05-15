import React from 'react'
import { Timeline } from '../components/Timeline'

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
      <Timeline memories={[
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'hho4jtvwP5Q',
          title: 'Finana covers CH4NGE',
          member: 'finana',
          date: new Date(
            2022,
            7,
            15)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'Y9dmNYGDTdo',
          title: "Finana's 2nd Supercheese challenge stream",
          member: 'finana',
          date: new Date(
            2022,
            9,
            22)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'VIloFfh5PRM?start=21237',
          title: 'Finana loses her V-card (in Cyberpunk 2077)',
          member: 'finana',
          date: new Date(
            2022,
            9,
            27)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'J4LmSJLq9bE',
          title: "Finana's 1st feet stream",
          member: 'finana',
          date: new Date(
            2022,
            10,
            7)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'DjqtkfIJkOY',
          title: 'Finana says goodbye to the Flame Chasers',
          member: 'finana',
          date: new Date(
            2022,
            10,
            13)
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: '8BNo-BFpUzg?start=900',
          title: 'Finana plays her theme song on trombone',
          member: 'finana',
          date: new Date(
            2022,
            11,
            4)
        },
        {
          type: 'twitter',
          submitterName: 'CrimsonSilver4',
          tweetUrl: 'https://twitter.com/finanaryugu/status/1596865460578193408',
          messagepart1: "Tsunami, Finana's first original song,",
          messagepart2: 'reached 4M views',
          title: 'Tsunami reached 4M views',
          member: 'finana',
          date: new Date(
            2022,
            11,
            27)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'j3sFpkDlXRU',
          title: 'Finana covers Salamander',
          member: 'finana',
          date: new Date(
            2022,
            12,
            17)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'ssvVf8vDzzQ?start=12536',
          title: 'Finana gets married (in Genshin Impact)',
          member: 'finana',
          date: new Date(
            2022,
            12,
            20)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'B2E6DzkvxAM',
          title: "Finana's 1st Slumber Party",
          member: 'finana',
          date: new Date(
            2022,
            12,
            23)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: '_Bvpss_Xx9M',
          title: "Finana's 3D reveal",
          member: 'finana',
          date: new Date(
            2023,
            1,
            20)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'Ho1zWr3buOQ',
          title: "Finana's third outfit reveal",
          member: 'finana',
          date: new Date(
            2023,
            2,
            18)
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: 'hEMj3V6I53s',
          title: 'Finana covers Cyberangel',
          member: 'finana',
          date: new Date(
            2023,
            2,
            20)
        },
        {
          type: 'twitter',
          submitterName: 'CrimsonSilver4',
          messagepart1: 'Finana reached 500K subscribers',
          messagepart2: 'while sleeping',
          title: 'Finana reaches 500K subscribers',
          tweetUrl: 'https://twitter.com/FinanaRyugu/status/1632519694660907008',
          member: 'finana',
          date: new Date(
            2023,
            3,
            5)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'IOg4V4xptao',
          title: "Finana concludes Kiana's journey in Honkai Impact 3rd",
          member: 'finana',
          date: new Date(
            2023,
            3,
            27)
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: '9BlZBNYTA04',
          title: 'Finana participates in covering T.Y.R.A.N.T',
          member: 'finana',
          date: new Date(
            2023,
            4,
            2)
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'iUzmCo04xs0',
          title: 'Finana begins her Honkai: Star Rail journey',
          member: 'finana',
          date: new Date(
            2023,
            4,
            26)
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
