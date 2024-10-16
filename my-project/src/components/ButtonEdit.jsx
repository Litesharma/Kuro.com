import React from 'react'
export const ButtonEdit = ({onClick,name}) => {
  return (
    <button onClick={onClick} >
        <span className='text-xl font-extrabold font-fav transition ease-in-out delay-150 bg-[#BBD0FF] shadow-md hover:bg-[#C8B6FF]  py-2 px-[13px] rounded-3xl'>{name}</span>
    </button>
  )
}
