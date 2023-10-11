import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.click} className='flex justify-center text-center gap-3 bg-white shadow-md py-2 px-4'>
      {props.children}
    </button>
  )
}

export default Button
