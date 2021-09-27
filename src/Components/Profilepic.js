import React from 'react'
import Profile_Pic from '../Images/Profile_Pic.jpeg';
import profile2 from "../Images/profile2.png";
import { Icon } from "@iconify/react";

export default function Profilepic() {
    const inlineStyle={
        display:"flex",
        justifyContent:"center"
    }
    return (
      <>
        <section id="team" className="team">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>My Self</h2>
            </div>

            <div className="row" style={inlineStyle}>
              <div>
                <div className="member">
                  <img src={profile2} className="img-fluid" alt="Profile" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Anand Choudhary</h4>
                      <span>
                        Son | Brother | Student
                        <br />
                        Software Developer
                      </span>
                    </div>
                    <div className="social">
                      <a
                        href="https://www.facebook.com/profile.php?id=100011517168750"
                        target="_blank"
                      >
                        <Icon
                          className="icon"
                          icon="akar-icons:facebook-fill"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/anand_choudhary_07/"
                        target="_blank"
                      >
                        <Icon
                          className="icon"
                          icon="entypo-social:instagram-with-circle"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anand-choudhary-51b4211b8/"
                        target="_blank"
                      >
                        <Icon
                          className="icon"
                          icon="entypo-social:linkedin-with-circle"
                        />
                      </a>
                      <a
                        href="https://github.com/Anand7Choudhary"
                        target="_blank"
                      >
                        <Icon className="icon" icon="akar-icons:github-fill" />
                      </a>
                      <a
                        href="https://accounts.snapchat.com/accounts/snapcodes"
                        target="_blank"
                      >
                        <Icon className="icon" icon="fa-brands:snapchat" />
                      </a>
                    </div>
                  </div>
                  <div className="touchicon">
                    <Icon className="iconTouch" icon="ic:round-touch-app" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
