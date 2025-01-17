import React from 'react'
import {GiCheckMark} from "react-icons/gi"
import process1 from "../assets/assets/process1.jpg"
import process2 from "../assets/assets/process2.jpg"

const Process = () => {
  return (
    <section className='max-padd-container py-16 xl:py-20'>
      <div className='flex flex-col gap-20 xl:flex-row'>
        <div className='flex-1 flex flex-col justify-center'>
          <h4 className='h3 max-w-[411px]'>
            Order Your Fav Food in Just a Few Clicks
          </h4>
          <p>
            Experience the convenience of ordering delicious meals anytime,anywhere.Follow these simple steps and have your delicious Food delivered straight to your doorsteps
          </p>
          <div className='my-7 flex flex-col gap-4'>
            <div className='flexStart gap-x-4'>
              <span className='bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full'><GiCheckMark /></span>
              <p>Explore a wide variety of dishes and cuisines</p>
            </div>
            <div className='flexStart gap-x-4'>
              <span className='bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full'><GiCheckMark /></span>
              <p>Explore a wide variety of dishes and cuisines</p>
            </div>
            <div className='flexStart gap-x-4'>
              <span className='bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full'><GiCheckMark /></span>
              <p>Explore a wide variety of dishes and cuisines</p>
            </div>
            <div className='flexStart gap-x-4'>
              <span className='bg-secondary text-white h-6 w-6 p-1.5 flexCenter rounded-full'><GiCheckMark /></span>
              <p>Explore a wide variety of dishes and cuisines</p>
            </div>
          </div>
        </div>
        <div className='flex-1 flex gap-6 xl:gap-12'>
        <div >
          <img src={process1} alt="" className='rounded-xl' />
        </div>
        <div className='relative top-8'>
          <img src={process2} alt="" className='rounded-xl' />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Process
