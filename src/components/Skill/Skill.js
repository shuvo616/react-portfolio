import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <section id="skill" className="skill_section">
            <div className="container styleSkill">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <div className="left_skill">

                            <h1 className="text1"><span className="text2">MY</span> SKILLS</h1>
                            <p className="text1"> My Web Development Skills </p>
                            <div className="centerDiv">
                                <h6>Javascript</h6>
                                <p>Javascript Es6,Dom,Event handler,Array Function,Object,Class,Json,Api</p>
                            </div>

                            <div className="centerDiv">
                                <h6>React Js</h6>
                                <p>React Component,Props,React Routing,React hook,Firebase Authentication, Api</p>
                            </div>

                            <div className="centerDiv">
                                <h6>Node Js</h6>
                                <p>MongoDb,Curd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="right_skill">
                            <div className="skill1">
                                <p>Html5</p>
                                <div className="skill_bg">
                                    <div className="skil_percent ">
                                        <p>90%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill1">
                                <p>Css3</p>
                                <div className="skill_bg">
                                    <div className="skil_percent width2">
                                        <p>80%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill1">
                                <p>Javascript</p>
                                <div className="skill_bg">
                                    <div className="skil_percent width3">
                                        <p>60%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill1">
                                <p>React Js</p>
                                <div className="skill_bg">
                                    <div className="skil_percent width4">
                                        <p>50%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill1">
                                <p>Node Js</p>
                                <div className="skill_bg">
                                    <div className="skil_percent width5">
                                        <p>40%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill1">
                                <p>MongoDb</p>
                                <div className="skill_bg">
                                    <div className="skil_percent width6">
                                        <p>40%</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;