import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Category from '../components/Category';
import RecentProperties from '../components/RecentProperties';
import RecentManage from '../components/RecentManage';
import TaR from '../components/TaR';
import RealestateAgents from '../components/RealestateAgents';
import Testimonial from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/footer';


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Category/>
    <RecentManage/>
    <TaR/>
    <RealestateAgents/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Homepage