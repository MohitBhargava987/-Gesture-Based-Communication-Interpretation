import React from "react";


// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Follw the tutorials and learn the use of application
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">ASL</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The best way to communicate
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Services</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Just follow the tutorials to communicate. And yes, it is completely free
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Speed and secure</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Super fast detection system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

         
          </div>
        </section>
<section>
<br/> <br/> <br/> <br/> 
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<h1 className="text-black font-semibold text-5xl">
                  <u>  Learn from here !!!</u>
                  </h1>
            </div>
            
            
            <br/> <br/> <br/> <br/>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<img 
          src={require("assets/img/FingerSpeller.jpg").default}
          alt="..."
        />
        
        </div>
        <br/> <br/> <br/> <br/> 
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<h1 className="text-black font-semibold text-5xl">
                    Practice.....
                  </h1><br/>
            </div>
            
            
            
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<img 
          src={require("assets/img/asl-tutorial.gif").default}
          alt="..."
        />
        
        </div>  
        <br/> <br/> <br/>



        <br/> <br/> <br/> <br/> 
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<h1 className="text-black font-semibold text-5xl">
                    Follow her to make "J" .
                  </h1><br/>
            </div>
            
            
            
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<img 
          src={require("assets/img/sign-a-j.gif").default}
          alt="..."
        />
        
        </div>     


        <br/> <br/> <br/> <br/> 
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<h1 className="text-black font-semibold text-5xl">
                    Follow her to make "Z" .
                  </h1><br/>
            </div>
            
            
            
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<img 
          src={require("assets/img/how-to-sign-a-z.gif").default}
          alt="..."
        />
        
        </div>  
        <br/> <br/> <br/>



        
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
<h1 className="text-black font-semibold text-5xl">
                  <u>  Practice more !!!  Yes, you can do it !!</u>
                  </h1>
            </div>
        </section>     
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
      </main>
      <Footer />
    </>
  );
}
