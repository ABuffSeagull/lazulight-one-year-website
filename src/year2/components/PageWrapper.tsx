import React from 'react'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import styles from "./PageWrapper.module.scss";

export function PageWrapper ({
  children,
  pageTheme
}: {
  children: React.ReactNode
  pageTheme: string
}): JSX.Element {
  return (
    <>
      <SiteHeader />

      {/* This is the body of the page */}
      <div className={styles.container}>
        {children}
      </div>

      <SiteFooter theme='lazulight' />
    </>
  )
}
