import React from "react";
import Resume from "../../assets/Resume.pdf";
import "./contact.style.css";
import resumeIcon from "../../assets/resumeIcon.png";
import inl from "../../assets/inl.png";
import github from "../../assets/github.png";
import ScrollUp from "../../ScrollUp/ScrollUp";
import mail from "../../assets/mail.png";
import mobile from "../../assets/mobile.png";

const Contact = () => {
  return (
    <main>
      <section>
        <div id="contact" className="container">
          <div
            className="contact-content contact-info content"
            id="contact-info"
          >
            <div className="row">
              <div className="col-lg-11 col-lg-10">
                <form>
                  <h1 className="content-text">Contact Me</h1>
                  <div>
                    <hr />
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
                        <a
                          href="https://github.com/Volodya1989"
                          target="_blank"
                        >
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
                          href="https://www.linkedin.com/in/volodymyr-petrytsya-497317196/"
                          target="_blank"
                        >
                          <img className="logo" src={inl} alt="CV"></img>
                        </a>
                      </li>

                      <li>
                        <a href={Resume} className="img__wrap" target="_blank">
                          <img
                            className="logo img__img"
                            src={resumeIcon}
                            alt="CV"
                          ></img>
                          <p className="img__description">Resume</p>
                        </a>
                      </li>
                    </ul>
                    <ScrollUp />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
