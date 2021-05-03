import React from 'react';
import './About.css';
import shuvo from '../../image/shuvo.jpg';

const About = () => {
    return (
        <section className="aboutSection pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <img className="img-fluid imageStyle" src={shuvo} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="aboutDes">
                            <h2>About Me</h2>
                            <p>I'm an enthusiastic, responsible and hard working Web developer. I’m always hungry for new technologies, a great fascination with programming and web development.

                            I’m comfortable with Javascript (ES6), Node.js, React.js, Redux, Express.Js, Bootstrap, Material UI, HTML5, CSS3, Firebase, and MongoDB.</p>
                            <p>To seek challenging assignment and responsibility with an opportunity for growth and career advancement as successful achievements.</p>
                           
                        </div>
                       
                        <div className="">
                        <h2 className="text-white">Detail Info</h2>
                            <div className="row aboutInfo">
                            
                                <div className="col-md-6">
                                    <table>
                                        <tr>
                                            <td><p>Date Of Birth: </p></td>
                                            <td><p> 20 November 1992</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Email:</p></td>
                                            <td><p>shuvo616@gmail.com</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>website:</p></td>
                                            <td><p>www.shuvopodder.com</p></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <table>
                                        <tr>
                                            <td><p>Phone:</p></td>
                                            <td><p>+8801725019616</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Address:</p></td>
                                            <td><p>105/2 Shukrabad,Dhanmondi,Dhaka</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Available For: </p></td>
                                            <td><p> Full Time Job, Freelance </p></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;