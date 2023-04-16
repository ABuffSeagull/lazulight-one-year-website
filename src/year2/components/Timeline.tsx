import React from "react";

import classes from "./Timeline.module.scss";

type MemoryCommon = {
  title: string;
  member: "elira" | "finana" | "pomu";
  date: Date;
  submitterName: string;
  submitterSocialUrl?: string;
};

type YouTubeMemory = MemoryCommon & {
  type: "youtube";
  videoId: string;
};

type TwitterMemory = MemoryCommon & {
  type: "twitter";
  tweetUrl: string;
};

type MessageMemory = MemoryCommon & {
  type: "message";
  imgUrl?: string;
  message: string;
};

type Memory = YouTubeMemory | TwitterMemory | MessageMemory;

type TimelineProps = {
  // Memories are ASSUMED TO BE IN ORDER by date
  memories: Memory[];
};

export function Timeline({ memories }: TimelineProps) {
  return (
    <div className={classes.timelineRoot}>
      <ul className={classes.timelineItems}>
        {memories.map((memory, i) => (
          <TimelineItem key={i} memory={memory} />
        ))}
      </ul>
    </div>
  );
}

type TimelineItemProps = {
  memory: Memory;
};

function TimelineItem({ memory }: TimelineItemProps) {
  return (
    <li
      className={
        memory.type === "youtube" || memory.type === "twitter"
          ? `${classes.item} ${classes.withEmbed} hi`
          : classes.item
      }
      style={
        {
          "--stem-color": `${
            memory.member === "elira"
              ? "#fd83f2"
              : memory.member === "finana"
              ? "#a8f7f4"
              : "#ffd889"
          }`,
        } as React.CSSProperties
      }
    >
      <div className={classes.itemTitle}>
        {memory.title} &bull;{" "}
        {memory.submitterSocialUrl ? (
          <a href={memory.submitterSocialUrl}>{memory.submitterName}</a>
        ) : (
          memory.submitterName
        )}
      </div>
      <div className={classes.messageRow}>
        <div className={classes.itemDate}>
          <div className={classes.date}>{formatDate(memory.date)}</div>
        </div>
        <div className={classes.contentBox}>
          {memory.type === "youtube" ? (
            <YouTubeMemory memory={memory} />
          ) : memory.type === "twitter" ? (
            <TwitterMemory memory={memory} />
          ) : (
            <MessageMemory memory={memory} />
          )}
        </div>
      </div>
    </li>
  );
}

function formatDate(date: Date) {
  return `${
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()]
  } ${date.getFullYear()}`;
}

/*
===========================================
Components for rendering different memories
===========================================
*/

function MessageMemory({ memory }: { memory: MessageMemory }) {
  return (
    <>
      {memory.imgUrl && <img src={memory.imgUrl} />}
      {memory.message.split("\n").map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}

function YouTubeMemory({ memory }: { memory: YouTubeMemory }) {
  // TODO: dynamic sizing based on available screen width?
  return (
    <div className={classes.youtubeContainer}>
      <iframe
        className={classes.youtubeEmbed}
        src={`https://www.youtube.com/embed/${memory.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function TwitterMemory({ memory }: { memory: TwitterMemory }) {
  // Defaults to approximately min width (250px) because there's no preview content.
  return (
    <blockquote className="twitter-tweet">
      <a href={memory.tweetUrl}></a>
    </blockquote>
  );
}
