import React from 'react';
import Header from '../../../components/admin/Header';
import './Campaign.css';

export default function Campaign() {
    return (
        <div>
        <Header />
           <div class="admcamp">
                <a href="/admin/addcampaign"><button class="btn btn1">Add Campaign</button></a>
                <a href="/admin/showcampaign"><button class="btn btn2">Show Campaign</button></a>
            </div>     
        </div>
    )
};


