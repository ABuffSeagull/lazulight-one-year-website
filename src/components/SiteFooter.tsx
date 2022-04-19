import classes from './SiteFooter.module.scss'

interface Props {
  page: string
}

const footerText = [
  'Some web team credit',
  'test paragraph',
  '',
  'some fan site disclaimer',
  ''
]

export default function SiteFooter (props: Props): JSX.Element {
  let footerBorder = classes[`${props.page}-footer-border`]

  return (
    <>
      <footer className={`${classes.footer} ${footerBorder}`}>
        {footerText.map((paragraph, index) =>
          // OK to use index as key as long as list is static
          <p key={index}>{paragraph}&nbsp;</p>
        )}
      </footer>

    </>
  )
}
