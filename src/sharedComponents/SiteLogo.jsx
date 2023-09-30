import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function SiteLogo({imgWidth , textSize}) {
    return (
        <React.Fragment>
            <Link to="/" className="flex items-center">
                <img src={Logo} className={`ml-1 w-9 ${imgWidth}`} alt="Logo" />
                <p className={`font-bold ${textSize} text-slate-800`}>
                    كلين <span className="text-sky-400">ستيد</span>
                </p>
            </Link>
        </React.Fragment>
    )
}
