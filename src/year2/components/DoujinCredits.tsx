import React from 'react'
import classesCredits from '../components/Credits.module.scss'
import ExLinkA from '../../shared/components/ExLinkA'

export default function DoujinCredits (): JSX.Element {
  return (
    <>
      <h2>
        Credits
      </h2>

      {/* <div> */}
      <div className={classesCredits.text}>
        <h3>Project Lead</h3>
        <h4>Project Lead/Organizer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/CrimsonSilver4'>CrimsonSilver4</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        </ul>

        <h3>Main Cover</h3>
        <h4>Cover Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/qu4cke'>Quacke</ExLinkA></p></li>
        </ul>

        <h3>Pomu: Do You Think Love Can Bloom Even at a Maid Cafe?</h3>
        {/* <ul>
          <li><h4>Cover Artist</h4></li>
          <li><h4>Manga Artist</h4></li>
          <li><h4>Writer</h4></li>
        </ul> */}
        <h4>Cover Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/parkiranhonda'>parkiranhonda</ExLinkA></p></li>
        </ul>
        <h4>Manga Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/OwenAnaken'>Ago</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/ZephyrKitten'>Zephyr Kitten</ExLinkA></p></li>
        </ul>

        <h3>Elira: Love at First Light</h3>
        <h4>Cover Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://www.instagram.com/ann_teasocial/'>Ann_TeaSocial</ExLinkA></p></li>
        </ul>
        <h4>Manga Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/r0ckybirdy'>RockyBirdy</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/coldace_24'>Zephyr Monochrome</ExLinkA></p></li>
        </ul>

        <h3>Finana: Laundry Day</h3>
        <h4>Cover Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/sirohappyend'>Siro</ExLinkA></p></li>
        </ul>
        <h4>Manga Artist, Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/MizMillificent'>Miz Millificent</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/CrimsonSilver4'>CrimsonSilver4</ExLinkA></p></li>
        </ul>

        <h3>Scenario 1: Blind Date</h3>
        <h4>Cover Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/amechiame'>amechi</ExLinkA></p></li>
        </ul>
        <h4>Manga Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/Aria404_'>Aria404</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        </ul>

        <h3>Scenario 2: Lazulight's Last Day Together</h3>
        <h4>Cover Artist, Manga Artist, Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/MelonbreadFBP'>Melonbreadfbp</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/JF__ND'>JFMD</ExLinkA></p></li>
        </ul>

        <h3>Scenario 3: Our Treasure</h3>
        <h4>Cover Artist, Manga Artist</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/tsukinaga_b'>tsukinaga_b</ExLinkA></p></li>
        </ul>
        <h4>Writer</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        </ul>

        <h3>4-Koma Contributers</h3>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/Leef_is_Absent'>Leef</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/Cieluscian'>Cieluscian</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/mecantbother'>Liang</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/shurilampio'>Shurilampio</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/foncomics'>fon</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/inkiinaart?s=09'>inkiina._</ExLinkA></p></li>
        </ul>
        <h3>Observers</h3>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/Phin86_'>PhinAgain</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/hirokawakiro'>Kiro</ExLinkA></p></li>
          <li><p><ExLinkA href='https://twitter.com/beesDotMoe'>Lilybees</ExLinkA></p></li>
        </ul>
        <h3>Website Doujin Icon</h3>
        <h4>Designed by</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/tsukinaga_b'>tsukinaga_b</ExLinkA></p></li>
        </ul>
        <h4>Edited and Colored by</h4>
        <ul>
          <li><p><ExLinkA href='https://twitter.com/wildnexus'>wildnexus</ExLinkA></p></li>
        </ul>
      </div>

    </>
  )
}
