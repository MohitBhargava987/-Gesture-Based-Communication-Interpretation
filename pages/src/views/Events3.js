
import React, { useState } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Link } from "react-router-dom";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
      <>

      <Navbar transparent />
      <main className="profile-page">
      <section className="relative block h-500-px">
           <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://wallpapercave.com/wp/wp4094505.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    EVENTS
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                   Know about - some of the happenings here
                  </p>
                  <br/>   <br/>   
                  <Link
          to="/events"
          className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Accessibility
        </Link>
       
        <Link
          to="/events2"
          className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Awareness
        </Link>
        <Link
          to="/events3"
          className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Deaf Youth
        </Link>
        <Link
          to="/events4"
          className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          General
        </Link>
        <br/>   <br/>   <br/>   <br/><br/><br/> <br/><br/><br/>
         
                </div>
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
        </section>

        <section className="relative py-16 bg-blueGray-200">
           <div className="container mx-auto px-4">
             <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
           
               <div className="px-6">
                 <div className=" mt-12">
                   
                   <img src="http://nadindia.org/images/Article/box-LMW2TZTKK9.JPG" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             STATE LEVEL WORKSHOP ON EMPOWERMENT OF DEAF YOUTH 58TH INTERNATIONAL WEEK OF THE DEAF CELEBRATION-15
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: Auditorium, Fr. Agnel School, Gautam Nagar, New Delhi
                   <br/>  Projects:  Deaf Youth
                   <br/>Date: Sept-20-2015
                   </div>
                   <br/>
                
                   <p>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...[read more]" : " ....[show less]"}
      </span>
    </p>
 
          
                 <br/>    <br/>    <br/>
                 <br/>   
                 </div>
                
               </div>
             </div>
           </div>
           <br/>    <br/>
         </section>

         <br/>    <br/>    <br/>   <br/>    <br/>    <br/>


         <section className="relative py-16 bg-blueGray-200">
           <div className="container mx-auto px-4">
             <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
           
               <div className="px-6">
                 <div className=" mt-12">
                   
                   <img src="http://nadindia.org/images/Article/box-PF57Z36KMG.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             55TH INTERNATIONAL WEEK OF THE DEAF CELEBRATIONS 2012, DEAF YOUTH EMPOWERMENT
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: New Delhi  
                   <br/>  Projects: General
                   <br/>Date: 30 Sept 2012
                   </div>
                   <br/>
                  
                   <p>
                   The seminar started with the welcome note by Mr. Anuj Jain, Joint Secretary of NAD. Ms. Rupmani Chettari, NAD’s North India Deaf Women Committee & Deaf Youth Team of NAD shared the powerpoint presentation about International Week of Deaf “With Sign Language Rights, Our Children Can!”. Members of Noida Deaf Friendship Club & Delhi Deaf Friendship Club showed their different skits and Mime about hearing parents of deaf child and Deaf parents of deaf child.

Chief Guest Mr. Onkar Sharma, General Secretary of All India Federation of the Deaf, Guest of Honour Mr. Suresh Prakash, Treasurer of All India Federation of the Deaf and Guest of Honour Mr. Suresh Ahuja, Executive Member of AIFD are invited in the Workshop. They spoke about NAD is the best advocacy organization for demanding Govt. for our human rights for the deaf.
    </p>

          
                 <br/>    <br/>    <br/>
                 <br/>   
                 </div>
                
               </div>
             </div>
           </div>
           <br/>    <br/>
         </section>


         <Footer />   
    </main>

    </>
  );
};
  
const Content = () => {
  return (
    <div >


    
        <ReadMore>
        We have also been able to successfully conduct the State Level Workshop on Empowerment of Deaf Youth at Auditorium, Fr. Agnel School, Gautam Nagar, Delhi on 20th September, 2015.

The seminar started with the welcome note by Mr. Anuj Jain, Joint Secretary of NAD. Ms. Rupmani Chettari, NAD’s North India Deaf Women Committee & Deaf Youth Team of NAD shared the powerpoint presentation about International Week of Deaf “With Sign Language Rights, Our Children Can!”. Members of Noida Deaf Friendship Club & Delhi Deaf Friendship Club showed their different skits and Mime about hearing parents of deaf child and Deaf parents of deaf child.

Chief Guest Mr. Onkar Sharma, General Secretary of All India Federation of the Deaf, Guest of Honour Mr. Suresh Prakash, Treasurer of All India Federation of the Deaf and Guest of Honour Mr. Suresh Ahuja, Executive Member of AIFD are invited in the Workshop. They spoke about NAD is the best advocacy organization for demanding Govt. for our human rights for the deaf.

Mr. A. S. Narayanan, Secretary of NAD shared the powerpoint presentation about history of Indian Sign Language Research & Training Centre. Mr. Sachin Singh, Member of NAD shared powerpoint presentation about United Nations at USA.

Ms. Ritu Panda, Member of NAD shared powerpoint presentation about visiting the Regional South Asia World Federation of the Deaf.

Mr. Rahul Garg, Assistant Coordinator of NAD shared powerpoint presentation about Understanding Deaf Children. There are about 250 deaf young people from NCR participated in the Workshop. They are very impressed by our workshop.
</ReadMore>
     
    </div>
  );
};
  
export default Content;