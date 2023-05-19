import React from 'react'
import { Link } from 'wouter'
import Image from '../../year1/components/Image'
import ExLink from '../../shared/components/ExLink'

import classes from './Home.module.scss'
import './Home.scss'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import logo from '../assets/LazuLightFanLogo-Layout3.webp'
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

      <button onClick={() => setOpen(open => !open)} className={classes['info-button']}>
        <Image src={info} />
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
          <p>This fan website showcases our thanks and congratulations to Elira, Pomu, and Finana (LazuLight) of Nijisanji EN. Fans of LazuLight from across the world joined together to create these expressions of thanks at the times of LazuLight's 1st and 2nd anniversaries. Every showcased work was created specifically for this purpose. Thank you to the LazuLight fan discords, contributors, and all the fans for your hard work and support.</p>
          <p>Fan Discord Links: <ExLink href='https://discord.gg/2434club'>Nijisanji EN Fanserver</ExLink>, <ExLink href='https://discord.gg/pomu'>Pomucord</ExLink>, <ExLink href='https://discord.gg/gWUFJS2JtF'>Elicord</ExLink>, <ExLink href='https://discord.gg/425bxuSsff'>Finana Finclub</ExLink></p>

          <h3>Copyright &amp; Permissions:</h3>
          <p>We give permission to all Nijisanji Livers to monetize viewing this website by any means, including livestream and video publication. We declare that any copyright material on this website is used with permission and, where applicable, used within the terms of its license. We declare that this website does not contain any material that violates the YouTube Community Guidelines.</p>

          <h3>Disclaimer:</h3>
          <p>This is a fan website, made by fans. We aimed to create this website in compliance with the <ExLink href='https://event.nijisanji.app/guidelines/en/'>ANYCOLOR - Guidelines for Secondary Creation</ExLink>.<br />If there are any concerns or enquiries, please contact us by email at <ExLink href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</ExLink>.</p>

          <h3>Credits (Landing Page)</h3>
          <table>
            <tr><td><ExLink href='https://twitter.com/HirokawaKiro'>Kiro</ExLink></td><td>Organiser, Design</td></tr>
            <tr><td><ExLink href='https://twitter.com/BrandonJohns96'>Brandon Johns</ExLink></td><td>Design, Art Assets, Programming</td></tr>
            <tr><td><ExLink href='https://twitter.com/wildnexus'>wildnexus</ExLink></td><td>Art Assets</td></tr>
            <tr><td><ExLink href='https://twitter.com/thundercookie15'>thundercookie15</ExLink></td><td>Domain Owner, Server Hosting</td></tr>
          </table>
          <br />
          <p><span>Externally sourced assets&nbsp;</span><span>(*modified by the website team):</span></p>
          <table>
            <tr><td><ExLink href='https://twitter.com/snowharasho'>Squish</ExLink></td><td>Forest Background*</td></tr>
            <tr><td>ANYCOLOR INC.</td><td>LazuLight Logo*</td></tr>
            <tr><td><ExLink href='https://twitter.com/MelonbreadFBP'>Melonbread</ExLink></td><td>Ryuguard*</td></tr>
            <tr><td><ExLink href='https://youtu.be/dS-0a-sVxck?t=2161'>Pomu</ExLink></td><td>Pomudachi*</td></tr>
            <tr><td><ExLink href='https://youtu.be/C-C0nfMuBfA?t=7542'>Elira</ExLink></td><td>Weewa*</td></tr>
            <tr><td><ExLink href='https://kolcsarzsolt.gumroad.com/l/lARyW'>kolcsarzsolt</ExLink></td><td>Erial Font</td></tr>
            <tr><td><ExLink href='https://github.com/googlefonts/nunito/blob/main/OFL.txt'>The Nunito Project</ExLink></td><td>Nunito Font</td></tr>
          </table>
        </div>
      </Popup>
    </div>
  )
}
