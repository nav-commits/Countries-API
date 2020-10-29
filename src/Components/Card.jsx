import React from 'react';
import '../App.scss';
import {useHistory} from 'react-router-dom';


function Card(
  {country,
  flag,
  region,
  capital,
  population,
  lang,
  sub,
  toplevel,
  cur, 
  native,
  borders
}) 
  {

const data = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const history = useHistory();

const Handleclick = () => {

 history.push(`/Details/${country}`,
 {countries:country,
  region:region, 
  capital:capital,
  flag: flag,
  lang: lang,
  popu: population,
  sub: sub,
  toplevel: toplevel,
  cur:cur,
  native: native,
  borders: borders
});

}

return (
 <div>
   
    <div className="container" >
        <div onClick={Handleclick} className="grid">
            <img src={flag} alt="country"/>
            <div className="text">
                 <h2>{country}</h2>
                 <h4>Population: <span>{data}</span></h4>
                 <h4>Region:  <span>{region}</span></h4>
                 <h4>Capital:  <span>{capital}</span></h4>
           </div>
              
        </div>

   </div>
</div> 

  );
}

export default Card;
