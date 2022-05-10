import React from 'react'
import { Link } from 'wouter'
import '../components/TalentLayout.scss'
import '../components/HomePage.scss'
import Image from '../components/Image'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuImage from '../assets/Portraits/Pomu-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'

export default function Home (): JSX.Element {
  const navIcons = [
    {
      name: 'Elira',
      path: '/elira',
      image: EliraImage
    },
    {
      name: 'Finana',
      path: '/finana',
      image: FinanaImage
    },
    {
      name: 'Pomu',
      path: '/pomu',
      image: PomuImage
    }
  ]

  return (
    <div className='talent-layout-container'>
      {/* Opening Message */}
      <h1 className='home-heading'>
        Lazulight 1 Year
        <br />
        and Counting!
      </h1>

      {/* Links to liver pages */}
      <div className='home-liver-container'>
        {navIcons.map((linkData, i) => (
          <div className='home-liver-liver' key={`LiverLink${linkData.name}`}>
            <Link to={linkData.path}>
              <Image src={linkData.image} />
              <h3>{linkData.name}</h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight
        enableElira={false}
        enablePomu={false}
        enableFinana={false}
        enableFolding
        enableArt={false}
        heading='Messages To Lazulight'
        page='home'
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight
        enableElira={false}
        enablePomu={false}
        enableFinana={false}
        enableFolding
        enableArt
        heading='Art To Lazulight'
        page='home'
      />
    </div>
  )
}
