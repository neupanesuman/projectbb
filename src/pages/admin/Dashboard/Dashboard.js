import React from 'react';
import Header from '../../../components/admin/Header';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <div>
        <Header />
            <main>
                    <div class="cards">
                        <div class="card-single">
                            <div>
                                <h1>7</h1>
                                <span>Users</span>
                            </div>
                            <div>
                                <span class="las la-users"></span>
                            </div>
                        </div>

                        <div class="card-single">
                            <div>
                                <h1>9</h1>
                                <span>Total Requested</span>
                            </div>
                            <div>
                                <span class="las la-users"></span>
                            </div>
                        </div>

                        <div class="card-single">
                            <div>
                                <h1>3</h1>
                                <span>Campaign Organized</span>
                            </div>
                            <div>
                                <span class="las la-users"></span>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
};


