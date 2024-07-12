import React from 'react';
import {Link} from "react-router-dom";
import {Home,} from "@mui/icons-material";


const CongratsPage = () => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <header style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginBottom:'10%'
                }}>
                    <Link to="/" className="App-link"><Home style={{color: '#D3B6F8', fontSize: 40}}/></Link>
                </header>
                <h1 className="text-2xl font-bold text-center text-purple-800 mb-6">
                   행복하게 살아!
                </h1>

                <img src={`/assets/images/img_congrats3.png`} alt="축하 이미지"/>

            </div>

            <style></style>
        </div>
    );
};

export default CongratsPage;