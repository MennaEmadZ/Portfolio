import react from "react";
import './ContactMe.css';

class ContactMe extends react.Component
{
    constructor()
    {
        super();
       
    };
    
    
    render(){
      
        return (
            <>
            <a href="#" className="btn  my-4 fw-bold contactMe">Contact Me</a >
            </>
        )
    }
}
export default ContactMe;