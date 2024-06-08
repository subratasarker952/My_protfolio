import React from "react";
import banner from "../Images/baner.png";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="my-5, py-5">
      <div className="container my-5 py-5">
        <div className="row pt-5">
          <div className="col-md-6 ">
            <div className="p-5">
              <h1 className="big">
                Hello !<br /> I am{" "}
                <span className="salmon">Subrata Sarker </span>{" "}
              </h1>
              <h1 className="big">Full-Stack Web Developer. </h1>
            </div>
            <a
              target="download"
              href="https://drive.google.com/file/d/1w-jRaWWMQMOshtitOPovzbl2praBwOlW/view?usp=sharing"
              rel="noreferrer"
              className="warning"
            >
              <Button> Download Resume </Button>
            </a>
          </div>
          <div className="col-md-6 ">
            <div className="p-5">
              <img src={banner} className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
