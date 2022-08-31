import { BsPlus } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';
import { useSelector } from 'react-redux';


const CheckoutCard = ({title, image, price}: any) => {
   const {  amount, total } = useSelector((store: any) => store.cart  )

  return (
    <div className="bg-zinc-800 rounded-[12px] flex flex-col  items-center py-4 px-3">
        <div className=" flex justify-between items-center">
          <img 
          src={image} 
          alt=""
          className="w-[6.5rem] h-[7rem]"
          />
           <div className='flex flex-col justify-center items-center '> 
              <h2>Price</h2>
                <p>{price}</p>
           </div>
        </div>
        
        <div className='flex'>
                <BsPlus className='bg-zinc-800 rounded-[4px] py-1 px-3' />
                 <h4>{amount}</h4>
                 <HiMinusSm className='bg-zinc-800 rounded-[4px] py-1 px-3' />
        </div>

    </div>
  )
}

export default CheckoutCard;