import React from 'react'
import { Link } from 'wouter'
import EliraImage from '../assets/Portraits/Elira-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import FinanaImage from '../assets/Portraits/Finana-Portrait_cf50.webp?format=png;avif;webp&imagetools&meta'
import PomuImage from '../assets/Portraits/Pomu-Portrait-WN_cf50.webp?format=png;avif;webp&imagetools&meta'
import Image from '../components/Image'
import ImportMessages from '../components/ImportMessages'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import MessageBoxesWithCorners from '../components/MessageBoxesWithCorners'
import hp from '../components/HomePage.module.scss'
import tp from '../components/TalentProfile.module.scss'
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
        <h1 className={hp['home-heading']}>
          <span>Lazu</span>
          <span>Light</span> <span>1 Year</span>
        </h1>
        <h2 className={hp['home-subheading']}>and Counting!</h2>
      </div>

      {/* Links to liver pages */}
      <div className={hp['home-liver-container']}>
        {navIcons.map((linkData, i) => (
          <div className={hp['home-liver-liver']} key={`LiverLink${linkData.name}`}>
            <Link to={linkData.path}>
              <Image src={linkData.image} />
              <h3
                className={`${tp['talent-title']}  ${tp[`talent-title-${linkData.name.toLowerCase()}`]} ${tp['talent-title-contrast']}`}
              >
                {linkData.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Messages */}
      <MessageBoxesLayout
        titleType='all'
        heading='Messages To LazuLight'
        page='home'
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enableLazulight: true })} />
      </MessageBoxesLayout>

      {/* Art */}
      <MessageBoxesLayout
        titleType='all'
        heading='Art To LazuLight'
        page='home'
        enableFolding
      >
        <MessageBoxesWithCorners messages={ImportMessages({ enableLazulight: true, enableArt: true })} />
      </MessageBoxesLayout>
    </>
  )
}
