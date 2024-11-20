import React from "react";
import brand from '../Images/logo-small.png'
import { Link } from "react-router-dom";
import { auth,db } from "./Firebase";
const Navthemealdb =({presentUser})=> {
    const name = presentUser.email;
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="#"> <img src={brand}/></a>
                <button className="navbar-toggler btn btn-secondary border  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon  "></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  ">
                        <li className="nav-item text-start ">
                            <Link className="nav-link active  text-white" aria-current="page" to="/">
                                <button className="btn btn-danger">HOME</button>
                            </Link>
                        </li>
                        <li className="nav-item  text-start  ">
                            <a className="nav-link " href="https://fakestoreapi.com/">
                                <button className="btn btn-outline-danger border-0 text-white">API</button>
                            </a>
                        </li>
                    </ul>
                    <form className="form-group ">
                        <input className="" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    
                    <form className='drop ms-0 ms-md-2 mt-3 mt-md-0'>
                        <a href='#' className='text-decoration-none text-white fw-bold'>{name.toUpperCase().charAt(0)}</a> 
                    <div className='down border border-dark p-4 bg-light'>
                        <a href='#' className='text-decoration-none'>{name}</a> <br/>
                        <button onClick={()=>auth.signOut()} className="btn btn-outline-danger btn-sm">SignOut</button>
                    </div>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navthemealdb;