import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import "../LandingPage/Landing.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBookAnAppointmentClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

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

  const onSearchIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="about1">
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
            <button className="appointment-btn" onClick={onBookAnAppointmentClick}>Book Appointment</button>
          </div>







        </div>
      </div>
      <div className="banner">
        <img className="image-icon" alt="" src="/photo@2x.png" />
        <div className="image-text">

          <div className="img-subtext-two">
            About Us
          </div>
          <div className="img-subtext-three">
            Home {'>'} About Us
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className="heading">



        <div className="title1">
          <div className="feel-like-home">
            Our team helps you get your life back on track.
          </div>

        </div>
        <div className="our-team-of7">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.`}</div>

      </div>

      <div className="banner">
        <img className="image-icon" alt="" src="/video@2x.png" />

      </div>

      <div className="about-us-container">
        <div className="about-us-content">
          <div className="departments">THE LEADERS</div>
          <div>We have the best Pharma & Medical</div>
          <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer.</div>
          <div>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.</div>

        </div>
        <div className="about-image">
          <div className="about-us-content-second">
            <div className="departments">OUR STORY</div>
            <div> Our mission is to help patients live better</div>
            <div>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer.</div>
            <div>Over 400 leading hospitals and clinics.</div>
            <div>
              Trusted doctors across 20+ specialties
            </div>
            <div>Award-winning practice management</div>
          </div>
        </div>
      </div>



      <div className="schedule-img-container">
        <img className="schedule-img" src="/Group 2.svg" />
        <div className="schedule-content">
          <div>
            Online consultations with Certified doctors
          </div>
          <div>
            <button className="schedule-btn" onClick={onBookAnAppointmentClick}>Book Appointment</button>
            <button className="schedule-btn" onClick={onBookAnAppointmentClick}>Call: 1-800-123-9999</button>
          </div>
        </div>
      </div>

      <div className="about-us-container">
        <div className="about-us-content">

          <div><h1>Our values that drive success</h1></div>



        </div>
        <div className="about-image">
          <div className="about-us-content-second">

            <div>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.</div>

          </div>
        </div>
      </div>


      <div className="frame-div">

        <div className="div14">
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="angioplasty">Bio Technology</div>

                <img className="title-child" alt="" src="/icon4.svg" />
              </div>
              <div className="our-team-of1">Our team of highly trained professionals uses the latest healing
                technologies.</div>
            </div>
          </div>
        </div>

        <div className="div14">
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="angioplasty">Vaccine</div>
                <img className="title-child" alt="" src="/icon5.svg" />
              </div>
              <div className="our-team-of1">Our team of highly trained professionals uses the latest healing
                technologies.</div>
            </div>

          </div>
        </div>

        <div className="div14">
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="angioplasty">Expert Doctors</div>
                <img className="title-child" alt="" src="/icon6.svg" />
              </div>
              <div className="our-team-of1">Our team of highly trained professionals uses the latest healing
                technologies.</div>
            </div>

          </div>
        </div>

        <div className="div14">
          <div className="sub-content">
            <div className="sub-content">
              <div className="title10">
                <div className="angioplasty">Latest Technology</div>
                <img className="title-child" alt="" src="/icon7.svg" />
              </div>
              <div className="our-team-of1">Our team of highly trained professionals uses the latest healing
                technologies.</div>
            </div>

          </div>
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

export default About;
