import React, { Component } from 'react';
import {Table,Form,Container} from 'react-bootstrap';

class AboutUs extends Component {
    constructor()
    {
        super();
        this.state={
            name:null
            ,email:null
            ,address:null
            ,rating:null
        }
    }
       create(){
           fetch("http://localhost:3000/resturant",{
               method:"Post",
               headers:{
                   'Content-Type': 'application/json'
               },
               body:JSON.stringify(this.state)
           }).then((result)=>{
               result.json().then((res)=>{
                   alert("Resturant has been added")
               })
           }) 
           
       }
       render() { 
           return (  <div >
            <div className="adduser"> <h3>Name</h3> <br/>  <Form.Control  onChange={(event)=>{this.setState({name:event.target.value})}}
            placeholder="Name"/><br/><br/>
          <h3>Email</h3> <br/>  <Form.Control onChange={(event)=>{this.setState({email:event.target.value})}}
            placeholder="Email"/><br/><br/>
 <h3>Rating</h3> <br/>  <Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}}
            placeholder=" Rating"/>    <br/><br/>     
        <h3>Address</h3> <br/> <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}}
            placeholder=" Address"/> <br/><br/>
            <button onClick={()=>{this.create()}}>Add Resturant</button>
            </div>
            </div>
            ); }
   }
export default AboutUs;