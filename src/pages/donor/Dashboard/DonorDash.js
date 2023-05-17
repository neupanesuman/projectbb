import React from 'react';
import DonorHeader from '../../../components/donor/DonorHeader'
import './DonorDash.css';
import camg from '../../../images/camg.png'

export default function DonorDash() {
    return (
        <div>
        <DonorHeader />
        <h1 className="heading">Welcome</h1> <img className="Donordash" src={camg} alt="" />
        <p className="para">Gratitude in becoming the Volunteer Donor 😀</p>
        </div>
    )
};


