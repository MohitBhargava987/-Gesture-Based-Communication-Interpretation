
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
          className="get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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
                   
                   <img src="http://nadindia.org/images/PhotoGallery/Art-4377_Photo-3850.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             MR. SHINAN P.S FROM THRISSUR, KERALA (DEAF BIKE RIDER)
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: the India Habitat Centre, Lodhi Road, New Delhi.  
                   <br/>  Projects: Accessibility General
                   <br/>Date: August-07-2017
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
                   
                   <img src="http://nadindia.org/images/Article/box-PBD92YM8HN.jpg" width="200px" height="Auto" alt="..."></img>
             <h4 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             WORLD DISABILITY DAY 2019
                   </h4>
   
              
                   <div className="mb-2 text-blueGray-600 mt-10">
               
                   Location: New Delhi, India.  
                   <br/>  Projects: Accessibility General
                   <br/>Date: 22nd November 2019
                   </div>
                   <br/>
                  
                   <p>
                   N.A.D. is an organisation that is working to empower Deaf and Hard of Hearing people across India; one that is of the deaf, by the deaf and for the deaf. N.A.D. hopes to breathe new life into the deaf movement and empower deaf people across the country to stand up and claim the rights that they are entitled to. N.A.D. is a non- governmental, not for profit, organisation registered under the Societies Registration Act 1860, no. s/50137/2004. It is a voluntary organisation and all the work that it carries out it down to the dedication and hard work of its members and the executive board. N.A.D relies on the support it receives not only from its members, but also society at large.

We are very glad to inform you that we are organising the World Disability Day at India Gate, Amar Jyoti Jawan, New Delhi on 3rd December 2019, Tuesday from 9:00 am to 1:00 pm.

Indian Sign Language (ISL) to be added the amendment in the Constitution of India
Education for Persons with Disabilities
Census of India 2021
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
    INTERNATIONAL WOMEN’S DAY
          </h4>

     
          <div className="mb-2 text-blueGray-600 mt-10">
      
          Location: Indian Social Institute, 10, Institutional Area, Lodi Road, New Delhi
          <br/>  Projects: Accessibility General
          <br/>Date: 23nd March 2018
          </div>
          <br/>
         
          <p>
          National Association of the Deaf organized organ a seminar on “Empowerment of Deaf Women” at the Auditorium, Indian Social Institute, 10, Institutional Area, Lodi Road, New Delhi on Sunday, 25th March 2018. The deaf women are doubly disadvantaged first by disability and second with the added vulnerability of their gender. The event focused on raising awareness and creating a positive space in society for disability and women’s issues. There were about 100 deaf women and men participants.

The seminar started with the welcome note by Mrs. Geeta Sharma, NAD’s Women Secretary. The first session was taken by Ms. Angel Singha, Social Inclusion Officer, International Committee of the Red Cross (ICRC) who first gave an intro about ICRC, how it was established and its purpose. She explained the working of ICRC and the domains in which they deal from war torn areas to empowering people getting disabled in war.

The second session was quite interactive. It was moderated by Ms. Charu Narang, Trainer, CentumGRO, Mr. Amal Dev, Trainer, CentumGRO and Ms. Misha Narang, Teacher from Haryana. The participants were divided into groups. The moderators enacted different scenarios and the groups then had to discuss upon women’s issues ranging from menstruation, dowry, relationships, etc.

Mrs. Geeta Sharma took the last session where she mentioned about prominent disability rights advocate and leader Mr. Javed Abidi, his achivements with NCPEDP and journey from the PWD Act 1995 to the new law RPWD Act 2016. He was a major support to the deaf community. His shocking and untimely demise led to the postponement of the event from 8th March to 25th March 2018.

In her closing remarks she specially thanked SAIL, Syndicate Bank, LIC, Bank of Maharashtra & Oriental Insurance Company Ltd. who sponsored the event as well as thanked all participants and everyone went for high tea.
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
        Good News today! NAD members – Mr. A. S. Narayanan, President, NAD; Mr. Anuj Jain, Joint Secretary and Mr. Vishal Arora, Treasurer met Mr. Shinan PS, who is a deaf bike rider from Thrissur, Kerala, on 14th August 2017 at the India Habitat Centre, Lodhi Road, New Delhi.

Mr. Narayanan asked him a few questions while there were other people gathered there watching the interview unfold.

First question put up to him was, “Does he have a driving license and what’s his goal for the journey?” He did indeed have a driving license but it wasn’t easy to get it as the licensing authority rejected him because he was deaf the first time he went to get the license. He added that, “Hearing people have so many opportunities and I would look at that and think how I can also do the same. Then the thought struck me that yes a deaf person like me can also ride the bike, travel this far and break every barrier. Both the deaf and hearing communities should be equal on the same level.”

Mr. Shinan PS told him that he started his journey with a hearing bikers group from Kerala and his first stop was Goa. From Goa he rode alone by himself to Pune then Mumbai. In Mumbai, NIHH felicitated him. They were impressed to see a deaf biker. A few people in Mumbai supported me and made me part of their club. In Nasik, their deaf association supported me and provided place to stay. Then I went to Vadodara in Gujrat. I interacted with the people and got their support too. In Ahmedabad, I met a lot of deaf people and it was fun. I got donation from a few individuals there. Later went to Udaipur in Rajasthan. I met the deaf people and they were surprised and impressed at the same time to meet me. I also received govt. recognized certificate. In Jaipur, we got pictures clicked and my name was in the print news. From there I went to Agra and finally arrived here in Delhi.”

Mr. Narayanan then told the audience, “Wonderful, thank you. You all must not think that this much travelling on bike is easy. It is quite hard. Food, fuel and other expenses are there. If I was in his place managing all that won’t be possible for me. So, it is very commendable and brave of him. I request you all let’s come together and support him, sharing a one time donation.”

Mrs. Reena Jain, NAD’s North India Deaf Women Committee, asked a question on how he manages all the expenses, to which Mr. Shinan answered,” I welcome any kind of donations and also happily accept invitations to stay the night to sleep. At one place I was hanging out with the deaf group and they said we will pay for your food.”

Mr. Shinan had a glass cutting business which he managed himself but left it 2 months ago when he embarked on this journey. People would stop him and get pictures clicked with him and meeting deaf people from different states also extended his time.

NAD Treasurer, Mr. Vishal Arora asked the people there that who would like to join him and ride like him to which there were a few hands raised interested for the same!

Mr. Anuj Jain, Joint Secretary, NAD told that, “So as you go ahead in your journey and finish it safely without accident, we will make a proof report and present it to the Ministry of Road and Transport of India and show them that a deaf person can drive and ride and hopefully the government passes law to give driving license to the deaf.”

Next he travels to Kashmir then Nepal to Bhutan to Assam to Kolkata to Orissa to Hyderabad to and finally back to his hometown Thrissur, Kerala. He feels safe and confident going ahead and in case of any trouble he has hearing friends and Whatsapp group of bike riders. He’s careful and follows a strict time rule too. Morning 6am to evening 6pm only.

When asked about has the police ever stopped him, he said that yes just once in Mumbai but he showed the blue sign which says the driver is deaf and police let him go, no other happening like that.

Mr. Narayanan concluded, “That’s sweet and beautiful he has that sign board on the bike, travelling all over India.” And everyone went for a group photo session.
</ReadMore>
     
    </div>
  );
};
  
export default Content;