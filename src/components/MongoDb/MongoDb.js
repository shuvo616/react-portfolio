import React from 'react';
import kilino from '../../image/kilono.PNG'
const kilonoservice = 'https://klino-9291d.web.app/'
const kilonosource = 'https://github.com/shuvo616/Kilino-Cleaning-Service'


const MongoDb = () => {
    return (
        <div className="ReactProject bg">
            <h2 className="projectTitle pt-5 mt-5" >Node Js ,MongoDb Project</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-sm-12" >
                        <div className="cardSection">
                            <img src={kilino} alt="" />
                            <h4>Kilino Cleaning Services </h4>
                            <p>A full-stack responsive app with a conditional dashboard that provides cleaning services.Users can order any services with a credit card, could see the service status from the dashboard, and could give a comment or review. Admin manages all orders and adds/delete services to make another as an Admin.</p>
                            <h4>Technology</h4>
                            <p>JavaScript, React Js, React Router, Bootstrap, Node Js, Express Js, MongoDB, Firebase, Heroku, Stripe.</p>
                            <a className="viewBtn" href={kilonoservice} target="_blank">View Site</a>
                            <a className="codeBtn" href={kilonosource} target="_blank">Source Code</a>
                        </div>
                    </div>
                    <div className="col-md-3"></div>

                </div>
            </div>
        </div>
    );
};

export default MongoDb;