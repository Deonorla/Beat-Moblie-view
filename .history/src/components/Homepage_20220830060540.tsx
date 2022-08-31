import { IonContent } from '@ionic/react'
import React from 'react'

const Homepage = () => {
  return (
     <IonContent>
         <section className="pt-[4rem] px-4 pb-[2rem] " >
                <div className="sm:grid-cols-[.8fr,1fr] grid">
                    <div>
                        <img 
                        src="assets/images/home.png" alt="" 
                        className="w-[250px] absolute top-[-17rem] right-6"/>
                    </div>

                    <div className="pt-[9rem]">
                        <div className="relative">
                            <h1 className="text-[5.5rem] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500  ">On ear</h1>
                            <h2 className="text-[2.5rem] mb-[2.5rem]-">Beats 3</h2>
                        </div>
                        <div className="">
                            <h3 className="1.125rem">Overview</h3>
                            <p className="mb-[2.5rem] ">Enjoy award-winning Beats sound with wireless listening freedom and a sleek, 
                                streamlined design with comfortable padded earphones, delivering first-rate playback
                            </p>
                            <a 
                            href="" 
                            className="button button--flex">
                                <span className="button--flex">
                                    {/*<i className="ri-shopping-bag-line"></i>*/} Add to Bag
                                </span>
                                <span className="text-[1.123rem] font-semibold ml-3">$299</span>
                            </a>
                        </div>
                    </div>
                </div>
         </section>
     </IonContent>
  )
}

export default Homepage