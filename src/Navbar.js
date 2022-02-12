import react from "react";
import './Navbar.css';


class Navbar extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <nav className="navbar navbar-expand-md my-0 "  >
                    <div className="container  justify-content-end ">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center text-center" id="main-nav">
                            <ul className="navbar-nav navbar-center">
                                <li className="nav-item ">
                                    <a className="nav-link" href="#"  >HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT ME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">SKILLS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Portfolio</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="#">CONTACT US</a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;