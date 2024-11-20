import brand from '../Images/logo-small.png'
import { Link } from "react-router-dom";
import { auth,db } from "./Firebase";
import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Themeal from './Themealdb';
import Chickenhalloumiburgers from './Chickenhalloumiburgers'
import Apithemeal from './Strawberries';
import Letters from './Alphletters';
import Footerthemealdb from "./Themealdbfooter"
// import UserAuthSign from './SignUp';
import Navthemealdb from './Themealdbnav';
import SearchMoreitems from './SearchMoreItems';
const Direct =({presentUser})=> {
  return (
    <>
    <Router>
      <Navthemealdb presentUser = {presentUser}/>
         <Routes>
           <Route path="/" element={<Themeal/>}/>
           <Route path='/strawberri' element={<Apithemeal/>} />
           <Route path="/chicken" element={<Chickenhalloumiburgers/>}/>
           <Route path='/SearchMoreitems' element={<SearchMoreitems/>}/>
         </Routes>
         <Letters/>
         <Footerthemealdb/>
      </Router>
    
    </>
  )
}
export default Direct
