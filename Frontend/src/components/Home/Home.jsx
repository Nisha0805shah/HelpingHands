import React from 'react'
import Categories from '../categories/Categories'
import Header from '../header/Header'
import TopBar from '../topbar/Topbar'
import "./home.css"

export default function Home() {
  return (
      <>
      <TopBar />
      <Header />
    <div className='home'>
      <Categories />
    </div>
    </>
  )
}
