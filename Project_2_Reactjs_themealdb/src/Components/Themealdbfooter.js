import React from "react";
import F_1 from '../Images/F_1.png'
import tctd from '../Images/logo-tcdb.png'
import adb from '../Images/logo-tadb.png'
import tsdb from '../Images/logo-tsdb.png'
import facebook from '../Images/facebook_icon.png'
import twitter from '../Images/twitter_icon.png'
import discord from '../Images/discord_icon.png'
const Footerthemealdb = ()=>{
    return(
        <>
            <footer>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <p className="text-white flag">© 2024 TheMealDB <br/>Proudly built in the UK 
                                <a href="#" className="text-decoration-none">
                                    <img src={F_1}/></a> 
                                </p>
                            </div>
                    </div>
                    <div className=" col-lg-6">
                            <div className="Socials">
                                <p className="text-white text-center">Socials:
                                    <a href="#" className="text-decoration-none"> <img src={facebook} alt=""/></a>
                                    <a href="#" className="text-decoration-none"> <img src={twitter}/></a>
                                    <a href="#" className="text-decoration-none"> <img src={discord}/></a>
                                </p>
                        </div>
                        <div className=" mx-auto  text-center mt-4 mb-lg-5 ">
                                <span><a href="#" className="text-decoration-none"> <img src={tctd}/></a></span>
                                <span><a href="#" className="text-decoration-none"> <img src={adb}/></a></span>
                                <span ><a href="#" className="text-decoration-none"> <img src={tsdb}/></a></span>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4 mb-3 mt-lg-0 mt-md-0 links ">
                            <a href="#"  className="p-2  text-decoration-none">About</a>
                            <a href="#"  className="p-2  text-decoration-none">Faq</a>
                            <a href="#"  className="p-2  text-decoration-none">Contact</a>
                    </div>
                </div>
                </div>
            </footer> 
        </>
    )
}
export default Footerthemealdb