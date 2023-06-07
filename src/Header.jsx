import React from "react"
import './header.css'
export default function Header() {
    return (
        <>
            <div className="top">
                <div className="topleft">
                    <ul className="toplist">
                        <a href="https://dribbble.com/hiring"><b><li className="list">Find talent</li></b></a>
                        <a href="https://dribbble.com/for-designers"><b><li className="list">For designers</li></b></a>
                        <a href="https://dribbble.com/shots/popular"><b><li className="list">Inspiration</li></b></a>
                        <a href="https://dribbble.com/learn"><b><li className="list">Learn design</li></b></a>
                        <a href="https://dribbble.com/pro"><b><li style={
                            {
                                color: "#ea4c89"
                            }
                        } className="list ">Go Pro</li></b></a>
                    </ul>
                </div>

                <div className="topcenter">
                  <a href="https://dribbble.com/"><img src="https://mms.businesswire.com/media/20220201006041/en/1345592/4/Dribbble_Logo.jpg" alt="" /></a>
                </div>
                <div className="topright">
                    <a href="https://dribbble.com/session/new"><button className="login">Log in</button></a>
                    <a href="https://dribbble.com/signup/new"><button className="signup">Sing up</button></a>
                    <a href="https://dribbble.com/signup/new?return_to_after_signup=%2Fget-started%23hiringWorkType"><button className="hire">Hire creatives</button></a>

                </div>


            </div>

        </>
    )
}