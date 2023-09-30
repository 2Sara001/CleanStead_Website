import React from 'react'
import Navbar from "../components/Navbar";
import Button from "../sharedComponents/Button";
import SiteLogo from "../sharedComponents/SiteLogo"


export default function Header() {
  return (
    <div className="container mx-auto px-2 md:px-0">
    <header className="py-8 px-2 md:px-0">
        <section className="flex items-center justify-between">

          {/*Logo*/}
          <SiteLogo textSize="text-2xl" imgWidth="w-9"></SiteLogo>

          {/*Navbar*/}
          <Navbar></Navbar>

          {/*Button*/}
          <Button text="احجز الآن" className="text-white text-xl text-slate-800 font-medium bg-sky-400 px-6 py-2 rounded-full transition-all duration-130 hover:ease-in group-hover:text-sky-400 group-hover:bg-white"></Button>
        </section>
      </header>
    </div>
  )
}
