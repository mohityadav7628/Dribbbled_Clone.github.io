import React from "react";
import './minihome.css'
import bg from './bg.mp4'
export default function Minihome() {
    return (
    <>
            <div className="container">
            <div className="content">
                <div className="video">
                <video className="video-background" autoPlay loop muted>
                    <source src={bg} type="video/mp4" /> 
            </video>    
                  <div className="button">
                    <a href="https://dribbble.com/shots/popular"><button className="Discover">Discover</button></a>
                    <a href="https://dribbble.com/shots/popular/animation"><button className="Animation">Animation</button></a>
                    <a href="https://dribbble.com/shots/popular/branding"><button className="Branding">Branding</button></a>
                    <a href="https://dribbble.com/shots/popular/illustration"><button className="Illustration">Illustration</button></a>
                    <a href="https://dribbble.com/shots/popular/mobile"><button className="Mobile">Mobile</button></a>
                    <a href="https://dribbble.com/shots/popular/print"><button className="Print">Print</button></a>
                    <a href="https://dribbble.com/shots/popular/product-design"><button className="Product">Product Design</button></a>
                    <a href="https://dribbble.com/shots/popular/typography"><button className="Typography">Typography</button></a>
                    <a href="https://dribbble.com/shots/popular/web-design"><button className="Web">Web Design</button></a>
                </div>
                </div>
                <div className="heading">
                    <div className="headingtitle">
                    <h1 >Explore the world’s leading design portfolios</h1>
                </div></div>
                <div className="para">
                    <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
                </div>
                <div className="search">
                   
                    <input  type="text" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search..." />
                {/* <i  class="fa fa-search" ></i> */}
                </div>
                
                <div className="smallbutton">
                    {/* <p className="bottompara">Trending searches</p> */}
               <buttonm className="landingpage">landing page</buttonm>
                <a href="https://dribbble.com/search/ios"> <button className="ios">ios</button></a>
                <a href="https://dribbble.com/search/food"> <button className="food">food</button></a>
                <a href="https://dribbble.com/search/landingpage">   <button className="landingpagesecond">landingpage</button></a>
                <a href="https://dribbble.com/search/uxdesign">    <button className="ux">ux design</button></a>
                <a href="https://dribbble.com/search/app-design">    <button className="aap">aap design</button></a>
                    {/* <p className="bottompara">Trending searches</p>
               <buttonm className="landingpage">landing page</buttonm>
                    <a href="https://dribbble.com/search/ios"><button className="ios">ios</button></a>
                    <a href="https://dribbble.com/search/food"><button className="food">food</button></a>
                    <a href="https://dribbble.com/search/landingpage"><button className="landingpagesecond">landingpage</button></a>
                    <a href="https://dribbble.com/search/uxdesign"><button className="ux">ux design</button></a>
                    <a href="https://dribbble.com/search/app-design"><button className="aap">aap design</button></a> */}
                </div>
                </div>
            </div>
        </>
    )
}