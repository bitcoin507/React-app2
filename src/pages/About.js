import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";


const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");




const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
               I am married and I have two daughters, my oldest daughter is fourteen and my youngest is four years old.
               I moved to Panama when I was twenty-eight years old. I now speak fluent Spanish.
               My wife and my youngest daughter are from Panama. 
               </code>

               <br />
               <br />

               <code>
               I am now residing in Manchester, England in the UK.
               I will most likely be spending the winter in Panama and the Summer in Manchester, 
               this way I will have two summers as in Panama what they call ‘Summer is between November through February, even though in the Winter it is also hot, 
               it is really just the rainy season.
              </code>

              <br />
              <br />

              <code>
               Some of my personal interests include going to the gym to lift weights,
               reading, nature, playing chess, reading, video games, riding motorcycles, cooking, comic books,
               nature and cryptocurrency, and blockchain technology.
               </code>
          
          <br />
          <br />
          <code>I actually took this course because I eventually want to learn blockchain programming. 
                I first started down the blockchain rabbit hole about six years ago, and I have been trying to learn as much as I can about the crypto space since then. 
                I have been an active HODLR, sometime trader, and avid member of various blockchain and Fintech groups. 
                I recently co-founded a company with my partners who I met while working on a Marketing campaign for Finxflo a hybrid liquidity aggregator and crypto training platform. 
                Our company is called Wolf Pack Crypto Media. We help startup blockchain projects with marketing, community development, fundraising, and more.</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
           
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
           
           
           
            
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
