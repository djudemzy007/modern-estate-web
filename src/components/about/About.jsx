import React from 'react';
import Back from '../common/Back';
import Heading from '../common/Heading';
import img from '../images/about.jpg';
import './about.css';

const About = () => {
  return (
    <div>
        <section className='about'>
            <Back name="About Us" title='About Us - Who We Are?' cover={img} />
            <div className='container flex mtop'>
                <div className='left row'>
                    <Heading title='Our agency story' subtitle='Check out our company story and work process' />

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem in sed quibusdam et qui! Quam blanditiis ipsam placeat enim nostrum animi labore cumque a aliquam, explicabo iste. Laborum reprehenderit iure fugit beatae error nostrum rerum!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis amet reiciendis obcaecati, qui quam asperiores. Sed quas incidunt obcaecati dolor veniam reprehenderit alias reiciendis pariatur!</p>
                    <button className='btn2'>More About Us</button>
                </div>
                <div className='right row'>
                        <img src='./immio.jpg' alt=''></img>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About