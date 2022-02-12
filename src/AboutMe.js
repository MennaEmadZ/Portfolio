import react from "react";
import './AboutMe.css';
class AboutMe extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <section id="cardssec" className="mt5 justify-content-center  ">
                    <div className="container-fluid">
                        <div className="row my-5 justify-content-center  ">
                            <div className="col-lg-3 col-md-12 col-sm-12 text-center mx-5 my-5 ">
                                <h1>About Me</h1>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-start mx-5 my-5 ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit vestibulum augue, volutpat mollis odio ornare quis. Sed gravida consequat lobortis. Ut hendrerit dictum magna in dapibus. Praesent sed diam in metus malesuada cursus quis nec sem. Nullam eget leo magna. Integer elit nibh, ullamcorper nec leo et, ultrices tincidunt libero. Proin sodales viverra turpis non dictum. Etiam lacinia ipsum lorem, ac maximus lectus tincidunt eu. Cras quis eros sed elit interdum tempor. Aenean molestie lobortis lacinia. Mauris porta viverra nibh vitae sollicitudin. Nullam porttitor ipsum ut tempus volutpat. Nam venenatis luctus facilisis. Curabitur sollicitudin orci ut nisl hendrerit, ac pretium mi feugiat.</p>
                                <a href="./MyResume.pdf" className="button resume" download><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default AboutMe;