import React from 'react';
import './Request.css';
import request from '../../../images/request.jpg'
import { Button } from "@material-ui/core";

function Request() {
    return (
        <div id="request">
             <div class="recontainer" id="recontainer">
                <div class="form-container request-container">
                    <form className="request_form">
                            <h1 class="requesthead">REQUEST BLOOD</h1>
                            <input type = "text" placeholder="FullName"/>
                            <input type = "text" placeholder="BloodGroup"/>
                            <input type = "text" placeholder="Phone"/>
                            <input type = "text" placeholder="Details"/>
                            <Button>SEND REQUEST</Button>
                    </form>
                </div>
                    <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1>Send Request For Blood</h1>
                            <img class="img-side" src={request} alt="Logo"/>
                            <p className="request_p">Request for Blood easily and get donor easily. Help and also get Help. Thank you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request;
