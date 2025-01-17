import React, { useEffect, useState } from 'react'
import Title from './title'
import Item from './item'
import { Foods } from '../pages/data'
const Popularfoods = () => {
  const [popularfoods, setpopularfoods] = useState([])
  useEffect(()=>{
    const data = Foods.filter(item => item.popular)
    setpopularfoods(data.slice(0,5))
  } , [Foods])

  return (
    <section className='max-padd-container py-16'>
      <Title title1={'Popular'} title2={'Foods'} titlesstyles={'text-center !pb-20'} parastyles={'!block'}/>
      <div className=' grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  pt-20'>
        {popularfoods.map(food=>(
          <div key={food._id} >
            <Item foods={food} />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Popularfoods
