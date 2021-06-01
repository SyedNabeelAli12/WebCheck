import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import {Table,Form,Container} from 'react-bootstrap';

class Update extends Component {
    constructor(){
        super();
        this.state={
            name:null
         ,email:null
         ,address:null
         ,rating:null,id:null
        }
  
    }
    
    componentDidMount()
    {
        fetch("http://localhost:3000/resturant/"+this.props.match.params.id) 
        .then((response)=>{
            response.json().then((result)=>{
          
                this.setState({name:result.name,
                    email:result.email,
                    address:result.address,
                    rating:result.rating,id:result.id
                })
            })
        })
    }
    update()
    {
        fetch("http://localhost:3000/resturant/"+this.state.id,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((res)=>{
                alert("Resturant has been Update")
            })
        }) 
      
    }
    render() { 
        console.warn(this.state);
        return (<div> <div><h3>Name</h3> <br/>  <Form.Control onChange={(event)=>{this.setState({name:event.target.value})}}
        placeholder="resturant Name" value={this.state.name}/><br/><br/>
     <h3>Email</h3> <br/>   <Form.Control onChange={(event)=>{this.setState({email:event.target.value})}}
        placeholder="resturant Email" value={this.state.email}/><br/><br/>
<h3>Rating</h3> <br/><Form.Control onChange={(event)=>{this.setState({rating:event.target.value})}}
        placeholder="resturant Rating" value={this.state.rating}/>    <br/><br/>     
      <h3>Address</h3> <br/>  <Form.Control onChange={(event)=>{this.setState({address:event.target.value})}}
        placeholder="resturant Address"value={this.state.address}/> <br/><br/>
        <button onClick={()=>{this.update()}}>Update Resturant</button>
        </div>
     </div>
              );
    }
}
 
export default Update;