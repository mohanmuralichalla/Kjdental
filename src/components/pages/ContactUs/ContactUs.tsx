import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";

const ContactUs: FunctionComponent = () => {
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

  const onblogServicesTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onUitilityContainerClick = useCallback(() => {
    navigate("/404-page");
  }, [navigate]);

  const onMenuContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  return (
    <div className="contact-us8">

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

      <div className="second-container">
        <div className="ham-dropdown">
          <img src="/menu.svg" />
        </div>

        <div className="second-container-logo">
          <img className="logo-style" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/logoimages/5a8085658d5dbc46c047a62b.png" />
        </div>

        <div className="second-menu-container">
          <div className="about" onClick={onHomeTextClick}>Home</div>
          <div className="about" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="about" onClick={onblogServicesTextClick}>
            Blog
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
            <button className="appointment-btn" onClick={onFrameContainerClick}>Book Appointment</button>
          </div>







        </div>
      </div>
      
      <div className="banner">
        <img className="image-icon" alt="" src="/photo@2x.png" />
        <div className="image-text">

          <div className="img-subtext-two">
          We Are Ready To Assist
          You In 24x7
          </div>
          
          <div>

          </div>
        </div>
      </div>

    
      
      <div className="heading">

<div className="departments">Contact Us</div>

<div className="title1">
  <div className="feel-like-home">
  Get In Touch With Us!
  </div>
</div>
</div>

<div className="frame-div">
         <div className="div-transparent">
          
              <div className="sub-content">
                <div className="sub-content">
                  <div className="title10">
                    <div className="contact-tag-us">Address</div>
                    <img className="title-child" alt="" src="/icon11.svg" />
                  </div>
                  <div className="our-team-of1">KJS Dental Hospital, 2nd Floor, Maruti Rawtani Plaza, Opp Poulomi Hospital, A.S. Rao Nagar, Secunderabad, Telangana, 500062</div>
                </div>
              </div>
        
            </div>
            <div className="div-transparent">
          
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="contact-tag-us">Phone</div>
                <img className="title-child" alt="" src="/icon12.svg" />
              </div>
              <div className="our-team-of1">+91 9989741023
              </div>
            </div>
           
          </div>
    
        </div>
        <div className="div-transparent">
          
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="contact-tag-us">Email</div>
                <img className="title-child" alt="" src="/icon13.svg" />
              </div>
              <div className="our-team-of1">kjsdentalhospital@gmail.com</div>
            </div>
            
          </div>
    
        </div>

        <div className="div-transparent">
          
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="contact-tag-us">Instagram</div>
                <img className="title-child" alt="" src="/insta1.svg" />
              </div>
              <div className="our-team-of1">Connect with us.</div>
            </div>
            
          </div>
    
        </div>
          
        </div>

        <div className="consult-contact-main">

       

          <div className="center">
            

            <div className="appointment-form">
              <div>
                <p>Full Name *</p>
                <input type="text" className="appointment-input" />
              </div>
              <div>
               <p>Your Email *</p>
                <input type="text" className="appointment-input" />
              </div>
              <div>
              <p>Phone *</p>
                <input type="text" className="appointment-input" />
              </div>
              <div>
              <p>Subject *</p>
                <input type="text" className="appointment-input" />
              </div>


            </div>
            <div className="contact-third-row">
            <p>How we can help you?</p>
              <input type="text" className="appointment-input " />
             
            </div>
          </div>

          <div className="">
            <button className="btn-w-full center">Send Message</button>
          </div>
          



        </div>
        

  
      
      
      

    </div>
  );
};

export default ContactUs;
