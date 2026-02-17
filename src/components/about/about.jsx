import imgpic from '../../../src/assets/anu.jpg'
import themepattern from '../../../src/assets/theme_pattern.svg'
import './about.css';
import React from 'react';
export function AboutIndex() {
    return (
        <div className="  container-fluid">

            <div id="about">

                <div id="about-title" >
                    <h1 >About me</h1>
                    <img src={themepattern} />
                </div>

                <div id='about-section'>
                    <div id='about-left'>
                        <img height="430px" width="420" src={imgpic} />
                    </div>

                    <div id='about-right'>
                        <div id='about-para'>
                            <p>
                                I am  Frontend Developer with over a decode of professional expertise in the field Throughout my career I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.   </p>

                            <p>MY passion for fronted development is not  reflecated in my extensive experince but also in the enthusiasm and dedication I bring to each project. </p>
                        </div>

                        <div id='about-skiles'>


                            <div id="about-skill" ><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                            <div id="about-skill" ><p>React Js</p><hr style={{ width: "80%" }} /></div>
                            <div id="about-skill" ><p>Javascript</p><hr style={{ width: "70%" }} /></div>
                            <div id="about-skill" ><p>MySql & Mongodb</p><hr style={{ width: "50%" }} /></div>
                            <div id="about-skill" ><p>NodeJs & Express</p><hr style={{ width: "50%" }} /></div>

                        </div>
                    </div>
                </div>


                <div id="about-achhivements">

                    <div id="about-achivement">
                        <h1>0-1years</h1>
                        <p> EXPERIENCE
                        </p>
                    </div>


                    <div id="about-achivement">
                        <h1>10+</h1>
                        <p> PERSONAL PROJECTS
                        </p>
                    </div>
                    <hr />
                    <div id="about-achivement">
                        <h1>2+</h1>
                        <p>MERN PROJECT COMPLETED</p>
                    </div>
                    <hr />

                    <hr></hr>
                    <div id="about-achivement">
                        <h1>1+</h1>
                        <p>ACADEMIC  PROJECTS
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}




