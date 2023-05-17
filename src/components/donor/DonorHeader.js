import React from 'react';
import './DonorHeader.css';
import { Link } from "react-router-dom";
import conor from '../../images/conor.jpg'


export default function DonorHeader() {
    return (
       <div class="second">
       <input type="checkbox" id="check"></input>
          <div class="profileHeaderrr">
            <label for="check">
              <i class="fas fa-bars" id="sidebar_btn"></i>
            </label>
            <div class="left_area">
              <h3>Blood <span>Donation</span></h3>
            </div>
            <div class="right_area">
              <Link to='/' class="logout_btnn" >Log Out</Link>
            </div>
          </div>

          <div class="adminSidebarr">
            <center>
              <img class="profile_imagee" src={conor} alt="Logo" />
              <h4>Conor Mcgregor</h4>
            </center>
            <a href="/donor/donordash"><i class="fas fa-dungeon"></i><span>Dashboard</span></a>
            <a href="/donor/profile"><i class="fas fa-users"></i><span>Profile</span></a>
          </div>
        </div>
    )
};

