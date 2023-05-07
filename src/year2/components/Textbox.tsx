import classes from './Textbox.module.scss'

export function Textbox ({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className={classes['text-inner']}>
      {children}
    </div>
  )
}
