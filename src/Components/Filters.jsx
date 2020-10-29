import React from 'react';
import '../App.scss';


function Filters(props) {

  return (
 <div >

   <div className="toggler">
    <select value={props.region} onChange={props.filterSelect}>
           <option value='All'>All</option>
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>
    </select>
        
   </div>

</div> 




  );
}

export default Filters;