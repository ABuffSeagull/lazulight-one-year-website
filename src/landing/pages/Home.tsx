import React from 'react'
import { Link } from 'wouter'

export default function Home (): JSX.Element {
  return (
    // Temporary menu so we can navigate easier
    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: 'auto', gap: '2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', backgroundColor: '#e5e5e5', padding: '1rem 2rem' }}>
      <Link to='/anniversary1'>1st Anniversary</Link>
      <Link to='/anniversary2'>2nd Anniversary</Link>
    </div>
  )
}
