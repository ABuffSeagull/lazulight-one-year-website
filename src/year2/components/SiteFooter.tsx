import { Y2LazuType } from './PageTypes'
import classes from './SiteFooter.module.scss'

export default function SiteFooter ({
  theme = 'lazulight'
}: {
  theme: Y2LazuType
}): JSX.Element {
  return (
    <>
      <footer className={`${classes.footer} ${classes[`${theme}-footer-border`]}`}>
        <h4>About this website</h4>
        <p>This fan website showcases our thanks and congratulations to LazuLight of Nijisanji EN on their second full year of streaming. Every showcased message, art, music, and manga was created specifically for this anniversary event.</p>
        <h4>Thanks:</h4>
        <p>We would like to thank Pomu, Elira, and Finana, for the joy you have brought to us all. Furthermore, we thank the Nijisanji staff for all of your efforts behind the scenes to enable the livers in their work.</p>
        <p>We thank the community for supporting the livers and each other.</p>
        <p>Finally, thank you to everyone who assisted in bringing these fan projects to life. Every contribution made this work even more special.</p>
        <h4>Copyright &amp; Permissions:</h4>
        <p>We give permission to all Nijisanji Livers to monetize viewing this website by any means, including livestream and video publication. We declare that any copyright material on this website is used with permission and, where applicable, used within the terms of its license. We declare that this website does not contain any material that violates the YouTube Community Guidelines.</p>
        <h4>Disclaimer:</h4>
        <p>This is a fan website, made by fans. We aimed to create this website in compliance with the <a className='external-link-text' href='https://event.nijisanji.app/guidelines/en/'>ANYCOLOR - Guidelines for Secondary Creation</a>. If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@gmail.com'>lazuprojectsteam@gmail.com</a>.</p>
      </footer>
    </>
  )
}
