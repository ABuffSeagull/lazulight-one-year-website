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
        <p />

        <h4>Thanks:</h4>
        <p />

        <h4>Disclaimer:</h4>
        <p>This is a fan website, made by fans. We aimed to create this website in compliance with the <a className='external-link-text' href='https://event.nijisanji.app/guidelines/en/'>ANYCOLOR - Guidelines for Secondary Creation</a>. If there are any concerns or enquiries, please contact us by email at <a href='mailto:lazuprojectsteam@lazulight.com'>lazuprojectsteam@lazulight.com</a>.</p>
      </footer>
    </>
  )
}
