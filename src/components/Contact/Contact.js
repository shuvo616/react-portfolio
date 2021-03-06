import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faGithub,faInstagram,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const facebook =  <FontAwesomeIcon icon={faFacebookF} />
const github =  <FontAwesomeIcon icon={faGithub} />
const instagram =  <FontAwesomeIcon icon={faInstagram} />
const twitter =  <FontAwesomeIcon icon={faTwitter} />
const LinkedIn =  <FontAwesomeIcon icon={faLinkedinIn} />


const Contact = () => {
    return (
        <section id="skill" className="skill_section mt-5">
        <div className="container styleSkill">
            <div className="h2 text-center text1">Contact</div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="right_skill">
                        <h3 className="text-center mt-5 text1 mb-5">Social Media</h3>
                        <div className="skill1 text-center">
                        <div className="socialIcon">
                                    <a className="github" rel="noreferrer" href="https://github.com/shuvo616" target="_blank">{github}</a>
                                    <a className="facebook" rel="noreferrer" href="https://www.facebook.com/shuvo.podder" target="_blank">{facebook}</a>
                                    <a className="instagram" rel="noreferrer" href="#" target="_blank">{instagram}</a>
                                    <a className="twitter" rel="noreferrer" href="#">{twitter}</a>
                                    <a className="linkind" rel="noreferrer" href="https://www.linkedin.com/in/shuvo-podder-911310126/" target="_blank">{LinkedIn}</a>
                                </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="left_skill">

                        <div className="centerDiv mt-4">
                            <h6>Address</h6>
                            <p>105/2 Shukrabd,Dhanmondi, Dhaka 1207</p>
                        </div>

                        <div className="centerDiv">
                            <h6>Phone</h6>
                            <p>+8801725019616 </p>
                        </div>

                        <div className="centerDiv">
                            <h6>Email</h6>
                            <p>shuvo616@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;