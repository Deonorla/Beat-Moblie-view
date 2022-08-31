
import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { amount } = useSelector((store : any) => store.cart)

  return (
   
         <header className="w-full fixed top-0 left-0 z-50 bg-transparent mt-5 " >
                    <nav className='h-[3rem] flex items-center justify-between px-2'>
                    
                            <img 
                              src="assets/icon/beat.png" 
                              alt=""
                              className='flex w-[1.5rem]'
                              />
                       
                         <Link to="/cart">
                          <div className='relative mr-4 ' >
                            <BsCart3 
                            className="text-[1.8rem] text-white cursor-pointer" />
                    
                                <p 
                                className='bg-zinc-800 rounded-full py-1 px-3 top-[-1.5rem] right-[-1rem] absolute'> 
                                {amount}
                                </p>
                            
                          </div>
                         </Link>
                    </nav>
         </header>

  )
}

export default Header;