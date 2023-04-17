import React from 'react'

import classes from './Timeline.module.scss'

interface MemoryCommon {
  title: string
  member: 'elira' | 'finana' | 'pomu'
  date: Date
  submitterName: string
  submitterSocialUrl?: string
}

type YouTubeMemoryType = MemoryCommon & {
  type: 'youtube'
  videoId: string
}

type TwitterMemoryType = MemoryCommon & {
  type: 'twitter'
  tweetUrl: string
}

type MessageMemoryType = MemoryCommon & {
  type: 'message'
  imgUrl?: string
  message: string
}

type MemoryType = YouTubeMemoryType | TwitterMemoryType | MessageMemoryType

interface TimelineProps {
  // Memories are ASSUMED TO BE IN ORDER by date
  memories: MemoryType[]
}

export function Timeline ({ memories }: TimelineProps): JSX.Element {
  const [itemHeights, setItemHeights] = React.useState(
    {} as { [key: number]: number }
  )

  return (
    <div className={classes['timeline-root']}>
      <ul className={classes['timeline-items']}>
        {memories.map((memory, i) => (
          <TimelineItem key={i} memory={memory} />
        ))}
      </ul>
    </div>
  )
}

interface TimelineItemProps {
  memory: MemoryType
}

function TimelineItem ({ memory }: TimelineItemProps): JSX.Element {
  const itemStyle: React.CSSProperties = {
    '--stem-color': `${
      {
        elira: '#fd83f2',
        finana: '#a8f7f4',
        pomu: '#ffd889'
      }[memory.member]
    }`
  } as any

  return (
    <li
      className={
        memory.type === 'youtube' || memory.type === 'twitter'
          ? `${classes.item} ${classes['with-embed']} hi`
          : classes.item
      }
      style={itemStyle}
    >
      <div className={classes['item-title']}>
        {memory.title} &bull;{' '}
        {memory.submitterSocialUrl !== undefined &&
        memory.submitterSocialUrl !== ''
          ? (
            <a href={memory.submitterSocialUrl}>{memory.submitterName}</a>
            )
          : (
              memory.submitterName
            )}
      </div>
      <div className={classes['message-row']}>
        <div className={classes['item-date']}>
          <div className={classes.date}>{formatDate(memory.date)}</div>
        </div>
        <div className={classes['content-box']}>
          {memory.type === 'youtube'
            ? (
              <YouTubeMemory memory={memory} />
              )
            : memory.type === 'twitter'
              ? (
                <TwitterMemory memory={memory} />
                )
              : (
                <MessageMemory memory={memory} />
                )}
        </div>
      </div>
    </li>
  )
}

function formatDate (date: Date): string {
  return `${
    [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ][date.getMonth()]
  } ${date.getFullYear()}`
}

/*
===========================================
Components for rendering different memories
===========================================
*/

function MessageMemory ({ memory }: { memory: MessageMemoryType }): JSX.Element {
  return (
    <>
      {memory.imgUrl !== undefined && memory.imgUrl !== '' && (
        <img src={memory.imgUrl} />
      )}
      {memory.message.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  )
}

function YouTubeMemory ({ memory }: { memory: YouTubeMemoryType }): JSX.Element {
  // TODO: dynamic sizing based on available screen width?
  return (
    <div className={classes['youtube-container']}>
      <iframe
        className={classes['youtube-embed']}
        src={`https://www.youtube.com/embed/${memory.videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </div>
  )
}

function TwitterMemory ({ memory }: { memory: TwitterMemoryType }): JSX.Element {
  // Defaults to approximately min width (250px) because there's no preview content.
  return (
    <blockquote className='twitter-tweet'>
      <a href={memory.tweetUrl} />
    </blockquote>
  )
}
