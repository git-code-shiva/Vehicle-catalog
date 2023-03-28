import axios from "axios";
import React, { useEffect, useState } from "react";
import "./tableHeader.css";

const TableHeader = () => {
  const [finalData, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterOption, setFilterOption] = useState(finalData);
  const [selectedRowData, setSelectedRowData] = useState(null);
//   const [showpopup, setShowpopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?ManufacturerType=Intermediate&format=json"
      );
      const data = response.data.Results;
      // const parseData = JSON.parse(data);
      // const vehicleType = data.VehicleTypes;
      setData(data);
      console.log(data);

      //    const vtype = data.map((item)=>item.VehicleTypes.map((type)=>type.Name));
      //    console.log(vtype[1]);
    };
    fetchData();
    // console.log(finalData)
  }, [search]);

  useEffect(() => {
    if (filterOption === "All") {
      setFilterOption(finalData);
    } else {
      const filter = finalData.filter((item) => item.Name === filterOption);
      setFilterOption(filter);
    }
  }, [finalData, filterOption]);

  const filteredItems = finalData.filter((item) =>
    item.Mfr_Name.toLowerCase().includes(search.toLowerCase())
  );

  // useEffect(()=>{
  //     const fetchType=async()=>{
  //         const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
  //         const data = response.data.Results
  //     }
  // })

  const viewDetails = (rowData) => {
    setSelectedRowData(rowData);
    // setShowpopup(true)
  };

  const closePopup = () => {
    setSelectedRowData(null);
    // setShowpopup(false);
  };
  return (
    <>
      <div className="header_container">
        <h1 className="main_heading">VEHICLE MANUFACTURES</h1>

        <div className="search_bar">
          <div className="search_div">
            <b>
              <span className="search">Search:</span>
            </b>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="sort_div">
            <b>
              <span className="drop_down">Filter By Vehicle Type:</span>
            </b>
            <select
              value={filterOption}
              onChange={(event) => setFilterOption(event.target.value)}
            >
              <option value="All">All</option>
              {finalData.map((item) =>
                item.VehicleTypes.map((type) => (
                  <option value={type.Name}>{type.Name}</option>
                ))
              )}
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
          {filteredItems.map((item, idx) => (
            <>
              <div className="row" onClick={() => viewDetails(item)}>
                <div className="table_name" key={idx}>
                  {item.Mfr_Name}
                </div>
                <div className="table_country">{item.Country}</div>
                <div className="table_type">
                  {item.VehicleTypes.map((type) => type.Name)}
                </div>
              </div>
            </>
          ))}
        </section>
      </div>
      {selectedRowData && (
        <div className="popup_container">
          <div className="popup_content">
            <div className="popup_header">
              <h2>Manufacture Name:{" "}{selectedRowData.Mfr_Name}</h2>
              <button onClick={closePopup}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TableHeader;
