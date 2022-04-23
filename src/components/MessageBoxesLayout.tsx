import React from 'react';
import './TalentLayout.scss';
import Image from './Image';
import LazulightCorner from '../assets/Corners/Lazulight-MsgCorner.webp'; // TODO: Requires asset
import FinanaCorner from '../assets/Corners/Finana-MsgCorner.webp';
import EliraCorner from '../assets/Corners/Elira-MsgCorner.webp';
import PomuCorner from '../assets/Corners/Pomu-MsgCorner.webp';
import * as messageListImport from '../assets/messageList.json';

interface MessageRaw {
  name: string;
  soical_handle: string;
  soical_url: string;
  msg_lazulight: string;
  msg_elira: string;
  msg_pomu: string;
  msg_finana: string;
  art_lazulight: string;
  art_elira: string;
  art_pomu: string;
  art_finana: string;
}

interface Message {
  name: string;
  soical_handle: string;
  soical_url: string;
  msg: string;
  art: string;
  corner: string;
  border: string;
}

interface Props {
  enableLazulight: boolean;
  enableElira: boolean;
  enablePomu: boolean;
  enableFinana: boolean;
  enableFolding: boolean;
  enableArt: boolean;
  heading: string;
  page: string;
}

// Shuffle algorithm: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// Implemented by Ilya Kantor: https://javascript.info/task/shuffle https://javascript.info/terms
function shuffleMessages(array: Message[]): boolean {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return true;
}

function filterMessage(
  enable: boolean,
  enableArt: boolean,
  msg: string,
  art: string
): boolean {
  // Msg mode: only allow if user has not submitted art
  // Art mode: allow if user has submitted art
  return (
    enable &&
    ((!enableArt && msg !== '' && art === '') || (enableArt && art !== ''))
  );
}

export default function MessageBoxesLayout(props: Props): JSX.Element {
  const [showAllMessages, setShowAllMessages] = React.useState(
    !props.enableFolding
  );
  const messageListRaw = messageListImport.all as MessageRaw[];

  // Extract all messages from JSON file, filter by enabled type, format, random shuffle, then output
  const renderMessages = (): Message[] => {
    const Messages: Message[] = [];
    messageListRaw.forEach((msg: MessageRaw): void => {
      if (
        filterMessage(
          props.enableLazulight,
          props.enableArt,
          msg.msg_lazulight,
          msg.art_lazulight
        )
      ) {
        Messages.push({
          name: msg.name,
          soical_handle: msg.soical_handle,
          soical_url: msg.soical_url,
          msg: msg.msg_lazulight,
          art: props.enableArt ? msg.art_lazulight : '',
          corner: LazulightCorner,
          border: 'lazulight',
        });
      }
      if (
        filterMessage(
          props.enableElira,
          props.enableArt,
          msg.msg_elira,
          msg.art_elira
        )
      ) {
        Messages.push({
          name: msg.name,
          soical_handle: msg.soical_handle,
          soical_url: msg.soical_url,
          msg: msg.msg_elira,
          art: props.enableArt ? msg.art_elira : '',
          corner: EliraCorner,
          border: 'elira',
        });
      }
      if (
        filterMessage(
          props.enablePomu,
          props.enableArt,
          msg.msg_pomu,
          msg.art_pomu
        )
      ) {
        Messages.push({
          name: msg.name,
          soical_handle: msg.soical_handle,
          soical_url: msg.soical_url,
          msg: msg.msg_pomu,
          art: props.enableArt ? msg.art_pomu : '',
          corner: PomuCorner,
          border: 'pomu',
        });
      }
      if (
        filterMessage(
          props.enableFinana,
          props.enableArt,
          msg.msg_finana,
          msg.art_finana
        )
      ) {
        Messages.push({
          name: msg.name,
          soical_handle: msg.soical_handle,
          soical_url: msg.soical_url,
          msg: msg.msg_finana,
          art: props.enableArt ? msg.art_finana : '',
          corner: FinanaCorner,
          border: 'finana',
        });
      }
    });
    shuffleMessages(Messages);
    return Messages;
  };

  return (
    <div className="fan-submissions-container">
      <h3 className="fan-submissions-heading">{props.heading}</h3>
      <div
        className={`${
          showAllMessages
            ? 'fan-submissions-box-expanded'
            : 'fan-submissions-box-faded'
        }`}
      >
        <div className="fan-submissions-box">
          {renderMessages().map((message, idx) => (
            <div
              key={'msg' + idx.toString()}
              className="fan-submissions-submission"
            >
              <Image className="fan-submissions-corner" src={message.corner} />
              <div
                className={`fan-submissions-message ${message.border}-border`}
              >
                <h4>
                  {message.soical_url === '' ? (
                    message.name
                  ) : (
                    <a href={message.soical_url}>{message.name}</a>
                  )}
                </h4>
                {message.msg !== '' && <p>{message.msg}</p>}
                {message.art !== '' && (
                  <Image
                    className="fan-submissions-fanarti"
                    src={message.art}
                    alt=""
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showAllMessages && (
        <button
          onClick={() => {
            setShowAllMessages(true);
          }}
          className={`${props.page}-border`}
        >
          view all
        </button>
      )}
    </div>
  );
}
