import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee,faEdit,faTrash,faHome,faList,faPlus,faSearch,faInfo,faTachometerAlt,faComment } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
    
    render() { 
        return (
<div>

            {/* <Switch>
<Route exact path='/' component={Dashboard}/>
<Route path='/user' component={User}/>
</Switch> */}
        {/* // <div><a href="/dashboard"> Dashboard</a><br/>
        // <a href="/dashboard"> Users</a><br/>
        // <a href="/dashboard"> Edit Users</a><br/>
        // <a href="/dashboard"> About Us</a></div> */}

        <NavLink   to='/'><FontAwesomeIcon icon={faTachometerAlt}/>  Dashboard</NavLink><br/>
<Link  to='/user'><FontAwesomeIcon icon={faList}/>  User</Link><br/>
<Link  to='/edituser'><FontAwesomeIcon icon={faSearch}/>  Search</Link><br/>
<Link  to='/aboutus'><FontAwesomeIcon icon={faPlus}/>  Add User</Link><br/>
<Link  to='/report'><FontAwesomeIcon icon={faComment}/>  Report</Link><br/>
</div> 
);
    }
}
 
export default Home;