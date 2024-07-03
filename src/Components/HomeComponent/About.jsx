import React from "react";
import me from "../../Images/About.png";

const About = () => {
  return (
    <div className="container pb-5 ">
      <h2 className=" py-5 salmon">About Me</h2>
      <div className="row md:row-cols-2 pb-5">
        <div className="col mt-6">
          <div className="mt-6 p-6">
            <h2 className="big salmon"> Subrata Sarker</h2>
            <h2 className="salmon">Full stack web developer</h2>

            <p className="">
              I am Subrata Sarker, I am From Bangladesh, I complete a web
              development course in Programming Hero website , My course name is
              "Complete Web Development With Jhanker Mahbub" .
            </p>
            <p className="">
              Now i can create any kind of website on the base of my skill
            </p>
            <div className="">
              <h2 className="salmon">My Skills:-</h2>
              <div className="text-align-start">
                <ul>
                  <li className="m-1 p-1">HTML</li>
                  <li className="m-1 p-1">CSS</li>
                  <li className="m-1 p-1">BOOTSTRAP</li>
                  <li className="m-1 p-1">TAILWIND CSS</li>
                  <li className="m-1 p-1">REACT JS</li>
                  <li className="m-1 p-1">NODE JS</li>
                  <li className="m-1 p-1">EXPRESS JS</li>
                  <li className="m-1 p-1">MONGODB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            style={{ height: "600px", width: "auto", margin: "auto" }}
            src={me}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
