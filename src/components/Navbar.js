import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';
import location from '../images/location.png';
import Button from './Button';


const Navbar = () =>{

    return(
        <>
        
        <div className="container-fluid nav_bg ">
            <div className="row">
                <div className="col-10 mx-auto justify-content-center">

                
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid nav-link">
    <NavLink className="navbar-brand " to="/"><h5 className="nav_change">StudyPoint</h5></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li>
              <Button to="/enroll" primary="true">Enroll</Button>
          </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active"  className="nav-link active " aria-current="page" to="/"><h5 className="navchange">COURSES</h5></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active"   className="nav-link" to="/learncourses"><h5 className="navchange">LEARNING COURSES</h5></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active"   className="nav-link" to="/prices"><h5 className="navchange">PRICES</h5></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active"   className="nav-link" to="/contacts"><h5 className="navchange">CONTACTS</h5></NavLink>
        </li>
        
        
       </ul>
       
    </div>   
    </div>
</nav>
</div>
</div>
</div>

        </>
    )
}

export default Navbar