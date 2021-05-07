import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer(){
  return(
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
          </div>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
            <Link to='/'>Test</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MH<i className='fab fa-buffer'></i>
            </Link>
          </div>
          <small className='website-rights'>MCGINLEY HOLDINGS 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
