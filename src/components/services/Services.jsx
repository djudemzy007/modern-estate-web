import React from 'react'
import Back from '../common/Back';
import FeaturedCard from '../home/featured/FeaturedCard';
import img from '../images/services.jpg';

const Services = () => {
  return (
    <div>
        <section className='services mb'>
            <Back name='Services' title='Services - All Services' cover={img}/>
            <div className='featured container'>
                <FeaturedCard />
            </div>
        </section>
    </div>
  )
}

export default Services