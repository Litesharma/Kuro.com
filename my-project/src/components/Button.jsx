import React from 'react'
export const Button = ({onClick,name}) => {
  return (
    <button onClick={onClick} >
        <span className='text-xl  shadow-md font-extrabold font-fav transition ease-in-out delay-150 bg-[#E7C6FF] hover:bg-[#C8B6FF]  py-3 px-[21px] rounded-3xl'>{name}</span>
    </button>
  )
}
