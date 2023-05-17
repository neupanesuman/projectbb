import React from 'react';
import DonorHeader from '../../../components/donor/DonorHeader'
import './Profile.css';

export default function Profile() {
    return (
        <div>
        <DonorHeader />
             <div class="main-profile">
                    <div class="profile-container">
                        <div class="profile-main">
                            <div class="profile-roww">
                               <div class="col-md-8 mt-1">
                                   <div class="card mb-3 profile-content">
                                       <h1 class="m-3 pt-3 myprofile">User Profile</h1>
                                       <div class="card-body">
                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>FullName :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.fullname} */}
                                                    <h5>Conor Mcgregor</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>Age :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.age} */}
                                                    <h5>34</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>Phone Number :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.phoneNumber} */}
                                                    <h5>9803012564</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>Address :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.address} */}
                                                    <h5>Agnishal, Lalitpur</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>Email :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.email} */}
                                                    <h5>mcgregor@gmail.com</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>BloodGroup :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.bloodGroup} */}
                                                    <h5>B+</h5>
                                               </div>
                                           </div>
                                           <hr></hr>

                                           <div class="profile-row">
                                               <div class="col-md-3">
                                                   <h5>Gender :</h5>
                                               </div>
                                               <div class="col-md-9 text-secondary">
                                                    {/* {alluser.gender} */}
                                                    <h5>Male</h5>
                                               </div>
                                           </div>
                                           <hr></hr>
                                           
                                            <div class="buttonss">
                                            <a href="/donor/updateprofile"><button>Update</button></a>
                                            </div>
                                       </div>
                                   </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>     
        </div>
    )
};


