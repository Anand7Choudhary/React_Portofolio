import React from 'react'
import { Icon } from "@iconify/react";

export default function Footer() {
    return (
      <>
        <footer id="footer">
          <div className="footer-top">
            <div className="row">
              <div className="footer-contact">
                <h3>Anand Choudhary</h3>
                <p>
                  Bangalore, India
                  <br />
                  <br />
                  <strong>Phone: </strong> +91 7019640462
                  <br />
                  <strong>Email: </strong> raschoudhary879 @example.com
                  <br />
                </p>
              </div>

              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a href="#hero">Home</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>How I can Help</h4>
                <ul>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a>Web Design</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a>Web Development</a>
                  </li>
                  <li>
                    <Icon
                      className="rightPointer"
                      icon="akar-icons:chevron-right"
                    />{" "}
                    <a>Software Programming</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>My Social Networks</h4>
                <p>Knock Knock!Who's there?</p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/profile.php?id=100011517168750"
                    target="_blank"
                    className="facebook"
                  >
                    <Icon className="icon" icon="akar-icons:facebook-fill" />
                  </a>
                  <a
                    href="https://www.instagram.com/anand_choudhary_07/"
                    target="_blank"
                    className="instagram"
                  >
                    <Icon
                      className="icon"
                      icon="entypo-social:instagram-with-circle"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anand-choudhary-51b4211b8/"
                    target="_blank"
                    className="linkedin"
                  >
                    <Icon
                      className="icon"
                      icon="entypo-social:linkedin-with-circle"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="endStatement">
            <p>
              Finding Maps{" "}
              <Icon className="adventure" icon="icons8:adventures" />
            </p>
          </div>
        </footer>
      </>
    );
}
