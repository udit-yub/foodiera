import React from 'react'

const Title = ({title1, title2, titlesstyles, title1styles, parastyles}) => {
  return (
    <div className={`${titlesstyles} pb-1`}>
      <h2 className={`${title1styles} h2`}>{title1}
        <span className='text-secondary !font-light'>{title2}</span>
      </h2>
      <p className={`${parastyles} hidden`}>Our food products are crafted with the finest ingredients to <br />deliver exceptional taste and quality</p>
    </div>
  )
}

export default Title
