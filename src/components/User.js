
import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {Table} from 'react-bootstrap'


class User extends Component {
    constructor(props){
        super();
        this.state={
            list:null,
        }
    }
    getData(){
        fetch("http://localhost:3000/resturant") 
        .then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                this.setState({list:result})
            })
        })
  
    }
    componentDidMount(){
this.getData()
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
                this.getData()  
            })
        }) 
    }
    render() { 
      
        return (  <div>
           {  this.state.list?
            <div className="operation">
                <Table striped bordered hover>
                <tr>
      <th>#</th>
      <th>Name</th>
      <th>Rating</th>
      <th>Location</th>
      <th>Operation</th>
    </tr>
    <tbody>
                {this.state.list.map((item,i)=>
                // <div className="list-wrapper">
                //     <span></span>
                //     <span>{item.email}</span>
                //     <span></span>
                //     <span></span>
                //     </div>
                      <tr>
                     <td>{i+1}</td>
                     <td>{item.name}</td>
                     <td>{item.rating}</td>
                     <td>{item.address}</td>
                     <td><p><Link to={"/update/"+item.id}><FontAwesomeIcon  icon={faEdit} /></Link> <i onClick={()=>this.delete(item.id)}><FontAwesomeIcon  icon={faTrash} color="grey"/></i></p></td>
                   </tr>)
                    } </tbody>  
</Table>                </div>
                :<p>pleasewait</p>  
    }
            
    

        </div>);
    }
}
export default User;