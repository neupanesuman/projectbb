import React from 'react';
import DonorHeader from '../../../components/donor/DonorHeader';
import './Profile.css';

export default function UpdateProfile() {
    return (
        <div>
        <DonorHeader />
        <div class="recontainerr" id="recontainerr">
                    <div class="form-container sign-in-container">
                                    <form>
                                        <h1>Update Profile</h1>
                                            <input type = "text" placeholder="FullName" name="fullname" />
                                            <input type = "text" placeholder="Age" name="gge" />
                                            <input type = "text" placeholder="Phone Number" name="Phone Number"/>
                                            <input type = "text" placeholder="Address" name="address"/>
                                            <input type = "text" placeholder="Email" name="email"/>
                                            <input type = "text" placeholder="BloodGroup" name="bloodgroup"/>
                                            <input type = "text" placeholder="Gender" name="gender"/>

                                            <button>Update</button>
                                    </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Make changes happily 😀</h1>
                                <p>Wanna change your personal information. Do it freely.</p>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};


