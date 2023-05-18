import React from 'react'
import { Timeline } from '../components/Timeline'

import MessageBoxesLayout from '../../year1/components/MessageBoxesLayout' // '../components/MessageBoxesLayout'
import ImportMessages from '../../year2/components/ImportMessages' // '../components/ImportMessages'
import MessageBoxesWithFlags from '../components/MessageBoxesWithFlags'

export default function Pomu (): JSX.Element {
  const firstName = 'Pomu'
  const firstNameLower = firstName.toLowerCase()

  return (
    <>
      <Timeline memories={[
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'Wh2d6pWeP8A',
          title: 'Pomu streams Shantae and the Seven Sirens',
          member: 'pomu',
          date: new Date(
            2022,
            6,
            10
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'LaN-sp4_fD4',
          title: 'Pomu sews a Pomudachi plushie',
          member: 'pomu',
          date: new Date(
            2022,
            7,
            30
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'vPcNM5AWM-c',
          title: 'Da Pomky returns',
          member: 'pomu',
          date: new Date(
            2022,
            9,
            2
          )
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: 'D7uqzCmhihQ?start=3045',
          title: 'Pomu plays her theme song on trombone',
          member: 'pomu',
          date: new Date(
            2022,
            10,
            4
          )
        },

        {
          type: 'twitter',
          submitterName: 'Sparkleaf',
          messagepart1: 'Pomu Subscriber Milestone',
          messagepart2: '500k Subscribers!',
          title: 'Pomu reaches 500K subscribers',
          tweetUrl: 'https://twitter.com/24EN_notifybot/status/1578609041667915776',
          member: 'pomu',
          date: new Date(
            2022,
            10,
            8)
        },

        {
          type: 'youtube',
          submitterName: 'Faculity',
          videoId: 'oSYdxjEWpto',
          title: 'POMUTORI 1st collab',
          member: 'pomu',
          date: new Date(
            2022,
            10,
            23
          )
        },
        {
          type: 'youtube',
          submitterName: 'WildestDuck',
          videoId: 'ZDn3o-3RI38?start=3584',
          title: 'Pomu solos the Ender Dragon',
          member: 'pomu',
          date: new Date(
            2022,
            11,
            11
          )
        },
        {
          type: 'twitter',
          submitterName: 'Brandon Johns',
          tweetUrl: '',
          messagepart1: '',
          messagepart2: '',
          title: 'Pomu becomes Jellymu',
          member: 'pomu',

          date: new Date(
            2022,
            12,
            5
          )
        },
        {
          type: 'youtube',
          submitterName: 'shurilampio',
          videoId: 'A_IvP1FymQk',
          title: 'Pomu finishes the Metal Gear Solid series',
          member: 'pomu',
          date: new Date(
            2023,
            1,
            14
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'rpuEQozRzJ4',
          title: "Pomu's 3D reveal",
          member: 'pomu',
          date: new Date(
            2023,
            1,
            27
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'ADONoQrMmMk',
          title: 'Pomu finishes the Metal Gear saga',
          member: 'pomu',
          date: new Date(
            2023,
            2,
            1
          )
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: 'V3aNifC_bzg?start=8891',
          title: "Bromu 'the legend' does a flip",
          member: 'pomu',
          date: new Date(
            2023,
            2,
            15
          )
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: 'U4Z6tQ-OTmI',
          title: 'Pomu participates in covering Senjou no Sei Valentine',
          member: 'pomu',
          date: new Date(
            2023,
            2,
            15
          )
        },
        {
          type: 'youtube',
          submitterName: 'Brandon Johns',
          videoId: 'Cc-Czf_q7Ts?start=5262',
          title: 'Pomu learns to compose 3D rotations',
          member: 'pomu',
          date: new Date(
            2023,
            2,
            26
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'hCeTppLnHsQ',
          title: "Pomu's third outfit reveal",
          member: 'pomu',
          date: new Date(
            2023,
            3,
            10
          )
        },
        {
          type: 'youtube',
          submitterName: 'CrimsonSilver4',
          videoId: 'YYvYVT5UA5s?start=12122',
          title: 'Final collab with Pikamee',
          member: 'pomu',
          date: new Date(
            2023,
            3,
            16
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
