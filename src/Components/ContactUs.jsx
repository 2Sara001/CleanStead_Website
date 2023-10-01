import React from 'react'
import Button from '../sharedComponents/Button';
import OptionItem from '../sharedComponents/OptionItem';
import InputField from '../sharedComponents/InputField';
import mainImg from "../assets/images/mainImg.png";
import greenLines from "../assets/images/greenLines.png";

export default function ContactUs() {
    const options = [
        { text: "الخدمة 1", value: "S1", id: 1 },
        { text: "الخدمة 2", value: "S2", id: 2 },
        { text: "الخدمة 3", value: "S3", id: 3 },
        { text: "الخدمة 4", value: "S4", id: 4 },
    ];
    return (
        <div>
            <main>
                <section className="mx-auto container px-2 md:px-0 mt-2 mb-10 md:mb-20 md:flex md:justify-between md:flex-nowrap">
                    <section className="content w-full md:w-1/2 py-10 md:pl-5 md:ml-14 md:mt-5">
                        <div className="title flex items-center mb-10">
                            <h1 className="text-4xl	font-bold ml-3 ">تواصل معنا</h1>
                            <img src={greenLines} alt="Title Lines" />
                        </div>
                        <form>
                            <div className="service my-4">
                                <label
                                    className="block text-md text-slate-800 mb-1"
                                    for="services"
                                >
                                    الخدمة
                                </label>
                                <select
                                    name="services"
                                    id="service"
                                    required
                                    placeholder="اسم الخدمة"
                                    className="relative w-full md:w-full px-2 pl-10 py-2 border-2 rounded-xl focus:outline-none text-slate-800 invalid:text-gray-300 appearance-none"
                                >
                                    <option disabled selected value="">
                                        اسم الخدمة
                                    </option>
                                    {options.map((item) => (
                                        <OptionItem text={item.text} value={item.value} key={item.id} className="text-slate-800"></OptionItem>
                                    ))}
                                </select>
                            </div>
                            <div className="userInfo my-4 flex ">
                                <div className="name w-1/2 ml-3">
                                    <InputField type="text" idInput="name" for_name="name" placeholder="الاسم" labelClassName="block text-md font-light text-slate-800 mb-1" inputClassName="w-full px-2 pl-10 py-2 border-2 rounded-xl focus:outline-none placeholder:text-md placeholder:text-gray-300"></InputField>
                                </div>
                                <div className="tel w-1/2 mr-3">
                                    <InputField type="tel" idInput="phone" for_name="phone" placeholder="رقم الجوال" labelClassName="block text-md font-light text-slate-800 mb-1" inputClassName="w-full px-2 pl-10 py-2 border-2 rounded-xl focus:outline-none placeholder:text-md placeholder:text-gray-300"></InputField>
                                </div>
                            </div>
                            <div className="userMessage my-4">
                                <label
                                    className="block text-md font-light text-slate-800 mb-1"
                                    for="message"
                                >
                                    الرسالة
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    cols="50"
                                    placeholder="اكتب رسالتك هنا..."
                                    className="resize-none w-full px-2 pl-10 py-2 border-2 rounded-xl focus:outline-none  placeholder:text-md placeholder:text-gray-300"
                                ></textarea>
                            </div>
                            <Button text="أرسل" className=" text-white text-xl text-center text-slate-800 bg-sky-400 px-14 py-3 rounded-full transition-all duration-130 hover:ease-in group-hover:text-sky-400 group-hover:bg-white" ></Button>
                        </form>
                    </section>
                    <section className="contentImg hidden md:block md:w-1/2 ">
                        <img
                            src={mainImg}
                            alt="Main Images"
                            className="object-fill w-full h-full rounded-3xl"
                        />
                    </section>
                </section>
            </main>
        </div>
    )
}
