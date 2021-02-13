import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import  './styles/Menu.css';

const Menu = () => {

    const [state, setState] = useState({
        longitude: 0,
        latitude: 0
    });



    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(
            function(position){
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude,
                });
            },
            function(error){
                console.log("error: ",error);
            },
            {
                enableHighAccuracy: true,
            }
        );
    }, []);

    return(
        <div className="container p-4" id="search_section">
            <h2>Buscar bicicletas cerca</h2>
            <div className="btn btn-primary">
                <Link to={{pathname: "/map", state, }} style={{color: 'white'}}>Buscar</Link> 
            </div>
            
        </div>
    );
};


export default Menu;
