import React from 'react';
import Image from "next/image";

// Make skills as an array so that we can use .map to iterate
const skills = [
    { skill: "Python" },
    { skill: "SQL" },
    { skill: "Java" },
    { skill: "C" },
    { skill: "JavaScript" },
    { skill: "HTMLCSS" },
    { skill: "MATLAB" },
    { skill: "Sciki-Learn" },
    { skill: "TensorFlow" },
    { skill: "Keras" },
    { skill: "Reactjs" },
    { skill: "Expressjs" },
    { skill: "MongoDB" },
    { skill: "PyTorch" },
    { skill: "OpenCV" },
    { skill: "NLTK"},
  ]

const AboutSection = () => {
    return (
      <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-30">
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="md:w-1/2 ">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
              </h1>
              <p>
                Hi, I am Kelvin, a recent graduate of Nanyang Technological University with a
                degree in Computer Science. (Specialized in Artificial Intelligence) <br/><br/>
                Passionate about software engineering and willing to learn new skills
                to improve myself. Currently, learning React~ <br/><br/>
              </p>
              <p>
                Travel, badminton and team-based games like Glory of Kings are some of my favorite activities.
              </p>
              <h1 className="py-5 mb-5 text-center text-2xl font-bold md:text-left">
                BIO
              </h1>
              <div className="font-semibold px-6 py-3 bg-indigo-600 rounded">
                <p>
                  <span className="font-bold text-xl">Nanyang Technological University</span>
                  <br></br>
                  <span className="text-base">Bachelor of Engineering, Computer Science</span>
                  <br></br>
                  <span className="text-sm">Aug 2019 - Dec 2022</span>
                  <br></br>
                </p>
                <br></br>
                <p>
                  <span className="font-bold text-xl">Singapore Polytechnic</span>
                  <br></br>
                  <span className="text-base">Diploma in Electrical, Electronic Engineering</span>
                  <br></br>
                  <span className="text-sm">May 2014 - May 2017</span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
                <Image
                    src="/totoro_sleep.png"
                    alt=""
                    width={350}
                    height={350}
                    className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                />
            </div>
          </div>
        </div>
      </section>
    )
  }
export default AboutSection;
