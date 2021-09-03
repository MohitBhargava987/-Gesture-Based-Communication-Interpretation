
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
          className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        >
          Deaf Youth
        </Link>
        <Link
          to="/events4"
          className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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
                   
                   <img src="http://nadindia.org/images/Article/box-B1E2MJH8T2.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             A TRIBUTE TO SHRI JAVED ABIDI IN DELHI
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: Tapovan, Chanmaya Mission, Lodi Road, New Delhi
                   <br/>  Projects: General
                   <br/>Date: March-18-2018
                   <br/>
                   Remembering Javed Abidi (11.6.1965 - 4.3.2018)
                   </div>
                   <br/>
                   <strong>
                   <p>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...[read more]" : " ....[show less]"}
      </span>
    </p>
    </strong>
          
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
                   
                   <img src="http://nadindia.org/images/Article/box-TN8LNQ3O14.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             REPUBLIC DAY TABLEAUX 2013
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: New Delhi  
                   <br/>  Projects: General
                   <br/>Date: 26th Jan 2013
                   </div>
                   <br/>
                  
                   <p>
                   According to Census 2001, there were 2.19 crore persons with disabilities in India constituting 2.13% of the population. Physical and mental impairments result in disability. Attitudinal and environmental barriers hinder full and effective participation of persons with disabilities on an equal basis with others in society. Disability can be mitigated by changing our perception and by creating a more conducive environment.

The Republic Day tableaux 2013, of the newly set up Department of Disability Affairs, of the Ministry of Social Justice and Empowerment, Government of India, portrays persons with disabilities as  equal citizens of the nation enjoying all fundamental rights and freedoms in an inclusive society.

The tableau showcases inclusion through a live cultural program, led by a DPO (Disabled Persons Organisation), Disabled Power Group. The group is an inclusive group which includes persons with disabilities and non disabled persons, performing to a song carrying a message of solidarity, celebration and dreams.  A sculpture on the side of the tableaux depicts inclusion in creative arts. Inclusion as citizens is represented through a picture of a woman holding different identity cards symbolizing equality between all. The tableaux carries the message that the needs of persons with disabilities are the same as other citizens, which has been represented by portraying the symbols of  various sectors like health, education, sports, recreation, religion, financial services on a revolving Rubik's Cube.
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
          
          <img src="http://nadindia.org/images/Article/box-OP9ZJY0TRT.jpg" width="200px" height="Auto" alt="..."></img>
    <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
    STATE BANK OF INDIA INAUGURATED NAD’S NEW BRANCH OFFICE IN CHANDIGARH
          </h4>

     
          <div className="mb-2 text-blueGray-600 mt-10">
      
          Location:  Booth No. 129, Sector 46-B, Chandigarh
          <br/>  Projects: General
          <br/>Date: 31st August 2013
          </div>
          <br/>
         
          <p>
          Mr. Vishal Arora (Treasurer of NAD), Mr. Dilip Kumar Jangir (Executive Member of NAD), Mr. Jagdip Singh Sodhi (Executive Member of NAD), Mr. Yogesh Kumar (Public Relation Officer of NAD) and Ms. Angel Singha (Interpreter of NAD) organised the inaugural function for opening new branch office of NAD at Booth No. 129, Sector 46-B, Chandigarh on 31stAugust, 2013.

State Bank of India, Chandigarh Circle, proudly associated with the inaugural function of the National Association of the Deaf at its only office in the north of New Delhi in Sector 46-B, Chandigarh. The SBI had assisted the NAD by providing furniture, computer with printers and projector for the new office. The NAD office is engaged in spreading knowledge about Sign Language, Advocacy, Legal Purpose, Workshop and necessity or normal people to understand the same to be able to assist the deaf in exigencies.

While addressing the gathering, Shri Madhukar Anand, Regional Manager, State Bank of India (Region/Punjab), Chandigarh, explained about various CSR initiatives of the bank which have had widespread impact on the residents of the Tri-City and in particular those who are specially abled.
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

We all paid the tribute to Late Shri Javed Abidi today afternoon on 18th March 2018 at Chinmaya Mission, Lodi Road, New Delhi.

Javed Abidi was the Honorary Director of the National Centre for Promotion of Employment Disabled People; and Global Chair of Disabled People's International. As we struggle to come to terms with the huge loss and void created by his sudden demise, let's also celebrate his life and remember him for the invaluable and unparalleled contribution that touched made to millions and millions of people with disabilities around the country and outside.

The event was started by keeping silence in memory of Javed Abidi and Mr. Som Mittal, Chairman, NCPEDP was the first speaker. Then Mr. Jagdish talked about his friendship and the starting days of formation of Disability Rights Group (DRG). Mr. Javed Abidi’s sister,  Ms. Sheeba Abidi shared her personal experiences and read a letter from Mrs. Sonia Gandhi in tribute to Mr. Abidi. Mr. Shameer, Javed Abidi’s nephew, read a poem written by Mr. Javed Abidi.

Mr. AS Narayanan, President (NAD) and Mr. Zorin Singha, Secretary (NAD) talked about Javed Abidi’s guidance and how he was such a great support to the deaf community, and teaching and leading in the space of advocacy.

There were several video messages played sent by the people who couldn’t’ be present at the event, among those was one from Mr. Thawar Chand Gehlot, Ministry of Social Justice and Empowerment and tribute video by BRUT India on Mr. Javed Abidi life journey.

There was a pledge by the youth - Mr. Pradeep, Ms. Suvarna, Mr. Ankit, Mr. Armaan, Ms. Rupmani - to take forward the work of Mr. Abidi.

At the end of the formal event, it was open house for people to come up and share their tributes.

Above all, let us pledge to carry on his legacy. And that would perhaps be the best tribute we can pay to such an exceptional soul.
</ReadMore>
     
    </div>
  );
};
  
export default Content;