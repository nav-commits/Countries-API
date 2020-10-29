import React from 'react';
import '../App.scss';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

function Details() {

  const location = useLocation();
  const history = useHistory();
  const data = location.state.popu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 
  const Handleclick = () => {
   history.push('/');
  }
  
  return (
 <div className="cover" >
   
  <button className="go-Back" onClick={Handleclick}>
    <FontAwesomeIcon className="left-arrow" icon={faLongArrowAltLeft}/>
     Back
  </button>

<div className="back-cover">
  
  
     <div className="back-coverOne">  
        <h1>{location.state.countries}</h1>
         <p>Nativename: <span>{location.state.native}</span></p>
        <p>Population: <span>{data}</span></p>
        <p>Subregion: <span>{location.state.sub}</span></p>
        <p>Capital: <span>{location.state.capital}</span></p>
    </div>

 <div className="back-coverTwo">
         {location.state.lang.map((langers,id)=>{
          return <p className="para-one" key={id}> Languages: <span>{langers.name}</span></p>  
                 
         })
         }
         <p> toplevel: <span>{location.state.toplevel}</span></p>
        
         {location.state.cur.map((curers,id)=>{
          return <p key={id}>Curriences: <span>{curers.name}</span></p>
         })
         }

    <div className="bottom-flex"> 
        <h4>Border Countries:</h4> 
        <button className="buttons">{location.state.borders[1]}</button> 
        <button className="buttons">{location.state.borders[2]}</button>
        <button className="buttons">{location.state.borders[3]}</button>   
    </div>

  </div>

  <img  className="flags" src={location.state.flag} alt=""/>
</div>
      
  
</div> 

  );
}

export default Details;