import React from 'react'
import heroImage from "../assets/hero-img.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
   <main className='wrapper grid lg:grid-cols-4 gap-6 lg:gap-35 lg:mt-[60px]'>
    {/* text */}
    <section className='col-span-2 justify-items-center content-center order-2 lg:order-1'>
    <h1 className='font-medium text-[35px] lg:text-[50px] text-[#292929] mb-[10px]'>Manage your Tasks on <span className='text-[#974FD0]'>TaskDuty</span></h1>
    <p className='font-400 text-[20px] lg:text-[24px] text-[#737171] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
    <Link to="/all-tasks" className="bg-[#974FD0] rounded-md text-[#FAF9FB] text-[18px] lg:text-[24px] w-[201px] h-[50px] px-[25px] py-[10px]">Go to My Tasks</Link>
    </section>
    <section className='col-span-2 justify-items-center content-center order-1 lg:order-2' >
    <img src={heroImage} alt="hero-img" />
    </section>
   </main>
   </>
  )
}

export default Home