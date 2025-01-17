import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/assets/logo.svg'
import footer from '../assets/assets/footer.jpg'
import { FOOTER_LINKS, FOOTER_CONTACT_INFO } from '../pages/data'

const Footer = () => {
  return (
    <footer className='max-padd-container flexStart pb-14 pt-20 bg-pattern bg-cover bg-no-repeat rounded-2xl'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 rounded-t-xl'>
          <div className='flex flex-wrap gap-16 sm:justify-between'>
            <div className='max-w-60'>
            <Link to={'/'} className='bold-24 flex-1 flex items-baseline'>
           <img src={logo} alt="" height={24} width={24}    className='hidden sm:flex'/>
            <span className='text-secondary pl-2'>Food</span>iera
            </Link>
            <div>
              <p className='mt-3'>we serve meals made from the freshest and finest ingridients daily.</p>
              <img src={footer} alt=''className='rounded-md mt-6 w-44'/>
            </div>
            </div>
            {FOOTER_LINKS.map((col)=>(
              <Footercolumn key={col.title} title={col.title}>
                <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                  {col.links.map((link, i)=>(
                    <Link to={'/'} key={i}>{link}</Link>
                  ))}
                </ul>
              </Footercolumn>
            ))}
            <div>
              <Footercolumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, i)=>(<Link to={'/'} key={i} className='flex gap-4 md:flex-col lg:flex-row'><p>{link.label}:</p><p className='bol'>{link.value}</p></Link>))}
              </Footercolumn>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
const Footercolumn = ({title, children}) => {
  return (
      <div className='flex flex-col gap-5'>
        <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
        {children}
      </div>
  )
}

export default Footer
