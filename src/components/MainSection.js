import React from 'react';
import './MainSection.css';
import '../App.css';
import {Button} from './Button';

function MainSection(){
  return(
    <div className='main-container' src='/main-image.jpeg'>
      <h1> MCGINLEY HOLDINGS </h1>
      <p> Welcome </p>
      <div className = 'main-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Investments</Button>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Assets</Button>
      </div>
    </div>
  )
}

export default MainSection
