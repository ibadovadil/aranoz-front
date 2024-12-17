import React from 'react'
import Slider from '../components/Slider'
import Contact from './Contact'
import WeeklySale from '../components/WeeklySale'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Slider />
      <BestSeller/>
      <WeeklySale />
    </div>
  )
}

export default Home
