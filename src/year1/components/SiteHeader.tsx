import React, { useState } from 'react'
import { Link } from 'wouter'
import Image from './Image'
import classes from './SiteHeader.module.scss'

import landingIconDefault from '../../shared/assets/menu/Menu-Logo.png'

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
      name: 'Main',
      icon: landingIconDefault,
      iconActive: landingIconDefault,
      path: '/',
      children: []
    },
    {
      name: 'Home',
      icon: homeIconDefault,
      iconActive: homeIconActive,
      path: '/anniversary1',
      children: []
    },
    {
      name: 'Pomu',
      icon: pomuIconDefault,
      iconActive: pomuIconActive,
      path: '/anniversary1/pomu',
      children: []
    },
    {
      name: 'Elira',
      icon: eliraIconDefault,
      iconActive: eliraIconActive,
      path: '/anniversary1/elira',
      children: []
    },
    {
      name: 'Finana',
      icon: finanaIconDefault,
      iconActive: finanaIconActive,
      path: '/anniversary1/finana',
      children: []
    },
    {
      name: 'FNF',
      icon: projectsIconDefault,
      iconActive: projectsIconDefault,
      path: '/anniversary1/project-fnf',
      children: [],
      mobileOnly: true
    },
    {
      name: 'DCL',
      icon: EliraTiaraDefault,
      iconActive: EliraTiaraActive,
      path: '/anniversary1/project-dcl',
      children: [],
      mobileOnly: true
    },
    {
      name: 'VN',
      icon: FinanaCrownDefault,
      iconActive: FinanaCrownActive,
      path: '/anniversary1/project-vn',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Messages',
      icon: PomudachiDefault,
      iconActive: PomudachiActive,
      path: '/anniversary1/all-messages',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Art',
      path: '/anniversary1/all-art',
      icon: WeewaDefault,
      iconActive: WeewaActive,
      children: [],
      mobileOnly: true
    },
    {
      name: 'About',
      path: '/anniversary1/about',
      icon: RyuguardDefault,
      iconActive: RyuguardActive,
      children: [],
      mobileOnly: true
    },
    {
      name: 'Projects',
      icon: projectsIconDefault,
      iconActive: projectsIconActive,
      path: '',
      desktopOnly: true,
      children:
      [

        {
          name: 'FNF',
          icon: projectsIconDefault,
          iconActive: projectsIconActive,
          path: '/anniversary1/project-fnf'
        },
        {
          name: 'DCL',
          icon: EliraTiaraDefault,
          iconActive: EliraTiaraActive,
          path: '/anniversary1/project-dcl'
        },
        {
          name: 'VN',
          icon: FinanaCrownDefault,
          iconActive: FinanaCrownActive,
          path: '/anniversary1/project-vn'
        }
      ]
    },
    {
      name: 'Other',
      icon: PomudachiDefault,
      iconActive: PomudachiActive,
      path: '',
      desktopOnly: true,
      children:
      [
        {
          name: 'All Messages',
          icon: PomudachiDefault,
          iconActive: PomudachiActive,
          path: '/anniversary1/all-messages'
        },
        {
          name: 'All Art',
          icon: WeewaDefault,
          iconActive: WeewaActive,
          path: '/anniversary1/all-art'
        },
        {
          name: 'About',
          icon: RyuguardDefault,
          iconActive: RyuguardActive,
          path: '/anniversary1/about'
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
