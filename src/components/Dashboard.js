import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import {Table} from 'react-bootstrap'


class Dashboard extends Component {
    constructor(props){
        super();
        this.state={
            data:[],
        }
    }
    getData(){
        fetch("http://localhost:3000/resturant") 
        .then((response)=>{
            response.json().then((result)=>{
                console.warn(result)
                this.setState({data:result})
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
           {  this.state.data?
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
                {this.state.data.map((item,i)=>
                // <div className="list-wrapper">
                //     <span></span>
                //     <span>{item.email}</span>
                //     <span></span>
                //     <span></span>
                //     </div>
                      <tr>
                     <td>{item.id}</td>
                     <td>{item.name}</td>
                     <td>{item.rating}</td>
                     <td>{item.address}</td>
                     <td><p><Link to={"/update/"+item.id}><FontAwesomeIcon  icon={faEdit} color="purple"/></Link> <i onClick={()=>this.delete(item.id)}><FontAwesomeIcon  icon={faTrash} color="grey"/></i></p></td>
                   </tr>)
                    }
                     </tbody>  
</Table>                </div>
                :<p>pleasewait</p>  
    }
            
    

        </div>);
    }
}
 
export default Dashboard;




// useEffect(() => {
//     // DELETE request using fetch with error handling
//     fetch('https://jsonplaceholder.typicode.com/invalid-url', { method: 'DELETE' })
//         .then(async response => {
//             const data = await response.json();

//             // check for error response
//             if (!response.ok) {
//                 // get error message from body or default to response status
//                 const error = (data && data.message) || response.status;
//                 return Promise.reject(error);
//             }

//             setStatus('Delete successful');
//         })
//         .catch(error => {
//             setErrorMessage(error);
//             console.error('There was an error!', error);
//         });
// }, []);

// class RestController extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
	
// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/posts/1', {
// 			method: 'DELETE'
// 		});
// 	}
// 	render() {                            
// 		return (
// 			<div>
// 				<p><b>Resource deleted in the server</b></p>
// 			</div>
// 		)
// 	}
// }

// export default RestController;