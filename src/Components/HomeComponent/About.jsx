import React from "react";
import me from "../../Images/About.png";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="container pb-5 ">
      <h2 className="big py-5 salmon">About Me</h2>
      <div className="row pb-5">
        <div className="col-md-6 pt-6">
          <div className="mt-6 p-6 mt-6">
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
              <h2 className="salmon">
                My Skills:-{" "}
                <span>
                  <Typewriter
                    words={[
                      "HTML 5",
                      "CSS 3",
                      "BOOTSTRAP 5",
                      "TAILWIND CSS",
                      "REACT JS",
                      "NODE JS",
                      "EXPRESS JS",
                      "MONGODB",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            style={{ height: "500px", width: "auto", margin: "auto" }}
            src={me}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
