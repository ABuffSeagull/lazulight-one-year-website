import React, { useState } from 'react'
import { Link } from 'wouter'
import Image from './Image'
import classes from './SiteHeader.module.scss'

import finanaIconDefault from '../assets/Menu/Menu-Finana-Default.webp'
import finanaIconActive from '../assets/Menu/Menu-Finana-Active.webp'

import pomuIconDefault from '../assets/Menu/Menu-Pomu-Default.webp'
import pomuIconActive from '../assets/Menu/Menu-Pomu-Active.webp'

import eliraIconDefault from '../assets/Menu/Menu-Elira-Default.webp'
import eliraIconActive from '../assets/Menu/Menu-Elira-Active.webp'

import projectsIconDefault from '../assets/Menu/Menu-Bow-Default.webp'
import projectsIconActive from '../assets/Menu/Menu-Bow-Active.webp'

import submissionsIconDefault from '../assets/Menu/Menu-EliraTiara-Default.webp'
import submissionsIconActive from '../assets/Menu/Menu-EliraTiara-Active.webp'

import VNIconDefault from '../assets/Menu/Menu-FinanaCrown-Default.webp'
import VNIconActive from '../assets/Menu/Menu-FinanaCrown-Active.webp'

interface LinkData {
  name: string
  icon: string
  iconActive: string
  path: string
  delay: number
}

export default function SiteHeader (): JSX.Element {
  const navIcons = [
    {
      name: 'Home',
      icon: projectsIconDefault,
      iconActive: projectsIconActive,
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
      name: 'Projects',
      icon: submissionsIconDefault,
      iconActive: submissionsIconActive,
      path: '/',
      children:
      [
        {
          name: 'DCL',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
          path: '/project-dcl'
        },
        {
          name: 'VN',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
          path: '/project-vn'
        },
        {
          name: 'FNF',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
          path: '/project-fnf'
        }
      ]
    },
    {
      name: 'Other',
      icon: VNIconDefault,
      iconActive: VNIconActive,
      path: '/finana',
      children:
      [
        {
          name: 'All Messages',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
          path: '/all-messages'
        },
        {
          name: 'All Art',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
          path: '/all-art'
        },
        {
          name: 'About',
          icon: submissionsIconDefault,
          iconActive: submissionsIconActive,
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
            <div className={classes['menu-item']} key={idx}>
              {/* Core menu */}
              <MenuItem
                name={linkData.name}
                icon={linkData.icon}
                iconActive={linkData.iconActive}
                path={linkData.path}
                delay={idx}
              />
              {/* Sub menu */}
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
            </div>
          ))}
        </nav>
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
