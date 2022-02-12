import react from "react";
import './Portfolio.css';
import PortfolioCards from "./PortfolioCards";
import PortfolioDCard from "./PortfolioDCard";

class Portfolio extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <section className="mt5 justify-content-center portfolio ">
                    <div className="container justify-content-center">
                        <div className="row my-5 justify-content-start  ">
                            <h1 className="mx-5">Portfolio</h1>
                        </div>
                        <div className="row my-5 justify-content-center  ">
                            <PortfolioCards title="Web Design" />
                            <PortfolioDCard title="Machine Learning"/>
                            <PortfolioCards title="Web Application Development" />
                            <PortfolioDCard title="Machine Learning"/>
                            <PortfolioCards title="Web Application Development" />
                            <PortfolioDCard title="Machine Learning"/>
                      </div>
                    </div>

                </section>

            </>
        )
    }
}
export default Portfolio;