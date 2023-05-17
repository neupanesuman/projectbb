import React from 'react';
import Header from '../../../components/admin/Header';
import './Bloodbank.css';

export default function ShowBloodbank() {
    return (
        <div>
        <Header />
           <div id="bloodbankk">
            <div className="bloodbank_tablee">
            <caption>Blood Bank Information</caption>
                <table class="redTablee">
                    
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Service Time</th>
                            <th>Available Blood</th>
                            <th>Packet</th>
                            <th>Contact Number</th>
                            <th>Type of Institution</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>Youth for Blood</td>
                                <td>Kathmandu</td>
                                <td>24/7</td>
                                <td>A+, O+, B+</td>
                                <td>10 each</td>
                                <td>9841236574</td>
                                <td>Organization</td>
                                <td><a href="/admin/updatebloodbank"><button>Update</button></a></td>
                                <td><button>Delete</button></td>
                            </tr>
                              <tr>
                                <td>Active</td>
                                <td>Lalitpur</td>
                                <td>24/7</td>
                                <td>O-, AB+, O+</td>
                                <td>3 each</td>
                                <td>9860423621</td>
                                <td>Clinic</td>
                                <td><a href="/admin/updatebloodbank"><button>Update</button></a></td>
                                <td><button>Delete</button></td>
                            </tr>
                              <tr>
                                <td>Stronger Together</td>
                                <td>Bhaktapur</td>
                                <td>24/7</td>
                                <td>A-, B-, B+</td>
                                <td>5 each</td>
                                <td>9843785201</td>
                                <td>Hospital</td>
                                <td><a href="/admin/updatebloodbank"><button>Update</button></a></td>
                                <td><button>Delete</button></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
};


