import axios from "axios";
import React, { useEffect, useState } from "react";
import './tableHeader.css';

const TableHeader=()=>{
    const [finalData, setData]=useState([]);
    const [search, setSearch] = useState('');
    const [filterOption, setFilterOption] = useState(finalData);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?ManufacturerType=Intermediate&format=json') 
            const data = response.data.Results;
            // const v_type = data.VehicleTypes
            setData(data);
            // console.log(data)
            // console.log(v_type)
            
        };
        fetchData();
        console.log(finalData)
        
    },[search])

    useEffect(()=>{
        if(filterOption === "All"){
            setFilterOption(finalData)
        }else{
            const filter = finalData.filter(item=>item.type === filterOption)
            setFilterOption(filterOption)
        }
    },[finalData,filterOption])

    const filteredItems = finalData.filter(item => item.Mfr_Name.toLowerCase().includes(search.toLowerCase()));

    // useEffect(()=>{
    //     const fetchType=async()=>{
    //         const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    //         const data = response.data.Results
    //     }
    // })
    return(
        <>
           <div className="header_container">
                <h1 className="main_heading">VEHICLE MANUFACTURES</h1>

                <div className="search_bar">
                    <div className="search_div">
                        <b><span  className="search">Search:</span></b>
                        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  />
                    </div>
                    
                    <div className="sort_div">
                    <b><span className="drop_down">Filter By Vehicle Type:</span></b>
                    <select value={filterOption} onChange={event =>setFilterOption(event.target.value)}>
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
              <div className="table_container">
              <header className="table_header">
                  <div className="header_name">
                      <h3>Name</h3>
                  </div>
                     
  
                  <div className="header_country">
                    <h3>Country</h3>
                  </div>
  
                  <div className="header_type">
                      <h3>Type</h3>
                  </div>
              </header>

                <section className="table_data">
                    {filteredItems.map((item,idx)=>(
                        <>
                        <div className="row">
                        <div className="table_name" key={idx}>{item.Mfr_Name}</div>
                        <div className="table_country">{item.Country}</div>
                        <div className="table_type">Bus{item.Mfr_CommonName}{}{item.Mfr_ID}</div>
                        </div>
                        </>
                    ))}

                    
                </section>
  
          </div>
       
      
        </>
    )
}
export default TableHeader;