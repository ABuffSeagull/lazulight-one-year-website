import React from 'react'

import { Timeline } from '../components/Timeline'

export default function Home (): JSX.Element {
  return (
    <div>
      <Timeline
        memories={[
          {
            type: 'message',
            submitterName: 'Jay',
            member: 'finana',
            date: new Date(2021, 4, 15),
            title: 'Lazulight debut!!',
            message: 'Wow!!'
          },
          {
            type: 'message',
            submitterName: 'Jay',
            submitterSocialUrl: 'speculative.tech',
            member: 'pomu',
            date: new Date(2021, 6, 1),
            title:
              'What if I became Pomu but I had a really really really really really really really long title that wrapped around to a second line',
            message:
              "I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!  I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!"
          },
          {
            type: 'message',
            submitterName: 'Jay',
            member: 'pomu',
            date: new Date(2021, 6, 14),
            title: 'minecraft with elira',
            imgUrl:
              'https://cdn.donmai.us/sample/b1/b0/__elira_pendora_and_pomu_rainpuff_nijisanji_and_1_more_drawn_by_walfie__sample-b1b07283875ba1f9f639794e2b1c93be.jpg',
            message:
              "hey elira i'm begging you i'm on my knees here pleading please play minecraft with me tonight i am seriously begging here I am going to pass away please help minecraft is the only cure please elira"
          },
          {
            type: 'youtube',
            submitterName: 'Jay',
            member: 'finana',
            date: new Date(2022, 0, 29),
            title: 'tsu-na-na-na-na-na-na-na-na-mi',
            videoId: '3i_TLQsaAgU'
          },
          {
            type: 'youtube',
            submitterName: 'Jay',
            member: 'elira',
            date: new Date(2022, 4, 15),
            title: "Elira's life-changing Shoujo Rei cover",
            videoId: 'DSSAL2b1VR4'
          },
          {
            type: 'twitter',
            submitterName: 'Luca',
            member: 'elira',
            date: new Date(2022, 5, 15),
            title: 'awesome',
            tweetUrl:
              'https://twitter.com/luca_kaneshiro/status/1536874758729437184'
          },
          {
            type: 'twitter',
            submitterName: 'oimo',
            submitterSocialUrl: 'https://twitter.com/oimo_0imo/',
            member: 'elira',
            date: new Date(2023, 3, 15),
            title: 'UWOOOOOOOOOOOOOGGGGGHHHHH',
            tweetUrl:
              'https://twitter.com/oimo_0imo/status/1647099060082597888'
          }
        ]}
      />
    </div>
  )
}
