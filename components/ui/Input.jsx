import React from 'react'

const Input = ({type,label}) => {
  return (
    <div className='w-full'>
    <input type={type} placeholder={label} className="border-b border-white bg-transparent outline-none w-full py-3 placeholder:text-light" />
</div>
  )
}

export default Input