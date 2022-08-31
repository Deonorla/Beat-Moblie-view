import React from 'react'

const Sponsor = () => {
  return (
    <section className="section">
            <div className="grid-cols-2 gap-y-[5rem] justify-center items-center  grid lg:grid-cols-3 before:" >
                <img 
                src="assets/images/sponsor1.png" 
                alt="" 
                className="sponsor_img"
                />
                <img 
                src="assets/images/sponsor2.png"
                 alt="" className="sponsor_img"
                 />
                <img 
                src="assets/images/sponsor3.png" 
                alt="" className="sponsor_img"
                />
                <img 
                src="assets/images/sponsor4.png" 
                alt="" 
                className="sponsor_img"/>
            </div>
          </section>
  )
}

export default Sponsor;