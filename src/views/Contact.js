import Fade from 'react-reveal/Fade'
import emailjs from "emailjs-com"
import TextCenter from '../components/TextCenter'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'craigrusselltiu', e.target, 'user_xZVaYClL2uZByoDkgCRUY').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <>
            <TextCenter
                header='CONTACT'
                text="If you would like to reach out, just shoot me an email by clicking the email button on the left-most bar of the page or use the email form below.
                    I'll be more than happy to have a chat and answer any questions you may have!"
            />

            <Fade up distance={'40px'} delay={200}>
                <div className='content-wrapper' style={{marginTop: '-150px'}}>
                    <div className='content'>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <h1 className='txt'>EMAIL FORM</h1>
                            <input className='form' type="text" placeholder="Subject" name="subject" /><br />
                            <input className='form' type="text" placeholder="Name" name="name" /><br />
                            <input className='form' type="email" placeholder="E-mail" name="email" /><br />
                            <textarea className='form' type="text" placeholder="Message To Craig" name="subject" style={{height: '200px'}} /><br />
                            <input className='form-btn' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Contact
