import react from "react";
import './PropsSkill.css';

function PropsSkill(props) {

  const WidthVal=props.val
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3 justify-content-center  ">
          <div className="col-lg-2 col-md-2 col-sm-2 text-start skillname  ">
            {props.name}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6  skill text-start  justify-content-start  ">
            <div className="ranges " style={{width:WidthVal+'%' }} > </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default PropsSkill;