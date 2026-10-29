import React from 'react'
import { Header } from "../component/Header"
import { NavBar } from "../component/NavBar"
import { Home } from "../component/Home"
import { Footer } from '../component/Footer'

export const HomePage = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <Home />
        <Footer />


    </div>
  )
}
