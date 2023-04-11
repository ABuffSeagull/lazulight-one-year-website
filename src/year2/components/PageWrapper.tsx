import React from 'react'
import { Link } from 'wouter'

export function PageWrapper ({
  children,
  page
}: {
  children: React.ReactNode
  page: string
}): JSX.Element {
  return (
    // Temporary menu so we can navigate easier
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', backgroundColor: '#e5e5e5', padding: '1rem 2rem' }}>
      <Link to='/'>main</Link>
      <Link to='/anniversary2'>home</Link>
      <Link to='/anniversary2/elira'>elira</Link>
      <Link to='/anniversary2/finana'>finana</Link>
      <Link to='/anniversary2/pomu'>pomu</Link>
      <Link to='/anniversary2/project-doujin'>doujin</Link>
      <Link to='/anniversary2/project-song'>song</Link>
      <Link to='/anniversary2/about'>about</Link>
    </div>
  )
}
