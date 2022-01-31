import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

export class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {
         logout :""
        }

    }
   componentDidMount =()=>{
    localStorage.setItem('is_logged',false)

    console.log(this.state.logout);
    this.setState({
    logout:JSON.parse(localStorage.getItem('is_logged'))
    })
   

   };

  
    render() {
     
    return <div>
    { this.state.logout == false ? <Navigate to="/" replace={true}   /> : ""}
    </div>;
  }
}

export default Logout;
