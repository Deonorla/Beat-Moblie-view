
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
                           <img 
                           src="assets/images/product1.png" 
                           alt="" 
                           className="product_img"/>

                       </div>
                   </article>

                   <article className="product_card">
                    <div className="products_content">
                        <img 
                        src="assets/images/product2.png" 
                        alt="" 
                        className="product_img" />
                       
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img 
                        src="assets/images/product3.png" 
                        alt="" 
                        className="product_img" />
                       
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img 
                        src="assets/images/product4.png" 
                        alt="" 
                        className="product_img" />
                       
                    </div>
                </article>

                <article className="product_card">
                    <div className="products_content">
                        <img 
                        src="assets/images/product5.png" 
                        alt="" 
                        className="product_img" />
                    
                    </div>
                </article>
                </div>
            </section>
  )
}

export default Products