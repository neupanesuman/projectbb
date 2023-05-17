import React from 'react';
import './BloodBank.css';

function BloodBank() {
    return (
        <div id="bloodbank">
            <div className="bloodbank_table">
                <table class="redTable">
                    <caption>Blood Bank Information</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Service Time</th>
                            <th>Available Blood</th>
                            <th>Packet</th>
                            <th>Contact Number</th>
                            <th>Type of Institution</th>
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
                            </tr>
                              <tr>
                                <td>Active</td>
                                <td>Lalitpur</td>
                                <td>24/7</td>
                                <td>O-, AB+, O+</td>
                                <td>3 each</td>
                                <td>9860423621</td>
                                <td>Clinic</td>
                            </tr>
                              <tr>
                                <td>Stronger Together</td>
                                <td>Bhaktapur</td>
                                <td>24/7</td>
                                <td>A-, B-, B+</td>
                                <td>5 each</td>
                                <td>9843785201</td>
                                <td>Hospital</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BloodBank;
