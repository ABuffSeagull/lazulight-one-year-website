import React from 'react'
import { Link } from 'wouter'
import Image from '../../year1/components/Image'

import classes from './Home.module.scss'

import logo from '../assets/LazuLightLogo-FansiteEdit.webp'
import peek from '../assets/PeekAll.webp'
import bannerYear1 from '../assets/banner.svg'

export default function Home (): JSX.Element {
  return (
    // Temporary menu so we can navigate easier
    // <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: 'auto', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', backgroundColor: '#e5e5e5', padding: '1rem 2rem' }}>
    //  <Link to='/anniversary1'>1st Anniversary</Link>
    //  <Link to='/anniversary2'>2nd Anniversary</Link>
    // </div>
    <div className={classes['page-bg']}>
      <Image className={classes.logo} src={logo} />
      <Link to='/anniversary1'><a>
        <Image className={classes['main-links']} src={bannerYear1} />
      </a>
      </Link>
      <Link to='/anniversary2'><a>
        <Image className={classes['main-links']} src={bannerYear1} />
      </a>
      </Link>
      <Image className={classes.peek} src={peek} />
    </div>
  )
}
