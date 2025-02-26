import React from 'react'

function Input(props: any) {
  return (
    <article className='bg-white rounded-lg shadow-md p-4 text-primary-light flex gap-4 items-center'>
      <input
      className='placeholder:text-[#616161] bg-transparent w-full focus:outline-none'
        {...props}
      />
    </article>
  )
}

export default Input
