import React from 'react'
import SiteHeader from './SiteHeader'

export function PageWrapper ({
  children,
  page
}: {
  children: React.ReactNode
  page: string
}): JSX.Element {
  return (
    <>
      <SiteHeader />
    </>
  )
}
