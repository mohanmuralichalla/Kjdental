import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "../../common/misc/Component1";
import "./Services.css";
import "../LandingPage/Landing.css";

const Services: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/medical-experts");
  }, [navigate]);

  const onUitilityContainerClick = useCallback(() => {
    navigate("/404-page");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="services4">

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
          <div className="about" onClick={onButtonContainerClick}>
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
            <button className="appointment-btn" onClick={onBookAppointmentTextClick}>Book Appointment</button>
          </div>







        </div>
      </div>
      
      <div className="banner">
        <img className="image-icon" alt="" src="/photo@2x.png" />
        <div className="image-text">

          <div className="img-subtext-two">
            Services
          </div>
          <div className="img-subtext-three">
            Home {'>'} Services
          </div>
          <div>

          </div>
        </div>
      </div>

    
      
      <div className="heading">

<div className="departments">departments</div>

<div className="title1">
  <div className="feel-like-home">
    Feel Like Home With Best Medical Care
  </div>
</div>
</div>

<div className="banner">
          <img className="image-icon" alt="" src="/time.jpg" />

         
        </div>

        <div className="team-container">



<div className="text9">
  <div className="heading3">

    <div className="medical-experts">{`MEDICAL EXPERTs `}</div>

    <div className="title2">
      <div className="the-professional-doctors">
        The Professional Doctors
      </div>
    </div>
  </div>
</div>

<div className="team-content">
  <div className="team-card" onClick={onContainerClick}>
    <div className="image1">
      <img className="image-icon5" alt="Dr. M Shylaja" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/productimages/small/5d826ffe8d5dbc18ecfd4711.png" />
    </div>
    <div className="text10">
      <div className="dr-helen-wilmore">Dr. M Shylaja</div>
      <div className="dental-patient4">Dental Hospital</div>
    </div>
    <div className="follow">
      <img className="insta-icon" alt="" src="/insta.svg" />
      <img className="fb-icon" alt="" src="/fb.svg" />
      <img className="twiter-icon" alt="" src="/twiter.svg" />
    </div>
  </div>
  <div className="team-card">
    <div className="image1">
      <img className="image-icon5" alt="" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/productimages/small/5bd1f90b8d5dbc46d0d16ac5.png" />
    </div>
    <div className="text10">
      <div className="dr-helen-wilmore">Dr. M. Venkat Reddy</div>
      <div className="dental-patient4">Dental Hospital</div>
    </div>
    <div className="follow">
      <img className="insta-icon" alt="" src="/insta.svg" />
      <img className="fb-icon" alt="" src="/fb1.svg" />
      <img className="twiter-icon" alt="" src="/twiter1.svg" />
    </div>
  </div>

</div>


<div className="line4" />


<div className="counter-content">
  <Component1 prop="25" years="Years " experience="Experience" />
  <Component1
    prop="893"
    years="Medicament"
    experience=" Invented
"
    propWidth="161.9px"
  />
  <Component1
    prop="75"
    years="Awards"
    experience="Winned"
    propWidth="116.4px"
  />
  <Component1
    prop="673 k"
    years="Happy"
    experience=" Clients"
    propWidth="118.5px"
  />
  <Component1
    prop="751"
    years="Pharmacies"
    experience=" Partners"
    propWidth="160.4px"
  />
</div>


</div>

      
<div className="image-relative">
          <img className="background-icon" alt="" src="/background.svg" />
          <div className="bottom-content">


            <div className="bottom-content-1">

              <div className="bottom-subcontent-1">
                <div><img className="pharma" alt="" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/logoimages/5a8085658d5dbc46c047a62b.png" /></div>
              </div>


              <div className="bottom-subcontent-2">
                <div className="bottom-subcontent-1">
                  <div className="bottom-vector-icon"> <img className="call-icon" alt="" src="/vector1.svg" /></div>
                  <div className="call-number">+91 9989741023</div>
                </div>
                <div className="bottom-subcontent-1">
                  <div className="bottom-vector-icon"> <img className="call-icon" alt="" src="/vector2.svg" /></div>
                  <div className="call-number">kjsdentalhospital@gmail.com</div>
                </div>
                <div className="bottom-subcontent-icon">
                  <a href="https://www.facebook.com/kjsdentalhospital/" target="_blank">
                    <img src="/fb2.svg" alt="KJS Dental Hospital facebook" />
                  </a>

                  <a href="https://www.instagram.com/kjsdentalhospital/" target="_blank">
                    <img src="/insta1.svg" alt="KJS Dental Hospital Instagram" />
                  </a>
                  <a href="https://x.com/KjsDental/" target="_blank">
                    <img src="/twiter2.svg" alt="KJS Dental Hospital twitter" />
                  </a>


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
                  <div className="about">Home</div>
                  <div className="about" onClick={onServicesTextClick}>Services</div>
                  <div className="about" onClick={onAboutUsTextClick}>About Us</div>
                  <div className="about" onClick={onContactUsTextClick}>Contact Us</div>
                  <div className="about">News</div>
                </div>
                <div className="bottom-explore">
                  <div className="whitespace"><b>Utility Pages</b></div>
                  <a href="https://kjsdental.co.in/sitemap.xml" className="about">Sitemap</a>
                  <div onClick={onUitilityContainerClick} className="about">404-page</div>
                </div>
                <div className="bottom-explore">
                  <div className="whitespace"><b>Book An Appointment</b></div>
                  <div className="bottom-appointment-text">It is a long established fact that a reader will be distracted</div>
                  <div>
                    <input type="text" placeholder="your email address" className="appointment-input" />
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
  );
};

export default Services;
