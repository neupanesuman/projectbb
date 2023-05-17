import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import admin from '../../images/admin.png'


export default function Header() {
    return (
       <div class="first">
       <input type="checkbox" id="check"></input>
          <div class="profileHeaderr">
            <label for="check">
              <i class="fas fa-bars" id="sidebar_btn"></i>
            </label>
            <div class="left_area">
              <h3>Blood <span>Donation</span></h3>
            </div>
            <div class="right_area">
              <Link to='/' class="logout_btn" >Log Out</Link>
            </div>
          </div>

          <div class="adminSidebar">
            <center>
              <img class="profile_image" src={admin} alt="Logo" />
              <h4>Admin</h4>
            </center>
            <a href="/admin/dashboard"><i class="fas fa-dungeon"></i><span>Dashboard</span></a>
            <a href="/admin/user"><i class="fas fa-users"></i><span>Users</span></a>
            <a href="/admin/campaign"><i class="fas fa-campground"></i><span>Campaigns</span></a>
            <a href="/admin/request"><i class="fas fa-hands-helping"></i><span>Requests</span></a>
            <a href="/admin/bloodbank"><i class="fas fa-hands-helping"></i><span>BloodBank</span></a>
          </div>
        </div>
    )
};

