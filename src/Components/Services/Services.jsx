import React from "react";
import "./Services.css";
import data from "../../assets/data.jpg";
import uiux from "../../assets/weg.jpg";
import software from "../../assets/software.jpg"
import sd from "../../assets/sd.png"
import ui from "../../assets/designer.png"
import da from "../../assets/da.png"



const Services = () => {
  return (
  <div className="Services" id="services">

    <div className="Service">
        <img src={data} alt="" />
        <div className="caption">
            <img src={da} alt="" />
            <p>Data Analyst</p>
        </div>
        
    </div>

    <div className="Service">
        <img src={uiux} alt="" />
        <div className="caption">
            <img src={ui} alt="" />
            <p>UI UX design</p>
        </div>
    </div>

    <div className="Service">
        <img src={software} alt="" />
        <div className="caption">
            <img src={sd} alt="" />
            <p>Software Development</p>
        </div>
    </div>

  </div>
  )
};

export default Services;
