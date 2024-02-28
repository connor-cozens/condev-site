import React from 'react'
import UnderContruction from './components/underConstruction'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center">
        <UnderContruction />
      </div>
    </main>
  )
}
