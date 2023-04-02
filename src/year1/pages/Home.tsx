import React from 'react'
import { Link } from 'wouter'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuImage from '../assets/Portraits/Pomu-Portrait-WN_cf50.webp?format=png;avif;webp&imagetools&meta'
import '../components/HomePage.scss'
import Image from '../components/Image'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import '../components/TalentLayout.scss'

export default function Home (): JSX.Element {
  const navIcons = [
    {
      name: 'Elira',
      path: '/anniversary1/elira',
      image: EliraImage
    },
    {
      name: 'Finana',
      path: '/anniversary1/finana',
      image: FinanaImage
    },
    {
      name: 'Pomu',
      path: '/anniversary1/pomu',
      image: PomuImage
    }
  ]

  return (
    <>
      {/* Opening Message */}
      <div>
        <h1 className='home-heading'>
          <span>Lazu</span>
          <span>Light</span> <span>1 Year</span>
        </h1>
        <h2 className='home-subheading'>and Counting!</h2>
      </div>

      {/* Links to liver pages */}
      <div className='home-liver-container'>
        {navIcons.map((linkData, i) => (
          <div className='home-liver-liver' key={`LiverLink${linkData.name}`}>
            <Link to={linkData.path}>
              <Image src={linkData.image} />
              <h3
                className={`talent-title ${linkData.name.toLowerCase()} contrast`}
              >
                {linkData.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        enableLazulight
        titleType='all'
        enableElira={false}
        enablePomu={false}
        enableFinana={false}
        enableDcl={false}
        enableFolding
        enableArt={false}
        heading='Messages To LazuLight'
        page='home'
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight
        titleType='all'
        enableElira={false}
        enablePomu={false}
        enableFinana={false}
        enableDcl={false}
        enableFolding
        enableArt
        heading='Art To LazuLight'
        page='home'
      />
    </>
  )
}
