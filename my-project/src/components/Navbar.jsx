import React from 'react';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <div className="text-black h-6 w-full py-[50px]">
      <ul className='flex gap-[23rem] justify-around items-center'>
        <li className="font-bold text-2xl text-[#333] border-b-2 border-transparent hover:border-[#d1a8e4] transition-colors duration-300">
          Kuro.com
        </li>
        <div className='flex gap-16'>
          <li  >
            <Button name={"Home"} />   
          </li>
          <li>
            <Button name={"History"} />
          </li>
        </div>
      </ul>
    </div>
  );
};
