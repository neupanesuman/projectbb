import React from 'react';
import Header from '../../../components/admin/Header';
import './Campaign.css';

export default function ShowCampaign() {
    return (
        <div>
        <Header />
        <div id="campaign">
            <div class="campbody">
                <section class="campp">
                    <h1 class="campheadd">Campaign List</h1>
                    <div class="leftBox">
                        <div class="campcontent">
                            <p>Date : 2078-06-04</p>
                            <p>Venue: Lalitpur</p>
                            <p>Description : Blood Donation camp by Red Cross Society</p>
                            <p>Time : 10:00 AM - 4:00 PM</p>
                            <button class="cambtn">Delete</button>
                            <a href="/admin/updatecampaign"><button class="cambtn">Update</button></a>
                        </div>
                    </div>  
                </section>              
            </div>
        </div>
        </div>
    )
};


