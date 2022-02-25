import { AttachMoneyOutlined, LocalMallOutlined, PersonOutlined } from '@mui/icons-material'
import React from 'react'

function StateContainer() {
  return (
    <div
                    className="rounded-2xl py-3 px-3 ml-14 w-2/3 h-40 flex bg-white items-center">
                    <div className="flex border-r-2 pl-7 border-gray-100 h-28 bg-white w-1/4 items-center">
                        <div
                            className="w-14 h-14 bg-blue-50 flex justify-center items-center text-blue-700 rounded-full mr-4"><AttachMoneyOutlined/></div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium text-2xl mb-2">10,234</h3>
                            <span className="font-light text-sm text-gray-700 ">Total Income</span>
                        </div>
                    </div>

                    <div className="flex border-r-2 pl-7 border-gray-100 h-28 bg-white w-1/4 items-center">
                        <div
                            className="w-14 h-14 bg-red-50 flex justify-center items-center text-red-700 rounded-full mr-4"><PersonOutlined/></div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium text-2xl  mb-2">234</h3>
                            <span className="font-light text-sm text-gray-700">Total User</span>
                        </div>
                    </div>

                    <div className="flex border-r-2 pl-7 border-gray-100 h-28 bg-white w-1/4 items-center">
                        <div
                            className="w-14 h-14 bg-teal-50 flex justify-center items-center text-teal-700 rounded-full mr-4"><LocalMallOutlined/></div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium text-2xl  mb-2">378</h3>
                            <span className="font-light text-sm text-gray-700">Total Products</span>
                        </div>
                    </div>

                    <div className="flex rounded-md pl-7 bg-white w-1/4 h-36 items-center">
                        <div
                            className="w-14 h-14 bg-purple-50 flex justify-center items-center text-purple-700 rounded-full mr-4"><AttachMoneyOutlined/></div>
                        <div className="flex flex-col justify-center">
                            <h3 className="font-medium text-2xl  mb-2">10,234</h3>
                            <span className="font-light text-sm text-gray-700">Total Income</span>
                        </div>
                    </div>
                </div>
  )
}

export default StateContainer