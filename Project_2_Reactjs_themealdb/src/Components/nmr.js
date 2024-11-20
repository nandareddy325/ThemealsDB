import React from "react";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UserAuthSign from './SignUp';
import UserAuth from "./Authentication";
const Signroute =()=> {
  return (
    <>
    <Router>
         <Routes>
           <Route path='/' element={<UserAuth/>}/> 
           <Route path='/signUp' element={<UserAuthSign/>}/> 
         </Routes>
      </Router>
    </>
  )
}
export default Signroute
