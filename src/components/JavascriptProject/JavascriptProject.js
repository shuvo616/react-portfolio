import React from 'react';
import hungry from '../../image/hungry.png'
import megaBusImage from '../../image/discover.PNG'



const hungryCode = 'https://github.com/shuvo616/Hungry-Moonster';
const hungryLive = 'https://shuvo616.github.io/Hungry-Moonster/';

const megaBusCode = 'https://shuvo616.github.io/Discover-Fly/';
const megaBusLive = 'https://github.com/shuvo616/Discover-Fly ';


const JavascriptProject = () => {
    return (
        <div className="ReactProject bg">
            <h2 className="projectTitle mt-5" >Javascript Project </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={hungry} alt="" />
                            <h4>Hungry Master </h4>
                            <p>When user are searching by first letter of food items name, This site will be showing Meal Item , and when click Meal Items it will be show the details of particular Meal Items. </p>
                            <h4>Technology</h4>
                            <p>TheMealDb api,Bootstrap,html,css,Event Handler</p>
                            <a className="viewBtn" href={hungryLive} target="_blank">View Site</a>
                            <a className="codeBtn" href={hungryCode} target="_blank">Source Code</a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12" >
                        <div className="cardSection">
                            <img src={megaBusImage} alt="" />
                            <h4>discover Fly </h4>
                            <p>This Project Simple Bus ticket Booking and calculation information</p>
                            <h4>Technology</h4>
                            <p>Javascript,html,css </p>
                            <a className="viewBtn" href={megaBusLive} target="_blank">View Site</a>
                            <a className="codeBtn" href={megaBusCode} target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavascriptProject;