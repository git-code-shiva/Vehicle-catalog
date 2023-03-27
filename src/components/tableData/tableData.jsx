// import React from "react";

// const TableData=()=>{
//     const [data, setData]=useState([]);

//     useEffect(()=>{
//         const fetchData = async()=>{
//             const result = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?ManufacturerType=Intermediate&format=json') 
//             setData(result);
//             console.log(data);

//         };
//         fetchData();
        
//     },[])
//     return(
//         <>
//         {/* <div className="table_data">
//             {data.map(item=>(
                
//             ))}
//         </div> */}
//         </>
//     )
// }
// export default TableData;