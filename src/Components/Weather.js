import React from "react";

const Weather = (props) => {


        return (
            <div className="info">
                
            {
                props.tempreture && <p className="info_key"><span className="info_value">tempreture : {props.tempreture}</span></p>
            } 
            {
                props.city && <p className="info_key"><span className="info_value">city : {props.city}</span> </p>
            } 
            {
                props.country && <p className="info_key"><span className="info_value">country :  {props.country}</span></p>
            } 
            {
                props.humidity && <p className="info_key"><span className="info_value">humidity : {props.humidity}</span> </p>
            } 
            {
                props.description && <p className="info_key"><span className="info_value">description : {props.description} </span> </p>
            }  
            {
                props.error && <p className="info_key"><span className="info_value"> Error : {props.error}  </span> </p>
            }  
     
    
            </div>
        )
    }


export default Weather ;