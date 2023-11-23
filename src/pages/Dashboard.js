import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/");
    }
  return (
    <div className="m-10 h-[100vh] flex flex-wrap justify-center gap-x-4">
       <div className=" flex h-1/5 w-1/4 bg-indigo-500 hover:bg-indigo-300 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Stock</div>
       <div className=" flex h-1/5 w-1/4 bg-teal-500 hover:bg-teal-300 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Suppliers</div>
       <div className=" flex h-1/5 w-1/4 bg-red-800 hover:bg-red-500 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Sales</div>
       <div className=" flex h-1/5 w-1/4 bg-orange-600 hover:bg-orange-300 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Invoices</div>
       <div className=" flex h-1/5 w-1/4 bg-green-500 hover:bg-green-300 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Purchase Details</div>
       <div className=" flex h-1/5 w-1/4 bg-yellow-600 hover:bg-yellow-400 rounded-2xl text-white text-center font-semibold text-4xl items-center justify-center" onClick={handleClick}>Manage Store</div>
    </div>
  )
}

export default Dashboard