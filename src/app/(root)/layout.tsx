import NavBar from '@/components/Home/NavBar'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main >
        <NavBar/>
        {children}
        </main>
  )
}

