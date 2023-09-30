import React from 'react'

export default function Button({ text, className }) {
  return (
    <div className='group'>
      <button className={className}>
        {text}
      </button>
    </div>
  )
}
