import React from 'react'
import {AddShoppingCartOutlined, HomeOutlined, LocalMallOutlined, PersonAddAltOutlined, PersonOutline} from '@mui/icons-material';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="w-1/12 h-screen flex flex-col items-center justify-center bg-gray-100">
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "40px"
                }}>
                <div
                    className="hover:shadow-lg hover:shadow-gray-500/50 hover:text-white hover:border-0 hover:bg-gray-800 w-12 h-12 flex justify-center items-center rounded-2xl   text-gray-600 border-2 border-gray-600">
                    <HomeOutlined
                        style={{
                            fontSize: "20px"
                        }}/>
                </div>
            </Link>
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "40px"
                }}>
                <div
                    className="hover:shadow-lg hover:shadow-gray-500/50 hover:text-white hover:border-0 hover:bg-gray-800 w-12 h-12 flex justify-center items-center rounded-2xl text-gray-600 border-2 border-gray-600">
                    <PersonOutline
                        style={{
                            fontSize: "20px"
                        }}/>
                </div>
            </Link>

            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "40px"
                }}>
                <div
                    className="hover:shadow-lg hover:shadow-gray-500/50 hover:text-white hover:border-0 hover:bg-gray-800 w-12 h-12 flex justify-center items-center rounded-2xl text-gray-600 border-2 border-gray-600">
                    <LocalMallOutlined
                        style={{
                            fontSize: "20px"
                        }}/>
                </div>
            </Link>

            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "40px"
                }}>
                <div
                    className="hover:shadow-lg hover:shadow-gray-500/50 hover:text-white hover:border-0 hover:bg-gray-800 w-12 h-12 flex justify-center items-center rounded-2xl text-gray-600 border-2 border-gray-600">
                    <PersonAddAltOutlined
                        style={{
                            fontSize: "20px"
                        }}/>
                </div>
            </Link>

            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginBottom: "40px"
                }}>
                <div
                    className="hover:shadow-lg hover:shadow-gray-500/50 hover:text-white hover:border-0 hover:bg-gray-800 w-12 h-12 flex justify-center items-center rounded-2xl text-gray-600 border-2 border-gray-600">
                    <AddShoppingCartOutlined
                        style={{
                            fontSize: "20px"
                        }}/>
                </div>
            </Link>

        </div>
    )
}

export default Navbar