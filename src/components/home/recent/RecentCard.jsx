import React from 'react';
import { list } from '../../data/Data';

const RecentCard = () => {
  return (
    <div>
        <div className='content grid3 mtop'>
            {list.slice(0,3).map((val, index) => {
                const {cover, category, location, name, price, type } = val;
                return (
                    <div className='box shadow' key={index}>
                        <div className='img'>
                            <img src={cover} alt='' />
                        </div>
                        <div className='text'>
                            <div className='category flex'>
                                <span style={{background: category === 'For Sale' ? '#25b571a' : '#ff98001a', color: category === 'For Sale' ? '#25b579' : '#ff9800'}}>{category}</span>
                                <i className='fa fa-heart'></i>
                            </div>
                            <h4>{name}</h4>
                            <p>
                                <i className='fa fa-location-dot'></i>{location}
                            </p>
                        </div>
                        <div className='button flex'>
                            <div>
                                <button className='btn2'>{price}</button>
                                <label htmlFor=''>/sqft</label>
                            </div>
                            <span>{type}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RecentCard