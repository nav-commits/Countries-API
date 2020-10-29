import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';


function Header(props) {
  return (
  <div>
         <FontAwesomeIcon onClick={props.clicked} className="moon" icon={faMoon}/>
      <div className="wrapper">
          <h2 className="where-World">Where in the World?</h2>
      </div>
          <h4 className="color-change">Dark Mode</h4>
   </div>
  );
}

export default Header;
