import React from "react";

import classes from "./Timeline.module.scss";

export function Timeline() {
  return (
    <div className={classes.timelineRoot}>
      <ul className={classes.timelineItems}>
        <TimelineItem
          title="What if I became Pomu but I had a really really really really really really really long title that wrapped around to a second line"
          date={new Date(2023, 3, 1)}
        >
          I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!
          I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!
          I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!
          I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu! I'm Pomu!
        </TimelineItem>
        <TimelineItem title="2nd Anniversary" date={new Date(2023, 4, 15)}>
          Happy Lazulight 2nd anniversary!
        </TimelineItem>
        <TimelineItem title="Another thing" date={new Date(2023, 6, 1)}>
          Hi! This is a really tall message!
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          Bye!
        </TimelineItem>
      </ul>
    </div>
  );
}

type TimelineItemProps = {
  title: string;
  submitter?: {
    name: string;
    socialLink?: string;
  };
  date: Date;
};

function TimelineItem({
  date,
  title,
  children,
}: React.PropsWithChildren<TimelineItemProps>) {
  return (
    <li className={classes.item}>
      <div className={classes.itemTitle}>{title}</div>
      <div className={classes.messageRow}>
        <div className={classes.itemDate}>
          <div className={classes.date}>{formatDate(date)}</div>
          <div className={classes.stem}></div>
        </div>
        <div className={classes.contentBox}>{children}</div>
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
