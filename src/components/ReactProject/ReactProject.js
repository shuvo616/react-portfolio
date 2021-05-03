import React from 'react';
import football from '../../image/football.PNG'
import firebase from '../../image/firebase.png'
import './ReactProject.css'



const euroClub = 'https://604a458a9574f41e9e498261--dazzling-stonebraker-bc0286.netlify.app/';
const euroClubCode = 'https://github.com/Porgramming-Hero-web-course/react-router-shuvo616';

const cityrider ='https://city-riders-28ab6.web.app/';
const cityriderCode ='https://github.com/shuvo616/City-Riders';


const ReactProject = () => {
    return (
        <div className="ReactProject bg">
            <h2 className="projectTitle pt-5 mt-2" >React Project</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={football} alt="" />
                            <h4>Football Team Tracker</h4>
                            <p>This site will be showing European Club List , and when click Explore Button it will be show the details of particular club information and short description about club </p>
                            <h4>Technology</h4>
                            <p>React,React Router,useState, useEffect, usePram, Using Bootstrap,The sportDb api,font awesome ,responsive for mobile and desktop</p>
                            <a className="viewBtn"  href={euroClub} target="_blank">View Site</a>
                            <a className="codeBtn" href={euroClubCode}>Source Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={firebase} alt="" />
                            <h4>City Riders </h4>
                            <p>Transport management app with authentication.Users can choose any vehicle to move around the city.Users must have to log in to set destination and see to cost.</p>
                            <h4>Technology</h4>
                            <p>React, React Router, Bootstrap,  Firebase, Heroku.</p>
                            <a className="viewBtn"  href={cityrider} target="_blank">View Site</a>
                            <a className="codeBtn" href={cityriderCode} target="_blank">Source Code</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReactProject;