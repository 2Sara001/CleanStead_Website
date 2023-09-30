import React from 'react';
import ListItem from '../sharedComponents/ListItem';

export default function Navbar() {
  const navItems = [
    { text: "الرئيسية", id: 1 },
    { text: "الخدمات", id: 2 },
    { text: "من نحن", id: 3 },
    { text: "اتصل بنا", id: 4 },
  ];
  return (
    <>
      <nav className="nav-items">
        <ul className="hidden md:flex md:items-center md:justify-around ">
          {navItems.map((item) => (
            <ListItem text={item.text} key={item.id} className="mx-5 text-xl text-slate-800 font-medium transition duration-130 hover:ease-in hover:text-sky-400"></ListItem>
          ))}
        </ul>
      </nav>
    </>
  )
}
