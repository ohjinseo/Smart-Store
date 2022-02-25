import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function AddProduct() {
  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

  }

  return (
    <div className="flex">
      <Navbar />
      <div className="w-11/12  h-screen  flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-neutral-700 font-thin mb-20">Add Product</h1>
        <div className="flex items-center w-3/4 flex-wrap justify-around">

     
        <input type="text" placeholder="Product Name" className="w-5/12 px-3 py-3 mb-6 text-sm  border-solid border-gray-300 border-b-[1px]"/>
        
        <input type="text" placeholder="Product Desc" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>
        
        <input type="text" placeholder="Product Brand" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        
        <input type="text" placeholder="Product Image" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <input type="text" placeholder="Product Colors  [ex) red, blue]" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <input type="text" placeholder="Product Sizes [ex) S, M]" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <input type="text" placeholder="Product Price" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <input type="text" placeholder="Product Categories [ex)man, sport]" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <input type="text" placeholder="Product Stock" className="w-5/12 px-3 py-3 mb-6 text-sm border-solid border-gray-300 border-b-[1px]"/>

        <button onClick={e => handleClick(e)} className="bg-violet-900 text-white w-5/12 py-3 ">ADD PRODUCT</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct