import React from 'react';
import Heading from '../../common/Heading';
import { location } from '../../data/Data';
import './location.css';

const Location = () => {
  return (
    <div>
        <section className='location padding'>
            <div className='container'>
                <Heading title='Explore by location' subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quae, totam ad vero est neque nam earum esse debitis et numquam nisi.'/>

                <div className='content grid3 mtop'>
                    {location.slice(0, 3).map((items, index) => {
                        return (
                            <div className='box' key={index}>
                                <img src={items.cover} alt='' />
                                <div className='overlay'>
                                    <h5>{items.name}</h5>
                                    <p>
                                        <label>{items.Villas}</label>
                                        <label>{items.Offices}</label>
                                        <label>{items.Apartments}</label>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Location