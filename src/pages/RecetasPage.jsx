import React from 'react'
import { Header } from "../component/Header"
import { NavBar } from "../component/NavBar"
import {ListadoRecetas} from "../component/ListadoRecetas"
import { Footer } from '../component/Footer'




export const RecetasPage = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <ListadoRecetas />
        <Footer />

    </div>
  )
}

