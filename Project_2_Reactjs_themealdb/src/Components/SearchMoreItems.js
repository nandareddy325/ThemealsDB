import Data from '../Components/nothing.json'
import React,{useState} from "react";
import download from '../Images/themeal_01.jpg'
const SearchMoreitems=()=>{
    const[search,setSearch] = useState("");
    return(
        <div className='body searchforitems'>
        <div className='container'>
            <div className='row'>
            <div className='col-5 m-auto'>
                <h3 className='text-white pt-2'>Search For Meals Items</h3>
                <input type="text" placeholder="Search Items..." className='w-100 my-3 bg-transparent shadow-none 
                text-white fw-bold border-0  border-bottom ps-1 ' value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                {
                    Data.filter((name)=>name.title.toLowerCase().includes(search.toLowerCase())).map((item)=>(
                        <li className='text-white'> {item.title} </li>
                    ))
                }
                </div>
                <div className='col-3'>
                    <img src={download} className='w-100 pt-4' alt='button'/>
                    <a href={download} download="strawberri"  className='btn btn-light w-100 mt-3 fw-bold'>Download <i class="fa-solid fa-arrow-down"></i></a>
                </div>
            </div>
        </div>
        
    </div>
        
    )
    
}
export default SearchMoreitems