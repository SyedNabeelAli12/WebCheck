import React, { Component,useEffect ,useState} from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash,faSave } from '@fortawesome/free-solid-svg-icons'
import {Table,Form,InputGroup,FormControl, ButtonGroup, ToggleButton} from 'react-bootstrap'

let radiobutton
let status_Changed
function Status_Changed(radioValue){
    {radiobutton=radioValue}
    if(radiobutton == 1)
    {
      status_Changed="Approved"   
    }
    else
    {
        status_Changed="Disapproved"
    }


}

function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Approve', value: '1' },
      { name: 'Disapprove', value: '2' },

    ];
  
    return (
      <>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value }
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {Status_Changed(radioValue)}
      
      </>
    
    );
  }
  

class Report extends React.Component {
  
  constructor(){
      super();
    this.state = { 
        data:[],
    updatestat:{status_Changed},
    updata:
    {
         name:null,
    status:[],
    id:null
   }
    
}
      
}
      
    getData(){
        fetch("http://localhost:3003/Stats") 
        .then((response)=>{
            response.json().then((result)=>{
                // console.warn(result)
                this.setState({data:result})
            })
        })
  
    }

    changestat(Cid,Cname,Cstatus)

    { 
// console.log(Cname)

      
                fetch("http://localhost:3003/Stats/"+Cid,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:''+Cname,id:+Cid,status:''+status_Changed})
        }).then((result)=>{
            result.json().then((res)=>{
                // alert("Status Chenged")
                this.getData()
            })
         }) 
         
    }
 
    componentDidMount(){
        this.getData()
                 }
         
           
    render() { 
        return (
          
          
          <div>
            { 
              
             this.state.data?
             <div>
                 <Table striped bordered hover>
                 <tr>
       <th>#</th>
       <th>Name</th>
       <th>Status</th>
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
                      <td>{item.status}</td>

                      <td><div className="stat">
                       <ToggleButtonExample /> 
                 
                          <button  onClick={()=>this.changestat(item.id,item.name,item.status)}><FontAwesomeIcon icon={faSave}/></button>
                          </div></td>
                    </tr>)
                     }
                      </tbody>  
 </Table>                </div>
                 :<p>pleasewait</p>  
   
                }
        
         </div> );
    }
}
 
export default Report;