import react from "react";
import './Header.css';
import ContactMe from "./ContactMe";

class Header extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <header className="headerSec">

                    <div className="container h-100">
                        <div className="d-flex h-100 text-left align-items-center">
                            <div className="w-100 ">
                                <h1 className="display-3">Menna Allah Emad</h1>
                                <h3>Full Stack Python Developer</h3>
                                <ContactMe/>
                            </div>
                        </div>
                    </div>
                </header>

            </>
        )
    }
}
export default Header;