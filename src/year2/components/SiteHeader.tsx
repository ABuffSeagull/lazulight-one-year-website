import SiteHeaderLayout, { MenuData } from '../../shared/components/SiteHeaderLayout'
import classes from './SiteHeader.module.scss'

import landingIconDefault from '../../shared/assets/menu/Menu-Logo.png'
import tmpIcon from '../assets/menu/Menu-tmp.png'

export default function SiteHeader (): JSX.Element {
  const menuData: MenuData[] = [
    {
      name: 'Main',
      icon: landingIconDefault,
      iconActive: landingIconDefault,
      path: '/',
      children: []
    },
    {
      name: 'Home',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2',
      children: []
    },
    {
      name: 'Pomu',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2/pomu',
      children: []
    },
    {
      name: 'Elira',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2/elira',
      children: []
    },
    {
      name: 'Finana',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2/finana',
      children: []
    },
    {
      name: 'Doujin',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2/project-doujin',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Song',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '/anniversary2/project-song',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Projects',
      icon: tmpIcon,
      iconActive: tmpIcon,
      path: '',
      desktopOnly: true,
      children:
      [
        {
          name: 'Doujin',
          icon: tmpIcon,
          iconActive: tmpIcon,
          path: '/anniversary2/project-doujin'
        },
        {
          name: 'Song',
          icon: tmpIcon,
          iconActive: tmpIcon,
          path: '/anniversary2/project-song'
        }
      ]
    },
    {
      name: 'About',
      path: '/anniversary2/about',
      icon: tmpIcon,
      iconActive: tmpIcon,
      children: []
    }
  ]

  return (
    <SiteHeaderLayout
      menuData={menuData}
      classNameNav={classes.nav}
    />
  )
}
