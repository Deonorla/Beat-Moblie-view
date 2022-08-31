import { BsCart3 } from 'react-icons/bs'

const Products = () => {
  return (
    <section className="products section" id="products">
                <h2 className="section_title section_title-gradient product_line">
                   Choose <br /> your style  
                </h2>
                <div className="products_container container grid">
                   <article className="product_card">
                       <div className="products_content">
                           <img src="product1.PNG" alt="" className="product_img"/>
                           <h3 className="product_title">Black</h3>
                           <span className="product_price">$249</span>

                           <button className="button buttom--flex products_button">
                           <BsCart3 className='button_icon' />
                           </button>
                       </div>
                   </article>

                   <article className="product_card">
                    <div className="products_content">
                        <img src="product2.PNG" alt="" className="product_img" />
                        <h3 className="product_title">Red Black</h3>
                        <span className="product_price">$249</span>

                        <button className="button buttom--flex products_button">
                        <BsCart3 className='button_icon' />
                        </button>
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img src="product3.PNG" alt="" className="product_img" />
                        <h3 className="product_title">Night Black</h3>
                        <span className="product_price">$249</span>

                        <button className="button buttom--flex products_button">
                        <BsCart3 className='button_icon' />
                        </button>
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img src="product4.PNG" alt="" className="product_img" />
                        <h3 className="product_title" >Blue</h3>
                        <span className="product_price">$249</span>

                        <button className="button buttom--flex products_button">
                        <BsCart3 className='button_icon' />
                        </button>
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img src="product5.PNG" alt="" className="product_img" />
                        <h3 className="product_title">Twilight grey</h3>
                        <span className="product_price">$249</span>

                        <button className="button buttom--flex products_button">
                        <BsCart3 className='button_icon' />
                        </button>
                    </div>
                </article>
                </div>
            </section>
  )
}

export default Products