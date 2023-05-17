import React from 'react';
import Header from '../../../components/admin/Header';
import './Bloodbank.css';
import donation from '../../../images/donation.jpg';

export default function UpdateBloodbank() {
    return (
        <div>
        <Header />
           <div class="recontainerrr" id="recontainerrr">
                    <div class="form-containerr sign-in-containerr">
                                    <form>
                                        <h1>Update Blood Bank Information</h1>
                                            <input type = "text" placeholder="Name" name="name" />
                                            <input type = "text" placeholder="Location" name="location" />
                                            <input type = "text" placeholder="Service Time" name="servicetime"/>
                                            <input type = "text" placeholder="Available Blood" name="availableblood"/>
                                            <input type = "text" placeholder="Packet" name="packet"/>
                                            <input type = "text" placeholder="Contact Number" name="contactnumber"/>
                                            <input type = "text" placeholder="Institution Type" name="institutiontype"/>
                                            <button >Update</button>
                                    </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                            <h1>Update Blood Bank Information.</h1>
                            <img class="img-side" src={donation} alt="camg"/>
                            <br></br>
                            <a href="/admin/showbloodbank"><p><button>Show Blood Bank</button></p></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};


