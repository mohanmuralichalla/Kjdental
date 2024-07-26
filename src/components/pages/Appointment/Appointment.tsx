import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";

const Appointment: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onUitilityContainerClick = useCallback(() => {
    navigate("/404-page");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="landing">
      <div className="top-bar">
        {/* leftside content */}
        <div className="welcome-to-pharma">
          Welcome to KJS Dental Hospital.
        </div>

        <div className="main-mobile-email-tag">

          <div className="top-mobile-email-tag">
            <img className="icon7" alt="" src="/icon.svg" />
            <div className="div13">+91 9989741023</div>
          </div>

          <a href="mailto:kjsdentalhospital@gmail.com" className="top-mobile-email-tag">
            <img className="icon7" alt="" src="/icon1.svg" />
            <div className="abcgmailcom">kjsdentalhospital@gmail.com</div>
          </a>
        </div>
      </div>
      <div className="second-container border-b">
        <div className="ham-dropdown">
          <img src="/menu.svg" />
        </div>

        <div className="second-container-logo">
          <img className="logo-style" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/logoimages/5a8085658d5dbc46c047a62b.png" />
        </div>

        <div className="second-menu-container">
          <div className="home1">Home</div>
          <div className="about" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about" onClick={onServicesTextClick}>
            Services
          </div>

          <div className="about" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>

        <div className="search-container">
          <div className="search">
            <img className="" alt="" src="/search.svg" />
          </div>
          <div>
            <button className="appointment-btn">Book Appointment</button>
          </div>







        </div>
      </div>

      <div className="wide-network">
        <div className="Wide-network-text">
          Wide network of healthcare
          solutions
        </div>

        <div className="consult-container ">

          <div className="center">
            <div className="departments ">Appointments</div>

            <div className="Wide-network-text">
              Consult with Our Experts
            </div>

            <div className="appointment-form">
              <div>
                <input type="text" className="appointment-input" />
              </div>
              <div>
                <input type="text" className="appointment-input" />
              </div>
              <div>
                <input type="text" className="appointment-input" />
              </div>
              <div>
                <input type="text" className="appointment-input" />
              </div>


            </div>
            <div className="third-row">
              <input type="text" className="appointment-input " />
              <input type="text" className="appointment-input " />
              <input type="text" className="appointment-input " />
            </div>
          </div>

          <div className="">
            <button className="btn-w-full center">Book Appointment Now</button>
          </div>
          <div className="text-primary">
            Tahnk you for your booking. we will call you shortly
          </div>



        </div>




      </div>
      <div className="position">
      <div className="faq-position">
      <div className="heading center">

<div className="departments">FAQ</div>

<div className="title1">
  <div className="feel-like-home">
    Frequently Asked Questions
  </div>
</div>
</div>
<div className="faq-container">
<div className="faq-content">
<div className="faq-1">
  <div>bchjdhcbjbcj</div>
  <div><img src="/plus.svg "/></div>
</div>
<div className="faq-2">
  <div>bchjdhcbjbcj</div>
  <div><img src="/close.svg "/></div>
</div>
<div className="faq-1">
  <div>bchjdhcbjbcj</div>
  <div><img src="/plus.svg "/></div>
</div>
</div>
<div className="faq-content">
<div className="faq-1">
  <div>bchjdhcbjbcj</div>
  <div><img src=" /plus.svg "/></div>
</div>
<div className="faq-1">
  <div>bchjdhcbjbcj</div>
  <div><img src="/plus.svg "/></div>
</div>
<div className="faq-1">
  <div>bchjdhcbjbcj</div>
  <div><img src=" /plus.svg"/></div>
</div>
</div>
</div>
      </div>
        
        <div className="image-relative">
<img className="background-icon" alt="" src="/background.svg" />
<div className="bottom-content">
         
        
      <div className="bottom-content-1">

        <div className="bottom-subcontent-1">
          <div><img className="pharma" alt="" src="/pharma.svg" /></div>
          <div className="bottom-pharma">Pharma</div>
        </div>


        <div className="bottom-subcontent-2">
        <div className="bottom-subcontent-1">
        <div className="bottom-vector-icon"> <img className="call-icon"  alt="" src="/vector1.svg" /></div>
        <div className="call-number">5236 65376</div>
        </div>
        <div className="bottom-subcontent-1">
        <div className="bottom-vector-icon"> <img className="call-icon" alt="" src="/vector1.svg" /></div>
        <div className="call-number">(+22) 5236 65376</div>
        </div>
        <div className="bottom-subcontent-icon">
        
                 <img className="" alt="" src="/fb2.svg" />
                 <img className="" alt="" src="/insta1.svg" />
                 <img className="" alt="" src="/twiter2.svg" />
              
               </div>
        </div>
      </div>

      <div className="bottom-content-2">
        <div className="bottom-title">
        “A Simple Story About
The Doctorate Medical Center & Health Care Foundation
        </div>
        <div className="bottom-appointment-content">
           <div className="bottom-explore">
        <div className="whitespace"><b>Explore</b></div>
        <div>Home</div>
        <div>Services</div>
        <div>About Us</div>
        <div>Testimonials</div>
        <div>News</div>
        </div>
        <div className="bottom-explore">
        <div className="whitespace"><b>Utility Pages</b></div>
        <div>Home</div>
        <div>Services</div>
        <div>About Us</div>
        <div>Testimonials</div>
        <div>News</div>
        </div>
        <div className="bottom-explore">
        <div className="whitespace"><b>Book An Appointment</b></div>
        <div className="bottom-appointment-text">It is a long established fact that a reader will be distracted</div>
        <div>
          <input type="text" className="appointment-input"/>
        </div>
        <div>
          <button className="sb-btn">Submit</button>
        </div>
       
        </div>
        </div>
       
      </div>
     



       </div>
       
        </div>


      </div>


    </div>



  );
};

export default Appointment;
