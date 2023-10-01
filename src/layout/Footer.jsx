import React from 'react';
import { Link } from "react-router-dom";
import SiteLogo from "../sharedComponents/SiteLogo"
import ListItem from '../sharedComponents/ListItem';
import Map from "../assets/images/Footer/map.png";
import Location from "../assets/images/Footer/location.png";
import Mail from "../assets/images/Footer/mail.png";
import Phone from "../assets/images/Footer/phone.png";


export default function Footer() {
  const services = [
    { service: "تنظيف المنازل", id: 1 },
    { service: "التنظيف التجاري", id: 2 },
    { service: "تنظيف السجاد", id: 3 },
    { service: "تنظيف النوافذ", id: 4 },
    { service: "تنظيف السيارات", id: 5 },
    { service: "تنظيف بعد البناء", id: 6 },
  ];

  const siteIcons = [
    {
      class: "fa-brands fa-facebook-f", id: 1
    },
    {
      class: "fa-brands fa-twitter", id: 2
    },
    {
      class: "fa-brands fa-youtube", id: 3
    },
    {
      class: "fa-brands fa-whatsapp", id: 4
    },
    {
      class: "fa-brands fa-instagram", id: 5
    },
    {
      class: "fa-brands fa-google", id: 6
    },
  ];
  return (
    <>
      <footer className="mx-auto container rounded-t-3xl  bg-sky-100">
        <section className="px-8 py-10 lg:flex md:justify-evenly" >
          <div className="info mb-5 ">
            <h5 className='mb-3 md:mb-5'>
              <SiteLogo textSize="text-3xl" imgWidth="w-10"></SiteLogo>
            </h5>
            <p className="text-gray-400 text-base w-full lg:w-64">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
            </p>
          </div>
          <div className="services mb-5 ">
            <h5 className="text-lg mb-3 md:mb-5">خدماتنا</h5>
            <ul>
              {services.map((item) => (
                <ListItem text={item.service} key={item.id} classNameLink="text-gray-400 text-base" classNameLi="mb-3"></ListItem>
              ))}
            </ul>
          </div>
          <div className="tel mb-5 ">
            <h5 className="text-lg mb-3 md:mb-5">تواصل معنا</h5>
            <ul>
              <li className="flex items-start mb-3">
              <img src={Phone}  alt="Phone icon"/>
              <span className="text-gray-400 text-base mr-2">0592700722</span>
              </li>
              <li className="flex items-start mb-3">
                <img src={Mail} alt="Mail icon" />
                <Link
                  to="mailto:eng.mohammadalhabil@gmail.com"
                  className="text-gray-400 text-base  mr-2"
                >
                  eng.mohammadalhabil@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="sitesLinks ">
            <h5 className="text-lg mb-4 md:mb-5">تابعنا على</h5>
            <ul className="mb-8 md:mb-10 flex items-center justify-between w-1/2 lg:w-full ">
              {siteIcons.map((icon) => (
                <ListItem
                  classNameLink={`${icon.class} text-gray-400 text-xl ease-in duration-150 hover:text-sky-400`}
                  key={icon.id}
                />
              ))}
            </ul>
            <div className="map flex items-center">
              <img src={Location} alt="Location icon" className='ml-2 w-7'/>
              <img src={Map} alt="Map" />
            </div>
          </div>
        </section>
        <hr className="m-auto mb-5 w-full lg:w-5/6 bg-white h-1" />
        <div className="copyrights text-center  bg-sky-100">
          <h6 className="pb-5 text-lg">جميع الحقوق محفوظة © 2022</h6>
        </div>
      </footer>
    </>
  )
}
