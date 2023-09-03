import React from 'react';
import Heading from '../../common/Heading';
import { team } from '../../data/Data';
import './team.css';

const Team = () => {
  return (
    <div>
        <section className='team background'>
            <div className='container'>
                <Heading title='Explore by Team' subtitle='Lorem ipsum dolor elit. Error quae, totam ad vero est neque nam earum esse debitis et numquam nisi.'/>
                
                <div className='content grid3 mtop'>
                    {team.slice(0, 3).map((val, index) => {
                        return (
                            <div className='box' key={index}>
                                <button className='btn3'>{val.list} Listings</button>
                                <div className='details'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                        <i className='fa fa-circle-check'></i>
                                    </div>
                                    <i className='fa fa-location-dot'></i>
                                    <label htmlFor=''>{val.address}</label>
                                    <h4>{val.name}</h4>

                                    <ul>
                                        {val.icon.map((icon, index) => (
                                            <li key={index}>{icon}</li>
                                        ))}
                                    </ul>
                                    <div className='button flex'>
                                        <button>
                                            <i className='fa fa-envelope'> Message</i>
                                        </button>
                                        <button className='btn4'>
                                            <i className='fa fa-phone-alt'></i>
                                        </button>
                                    </div>
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

export default Team