import TalentLayout from '../components/TalentLayout'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import EliraFrame from '../assets/Corners/Elira-LiverCorner.webp'
import corner from '../assets/Corners/Elira-MsgCorner.webp'
import Weewa from '../assets/Animations/Elira-Animation_500px.webm'
import ArtBoard from '../assets/ArtBoards/Elira-ArtBoard.webp'

export default function Elira (): JSX.Element {
  const name = 'Elira Pendora'
  const info = [
    'Placeholder info for Elira!',
    'test paragraph',
    '',
    'hey elira i\'m begging you i\'m on my knees here pleading please play minecraft with me tonight i am seriously begging here I am going to pass away please help minecraft is the only cure please elira',
    '',
    'hey elira i\'m begging you i\'m on my knees here pleading please play minecraft with me tonight i am seriously begging here I am going to pass away please help minecraft is the only cure please elira'
  ]
  const youtubeLink =
    'https://www.youtube.com/channel/UCIeSUTOTkF9Hs7q3SGcO-Ow'
  const twitterLink = 'https://twitter.com/EliraPendora'
  const fanDiscordLink = ''

  return (
    <div>

      <TalentLayout
        name={name}
        artBoardHeading='Community Weewa Collage'
        artBoardText='Love from Eilcord'
        artBoard={ArtBoard}
        frame={EliraFrame}
        corner={corner}
        animation={Weewa}
        portrait={EliraImage}
        info={info}
        youtube={youtubeLink}
        twitter={twitterLink}
        discord={fanDiscordLink}
      />

    </div>
  )
}
