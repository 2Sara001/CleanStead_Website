import React from 'react'
import { Link } from "react-router-dom";

export default function ListItem({verMargin,text,className}) {
  return (
    <React.Fragment>
          <li className={verMargin}>
              <Link
                  to="/"
                  className={className}
              >
                 {text}
              </Link>
          </li>
    </React.Fragment>
  )
}
