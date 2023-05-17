import React from 'react';
import './About.css';
import about1 from "../../../images/about1.png"

function About() {

    return (
        <div id="about">
            <div className="about_container">
                <div className="about_writing">
                    <h1 className='about_heading'>About Us</h1>
                    <p className="about_para">
                        We provide a blood service to the people that includes <br/>
                        managing the donaton. Our mission is to help saving as many <br/>
                        lives as possible.
                        <br/> <br/>
                        Because of the support of our remarkable donors we give a <br/>
                        lifeline to all people who needs the help. But there is always <br/>
                        more to do. <br/><br/>
                    </p>
                    <h3 className="about_que">
                        Why give blood?
                    </h3>
                    <p className="about_ans">
                        We want quoting Hemingway - "Therefore never send to <br/>
                        know for whom the bell tolls; it tolls for thee".<br/><br/>

                        Our donors know their friends or family might need blood <br/>
                        some day or we ourselves might need the help some day.<br/><br/>

                        And our donors get the free pastries and milk.<br/><br/>

                        It's worth to do it, isn't it?
                    </p>
                </div>
                <div className="about_image">
                    <img src={about1} alt="" className="about_img" />
                </div>
            </div>
        </div>
    )
}

export default About;
