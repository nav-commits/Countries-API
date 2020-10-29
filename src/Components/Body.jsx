import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Card from '../Components/Card.jsx';
import Filters from '../Components/Filters.jsx';


function Body() {
  const [countries,setCountries] = useState([]);
  const [value, setinfo] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
 
   useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";
    axios.get(url)
    .then(response =>{
      setCountries(response.data)
      console.log(response);
    })
    .catch(err =>{
      console.log(err)
    });
   },[value],[countries]);
    

   useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(value.toLowerCase()) &&
        country.region.toLowerCase().includes(region.toLocaleLowerCase())
      )
    );
  }, [value,region, countries]);
  
   const handleSelect = (event) => {

     if(event.target.value === "All"){
       setRegion('')
     }
     else{
    setRegion(event.target.value);
     }
  };

 
  return (
   
<Fragment>
  <div className="outer"> 
        <div className="searching">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input 
            value={value}
            onChange={e => setinfo(e.target.value)} 
            className="Search" 
            type="text" 
            placeholder="Seach for a country..." />
        </div>
    <div>

   
       
       <Filters
       filterSelect={handleSelect}
       region={region}
       />
    


  </div> 
  
  <div className="container">
  { 
    filteredCountries.map((country,id) =>{
     return <Card 
     key = {id}
     flag={country.flag}
     country ={country.name}
     population ={country.population}
     region = {country.region}
     capital = {country.capital}
     lang={country.languages}
     sub={country.subregion}
     toplevel={country.topLevelDomain}
     cur= {country.currencies}
     native={country.nativeName}
     borders={country.borders}
     /> 
  })
}
  </div>

  </div>
</Fragment>

  );
}

export default Body;
