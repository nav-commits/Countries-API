import React,{useState} from 'react';
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import './App.scss';
import {BrowserRouter as  Switch, Route} from 'react-router-dom';
import Details from './Components/Details.jsx';

function App() {
  const [mode, setMode] = useState(true);

   const onChanger = () =>{
   const change =  mode? false: true;
   setMode(change);
   }

  return (
   <div className={mode? "Dark": "Light"}>

  <Switch>
       <Route exact path="/">
          <Header clicked={onChanger} />
           <Body/>
       </Route>
       
        <Route exact path="/Details/:country">
             <Header clicked={onChanger} />
             <Details/>
        </Route>
  </Switch>
  </div>
  );
}

export default App;
