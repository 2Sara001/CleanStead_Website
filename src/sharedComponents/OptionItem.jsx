import React from 'react'

export default function OptionItem({value,className,text}) {
  return (
    <React.Fragment>
          <option value={value} className={className}>
            {text}
          </option>
    </React.Fragment>
  )
}
