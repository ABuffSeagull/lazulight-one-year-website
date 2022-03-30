import TalentLayout from '../components/TalentLayout'
import EliraImage from '../assets/liver-image/elira-placeholder.png'

export default function Elira (): JSX.Element {
  const name = 'Elira Pendora'
  const quote = 'Sheee-eeesh!'
  const info = 'Placeholder info for Elira!'
  const youtubeLink =
		'https://www.youtube.com/channel/UCIeSUTOTkF9Hs7q3SGcO-Ow'
  const twitterLink = 'https://twitter.com/EliraPendora'
  const fanDiscordLink = ''
  const messages = [
    {
      name: 'Vtuber Fan #1',
      twitter: '@vtuberfan#1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempore voluptatum? Voluptatibus, veritatis? Tenetur odit commodi sapiente obcaecati.'
    },
    {
      name: 'Vtuber Fan #2',
      twitter: '@vtuberfan#2',
      text: 'Congrats! Big Fan!!!!'
    },
    {
      name: 'Vtuber Fan #3342',
      twitter: '@vtuberfan#3342',
      text: 'Congrats! Big Fan!!!!'
    },
    {
      name: 'Vtuber Fan #4',
      twitter: '@vtuberfan#4',
      text: 'Congrats! Big Fan!!!!'
    },
    {
      name: 'Vtuber Fan #543',
      twitter: '@vtuberfan#543',
      text: 'Congrats! Big Fan!!!!'
    },
    {
      name: 'Vtuber Fan #333',
      twitter: '@vtuberfan#333',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempiente obcaecati.'
    },
    {
      name: 'Vtuber Fan #9879',
      twitter: '@vtuberfan#9879',
      text: 'Congrats! Big Fan!!!!'
    },
    {
      name: 'Vtuber Fan #56566',
      twitter: '@vtuberfan#56566',
      text: 'atione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempore voluptatum? Voluptatibus, veritatis? Tenetur odit commodi sapiente obcaecati.'
    },
    {
      name: 'Vtuber Fan #656556',
      twitter: '@vtuberfan#656556',
      text: 'Congrats! Big Fan!!!!'
    }
  ]
  const fanarts = [
    {
      name: 'Vtuber Fan #1',
      twitter: '@vtuberfan#1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempore voluptatum? Voluptatibus, veritatis? Tenetur odit commodi sapiente obcaecati.',
      artUrl:
				'https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png'
    },
    {
      name: 'Vtuber Fan #2',
      twitter: '@vtuberfan#2',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg'
    },
    {
      name: 'Vtuber Fan #3342',
      twitter: '@vtuberfan#3342',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/220px-Larix_decidua_Aletschwald.jpg'
    },
    {
      name: 'Vtuber Fan #4',
      twitter: '@vtuberfan#4',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Daintree_Rainforest_4.jpg/170px-Daintree_Rainforest_4.jpg'
    },
    {
      name: 'Vtuber Fan #543',
      twitter: '@vtuberfan#543',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/WisconsinScenery.jpg/220px-WisconsinScenery.jpg'
    },
    {
      name: 'Vtuber Fan #333',
      twitter: '@vtuberfan#333',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempiente obcaecati.',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bombax_LalBagh.JPG/220px-Bombax_LalBagh.JPG'
    },
    {
      name: 'Vtuber Fan #9879',
      twitter: '@vtuberfan#9879',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Buk1.JPG/170px-Buk1.JPG'
    },
    {
      name: 'Vtuber Fan #56566',
      twitter: '@vtuberfan#56566',
      text: 'atione molestias consequuntur minima odit pariatur veritatis, recusandae, nam esse velit maxime et tempore voluptatum? Voluptatibus, veritatis? Tenetur odit commodi sapiente obcaecati.',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Illustration_Quercus_robur0.jpg/170px-Illustration_Quercus_robur0.jpg'
    },
    {
      name: 'Vtuber Fan #656556',
      twitter: '@vtuberfan#656556',
      text: 'Congrats! Big Fan!!!!',
      artUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gebarsten_bolster_van_een_paardenkastanje_%28Aesculus%29_20-09-2020_%28d.j.b.%29_01.jpg/220px-Gebarsten_bolster_van_een_paardenkastanje_%28Aesculus%29_20-09-2020_%28d.j.b.%29_01.jpg'
    }
  ]

  return (
    <div>
      <TalentLayout
        name={name}
        portrait={EliraImage}
        quote={quote}
        info={info}
        youtube={youtubeLink}
        twitter={twitterLink}
        discord={fanDiscordLink}
        messages={messages}
        fanarts={fanarts}
      />
    </div>
  )
}
