import React from 'react'
import { Textbox } from '../components/Textbox'
import './AboutLayout.scss'

export default function About (): JSX.Element {
  return (
    <div className='about-container'>
      <Textbox>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum quas nam harum cumque architecto nostrum voluptatibus, voluptate maxime consequatur ea consectetur fugit alias nemo, error doloremque fugiat ut atque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem doloremque, sequi a minus architecto voluptates facilis vitae dicta dolorem nam, voluptatum numquam blanditiis saepe necessitatibus, sapiente id ratione soluta?</p>
      </Textbox>
    </div>
  )
}
