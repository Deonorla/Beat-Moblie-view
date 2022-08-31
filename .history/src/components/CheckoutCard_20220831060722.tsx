import { BsPlus } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { store } from '../Redux/store';

const CheckoutCard = () => {
   const { cartItem, amount, total } = useSelector((store: any) => store.cart  )

  return (
    <div className="bg-zinc-800 rounded-[12px] flex flex-col justify-center items-center py-4 px-3">
        <div className=" flex justify-between items-center">
          <img 
          src={cartItem.image} 
          alt=""
          className="w-[6.5rem] h-[7rem]"
          />
           <div className='flex flex-col justify-center items-center '> 
              <h2>Price</h2>
                <p>{amount}</p>
           </div>
        </div>
        
        <div className='flex'>
                <BsPlus className='bg-zinc-800 rounded-[4px] py-1 px-3' />
                 <h4></h4>
                 <HiMinusSm className='bg-zinc-800 rounded-[4px] py-1 px-3' />
        </div>

    </div>
  )
}

export default CheckoutCard