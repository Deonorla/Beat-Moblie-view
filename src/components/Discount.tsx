import React from 'react'
import { BsCart3 } from 'react-icons/bs'

const Discount = () => {
  return (
    <section className=" section" >
        <div className="discount_container container grid">
            <div className="discount_animate">
                <h2 className="discount_title">Immerse yourself in <br/> your music </h2>
                <p className="discount_description">Get it now up to 50% off.</p>

                <a href="#"  className="button button--flex">
                    <BsCart3 className='button--flex' /> Shop Now
                </a>
            </div>

            <img src="assets/images/discount.png" alt="" className="discount_img" />
        </div>
 </section>
  )
}

export default Discount