import React from 'react';
import Header from '../../../components/admin/Header';
import './Request.css';

export default function Request() {
    return (
        <div>
        <Header />
        <div id="campaign">
            <div class="campbody">
                <section class="campp">
                    <h1 class="campheadd">See Request</h1>
                    <div class="leftBox">
                        <div class="campcontent">
                            <p>FullName :  John Cena
                                {/* {
                                request.FullName
                                } */}
                                </p>
                                <p>BloodGroup : B+
                                {/* {
                                request.BloodGroup
                                } */}
                                </p>
                                <p>Phone : 9818745623
                                {/* {
                                request.Phone
                                } */}
                                </p>
                                <p>Detail : Need of blood
                                {/* {
                                request.Location
                                } */}
                                </p>
                                <button class="cambtn">Assign</button>
                                <button class="cambtn">Delete</button>
                        </div>
                    </div>  
                </section>              
            </div>
        </div>
        </div>
    )
};


