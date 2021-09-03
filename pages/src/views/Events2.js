
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
          className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Awareness
        </Link>
        <Link
          to="/events3"
          className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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
                   
                   <img src="http://nadindia.org/images/Article/box-MXOIEY86HS.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             REMEMBERING LATE SHRI JAVED ABIDI (11-06-1965 - 04-03-2018)
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: New Delhi 
                   <br/>  Projects: Awareness
                   <br/>Date: March-04-2021
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
                   
                   <img src="http://nadindia.org/images/Article/box-PH06UL7HZO.JPG" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             CONFERENCE ON THE INTERNATIONAL WEEK OF THE DEAF 2017 “FULL INCLUSION WITH SIGN LANGUAGE”
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: Vishwa Yuvak Kendra, 1 Circular Road, Teen Murti Marg, Chanakyapuri, New Delhi  
                   <br/>  Projects: Accessibility General
                   <br/>Date: 21nd November 2017
                   </div>
                   <br/>
                  
                   <p>
                  
National Association of the Deaf (NAD) organized a conference on "Full Inclusion: With Sign Language" in Vishwa Yuvak Kendra, Chanakyapuri, New Delhi on 21st September 2017 to celebrate the International Week of the Deaf. The conference also saw participation of some key leaders of the international deaf community such as Dr. Adam Kosa, Hon'ble Member of European Parliament; Dr. Gerely Tapolczai, Hon'ble Member of Parliament, Hungary; and Dr. Joseph Murray, Vice President, World Federation of the Deaf.

There were 300 deaf delegates from all over India participated in the conference.

International Week of the Deaf is all through this week from September 18 - 24, 2017.
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
          
          <img src="http://nadindia.org/images/Article/box-NFHJ90XUV1.jpg" width="200px" height="Auto" alt="..."></img>
    <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
    10TH ANNIVERSARY CELEBRATION OF THE NATIONAL ASSOCIATION OF THE DEAF
          </h4>

     
          <div className="mb-2 text-blueGray-600 mt-10">
      
          Location:  India International Centre, Max Muellar Marg, New Delhi 
          <br/>  Projects: Awareness General
          <br/>Date: 21nd Feb 2016
          </div>
          <br/>
         
          <p>
          We successfully organised the 10th Anniversary Celebration of the National Association of the Deaf on 21st February, 2016 at India Interantional Centre, Max Muellar Marg, New Delhi. We had invited Shri Thaawar Chand Gehlot, Minister for Social Justice & Empowerment as a Chief Guest but he was unable to attend the event due to Haryana Jat Riot. Shri Jagdish Kumar, Deputy Secretary of Department of Empowerment of Persons with Disabilities, Minister of Social Justice & Empowerment, Govt. of India was the Chief Guest. Shri A. S. Narayanan, Secretary, NAD addressed the welcome note. Shri Zorin Singha, President, NAD addressed the speech.

Among the Deaf there are several individuals who have extraordinary achievements to their credit. National Association of the Deaf loves to encourage and appreciate such Deaf achievers by giving them Achievers Deaf Awards. These achievers are a great source of inspiration to the members of the Deaf community. In addition to providing role models to the Deaf community, the Achiever Deaf Awards also serve the purpose of giving joy to the parents of the Deaf Achiever, along with a sense of importance to the individual. It is also a means for the Deaf community to show the rest of society that Deaf persons are capable of the great achievements and that they too can be counted to be as equal to all other citizens.

Shri Jagdish Kumar, Deputy Secretary of Department of Empowerment of Persons with Disabilities, Minister of Social Justice & Empowerment, Govt. of India gave out the Deaf Achiever Awards to Shri T. K. M. Sandeep, CEO, Deaf Enabled Foundation, Shri Aqil Chinoy, Founder & CEO of Inspiralive and Shri K. C. Isaac, Founder & President, Kerala Association of the Deaf.
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
        One of the world's fiercest, most passionate advocate for the rights of people with disabilities, passed away unexpectedly on Sunday, March 4th, 2018.

Javed Abidi was the Honorary Director of the National Centre for Promotion of Employment Disabled People; and Global Chair of Disabled People's International. As we struggle to come to terms with the huge loss and void created by his sudden demise, let's also celebrate his life and remember him for the invaluable and unparalleled contribution that touched made to millions and millions of people with disabilities around the country and outside.

The starting days of the formation of Disability Rights Group (DRG).

Mr. AS Narayanan, President (NAD) talked about Javed Abidi’s guidance and how he was such great support to the deaf community, and teaching and leading in the space of advocacy.

There were several video messages played sent by the people who couldn’t be present at the event, among those was one from Shri Thaawar Chand Gehlot, Hon’ble Ministry of Social Justice and Empowerment and tribute video by BRUT India on Mr. Javed Abidi life journey.

Above all, let us pledge to carry on his legacy. And that would perhaps be the best tribute we can pay to such an exceptional soul.
</ReadMore>
     
    </div>
  );
};
  
export default Content;