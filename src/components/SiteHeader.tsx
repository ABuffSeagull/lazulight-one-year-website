import React, { useState } from 'react'
import { Link } from 'wouter'
import Image from './Image'
import classes from './SiteHeader.module.scss'

import finanaIconDefault from '../assets/menu_icons/Menu-Finana-Default.webp'
import finanaIconActive from '../assets/menu_icons/Menu-Finana-Active.webp'

import pomuIconDefault from '../assets/menu_icons/Menu-Pomu-Default.webp'
import pomuIconActive from '../assets/menu_icons/Menu-Pomu-Active.webp'

import eliraIconDefault from '../assets/menu_icons/Menu-Elira-Default.webp'
import eliraIconActive from '../assets/menu_icons/Menu-Elira-Active.webp'

import projectsIconDefault from '../assets/menu_icons/Menu-Bow-Default.webp'
import projectsIconActive from '../assets/menu_icons/Menu-Bow-Active.webp'

import submissionsIconDefault from '../assets/menu_icons/Menu-EliraTiara-Default.webp'
import submissionsIconActive from '../assets/menu_icons/Menu-EliraTiara-Active.webp'

import VNIconDefault from '../assets/menu_icons/Menu-FinanaCrown-Default.webp'
import VNIconActive from '../assets/menu_icons/Menu-FinanaCrown-Active.webp'

export default function SiteHeader (): JSX.Element {
  const navIcons = [
    {
      name: 'Home',
      icon: projectsIconDefault,
      iconActive: projectsIconActive,
      path: '/'
    },
    {
      name: 'Pomu',
      icon: pomuIconDefault,
      iconActive: pomuIconActive,
      path: '/pomu'
    },
    {
      name: 'Elira',
      icon: eliraIconDefault,
      iconActive: eliraIconActive,
      path: '/elira'
    },
    {
      name: 'Finana',
      icon: finanaIconDefault,
      iconActive: finanaIconActive,
      path: '/finana'
    },
    {
      name: 'Submissions',
      icon: submissionsIconDefault,
      iconActive: submissionsIconActive,
      path: '/finana'
    },
    {
      name: 'VN',
      icon: VNIconDefault,
      iconActive: VNIconActive,
      path: '/finana'
    }
  ]

  const [headerOpen, setHeaderOpen] = useState(false)

  return (
    <>
      <header className={[classes.header, headerOpen ? classes.open : ''].join(' ')}>
        {navIcons.map((linkData) => (
          <Link
            key={linkData.name}
            className={classes['nav-link']}
            to={linkData.path}
          >
            <div className={classes['icon-wrapper']}>
              <Image
                className={[classes.icon, classes['default-icon']].join(' ')}
                src={linkData.icon}
              />
              <Image
                className={[classes.icon, classes['active-icon']].join(' ')}
                src={linkData.iconActive}
              />
            </div>
            <span>{linkData.name}</span>
          </Link>
        ))}
      </header>
      <button
        className={classes['open-header']}
        onClick={() => setHeaderOpen(!headerOpen)}
      >
        close
      </button>
    </>
  )
}
