import React, { useState } from 'react'
import { Link } from 'wouter'
import Image from './Image'
import classes from './SiteHeader.module.scss'

import homeIconDefault from '../assets/Menu/Menu-Diamond-Default.webp'
import homeIconActive from '../assets/Menu/Menu-DiamondRainbow-Active_250px.gif'

import finanaIconDefault from '../assets/Menu/Menu-Finana-Default.webp'
import finanaIconActive from '../assets/Menu/Menu-Finana-Active.webp'

import pomuIconDefault from '../assets/Menu/Menu-Pomu-Default.webp'
import pomuIconActive from '../assets/Menu/Menu-Pomu-Active.webp'

import eliraIconDefault from '../assets/Menu/Menu-Elira-Default.webp'
import eliraIconActive from '../assets/Menu/Menu-Elira-Active.webp'

import projectsIconDefault from '../assets/Menu/Menu-Bow-Default.webp'
import projectsIconActive from '../assets/Menu/Menu-Bow-Active.webp'

import EliraTiaraDefault from '../assets/Menu/Menu-EliraTiara-Default.webp'
import EliraTiaraActive from '../assets/Menu/Menu-EliraTiara-Active.webp'

import FinanaCrownDefault from '../assets/Menu/Menu-FinanaCrown-Default.webp'
import FinanaCrownActive from '../assets/Menu/Menu-FinanaCrown-Active.webp'

import RyuguardDefault from '../assets/Menu/Menu-Ryuguard-Default.webp'
import RyuguardActive from '../assets/Menu/Menu-Ryuguard-Active.webp'

import WeewaDefault from '../assets/Menu/Menu-Weewa-Default.webp'
import WeewaActive from '../assets/Menu/Menu-Weewa-Active.webp'

import PomudachiDefault from '../assets/Menu/Menu-Pomudachi-Default.webp'
import PomudachiActive from '../assets/Menu/Menu-Pomudachi-Active.webp'

import Bars from '../assets/Menu/Menu-Mobile-Open.svg'
import Cross from '../assets/Menu/Menu-Mobile-Close.svg'

interface LinkData {
  name: string
  icon: string
  iconActive: string
  path: string
  delay: number
  mobileOnly?: boolean
  desktopOnly?: boolean
}

export default function SiteHeader (): JSX.Element {
  const navIcons = [
    {
      name: 'Home',
      icon: homeIconDefault,
      iconActive: homeIconActive,
      path: '/',
      children: []
    },
    {
      name: 'Pomu',
      icon: pomuIconDefault,
      iconActive: pomuIconActive,
      path: '/pomu',
      children: []
    },
    {
      name: 'Elira',
      icon: eliraIconDefault,
      iconActive: eliraIconActive,
      path: '/elira',
      children: []
    },
    {
      name: 'Finana',
      icon: finanaIconDefault,
      iconActive: finanaIconActive,
      path: '/finana',
      children: []
    },
    {
      name: 'FNF',
      icon: projectsIconDefault,
      iconActive: projectsIconDefault,
      path: '/project-fnf',
      children: [],
      mobileOnly: true
    },
    {
      name: 'DCL',
      icon: EliraTiaraDefault,
      iconActive: EliraTiaraActive,
      path: '/project-dcl',
      children: [],
      mobileOnly: true
    },
    {
      name: 'VN',
      icon: FinanaCrownDefault,
      iconActive: FinanaCrownActive,
      path: '/project-vn',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Messages',
      icon: RyuguardDefault,
      iconActive: RyuguardActive,
      path: '/all-messages',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Art',
      icon: PomudachiDefault,
      iconActive: PomudachiActive,
      path: '/all-art',
      children: [],
      mobileOnly: true
    },
    {
      name: 'About',
      icon: WeewaDefault,
      iconActive: WeewaActive,
      path: '/about',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Projects',
      icon: projectsIconDefault,
      iconActive: projectsIconActive,
      path: '/',
      desktopOnly: true,
      children:
      [
        {
          name: 'DCL',
          icon: EliraTiaraDefault,
          iconActive: EliraTiaraActive,
          path: '/project-dcl'
        },
        {
          name: 'VN',
          icon: FinanaCrownDefault,
          iconActive: FinanaCrownActive,
          path: '/project-vn'
        },
        {
          name: 'FNF',
          icon: projectsIconDefault,
          iconActive: projectsIconActive,
          path: '/project-fnf'
        }
      ]
    },
    {
      name: 'Other',
      icon: PomudachiDefault,
      iconActive: PomudachiActive,
      path: '/finana',
      desktopOnly: true,
      children:
      [
        {
          name: 'All Messages',
          icon: RyuguardDefault,
          iconActive: RyuguardActive,
          path: '/all-messages'
        },
        {
          name: 'All Art',
          icon: PomudachiDefault,
          iconActive: PomudachiActive,
          path: '/all-art'
        },
        {
          name: 'About',
          icon: WeewaDefault,
          iconActive: WeewaActive,
          path: '/about'
        }
      ]
    }
  ]

  const [headerOpen, setHeaderOpen] = useState(false)

  function MenuItem (linkData: LinkData): JSX.Element {
    return (
      <Link
        key={linkData.name}
        className={classes['nav-link']}
        to={linkData.path}
        style={{ '--delay': `${50 * linkData.delay}ms` } as any}
        onClick={() => {
          setHeaderOpen(!headerOpen)
        }}
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
    )
  }

  return (
    <>
      <header
        className={[classes.header, headerOpen ? classes.open : ''].join(' ')}
      >

        <nav className={classes.nav}>
          {navIcons.map((linkData, idx) => (
            // Explicit '=true' because 'nullable boolean'
            <div className={`${classes['menu-item']} ${linkData.mobileOnly === true ? classes['nav-link-mobile-only'] : ''} ${linkData.desktopOnly === true ? classes['nav-link-desktop-only'] : ''}`} key={idx}>
              {/* Core menu */}
              <MenuItem
                name={linkData.name}
                icon={linkData.icon}
                iconActive={linkData.iconActive}
                path={linkData.path}
                delay={idx}
              />
              {/* Sub menu */}
              {
                linkData.children.length > 0 && (
                  <div className={classes['menu-sub']}>
                    {linkData.children.map((childLinkData, idx2) => (
                      <div className={classes['menu-sub-item']} key={idx2}>
                        <MenuItem
                          name={childLinkData.name}
                          icon={childLinkData.icon}
                          iconActive={childLinkData.iconActive}
                          path={childLinkData.path}
                          delay={idx2}
                        />
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          ))}
        </nav>

      </header>
      <button
        className={`${classes['open-header']} ${headerOpen ? classes['open-header-close'] : ''}`}
        onClick={() => setHeaderOpen(!headerOpen)}
      >
        <img src={!headerOpen ? Bars : Cross} />
      </button>
    </>
  )
}
