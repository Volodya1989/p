/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contact.style.css";
import resumeIcon from "../../assets/resumeIcon.png";
import inl from "../../assets/inl.png";
import github from "../../assets/github.png";
// import ScrollUp from "../../ScrollUp/ScrollUp";
import mail from "../../assets/mail.png";
import mobile from "../../assets/mobile.png";
import Resume_Vol_Petrytsya from "../../assets/Resume_Vol_Petrytsya.pdf";

const Contact = () => {
  return (
    <main>
      <section>
        <div id="contact" className="container">
          <div
            className="contact-content contact-info content"
            id="contact-info"
          >
            <h1 className="content-text">Contact Me</h1>

            <hr id="portfolioLine" />

            <div className="row">
              <div className="col-md-12 col-lg-4 ">
                <div>
                  <ul>
                    <li>
                      <a href="tel:+12244000558">
                        <img className="logo" src={mobile} alt="CV"></img>
                      </a>
                      <br />
                      <a href="tel:+12244000558">
                        <span className="contactInfoTel">224-400-0558 </span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:vpetrytsia@gmail.com" target="_blank">
                        <img className="logo" src={mail} alt="CV"></img>
                      </a>
                      <br />
                      <a href="mailto:vpetrytsia@gmail.com" target="_blank">
                        <span className="contactInfoTel">
                          {" "}
                          vpetrytsia@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Volodya1989" target="_blank">
                        <img
                          id="git"
                          className="logo"
                          src={github}
                          alt="CV"
                        ></img>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/vol-petrytsya-497317196/"
                        target="_blank"
                      >
                        <img className="logo" src={inl} alt="CV"></img>
                      </a>
                    </li>

                    <li>
                      <a
                        href={Resume_Vol_Petrytsya}
                        className="img__wrap"
                        target="_blank"
                      >
                        <img
                          className="logo img__img"
                          src={resumeIcon}
                          alt="CV"
                        ></img>
                        <p className="img__description">Resume</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12   ">
                  <div>
                    <iframe
                      className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7411321579!2d-84.56068880457461!3d33.767633772689834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C+GA!5e0!3m2!1sen!2sus!4v1539674437302"
                      frameBorder="2"
                      style={{ border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* <ScrollUp /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
