import React from 'react'
import {useNavigate} from "react-router-dom"


const Home = () => {
    const navigate = useNavigate();

    function clickHandler1(){ 
       navigate("/login");
    }
    function clickHandler2(){ 
        navigate("/login");
     }

  return (
    <>
    <div className="my-10 py-10 mx-5 px-10">
        <h1 className=" mt-10px pt-10px text-6xl text-black font-bold text-center">Welcome to <span className="text-8xl text-indigo-600 font-bold">MEDICARE</span></h1>
        <h3 className="text-2xl text-slate-500 font-semibold text-right">-We are India's biggest Inventory Management System for medicines</h3>
    </div>

    <div className="flex justify-center items-center">
     <button style={{ display: "flex-row",
          justifycontent: "space-between",
          background: "#8338EC",
          color: "white",
          padding: "10 22",
          borderRadius: "20px 0px 0px 0px",
          margin: 2,
          height: 50,
          width: 240,
          cursor: "pointer",
          transition: "all 0.2s ease-in-out ",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)"}}
          
          onClick={clickHandler1}
          >I'm a Customer
    </button>

     <button  style={{ display: "flex-row",
          justifycontent: "space-between",
          background: "#BBD0FF",
          padding: "10 22",
          borderRadius: "0px 0px 20px 0px",
          margin: 18,
          height: 50,
          width: 240,
          color: "black",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)"}}
          

          onClick={clickHandler2}
          >I'm an Admin
    </button>
  </div>
    </>
  )
}

export default Home