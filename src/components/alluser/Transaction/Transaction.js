import React, { useState } from 'react';
import './Transaction.css';
import register from '../../../images/register.jpg';
import refreshment from '../../../images/refreshment.jpg';
import donation from '../../../images/donation.jpg';
import health from '../../../images/health.PNG';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../Home/HomeElements';
import { Button } from '../ButtonElement';

function Transaction() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const style = {
      margin: 10,
    };
    return (
            <div id="transaction">
                <div class="donbox">
                    <p class="donhead">The Blood Donation Process</p>
                    <p class="donh">The blood donation process from the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average.</p>
                    <div class="donation">
                        <details class="det">
                            <p>Step 1 : Registration</p>
                            <img class="donimg" src={register} alt=""/>
                            <p class="text">We’ll sign you in and go over basic eligibility.
                                You’ll be asked to show ID, such as your driver’s license.
                                You’ll read some information about donating blood.
                                We’ll ask you for your complete address.  Your address needs to be complete (including PO Box, street/apartment number) and the place where you will receive your mail 8 weeks from donation.</p>

                                <hr></hr>

                            <p>Step 2 : Health History</p>
                            <img class="donimg" src={health} alt=""/>
                            <p class="text">You’ll answer a few questions about your health history and places you’ve traveled, during a private and confidential interview.
                                You’ll tell us about any prescription and/or over the counter medications that may be in your system.
                                We’ll check your temperature, pulse, blood pressure and hemoglobin level. </p>

                                <hr></hr>

                            <p>Step 3 : Your Donation</p>
                            <img class="donimg" src={donation} alt=""/>
                            <p class="text">If you’re donating whole blood, we’ll cleanse an area on your arm and insert a brand new sterile needle for the blood draw. (This feels like a quick pinch and is over in seconds.)
                                Other types of donations, such as platelets, are made using an apheresis machine which will be connected to both arms.
                                A whole blood donation takes about 8-10 minutes, during which you’ll be seated comfortably or lying down.
                                When approximately a pint of whole blood has been collected, the donation is complete and a staff person will place a bandage on your arm.
                                For platelets, the apheresis machine will collect a small amount of blood, remove the platelets, and return the rest of the blood through your other arm; this cycle will be repeated several times over about 2 hours.</p>

                                <hr></hr>

                            <p>Step 4 : Refreshment and Recovery</p>
                            <img class="donimg" src={refreshment} alt=""/>
                            <p class="text">After donating blood, you’ll have a snack and something to drink in the refreshment area.
                                You’ll leave after 10-15 minutes and continue your normal routine.
                                Enjoy the feeling of accomplishment knowing you are helping to save lives.
                                Take a selfie, or simply share your good deed with friends. It may inspire them to become blood donors. </p>

                                <hr></hr>

                        </details>
                    </div>
                </div>
                <HeroBtnWrapper>
                    <Button to="/signup" style={style} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        Be Donor {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </div>
    )
}

export default Transaction;
