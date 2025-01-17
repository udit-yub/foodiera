import React, { useState } from 'react'
import {FaStar, FaStarHalfStroke} from 'react-icons/fa6'
import {TbShoppingBagPlus} from "react-icons/tb"
import { Foods } from '../pages/data'
import {toast} from 'react-toastify'

const Item = ({foods}) => {
  const [sizes, setsizes] = useState(foods.sizes[0])
  
  const addtocart = async (itemid, size) => {
      if (!size) {
        toast.error('Please select the size first');
        return;
      }
      let cartdata = structuredClone(cartitems); 
      if (cartdata[itemid]) {
        if (cartdata[itemid][size]) {
          cartdata[itemid][size] += 1;
        } else {
          cartdata[itemid][size] = 1;
        }
      } else {
        cartdata[itemid] = {};
        cartdata[itemid][size] = 1;
      }
      setcartitems(cartdata);
    };
    
  const cartcount = () => {
    let totalcount = 0;
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalcount += cartitems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalcount;
  };
  
  return (
    <div className='rounded-xl bg-white relative'>
      <div className='flexCenter m-6 rounded-full '>
        <img src={foods.image} alt='' height={177} width={177} className='object-contain aspect-square rounded-xl' />
      </div>
      <div className='mx-4 bg-white pt-20'>
        <div className='py-3'>
          <h4 className='bold-16 line-clamp-1 mb-1'>{foods.name}</h4>
          <div className='flex items-start justify-between pb-1'><h5 className='medium-14 mb-1'>{foods.category}</h5></div>
          <div className='flex items-center justfy-start gap-x-1 text-secondary bold-14'><FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
          <span className='text-tertiary'>4.5</span>
          </div>
        </div>
        
          <p className='line-clamp-2'>{foods.description}</p>
        </div>
        <div className='flexBetween mb-2 pt-3 px-4'>
          <div className='flex gap-1'>
          {[...foods.sizes]
              .sort((a, b) => {
                const order = ["H", "F", "S", "M", "L", "XL"];
                return order.indexOf(a) - order.indexOf(b);
              })
              .map((item, i) => (
                <button
                  onClick={() => setsizes(item)} // Fixed: Used `setSize` instead of `setsizes`
                  key={i}
                  className={`${
                    item === sizes
                      ? "ring-1 ring-slate-900/10"
                      : "h-6 w-6 bg-primary text-xs font-semibold rounded-sm"
                  }`}
                >
                  {item}
                </button>
              ))}
        </div>
        <button onClick={()=>addtocart(Foods._id, sizes)} className='flexCenter gap-x-1 text-[18px] bg-secondary text-white rounded-sm p-[3px]'><TbShoppingBagPlus /></button>
        </div>
        <div className='flexBetween rounded-xl pb-3 text-[13px] font-semibold px-4'>
          <div className='flex flex-col gap-1'>
            <h5>Prep</h5>
            <p className='text-xs'>5m</p>
          </div>
          <hr className='h-8 w-[1px] bg-tertiary/10 border-none'/>
          <div className='flex flex-col gap-1'>
            <h5>cook</h5>
            <p className='text-xs'>20m</p>
          </div>
          <hr className='h-8 w-[1px] bg-tertiary/10 border-none'/>
          <div className='flex flex-col gap-1'>
            <h5>price</h5>
            <p className='text-xs text-secondary'>{foods.price[sizes]}</p>
          </div>
          
        </div>
      </div>
    
    
  )
}

export default Item
