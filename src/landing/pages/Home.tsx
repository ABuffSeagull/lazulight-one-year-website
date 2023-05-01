import React from 'react'
import { Link } from 'wouter'
import Image from '../../year1/components/Image'

import classes from './Home.module.scss'
import './Home.scss'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import logo from '../assets/LazuLightLogo-FansiteEdit.webp'
import peek from '../assets/PeekAll.webp'
import info from '../assets/info.svg'
import infoClose from '../assets/info-close.svg'
import bannerYear1 from '../assets/banner-year1.svg'
import bannerYear2 from '../assets/banner-year2.svg'

export default function Home (): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const closeModal = (): void => { setOpen(false) }

  return (
    // Temporary menu so we can navigate easier
    // <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: 'auto', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', backgroundColor: '#e5e5e5', padding: '1rem 2rem' }}>
    //  <Link to='/anniversary1'>1st Anniversary</Link>
    //  <Link to='/anniversary2'>2nd Anniversary</Link>
    // </div>
    <div className={classes['page-bg']}>
      <Image className={classes.logo} src={logo} />
      <Link to='/anniversary2'>
        <a className={classes['main-links']}>
          <Image src={bannerYear2} />
        </a>
      </Link>
      <Link to='/anniversary1'>
        <a className={`${classes['main-links']} ${classes['main-links-smaller']}`}>
          <Image src={bannerYear1} />
        </a>
      </Link>
      <Image className={classes.peek} src={peek} />

      <button onClick={() => setOpen(open => !open)}>
        <Image className={classes['info-button']} src={info} />
      </button>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        className='landing-page-info-box' // Note that the '-content' is left off, as this is added by reactjs-popup
      >
        <button onClick={closeModal} className={classes['info-button-close']}>
          <Image src={infoClose} />
        </button>
        <div className={classes['info-box-inner']}>
          <h3>About this website</h3>
          <p>This fan website showcases our thanks and congratulations to LazuLight of Nijisanji EN.</p>

          <h3>Disclaimer:</h3>
          <p>This is a fan website, made by fans. We aimed to create this website in compliance with the <a className='external-link-text' href='https://event.nijisanji.app/guidelines/en/'>ANYCOLOR - Guidelines for Secondary Creation</a>.<br />If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</a>.</p>

          <h3>Credits (Landing Page)</h3>
          <table>
            <tr><td><a href='https://twitter.com/HirokawaKiro'>Kiro</a></td><td>Organiser, Design</td></tr>
            <tr><td><a href='https://twitter.com/BrandonJohns96'>Brandon Johns</a></td><td>Design, Art Assets, Programming</td></tr>
            <tr><td><a href='https://twitter.com/wildnexus'>wildnexus</a></td><td>Art Assets</td></tr>
            <tr><td><a href='https://twitter.com/thundercookie15'>thundercookie15</a></td><td>Domain Owner, Server Hosting</td></tr>
          </table>
          <br />
          <p>The following assets were used with permission and modified by the website team.</p>
          <table>
            <tr><td><a href='https://twitter.com/snowharasho'>Squish</a></td><td>Forest Background</td></tr>
            <tr><td>ANYCOLOR INC.</td><td>LazuLight Logo</td></tr>
            <tr><td><a href='https://twitter.com/MelonbreadFBP'>Melonbread</a></td><td>Ryuguard</td></tr>
            <tr><td>Pomu</td><td>Pomudachi</td></tr>
            <tr><td>Elira</td><td>Weewa</td></tr>
          </table>
        </div>
      </Popup>
    </div>
  )
}
