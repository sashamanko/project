import './Dropdown.ui.scss';

import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ className, controllerContent, options, ...props }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={ `Dropdown ${className} ${isOpen ? 'active' : ''}` } { ...props }>
      <button className={ `Dropdown__controller ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        { controllerContent }
      </button>
      
      {isOpen && <nav className='Dropdown__navbar'>
        <ul className='Dropdown__list'>
          {
            Object.keys(options).map( item => {
              return <DropdownItem options={ options[item] }/>;
            })
          }
        </ul>
      </nav>}

    </div>
  );
};

export default Dropdown;