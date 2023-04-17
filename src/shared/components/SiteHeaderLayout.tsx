import React, { useState } from 'react'
import { Link } from 'wouter'
import Image from '../../year1/components/Image'
import classes from './SiteHeaderLayout.module.scss'

import Bars from '../../year1/assets/Menu/Menu-Mobile-Open.svg'
import Cross from '../../year1/assets/Menu/Menu-Mobile-Close.svg'

interface LinkData {
  name: string
  icon: string
  iconActive: string
  path: string
  delay: number
  mobileOnly?: boolean
  desktopOnly?: boolean
}

interface SubMenuData {
  name: string
  icon: string
  iconActive: string
  path: string
}

export interface MenuData extends SubMenuData {
  mobileOnly?: boolean
  desktopOnly?: boolean
  children: SubMenuData[]
}

export default function SiteHeaderLayout ({
  menuData,
  classNameNav = ''
}: {
  menuData: MenuData[]
  classNameNav?: string
}): JSX.Element {
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

        <nav className={`${classes.nav} ${classNameNav}`}>
          {menuData.map((linkData, idx) => (
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
