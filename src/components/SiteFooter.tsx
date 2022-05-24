import classes from './SiteFooter.module.scss'

interface Props {
  page: string
}

export default function SiteFooter (props: Props): JSX.Element {
  const footerBorder = classes[`${props.page}-footer-border`]

  return (
    <>
      <footer className={`${classes.footer} ${footerBorder}`}>
        <h4>About this website</h4>
        <p>This fan website showcases our thanks and congratulations to LazuLight of Nijisanji EN on their first full year of streaming. Every showcased message, art, music, and game was created specifically for this anniversary event.</p>
        <h4>Thanks:</h4>
        <p>We would like to thank Pomu, Elira, and Finana, for the joy you have brought to us all. Furthermore, we thank the Nijisanji staff for all of your efforts behind the scenes to enable the livers in their work.</p>
        <p>We thank the community for supporting the livers and each other.</p>
        <p>Finally, thank you to everyone who assisted in bringing these fan projects to life. Every contribution made this work even more special.</p>
        <h4>Disclaimer:</h4>
        <p>This is a fan website, made by fans. We aimed to create this website in compliance with the <a className='external-link-text' href='https://event.nijisanji.app/guidelines/en/'>ANYCOLOR - Guidelines for Secondary Creation</a>. If there are any concerns, please contact one of our community’s discord moderators, as linked to on our <a href='/about'>about page</a>.</p>
      </footer>
    </>
  )
}
