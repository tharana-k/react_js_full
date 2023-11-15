import React, { useState } from 'react'
import './Accordin.css'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'


const Accordin = ({ title, content,isOpenByDefault  }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-item">
        <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          <h2>{title}</h2>
          <span>{isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    );
  };
  

export default Accordin