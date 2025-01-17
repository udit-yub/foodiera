import React from 'react'
import Title from '../components/title'
import Footer from '../components/footer'
import { FaEnvelope, FaHeadphones, FaLocationDot, FaPhone } from 'react-icons/fa6'
const Contact = () => {
  return (
    <section className='max-padd-container mt-24'>
      <div className='flex flex-col xl:flex-row gap-20 py-6'>
        <div>
          <Title title1={'Get'} title2={'in Touch'} titlesstyles={'h3'} />
          <p className='mb-5 max-w-xl'>
            Have questions or need help? Send us a message, and we'll get back to you as soon as possible
          </p>
          <form>
            <div className='flex gap-x-5'>
              <div className='w-1/2 mb-4'>
                <input type="text" name={'name'} className='w-full mt-1 py-1.5 border-none ring-1 ring-slate-900/5 regular-14 rounded' placeholder='Name'/>
              </div>
              <div className='w-1/2 mb-4'>
                <input type="email" name={'email'} className='w-full mt-1 py-1.5 border-none ring-1 ring-slate-900/5 regular-14 rounded' placeholder='Email'/>
              </div>
            </div>
            <div className='mb-4'>
                <textarea name="message" rows='4' placeholder='Write you message here' className='w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 rounded resize-none'/>
            </div>
            <button type='submit' className='btn-dark !rounded shadow-sm'>Send message</button>
          </form>
        </div>
        <div>
          <Title title1={'Contact'} title2={'Details'} titlesstyles={'h3'} />
          <p className=''>We are always here to assist you! Feel free to reach us out to us through any of the following methods</p>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h5 className='h5 capitalize mr-4'>Location:</h5>
              <p className='flexStart gap-x-2'><FaLocationDot />301-a wing mahalxmi appt, market yard, pune</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h5 className='h5 capitalize mr-4'>Email:</h5>
              <p className='flexStart gap-x-2'><FaEnvelope />uds2221237@sicsr.ac.in</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h5 className='h5 capitalize mr-4'>Phone:</h5>
              <p className='flexStart gap-x-2'><FaPhone />9011077209</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <h5 className='h5 capitalize mr-4'>Support:</h5>
              <p className='flexStart gap-x-2'><FaHeadphones />24/1 Support is open</p>
            </div>
          </div>
        </div>
      </div>
      <div className='py-20'>
        <Title title1={'Find'} title2={'us Here'} titlesstyles={'h3'} />
        <div className='w-full h-96 rounded-lg overflow-hidden shadow-md'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d562.4959237158425!2d73.87276737748665!3d18.483367181813737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737093987166!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
