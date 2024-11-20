import React from "react";
// import meal from '../Images/Apples.png';
import $ from 'jquery';

import mealsTwo from '../Images/meal-icon.png'

import input_1 from '../Images/meal-icon6.png'
import input_2 from '../Images/meal-icon4.png'
import input_3 from '../Images/image2.png'

import Themeals_1 from '../Images/themeal_01.jpg'
import Themeals_2 from '../Images/themeal_02.jpg'
import Themeals_3 from '../Images/themeal_03.jpg'
import Themeals_4 from '../Images/themeal_04.jpg'
import Themeals_5 from '../Images/themeal_05.jpg'
import Themeals_6 from '../Images/themeal_06.jpg'
import Themeals_7 from '../Images/themeal_07.jpg'
import Themeals_8 from '../Images/themeal_08.jpg'

import Themeals_9 from '../Images/readom_01.jpg'
import Themeals_10 from '../Images/readom_02.jpg'
import Themeals_11 from '../Images/readom_03.jpg'
import Themeals_12 from '../Images/readom_04.jpg'
import Themeals_13 from '../Images/readom_05.jpg'
import Themeals_14 from '../Images/readom_06.jpg'
import Themeals_15 from '../Images/readom_07.jpg'
import Themeals_16 from '../Images/readom_08.jpg'


import Themeals_17 from '../Images/Chicken.png'
import Themeals_18 from '../Images/Salmon.png'
import Themeals_19 from '../Images/Beef.png'
import Themeals_20 from '../Images/Pork.png'

import Themeals_24 from '../Images/Wild Mushrooms.png'


import c from '../Images/F_1.png' ;
import c_1 from'../Images/F_2.png';
import c_2 from'../Images/F_3.png';
import c_3 from'../Images/F_4.png';
import c_4 from'../Images/F_5.png';
import c_5 from'../Images/F_6.png';
import c_6 from'../Images/F_7.png';
import c_7 from'../Images/F_8.png';
import c_8 from'../Images/F_9.png';
import c_9 from'../Images/F_10.png';
import c_10 from'../Images/F_11.png';
import c_11 from'../Images/F_12.png';
import c_12 from'../Images/F_13.png';
import c_13 from'../Images/F_14.png';
import c_14 from'../Images/F_15.png';
import c_15 from'../Images/F_16.png';
import c_16 from'../Images/F_17.png';
import c_17 from'../Images/F_18.png';
import c_18 from'../Images/F_19.png';
import c_19 from'../Images/F_20.png';
import c_20 from'../Images/F_21.png';
import c_21 from'../Images/F_22.png';
import c_22 from'../Images/F_23.png';
import c_23 from'../Images/F_24.png';
import c_24 from'../Images/F_25.png';
import c_25 from'../Images/F_26.png';
import c_26 from'../Images/F_27.png';
import c_27 from'../Images/F_28.png';
import c_28 from'../Images/F_29.png';
import c_29 from'../Images/F_30.png';
import c_30 from'../Images/F_31.png';
import c_31 from'../Images/F_32.png';
import c_32 from'../Images/F_33.png';
import c_33 from'../Images/F_34.png';
import { Link } from "react-router-dom";

const Themeal =()=>{

    
    return(
    <>
    <div className="body" >
        <div className="container">
            <div className="row pt-5 pb-3">
                <div className="col-2 align-content-center">
                    <div>
                        <img src={mealsTwo} className="w-100"/>
                    </div>
                </div>
                <div className="col-8 text-center">
                    <div className="themealdb"> 
                        <h1 className="text-white">Welcome to TheMealDB</h1>
                        <p className="text-center text-white mb-0">Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.We also <br/> offer a
                            <a href="#"> free recipe API</a> for anyone wanting to use it, with additional features for subscribers.</p>
                            <button className="btn btn-warning btn-sm py-2 px-5 fw-bold mt-0 mb-1"><i>Pay<span className="text-primary">Pal</span></i></button>
                            <p className="text-center text-white p-2">Click button above to upgrade free API to premium for $3 <br/> Currently (54 supporters)</p>
                    </div>
                </div>
                <div className="col-2 align-content-center">
                    <div>
                        <img src={mealsTwo} className="w-100"/>
                    </div>
                </div>
            </div>
        </div>
{/* -------------------------body----------------------------------- */}
<div className="container underline">
    <div className="line"></div>
</div>
{/* -------------------------body----------------------------------- */}
<div className="container ">
    <div className="row ">
        <div className="col-md-4 col-10 mx-auto py-3">   
            <div class="input-group ">
            <input type="text" class="form-control shadow-none" placeholder="Search for a Meal...." aria-label="Username" aria-describedby="basic-addon1"/>
            
            <span class="input-group-text" id="basic-addon1"> <a href="#" className="text-muted"><i class="fa-solid fa-magnifying-glass"></i></a></span>
            <Link to = "/SearchMoreitems"><button className="btn btn-outline-primary ms-1">Moreitems</button></Link>
            </div>
      </div>
      <p className="text-center text-white ">
          <img src={input_1}/> <span className="fw-bold"> Total Meals: </span>303 &nbsp;
          <img src={input_2}/> <span className="fw-bold"> Total Ingredients:</span> 575 &#160;
          <img src={input_3}/> <span className="fw-bold"> Images:</span> 303
       </p>
     </div>
</div>
{/* ------------------------------------------------------------------------------- */}
<div className="container underline">
    <div className="line"></div>
</div>
{/* --------------------------------------total meals------------------------------------- */}
<div className="container latestmeals py-3">
    <p className="text-center text-white">Latest Meals</p>
    <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto">
            <div className="meal">
            <Link to="/chicken"><img src={Themeals_1} className=" w-100 "/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="">15-minute chicken & halloumi burgers</p> </Link> 
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
            <div className="meal">
            <a href="#">  <img src={Themeals_2}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Lamb Pilaf (Plov)</p> </a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
           <Link to="/strawberri"><img src={Themeals_3}  className=" w-100"/>
           <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
           <p className="text-center">Strawberries Romanoff</p> </Link>
        </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">    <img src={Themeals_4}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        <p className="text-center">Potato Salad (Olivier Salad)</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto ">
        <div className="meal">
            <a href="#">  <img src={Themeals_5} className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Blini Pancakes</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">  <img src={Themeals_6}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        
        <p className="text-center">Fish Soup (Ukha)</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">   <img src={Themeals_7}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        <p className="text-center">Beetroot Soup (Borscht)</p></a>
        </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">  <img src={Themeals_8}  className=" w-100"/>
        
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Cabbage Soup (Shchi)</p> </a>
        </div>
        </div>
    </div>
</div>
{/* ------------------------------------------------------------------------------- */}
<div className="container underline">
    <div className="line"></div>
</div>
   {/* ----------------------------Latest meals---------------------------------- */}           
<div className="container latestmeals">
    <h5 className="text-center text-white p-2">Popular Ingredients</h5>
    <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
        <div className="meal">
            <a href="#">
            <img src={Themeals_17} className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">chicken</p>
            </a>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_18}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Salmon</p>
            </a>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_19}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Beef</p>
            </a>
            </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_20}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Pork</p>
            </a>
        </div>
        </div>
    </div>
</div>
{/* ---------------------------------------------------------------------------- */}
<div className="container underline">
    <div className="line"></div>
</div>
         {/*---------------------------------------popular-----------------  */}
         <div className="container latestmeals py-3">
    <p className="text-center text-white">Random Meals</p>
    <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto">
            <div className="meal">
            <a href="#"><img src={Themeals_9} className=" w-100 "/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="">Corned Beef and Cabbage</p> </a> 
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
            <div className="meal">
            <a href="#">  <img src={Themeals_10}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Peach & Blueberry Grunt</p> </a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
           <Link to="/Stawbry"><img src={Themeals_11}  className=" w-100"/>
           <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
           <p className="text-center">Stuffed Lamb Tomatoes</p> </Link>
        </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">    <img src={Themeals_12}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        <p className="text-center">Osso Buco alla Milanese</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto ">
        <div className="meal">
            <a href="#">  <img src={Themeals_13} className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">General Tso's Chicken</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">  <img src={Themeals_14}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        
        <p className="text-center">Pouding chomeur</p></a>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">   <img src={Themeals_15}  className=" w-100"/>
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
        <p className="text-center">Honey Balsamic Chicken with Crispy Broccoli & Potatoes</p></a>
        </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto">
        <div className="meal">
        <a href="#">  <img src={Themeals_16}  className=" w-100"/>
        
        <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Summer Pudding
            </p> </a>
        </div>
        </div>
    </div>
</div>
{/* -------------------------------------------------------------------- */}
<div className="container latestmeals ">
    <h5 className="text-center text-white p-2">Popular Ingredients</h5>
    <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto total ">
        <div className="meal">
            <a href="#">
            <img src={Themeals_17} className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">chicken</p>
            </a>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_18}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Salmon</p>
            </a>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-3  col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_19}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Beef</p>
            </a>
            </div>
        </div>
        <div className="col-12  col-sm-12 col-md-3 col-lg-3 mx-auto total">
        <div className="meal">
        <a href="#">
            <img src={Themeals_24}  className=" w-100"/>
            <div className="icon">
                <a href="#"><i class="fa-brands fa-searchengin"></i></a>
            </div>
            <p className="text-center">Pork</p>
            </a>
        </div>
        </div>
    </div>
</div>
         {/* --------------Browse Country------------------------------ */}
         <div className="container country mt-2">
         <p className="text-center text-white ">Browse Country</p>
         <div className="row">
            <div className="col-12 text-center flag  mx-auto">
            
            <a href="#" className="text-decoration-none"><img src={c}/></a>
            <a href="#" className="text-decoration-none"><img src={c_1}/></a>
            <a href="#" className="text-decoration-none"><img src={c_2}/></a>
            <a href="#" className="text-decoration-none"><img src={c_3}/></a>
            <a href="#" className="text-decoration-none"><img src={c_4}/></a>
            <a href="#" className="text-decoration-none"><img src={c_5}/></a>
            <a href="#" className="text-decoration-none"><img src={c_6}/></a>
            <a href="#" className="text-decoration-none"><img src={c_7}/></a>
            <a href="#" className="text-decoration-none"><img src={c_8}/></a>
            <a href="#" className="text-decoration-none"><img src={c_9}/></a>
            <a href="#" className="text-decoration-none"><img src={c_10}/></a>
            <a href="#" className="text-decoration-none"><img src={c_11}/></a>
            <a href="#" className="text-decoration-none"><img src={c_12}/></a>
            <a href="#" className="text-decoration-none"><img src={c_13}/></a>
            <a href="#" className="text-decoration-none"><img src={c_14}/></a>
            <a href="#" className="text-decoration-none"><img src={c_15}/></a>
            <a href="#" className="text-decoration-none"><img src={c_16}/></a>
            <a href="#" className="text-decoration-none"><img src={c_17}/></a>
            <a href="#" className="text-decoration-none"><img src={c_18}/></a>
            <a href="#" className="text-decoration-none"><img src={c_19}/></a>
            <a href="#" className="text-decoration-none"><img src={c_20}/></a>
            <a href="#" className="text-decoration-none"><img src={c_21}/></a>
            <a href="#" className="text-decoration-none"><img src={c_22}/></a>
            <a href="#" className="text-decoration-none"><img src={c_23}/></a>
            <a href="#" className="text-decoration-none"><img src={c_24}/></a>
            <a href="#" className="text-decoration-none"><img src={c_25}/></a>
            <a href="#" className="text-decoration-none"><img src={c_26}/></a>
            <a href="#" className="text-decoration-none"><img src={c_27}/></a>
            <a href="#" className="text-decoration-none"><img src={c_28}/></a>
            <a href="#" className="text-decoration-none"><img src={c_29}/></a>
            <a href="#" className="text-decoration-none"><img src={c_30}/></a>
            <a href="#" className="text-decoration-none"><img src={c_31}/></a>
            <a href="#" className="text-decoration-none"><img src={c_32}/></a>
            <a href="#" className="text-decoration-none"><img src={c_33}/></a>
              </div>
             </div>
          
         </div>
         </div>
  </>


    )
}
export default Themeal
