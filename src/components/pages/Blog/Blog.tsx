import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog: FunctionComponent = () => {
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/appointment");
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
          <div className="second-container">
      <div className="ham-dropdown">
            <img src="/menu.svg"/>
      </div>

            <div className="second-container-logo">
             <img className="logo-style" src="https://s3-ap-southeast-1.amazonaws.com/content-ewns/images/logoimages/5a8085658d5dbc46c047a62b.png"/>
            </div>

            <div className="second-menu-container">
            <div className="home1">Home</div>
              <div className="about" onClick={onAboutUsTextClick}>
                About
              </div>
              <div className="about" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="about" >
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
                <button className="appointment-btn" >Book Appointment</button>
              </div>
            </div>
    </div>
    <div className="banner">
        <img className="image-icon" alt="" src="/image19@2x.png" />
        <div className="image-text">

          <div className="img-subtext-two">
            Blog
          </div>
          <div className="img-subtext-three">
            Home {'>'} Blog
          </div>
          <div>

          </div>
        </div>
      </div>
   
     
     <div className="blog-cards">
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
      <div className="blog-card-content">
        <div>
          <img className="blog-card-image" src="/image20@2x.png"/>
        </div>
        <div className="departments">18 August 2023</div>
        <div className="blog-card-desc">Open letter to the residents of Ellsworth, Maine</div>
        <div className="blog-card-action">Read More</div>
      </div>
     </div>
     <div className="blog-card-pagination">
      <button className="parimary-pagination">
    1
      </button>
      <button className="default-pagination">
    2
      </button>
      <div className="default-next-pagination">
  Next Page
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

export default Blog;
