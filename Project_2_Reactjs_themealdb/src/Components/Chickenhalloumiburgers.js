import axios from "axios";
import React,{useEffect,useState} from "react";
import F_22 from '../Images/F_22.png'
import breasts from '../Images/Chicken Breasts.png'
import Oil from '../Images/Oil.png'
import Hotsauce from '../Images/Hotsauce.png'
import Lemon from '../Images/Lemon Juice.png'
import Buns from '../Images/Buns.png'
import Cheese from '../Images/Cheese.png'
import Cabbage from '../Images/Cabbage.png'
import Mayonnaise from '../Images/Mayonnaise.png'
import Cream from '../Images/Sour Cream.png'
import Lettuce from '../Images/Lettuce.png'
import Pepper from '../Images/Red Pepper.png'
import Arrow_Left from '../Images/Arrow-Left.png'
import Arrow_Right from '../Images/Arrow-Right.png'




const Chickenhalloumiburgers = ()=>{
    const[data, setData]=useState([]);
    useEffect (()=>{
    axios
        
        .get('https://themealdb.com/api/json/v1/1/search.php?s=15-minute%20chicken%20&%20halloumi%20burgers')
        .then(res=> setData(res.data.meals));
    })

       
return(
<div className="Strawberries body">
        {data.map(item=>(
        <div className="container mealsapi py-3">
          <div className="row text-white pb-5 pt-2">
            <div className="col-md-5 col-11  mx-auto">
              <div>
                <h5 className="headline"> <a className="text-decoration-none" href="#"> 
                  <img src={F_22}/> </a> {item.strMeal}</h5>
              </div>
            
                    <div className=" imgs">
                     <a href="#"> <img src={item.strMealThumb} className="w-100"/></a>
                    </div>
                    
            <div className="mt-2">
              No Tag
            </div>
            <div className="row">
              <div className="Arrow">
                <a href="#"><img src={Arrow_Left}/></a>
                <a href="#"><img src={Arrow_Right}/></a>
              </div>
            </div>
                </div>
                <div className=" Ingredients col-md-7 col-11 vegeraion    ">
                  <div className="">
                    <h5 className="">Ingredients</h5>
                  </div>
                  <div className="row text-center">
                    <div className="col-4 mx-auto img">
                      <a href="#" className="text-decoration-none">
                      <img src={breasts} className="w-100"/>{item.strMeasure1} {item.strIngredient1}
                      </a>
                    </div>
                    <div className=" col-4  img">
                    <a href="#" className="text-decoration-none">
                      <img src={Oil} className="w-100"/>{item.strMeasure2} {item.strIngredient2}
                      </a>
                      
                    </div>
                    <div className="col-4 img">
                    <a href="#" className="text-decoration-none">
                      <img src={Hotsauce} className="w-100"/>{item.strMeasure3} {item.strIngredient3}
                      </a>
                      
                    </div>
                    <div className="col-4  img">
                    <a href="#" className="text-decoration-none">
                      <img src={Lemon} className="w-100"/>{item.strMeasure4} {item.strIngredient4}
                      </a>
                    </div>
                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Buns} className="w-100"/>{item.strMeasure5} {item.strIngredient5}
                      </a>
                    </div>
                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Cheese} className="w-100"/>{item.strMeasure6} {item.strIngredient6}
                      </a>
                    </div>

                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Cabbage} className="w-100"/>{item.strMeasure7} {item.strIngredient7}
                      </a>
                    </div>

                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Mayonnaise} className="w-100"/>{item.strMeasure8} {item.strIngredient8}
                      </a>
                    </div>

                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Cream} className="w-100"/>{item.strMeasure9} {item.strIngredient9}
                      </a>
                    </div>

                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Lettuce} className="w-100"/>{item.strMeasure10} {item.strIngredient10}
                      </a>
                    </div>
                    <div className="col-4   img">
                    <a href="#" className="text-decoration-none">
                      <img src={Pepper} className="w-100"/>{item.strMeasure11} {item.strIngredient11}
                      </a>
                    </div>


                    </div>
                </div>
            </div>
            
            
            <div className="col-md-12 mx-auto">
              <div className="text-center">
                <h5 className="text-white">Instractions</h5>
                <span className="mt-4 text-white">
                {item.strInstructions}
                </span>
                
              </div>

            </div>
        </div>
        ))}


        
            
</div>
    )

}
export default Chickenhalloumiburgers