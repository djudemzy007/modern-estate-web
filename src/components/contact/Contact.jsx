import React from 'react';
import Back from '../common/Back';
import './contact.css';
import img from '../images/services.jpg';

const Contact = () => {
  return (
    <div>
        <section>
            <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
            <div className='contact container'>
                <form action='' className='shadow'>
                    <h4>Fillup The Form</h4>
                    <div>
                        <input type='text' placeholder='Name' name='' id=''></input>
                        <input type='email' placeholder='Email' name='' id=''></input>
                    </div>
                    <input type='text' placeholder='Subject' name='' ></input>
                    <textarea name='' cols='30' rows='10'></textarea>
                    <button>Submit Request</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact