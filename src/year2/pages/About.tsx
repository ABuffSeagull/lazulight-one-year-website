import React from 'react'
import { Textbox } from '../components/Textbox'
import './AboutLayout.scss'

export default function About (): JSX.Element {
  return (
    <div className='about-container'>
      <Textbox>
        <h2>About</h2>
        <p>This fan website showcases our thanks and congratulations to Elira, Pomu, and Finana (LazuLight) of Nijisanji EN for all their content from 2 years of streaming.</p>
        <p>Fans of LazuLight from across the world and from all walks of life joined together to create this expression of thanks. Every showcased message, art, music, game, and this website itself was created specifically for this purpose. This project is the culmination of over 4 months of efforts from artists, programmers, writers, and many others.</p>
        <p>The fruits of this labor include this website, a doujin and a song. Thank you to the LazuLight fan discords, contributors, and all the fans for your hard work and support.</p>
        <h3>Fan Discord Links</h3>
        <p><a className='external-link-text' href='https://discord.gg/2434club'>Nijisanji EN Fanserver</a></p>
        <p><a className='external-link-text' href='https://discord.gg/pomu'>Pomucord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/gWUFJS2JtF'>Elicord</a></p>
        <p><a className='external-link-text' href='https://discord.gg/425bxuSsff'>Finana Finclub</a></p>
      </Textbox>
    
      <Textbox>
        <h2>Credits</h2>
        


      </Textbox>
    </div>
  )
}


