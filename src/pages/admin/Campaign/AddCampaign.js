import React from 'react';
import Header from '../../../components/admin/Header';
import './Campaign.css';
import camg from '../../../images/camg.png'

export default function AddCampaign() {
    return (
        <div>
        <Header />
         <div class="recontainerr" id="recontainerr">
                    <div class="form-container sign-in-container">
                                    <form>
                                        <h1>Add Campaign</h1>
                                            <input type = "text" placeholder="Campaign Date" name="CampaignDate" />
                                            <input type = "text" placeholder="Campaign Venue" name="CampaignVenue" />
                                            <input type = "text" placeholder="Campaign Description" name="CampaignDescription"/>
                                            <input type = "text" placeholder="Campaign Time" name="CampaignTime"/>
                                            <button >Add</button>
                                    </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                            <h1>You can Add campaign from this form.</h1>
                            <img class="img-side" src={camg} alt="camg"/>
                            <br></br>
                            <a href="/admin/showcampaign"><p><button>Show Campaign</button></p></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};


