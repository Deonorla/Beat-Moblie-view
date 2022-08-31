
import React from 'react'
import { BsCart3 } from 'react-icons/bs'


const Header: React.FC = () => {
  return (
   
         <header className="w-full fixed top-0 left-0 z-50 bg-transparent " >
                    <nav className='h-[3rem] flex items-center justify-between px-2'>
                    
                            <img 
                              src="assets/icon/beat.png" 
                              alt=""
                              className='flex w-[1.5rem]'
                              />
                        
                        {/* <div className='md:fixed  md:bg-black md:top-[-100%] md:pt-[4rem] md:pr-0 md:pb-3rem'>
                            <ul className="flex flex-col items-center gap-y-4">
                                <li className=''>
                                    <a href="#home" 
                                    className="text-white text-[1.25rem] bg-black bg-clip-text text-transparent ">Home</a>
                                </li>
                                <li >
                                    <a 
                                    href="#specs" 
                                    className="text-white text-[1.25rem] bg-black bg-clip-text text-transparent ">Specs</a>
                                </li>
                                <li >
                                    <a href="#case" 
                                    className="text-white text-[1.25rem] bg-black bg-clip-text text-transparent ">Case</a>
                                </li>
                                <li >
                                    <a 
                                    href="#product"
                                    className="text-white text-[1.25rem] bg-black bg-clip-text text-transparent ">Products</a>
                                </li>
                            </ul>

                        <div className="absolute text-1.5rem top-4 right-4 text-white">
                            <i class="ri-close-line"></i>
                        </div>
                        </div> */}
                      <div  >
                         <BsCart3 
                         className="text-[2.2rem] text-white cursor-pointer" />
                      </div>
                    </nav>
         </header>

  )
}

export default Header;