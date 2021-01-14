import React from 'react';
import { Button } from './Button';
import './Footer.css';

const Footer=()=>{
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    join the adventure newsletter to recieve our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer;
