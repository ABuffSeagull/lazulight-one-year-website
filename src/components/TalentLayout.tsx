import React from "react";
import "./TalentLayout.scss";

interface Message {
    name: string;
    twitter: string;
    text: string;
}

interface Fanart {
    name: string;
    twitter: string;
    text: string;
    artUrl: string;
}

function TalentLayout(props: any) {
    const firstName = props.name.split(" ")[0];
    const [showAllMessages, setShowAllMessages] = React.useState(false);
    const [showAllFanart, setShowAllFanart] = React.useState(false);

    const renderMessageColumns = () => {
        const result: Message[][] = [[], [], []];

        props.messages.map((message: any, i: number) => {
            result[i % 3].push(message);
        });

        return result;
    };

    const renderArtColumns = () => {
        const result: Fanart[][] = [[], [], []];

        props.fanarts.map((message: any, i: number) => {
            result[i % 3].push(message);
        });

        return result;
    };

    return (
        <div className="talent-layout-container">
            <div className="talent-profile-container">
                <div className="talent-picture-box">
                    <img src={props.portrait} />
                    <div className="talent-quote">
                        <span>{props.quote}</span>
                    </div>
                </div>
                <div className="talent-info-container">
                    <div className={`talent-text-container ${firstName.toLowerCase()}-border`}>
                        <h2>{props.name}</h2>
                        <p>{props.info}</p>
                        <div className="talent-links-container">
                            <a href={props.youtube}>Youtube</a>
                            <a href={props.twitter}>Twitter</a>
                            <a href={props.discord}>Discord</a>
                        </div>
                    </div>
                    <div className="talent-animation-container">{/* animated decorations goes here */}</div>
                </div>
            </div>
            <div className="fan-submissions-container">
                <h3 className={`${firstName.toLowerCase()}-border`}>Messages To {firstName}</h3>
                <div className="fan-submissions-box" style={{ maxHeight: `${showAllMessages ? "100%" : "50rem"}` }}>
                    {!showAllMessages && <div className="fan-submissions-box-fade"></div>}
                    {renderMessageColumns().map((column) => (
                        <div className="fan-submissions-column">
                            {column.map((message) => (
                                <div className={`fan-submissions-message ${firstName.toLowerCase()}-border`}>
                                    <h4>
                                        {message.name} ({message.twitter})
                                    </h4>
                                    <p>{message.text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                    {!showAllMessages && (
                        <button
                            onClick={() => {
                                setShowAllMessages(true);
                            }}
                            className={`${firstName.toLowerCase()}-border`}
                        >
                            view all
                        </button>
                    )}
                </div>
            </div>
            <div className="fan-submissions-container">
                <h3 className={`${firstName.toLowerCase()}-border`}>Art For {firstName}</h3>
                <div className="fan-submissions-box" style={{ maxHeight: `${showAllFanart ? "100%" : "50rem"}` }}>
                    {!showAllFanart && <div className="fan-submissions-box-fade"></div>}
                    {renderArtColumns().map((column) => (
                        <div className="fan-submissions-column">
                            {column.map((fanart) => (
                                <div className={`fan-submissions-fanart ${firstName.toLowerCase()}-border`}>
                                    <h4>
                                        {fanart.name} ({fanart.twitter})
                                    </h4>
                                    <p>{fanart.text}</p>
                                    <img src={fanart.artUrl} alt="" />
                                </div>
                            ))}
                        </div>
                    ))}
                    {!showAllFanart && (
                        <button
                            onClick={() => {
                                setShowAllFanart(true);
                            }}
                            className={`${firstName.toLowerCase()}-border`}
                        >
                            view all
                        </button>
                    )}
                </div>
            </div>
            <div className="extra-info">{/* For credits, disclaimers, etc. */}</div>
        </div>
    );
}

export default TalentLayout;
