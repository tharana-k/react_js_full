import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Counter.css'
const AnimatedCounter = ({ value1,value2,value3,value4 }) => {
    const { number1, number2,number3,number4 } = useSpring({
        reset: true,
        from: { number1: 0, number2: 0 , number3: 0, number4: 0},
        to: { number1: value1, number2: value2, number3: value3, number4: value4 },
        config: { duration: 1000 },
  });

  return (
    <div>
        <section className='counters'>
<div className='container-fluid'>
    <div className='row'>
    <div className='col-md-3 text-center counter-text'>
      <animated.span>{number1.interpolate((val) => Math.floor(val))}</animated.span>
      <span style={{  margin: '0 0.2rem' }}>+</span>
      <div class="title"><strong>Successflly  Trained</strong> </div>
      </div>
      <div className='col-md-3 text-center counter-text'>
      <animated.span>{number2.interpolate((val) => Math.floor(val))}</animated.span>
      <span style={{  margin: '0 0.2rem' }}>+</span>
      
      <div class="title"><strong>Classes Completed</strong> </div>
      </div>
      <div className='col-md-3 text-center counter-text'>
      <animated.span>{number3.interpolate((val) => Math.floor(val))}</animated.span>
      <span style={{  margin: '0 0.2rem' }}>+</span>
      
      <div class="title"><strong>Expert Faculty Members</strong></div>
      </div>
      <div className='col-md-3 text-center counter-text'>
      <animated.span>{number4.interpolate((val) => Math.floor(val))}</animated.span>
      <span style={{  margin: '0 0.2rem' }}>+</span>
      
      <div class="title"><strong>Years of Educational</strong></div>
      </div>
      </div>
      </div>
      </section>
    </div>
  );
};

export default AnimatedCounter;