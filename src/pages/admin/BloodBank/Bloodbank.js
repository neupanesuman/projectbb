import React from 'react';
import Header from '../../../components/admin/Header';

export default function BloodBank() {
    return (
        <div>
        <Header />
           <div class="admcamp">
                <a href="/admin/addbloodbank"><button class="btnnn btn1">Add BloodBank Information</button></a>
                <a href="/admin/showbloodbank"><button class="btnnn btn2">Show BloodBank Information</button></a>
            </div>     
        </div>
    )
};


