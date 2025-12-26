import React from 'react'
import Sidebar from './Sidebar'
import Productcards from './Productcards'
const Arrivals = () => {
  return (
    <Sidebar>
    <div className='flex gap-5' >
    <Productcards/>
    </div>
    </Sidebar>
  )
}

export default Arrivals