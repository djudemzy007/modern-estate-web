import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard';
import './price.css';

const Price = () => {
  return (
    <div>
        <section className='price padding'>
            <div className='container'>
                <Heading title='Select your package' subtitle='Dolor sit amet consectetur adipisicing elit. Beatae esse eveniet ratione commodi sed ipsum accusantium! Eum pariatur provident quae!' />
                <PriceCard />
            </div>
        </section>
    </div>
  )
}

export default Price