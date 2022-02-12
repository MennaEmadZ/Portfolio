import react from "react";
import './PortfolioCards.css';

function PortfolioCards(props) {

    return (
        <>
           
                <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
                    <div className="card border-0   project" >
                        <div className="card-body text-center  " >
                            <h4>{props.title}</h4>
                            <div className="hr"></div>
                        </div>
                    </div>
                </div>
        
        </>
    );
}

export default PortfolioCards;