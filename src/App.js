import React , { Component } from "react";
import Weather from "./Components/Weather";
import Form from "./Components/Form";

let API_KEY = "797622eda943019f45b4dfea580c11d5";
// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44 ;

class App extends Component {

 state = {
   tempreture : '',
   city : '' ,
   country : '' ,
   humidity : '' ,
   description: '',
   error : ''
   } 

getWeather = async (e) => {
e.preventDefault();
let city = e.target.elements.city.value;
let country = e.target.elements.country.value

  const Api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
  const data = await Api.json();
  if ( city && country) {
    this.setState ({
      tempreture : data.main.temp,
      city : data.name ,
      country : data.sys.country ,
      humidity : data.main.humidity ,
      description: data.weather[0].description ,
      error : ''
    })
  }else {
    this.setState({
      tempreture : '',
   city : '' ,
   country : '' ,
   humidity : '' ,
   description: '' ,
   error : 'Please Enter Data'
    })
  }

}

  render () {
  return (
    <div className="wrapper">
     <div className="form-container">
     <Form getWeather={this.getWeather} />
     <Weather 
     tempreture = {this.state.tempreture} 
     city = {this.state.city}  
     country = {this.state.country} 
     humidity = {this.state.humidity} 
     description= {this.state.description}  
     error ={this.state.error} 
     />
    </div>
    </div>
  );
}
}
export default App;
