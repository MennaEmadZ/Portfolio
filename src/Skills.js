import react from "react";
import './Skills.css';
import ProosSkill from "./PropsSkill";
class Skills extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <section className="mt5 justify-content-center  skills">
                    <div className="container">
                        <div className="row my-5 justify-content-center  ">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center mx-5 my-3 ">
                                <h1>Skills</h1>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 text-center mx-5 my-3 ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit vestibulum augue, volutpat mollis odio ornare quis. Sed gravida consequat lobortis. Ut hendrerit dictum magna in dapibus. Praesent sed diam in metus malesuada cursus quis nec sem. Nullam eget leo magna. Integer elit nibh, ullamcorper nec leo et, ultrices tincidunt libero. Proin sodales viverra turpis non dictum. Etiam lacinia ipsum lorem, ac maximus lectus tincidunt eu. Cras quis eros sed elit interdum tempor. Aenean molestie lobortis lacinia. Mauris porta viverra nibh vitae sollicitudin. Nullam porttitor ipsum ut tempus volutpat. Nam venenatis luctus facilisis. Curabitur sollicitudin orci ut nisl hendrerit, ac pretium mi feugiat.</p>

                            </div>

                        </div>
                        <div className="row my-5 justify-content-center  ">
                            <div className="col-lg-4 col-md-12 col-sm-12 justify-content-center  text-center mx-5 my-3 ">
                                <h4>My Focus</h4>
                                <div className="hr text-center my-4"></div>
                                <h4>Responsive Design</h4>
                                <h4>Web Design</h4>
                                <h4>Backend</h4>

                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 text-center mx-5 my-3 ">
                                <ProosSkill name="HTML" val="100"  />
                                <ProosSkill name="CSS" val="100" />
                                <ProosSkill name="JS" val="70" />
                                <ProosSkill name="React" val="50" />
                                <ProosSkill name="Python" val="80" />
                                <ProosSkill name="DB" val="50" />
                            </div>

                        </div>

                    </div>
                </section>
            </>
        )
    }
}
export default Skills;