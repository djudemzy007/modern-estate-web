import React from 'react';
import Back from '../common/Back';
import PriceCard from '../home/price/PriceCard';
import img from '../images/pricing.jpg';

const Pricing = () => {
  return (
    <div>
        <section className='services mb'>
            <Back name='30days Money Back Guarantee' title='No Extra Fees. Friendly Support' cover={img} />
            <div className='price container'>
                <PriceCard />
            </div>
        </section>
    </div>
  )
}

export default Pricing