import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'


import {Table,Form,Container} from 'react-bootstrap';

class EditUser extends Component {
    constructor()
    {
        super();
        this.state={
            searchData:null,
            noData:null,
            lastSearch:""
        }
    }
    delete(id)
    {
        fetch("http://localhost:3000/resturant/"+id,{
            method:"Delete",
            // headers:{
            //     'Content-Type': 'application/json'
            // },
        
        }).then((result)=>{
            result.json().then((res)=>{
                alert("Resturant has been Deleted")
                this.search(this.state.lastSearch)  
            })
        }) 
    }
  
    search(key)
    {
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/resturant?q="+key) .then((data)=>{
            data.json().then((resp)=>{
                console.warn(resp);
                if(resp.length>0)
                {
                  this.setState({searchData:resp,noData:false})
           
                }
                else
                {
                  this.setState({noData:true, searchData:null})
           
                }
                 })
        })
    }
      render() {
          return (<Container>
          
        
          <Form.Control type="text" onChange={(event)=>this.search(event.target.value) }placeholder="Search" />
          <div >
              {
              this.state.searchData?
              <div>
                    <Table striped bordered hover>
                  <tr>
        <th>#</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Location</th>
        <th>Operation</th>
      </tr>
      <tbody>
              {
              this.state.searchData.map((item)=>
             
                 <tr>
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.rating}</td>
                       <td>{item.address}</td>
                       <td><p><Link to={"/update/"+item.id}><FontAwesomeIcon  icon={faEdit} color="purple"/></Link> <i onClick={()=>this.delete(item.id)}><FontAwesomeIcon  icon={faTrash} color="grey"/></i></p></td>
                     </tr>
              )
              }
               </tbody>  
  </Table>               
          </div>
          : ""
              }
              {
                  this.state.noData?<h3>No Data Found</h3>:null
              }
          </div>  
      </Container>
          );}
  }
export default EditUser;