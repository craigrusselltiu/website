import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import emailjs from "emailjs-com"
import TextCenter from '../components/TextCenter'

const Contact = () => {
    const [text, setText] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('gmail', 'craigrusselltiu', e.target, 'user_xZVaYClL2uZByoDkgCRUY').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setText('The raven has been sent.')
    }

    return (
        <>
            <TextCenter
                header='CALL ME MAYBE'
                text="If you would like to reach out, just shoot me an email by clicking the email button on the left sidebar of the page, or use the email form below.
                    I'll be more than happy to have a chat and answer any questions you may have!"
            />

            <Fade up distance={'40px'} delay={200}>
                <div className='content-wrapper' style={{marginTop: '-150px'}}>
                    <div className='content'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <h1 className='txt'>EMAIL FORM</h1>
                            <input className='form' type="text" placeholder="Name" name="name" required /><br />
                            <input className='form' type="email" placeholder="E-mail" name="email" required /><br />
                            <input className='form' type="text" placeholder="Subject" name="subject" required /><br />
                            <textarea className='form' placeholder="Message To Craig" name="message" required style={{height: '200px'}} /><br />
                            <input className='form-btn' type="submit" value="Send" /><br />
                            <p className='txt'>{text}</p>
                        </form>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Contact
