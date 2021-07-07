import "./LandingPage.css";
import logo from "./images/favicon.png";
import hero from "./images/Image-140@2x 1.png";
import thirdLevel from "./images/image 140.png";
import box1 from "./images/image 136.png";
import box2 from "./images/image 135.png";
import box3 from "./images/image 134.png";
import box4 from "./images/image 138.png";
import box5 from "./images/image 139.png";
import box6 from "./images/image 137.png";
import testimonial from "./images/Ellipse 218.png";
import footerImage from "./images/ask_feed-removebg-preview 2.png";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button type="button" className="login-btn">
          <NavLink className="loginn" to="/login">
            Login
          </NavLink>
        </button>
        <button type="button" className="register-btn">
          <NavLink to="/register" className="registerr">
            Register
          </NavLink>
        </button>
        <div className="header-title">
          <p>Go beyond collecting feedback</p>
        </div>
        <div className="header-sub">
          It is kind of Feedback system in which will allow the users to send
          surveys via mail to their customers and in return gather their
          feedback! This gives the user an indication about their products
          standing in the market and also the genuine feedback regarding the
          same.
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="second-level">
        <div className="next-heading">
          <p>You've got #workgoals. We'll help you meet them 🤝</p>
        </div>
        <div className="after-next-heading">How it works?</div>
        <div className="group-1">
          <div className="ellipse-1">
            <div className="num-1">1</div>
            <div className="el-head-1">
              Employee Survey
              <p className="el-p-1">
                Gain valuable insights to improve employee engagement,
                satisfaction, and company culture.
              </p>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="ellipse-2">
            <div className="num-2">2</div>
            <div className="el-head-2">
              Customer Survey
              <p className="el-p-2">
                Gain valuable insights to improve employee engagement,
                satisfaction, and company culture.
              </p>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="ellipse-3">
            <div className="num-3">3</div>
            <div className="el-head-3">
              Benchmarking
              <p className="el-p-3">
                Gain valuable insights to improve employee engagement,
                satisfaction, and company culture.
              </p>
            </div>
          </div>
        </div>
        <div className="ellipse-4">
          <div className="num-4">4</div>
          <div className="el-head-4">
            Reviews
            <p className="el-p-4">
              Gain valuable insights to improve employee engagement,
              satisfaction, and company culture.
            </p>
          </div>
        </div>
      </div>
      <img className="third-level-image" src={thirdLevel} alt="3rd level img" />
      <div className="third-level-head">
        <p>Find out what employees really think🤔</p>
      </div>
      <div className="third-level-para">
        <p>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and
        </p>
      </div>
      <div className="fourth-level-head">
        <p>How We Can Help You?</p>
      </div>
      <div className="box-1"></div>
      <img className="box-img-1" src={box1} alt="box-img" />
      <div className="box-head-1">Customer Surveys</div>
      <p className="box-para-1">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="box-2"></div>
      <img className="box-img-2" src={box2} alt="box-img-2" />
      <div className="box-head-2">Customer Surveys</div>
      <p className="box-para-2">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="box-3"></div>
      <img className="box-img-3" src={box3} alt="box-img-3" />
      <div className="box-head-3">Customer Surveys</div>
      <p className="box-para-3">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="box-4"></div>
      <img className="box-img-4" src={box4} alt="box-img-4" />
      <div className="box-head-4">Customer Surveys</div>
      <p className="box-para-4">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="box-5"></div>
      <img className="box-img-5" src={box5} alt="box-img-5" />
      <div className="box-head-5">Customer Surveys</div>
      <p className="box-para-5">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="box-6"></div>
      <img className="box-img-6" src={box6} alt="box-img-6" />
      <div className="box-head-6">Customer Surveys</div>
      <p className="box-para-6">
        Gain valuable insights to improve employee engagement, satisfaction, and
        company culture.
      </p>
      <div className="testimonial">Testimonials</div>
      <img className="testimonial-img" src={testimonial} alt="testimonial" />
      <div className="testimonial-box"></div>
      <div className="testimonial-para">
        Form builders are as old as the web, but Typeform elevates the medium
        substantially
      </div>
      <div className="get-started"></div>
      <div className="get-started-head">Ready to give it a try?</div>
      <div className="get-started-para">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s,{" "}
      </div>
      <button className="get-started-btn">
        <p className="get-started-btn-text">Get Started</p>
      </button>
      <div className="footer"></div>
      <img className="footer-img" src={footerImage} alt="footer" />
      <NavLink to="/about" className="about">
        <button className="footer-about-us-btn">About Us</button>
      </NavLink>
      <NavLink to="/contact-us" className="contact">
        <button className="footer-contact-us-btn">Contact Us</button>
      </NavLink>
      <NavLink to="/pricing" className="loginn">
        <button className="footer-pricing-btn">Pricing Us</button>
      </NavLink>
      <NavLink to="/terms" className="loginn">
        <button className="footer-terms-btn">Terms of use</button>
      </NavLink>
    </div>
  );
}

export default LandingPage;
