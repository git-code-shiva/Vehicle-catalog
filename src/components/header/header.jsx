import React from "react";
import './header.css'
const Header=()=>{
    return(
        <>
            <div className="header_container">
                <h1 className="main_heading">VEHICLE MANUFACTURES</h1>

                <div className="search_bar">
                    <div className="search_div">
                        <b><span  className="search">Search:</span></b>
                        <input type="text"  />
                    </div>
                    
                    <div className="sort_div">
                    <b><span className="drop_down">Filter By Vehicle Type:</span></b>
                    <select>
                        <option>All</option>
                        <option>Passenger Car</option>
                        <option>Truck</option>
                        <option>Bike</option>
                        <option>Trailer</option>
                        <option>Bus</option>
                        <option>Off Road Vehicle</option>
                        <option>Low speed vehicle</option>
                    </select>
                    </div>
                   
                   
                </div>
            </div>
        </>
    )
}
export default Header;