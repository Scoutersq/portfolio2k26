import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 pb-16 pt-10 md:pt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
