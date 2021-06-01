import React, { Component, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Home from './components/Home';
import {Table,Form,Container} from 'react-bootstrap';
import User from './components/User';

import AboutUs from './components/AddUser';
import Report from './components/Report';
import SearchField from "react-search-field";
import Dashboard from './components/Dashboard';
import EditUser from './components/Search';
import Update from './components/Update';


const Hero =({handleLogout}) => {

  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
   
return(
  <div>
          <section className="hero">
        <nav>
            <h2>Welcome</h2>
          <div className="s">  <Form.Control type="text" onChange={(event)=>(event.target.value) }placeholder="Search"/>          </div>
            <DropdownButton
      alignRight
      title=""
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="option-1">Settings</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">Profile</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">Help and Support</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="some link" onClick={handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
            
            {/* <button onClick={handleLogout}>Logout</button> */}
        </nav>
       
            <div className="sidepanel"> <Home></Home></div>
            <div className="datcont"><Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/user" component={User}/>
          <Route exact path="/edituser" component={EditUser}/>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/update/:id" render={props=>(<Update {...props}/>)}>
      
      </Route>
   
          <Route exact path="/report" component={Report}/>
        </Switch>
       </div>
      
        
    </section>
  
   </div>

)


}

export default Hero;