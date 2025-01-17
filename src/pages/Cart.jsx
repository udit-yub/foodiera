import React, { useEffect, useState } from 'react'
import Title from '../components/title'
import { Foods } from './data'
import {FaRegWindowClose} from 'react-icons/fa'
import {FaMinus, FaPlus} from 'react-icons/fa6'
import Cartotal from '../components/Cartotal.jsx'
import Footer from '../components/footer'
const Cart = () => {
  const [cartdata , setcartdata] = ([])
  const [quantities, setquantities] = useState([])
  const [cartitems, setcartitems] = useState([]);
  useEffect(()=>{
    if(Foods.length>0)
    {
      const tempdata = []
      const initialquantity = {}
      for(const items in cartitems){
        for(const item in cartitems[items]){
          if(cartitems[items][items]>0){
            tempdata.push({
              _id: items,
              size: item,
              quantity: cartitems[items][item]
            });
            initialquantity[`${items}-${item}`] = cartitems[items][item]
          }
        }
      }
    }
    setcartdata(tempdata)
    setquantities(initialquantity)
  }, [cartitems,Foods])
  return (
    <section className='max-padd-container mt-24'>
      <div className='pt-6'>
        <Title title1={'cart'} title2={'list'} titlesstyles={'h3'} />
        <div>
          {cartdata.map((item, i)=>{
          const productdata = Foods.find(product._id === item._id)
          const key = `${item._id} - ${item.size}`
          return (
            <div key={i} className='p-2 rounded-xl bg-white mt-2'>
              <div className='flex items-center gap-x-3'>
                <div className='flex items-start gap-6 p-2  bg-primary rounded-xl'>
                  <img src={productdata.image} alt='' className='w-16 h-16'/> 
                  </div>
                  <div className='flex flex-col w-full'>
                    <div className='flexBetween'>
                    <h5 className='h5 line-clamp-1'>{productdata.name}</h5>
                    <FaRegWindowClose className='cursor-pointer text-secondary'/>
                    </div>
                    <p className='bold-14 my-0.5'>{item.size}</p>
                    <div className='flexBetween'>
                      <div className='flex items-center ring-1 ring-slate-900/50 rounded-full overflow-hidden bg-primary'>
                        <button className='p-1.5 bg-white text-secondary rounded-full shadow-md'><FaMinus /></button>
                        <p className='px-2'>{quantities[key]}</p>
                        <button>
                          <FaPlus/>
                        </button>
                      </div>
                      <h4 className='h4'>{productdata.price[item.size]}</h4>
                    </div>
                  </div>
              </div>
            </div>
          )

          
          })}
        </div>
        <div className='flex my-20'>
          <div className=''>
            <Cartotal />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Cart
