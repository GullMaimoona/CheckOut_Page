import React from 'react'
import Information from './components/Information';
import OrderSummary from './components/OrderSummary'
const page = () => {
  return (
    <div className='flex max-w-[1140px] mx-auto gap-16'> 
     <Information/>
     <OrderSummary/>
    </div>
  )
}

export default page