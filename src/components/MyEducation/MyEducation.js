import React from 'react';
import './MyEducation.css'

const MyEducation = () => {
    return (
        <div className="myEducation">
            <div className="container">
                <h2 className="text-center text-white">Education & Professional Experience</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="educationInfo">
                            <p className="yearText">2012-2015</p>
                            <h4>B.Sc in Computer Science And Engineering</h4>
                            <h5>Daffodil International University</h5>
                            <p>Address: 102/1, Sukrabad Mirpur Rd, Dhaka 1207</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                             <p className="yearText">2015-2017</p>
                            <h4>SEO Executive & Digital Marketing</h4>
                            <h5>Preview Technology Limited</h5>
                            <p>Address: 196 Green Road, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                            <p className="yearText">2016-2017</p>
                            <h4>Digital Marketing Officer</h4>
                            <h5>NepsisCorp™</h5>
                            <p>Address: 2304 Oak Street, NY</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                    <div className="educationInfo">
                            <p className="yearText">2021-Continuing</p>
                            <h4>Complete Web Development Course</h4>
                            <h5>Programing Hero</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyEducation;