import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import email from '../assets/images/email.png'
import phone from '../assets/images/phone-call.png'
import user from '../assets/images/user.png'

export default function ContactUs() {

    const [contactForm, setContactUs] = useState({
        from_first_name: '',
        from_last_name: '',
        from_email: '',
        mobile: '',
        message: '',

    })

    function handleInput(e) {
        const {name, value} = e.target
        setContactUs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function showElementfor3Seconds(element) {
        element.style.opacity = 1;

        setTimeout(() => {
            element.style.opacity = 0
        }, 3000)
    }

    function sendEmail(e) {
        e.preventDefault();   
    
        emailjs.sendForm('service_3j0kdsp', 'template_rkfowtj', e.target, 'bLxyiTUQji0V02Epp')
        .then((result) => {
            const success_message =  document.querySelector('.success');
            showElementfor3Seconds(success_message);
           

            setContactUs({from_first_name: '',
            from_last_name: '',
            from_email: '',
            mobile: '',
            message: '',})
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <section className='contactUs'>
        <div className='container'>
            <div className="contactinfo">
            <div>
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span><img src={user}/></span>
                        <span>Alvin Cheng</span>
                    </li>
                    <li>
                        <span><img src={phone}/></span>
                        <span>(+65) 9385 6755</span>
                    </li>
                    <li>
                        <span><img src={email}/></span>
                        <span>sales@aek.com.sg</span>
                    </li>
                </ul>
            </div>
            </div>
            <div className="contactForm">
                <h2>Send a Message</h2>
                <form onSubmit={sendEmail}>
                <fieldset className='formBox'>
                    <div className='inputBox w50'>
                        <input onChange={handleInput} className='form-input' type="text" name="from_first_name" value={contactForm.from_first_name} required/>
                        <span>First Name</span>
                    </div>
                    <div className='inputBox w50'>
                        <input onChange={handleInput} className='form-input' type="text" name="from_last_name" value={contactForm.from_last_name} required/>
                        <span>Last Name</span>
                    </div>
                    <div className='inputBox w50'>
                        <input onChange={handleInput} className='form-input' type="text" name="from_email" value={contactForm.from_email} required/>
                        <span>Email Address</span>
                    </div>
                    <div className='inputBox w50'>
                        <input onChange={handleInput} className='form-input' type="text" name="mobile" value={contactForm.mobile} required/>
                        <span>Mobile Number</span>
                    </div>
                    <div className='inputBox w100'>
                        <textarea onChange={handleInput} className='form-input' name="message" required value={contactForm.message} ></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div className='inputBox w100'>
                        <input type="submit" value='Send'/>
                    </div>
                </fieldset>
                </form>
                <aside aria-live='polite' className='success'>Successfully sent! Thank you for the message!</aside>
            </div>
        </div>
        
        </section>
    );
    }