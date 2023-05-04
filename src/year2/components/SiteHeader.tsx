import SiteHeaderLayout, { MenuData } from '../../shared/components/SiteHeaderLayout'
import classes from './SiteHeader.module.scss'

import landingDefault from '../../shared/assets/menu/Menu-Logo-Black.webp'
import landingActive from '../../shared/assets/menu/Menu-Logo-White.webp'

import AboutActive from '../assets/menu/Menu-About-Active.webp'
import About from '../assets/menu/Menu-About.webp'
import HomeActive from '../assets/menu/Menu-Home-Active.webp'
import Home from '../assets/menu/Menu-Home.webp'
import PencilActive from '../assets/menu/Menu-Pencil-Active.webp'
import Pencil from '../assets/menu/Menu-Pencil.webp'
import PenlaActive from '../assets/menu/Menu-Penla-Active.webp'
import Penla from '../assets/menu/Menu-Penla.webp'
import PomudachiActive from '../assets/menu/Menu-Pomudachi-Active.webp'
import Pomudachi from '../assets/menu/Menu-Pomudachi.webp'
import ProjectsActive from '../assets/menu/Menu-Projects-Active.webp'
import Projects from '../assets/menu/Menu-Projects.webp'
import RyuguardActive from '../assets/menu/Menu-Ryuguard-Active.webp'
import Ryuguard from '../assets/menu/Menu-Ryuguard.webp'
import WeewaActive from '../assets/menu/Menu-Weewa-Active.webp'
import Weewa from '../assets/menu/Menu-Weewa.webp'

export default function SiteHeader (): JSX.Element {
  const menuData: MenuData[] = [
    {
      name: 'Main',
      icon: landingDefault,
      iconActive: landingActive,
      path: '/',
      children: []
    },
    {
      name: 'Home',
      icon: Home,
      iconActive: HomeActive,
      path: '/anniversary2',
      children: []
    },
    {
      name: 'Pomu',
      icon: Pomudachi,
      iconActive: PomudachiActive,
      path: '/anniversary2/pomu',
      children: []
    },
    {
      name: 'Elira',
      icon: Weewa,
      iconActive: WeewaActive,
      path: '/anniversary2/elira',
      children: []
    },
    {
      name: 'Finana',
      icon: Ryuguard,
      iconActive: RyuguardActive,
      path: '/anniversary2/finana',
      children: []
    },
    {
      name: 'Doujin',
      icon: Pencil,
      iconActive: PencilActive,
      path: '/anniversary2/project-doujin',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Song',
      icon: Penla,
      iconActive: PenlaActive,
      path: '/anniversary2/project-song',
      children: [],
      mobileOnly: true
    },
    {
      name: 'Projects',
      icon: Projects,
      iconActive: ProjectsActive,
      path: '',
      desktopOnly: true,
      children:
      [
        {
          name: 'Doujin',
          icon: Pencil,
          iconActive: PencilActive,
          path: '/anniversary2/project-doujin'
        },
        {
          name: 'Song',
          icon: Penla,
          iconActive: PenlaActive,
          path: '/anniversary2/project-song'
        }
      ]
    },
    {
      name: 'About',
      path: '/anniversary2/about',
      icon: About,
      iconActive: AboutActive,
      children: []
    }
  ]

  return (
    <SiteHeaderLayout
      menuData={menuData}
      classes={classes}
    />
  )
}
