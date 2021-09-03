import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
                   <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    The Creators !!
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                  The best Team - The Creators - The life changers 
                  </p>
                  <br/>   <br/>   <br/>   <br/><br/><br/>
                </div>
              </div>
            </div>
          </div>
          </div>
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img 
          src={require("assets/img/WhatsApp Image 2021-04-22 at 19.54.47.jpeg").default}
          alt="..."
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
                      
                   
                    </div>
                  </div>
              <br/>
              <br/> <br/> <br/> 
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Mohit Bhargava
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Jalandhar, Punjab
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                     Registration Number: 11706141
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Lovely Professional University
                    <br/>  <br/>   
                    <hr/><br/>  
                  <b>  <p>Enthusiastic learner and a passionate coder currently pursuing b.tech in computer science and engineering. Have good knowledge of coding languages like cpp, html , css , php, javascript. With most interest in web technologies like react. Also like playing cricket on my days off.</p>  <br/>    <br/>    <br/>
                  </b>  </div>
                
                </div>
            
              </div>
            </div>
          </div>
        </section>





        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img 
          src={require("assets/img/WhatsApp Image 2021-04-22 at 19.54.46.jpeg").default}
          alt="..."
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
                      
                   
                    </div>
                  </div>
              <br/>
              <br/> <br/> <br/> 
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Dinakshi chhabra
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Jalandhar, Punjab
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                     Registration Number: 11711298
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Lovely Professional University
                    <br/>    <br/>  
                  <br/>   
                    <hr/><br/>  
                  <b>  <p>Ambitious and driven, self-motivated and responsible final year Engineering student with positive attitude and excellent communication skills. Well versed with coding languages like C, C++, HTML and Python and worked upon different technologies including Web Development and Machine Learning</p>  <br/>    <br/>    <br/>
                  </b>  </div>
                
                </div>
            
              </div>
            </div>
          </div>
        </section>





        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <br/> <br/> <br/>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img 
          src={require("assets/img/noor.jpeg").default}
          alt="..."
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
                      
                   
                    </div>
                  </div>
              <br/>
              <br/> <br/> <br/> 
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Noor Raza
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Jalandhar, Punjab
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
             Registration Number: 11709946
          </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Lovely Professional University
                    <br/>    <br/>  
                  <br/>   
                    <hr/><br/>  
                  <b>  <p>A passionate, dynamic and hard working final year Engineering student with a vibrant personality and good sense of humor. Machine Learning, AI, Data Analytics, Web development are some of the technologies in which I'm proficient and worked upon.</p>  <br/>    <br/>    <br/>
                  </b>  </div>
                
                </div>
            
              </div>
            </div>
          </div>
        </section>





        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <br/> <br/> <br/>


        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img 
          src={require("assets/img/WhatsApp Image 2021-04-22 at 19.54.46 (1).jpeg").default}
          alt="..."
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
                      
                   
                    </div>
                  </div>
              <br/>
              <br/> <br/> <br/> 
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Ravi Ranjan
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Jalandhar, Punjab
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
             Registration Number: 11713763
          </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Lovely Professional University
                    <br/>    <br/>  
                  <br/>   
                    <hr/><br/>  
                  <b>  <p>Myself Ravi Ranjan from Patna Bihar pursuing BTech (cse) from lovely professional University.
Right now I'm operating my own start-up named ymedy from my home city ,I am operating this startup from last one year
I am a proactive and a enthusiasts learner.</p>  <br/>    <br/>    <br/>
                  </b>  </div>
                
                </div>
            
              </div>
            </div>
          </div>
        </section>





        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <br/> <br/> <br/>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                    <img 
          src={require("assets/img/WhatsApp Image 2021-04-22 at 19.54.48 (1).jpeg").default}
          alt="..."
          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
        />
                      
                   
                    </div>
                  </div>
              <br/>
              <br/> <br/> <br/> 
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Garima Jyoti
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Jalandhar, Punjab
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
             Registration Number: 11707088
          </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Lovely Professional University
                    <br/>    <br/>  
                  <br/>   
                    <hr/><br/>  
                  <b>  <p>Optimistic, Inquisitive, Enthusiastic and a great programmer, currently pursuing engineering with proficient knowledge in Data Science, Artificial Intelligence and Machine learning .</p>  <br/>    <br/>    <br/>
                  </b>  </div>
                
                </div>
            
              </div>
            </div>
          </div>
        </section>








<br/> <br/> <br/>


      </main>
      <Footer />
    </>
  );
}
