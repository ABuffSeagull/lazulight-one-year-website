import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import classes from './SiteFooter.module.scss'

const footerText = [
  'Some web team credit',
  'test paragraph',
  '',
  'some fan site disclaimer',
  ''
]

export default function SiteFooter (): JSX.Element {
  const location = useLocation()
  const [firstName, setFirstName] = useState(window.location.pathname)

  useEffect(() => {
    setFirstName(window.location.pathname)
  }, [location])

  const firstNameLower = firstName.toLowerCase().split('/')[1]
  let footerBorder
  switch (firstNameLower) {
    case 'elira':
      footerBorder = classes.eliraFooterBorder
      break
    case 'pomu':
      footerBorder = classes.pomuFooterBorder
      break
    case 'finana':
      footerBorder = classes.finanaFooterBorder
      break
    default:
      footerBorder = classes.defaultFooterBorder // TODO: define default footer border colour
  }

  return (
    <>
      <footer className={[classes.footer, footerBorder].join(' ')}>
        {footerText.map((paragraph, index) =>
          // OK to use index as key as long as list is static
          <p key={index}>{paragraph}&nbsp;</p>
        )}
      </footer>

    </>
  )
}
