import React from 'react';
import Header from '../../../components/admin/Header';
import './Campaign.css';

export default function UpdateCampaign() {
    return (
        <div>
        <Header />
        <div class="recontainerr" id="recontainerr">
                    <div class="form-container sign-in-container">
                                    <form>
                                        <h1>Update Campaign</h1>
                                            <input type = "text" placeholder="Campaign Date" name="CampaignDate" />
                                            <input type = "text" placeholder="Campaign Venue" name="CampaignVenue" />
                                            <input type = "text" placeholder="Campaign Description" name="CampaignDescription"/>
                                            <input type = "text" placeholder="Campaign Time" name="CampaignTime"/>
                                            <button>Update</button>
                                    </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Make changes happily :)</h1>
                                <p>Oohh! Making changes in the post of organized campaign.</p>
                                <hr></hr>
                                <a href="/admin/showcampaign"><p><button>Show Campaign</button></p></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};


