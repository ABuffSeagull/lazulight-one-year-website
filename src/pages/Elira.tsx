import TalentLayout from '../components/TalentLayout'
import MascotAnimation from '../components/MascotAnimation'
import ArtBoardLayout, { ArtBoardEnum } from '../components/ArtBoardLayout'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import EliraFrame from '../assets/Corners/Elira-LiverCorner.webp'
import corner from '../assets/Corners/Elira-MsgCorner.webp'
import Weewa from '../assets/Animations/Elira-Animation_500px.webm'

export default function Elira (): JSX.Element {
  const name = 'Elira Pendora'
  const info = [
    'Love at first light.',
    'Nickname(s): Ewiwa, Eli, Sheesh Dragon',
    'Elira Pendora (エリーラ ペンドラ) is a solar sky dragon who comes from the heavens closest to the sun and is affiliated with NIJISANJI EN’s first wave “LazuLight”. She has the kindness and receptiveness that makes the light of a sunny day fall equally on all.',
    'Descending from the sun, Elira traveled to Earth at some unspecified point in time before settling down and assimilating human culture. Despite her unknown age, Elira has demonstrated that she is hip and up to date with today’s memes and trends. Sheesh Pog Based indeed.',
    'Since her arrival on Earth, Elira has tested her FamElira of Weewas to their limits. Very quickly she made clear her dragon endurance as she pressed a button continuously for over eight hours, a feat she accomplished not once, not twice, but three times. And then on Halloween, minds broke and booties shook as Elira unveiled forbidden knowledge that would change the FamElira and the world at large forever. Now a single note of Diamond City Lights is enough to send any affected listener into a twerking frenzy.'
  ]
  const socials = {
    youtube: 'https://www.youtube.com/channel/UCIeSUTOTkF9Hs7q3SGcO-Ow',
    twitter: 'https://twitter.com/EliraPendora',
    discord: ''
  }

  return (
    <div>
      <TalentLayout
        name={name}
        artBoard={<ArtBoardLayout heading='Community Weewa Collage' message='Love from Elicord' artBoard={ArtBoardEnum.elira} />}
        frame={EliraFrame}
        corner={corner}
        portrait={EliraImage}
        info={info}
        socials={socials}
        mascot={delay => <MascotAnimation src={Weewa} delay={delay} />}
      />
    </div>
  )
}
