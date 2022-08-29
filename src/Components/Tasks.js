import React from 'react'
import { Icon } from "@iconify/react";

export default function Tasks() {
    return (
      <>
        <section id="services" className="services">
          <div className="container">
            <div className="maintitle">
              {/* <!-- <h2>Skills</h2> --> */}
              <p>Check out the Skills I can help with</p>
            </div>

            <div className="servicebox">
              <div className="box1 box">
                <div className="icon-box">
                  <div className="icon">
                    {/* <Icon
                      icon="ic:baseline-desktop-windows"
                      className="symbol"
                    /> */}
                    < lord-icon
                    class="symbol"
                    src = "https://cdn.lordicon.com/ivhjpjsw.json"
                    trigger = "loop"
                    colors = "primary:#4be1ec,secondary:#cb5eee">
                      </lord-icon>
                  </div>
                  <h4 className="title">Web Development</h4>
                  <p className="description">
                    Experience in developing web application using HTML, CSS,
                    JavaScript, React framework, C#, ASP.net, Flask(Python), MySQL,SQLite.
                  </p>
                </div>
              </div>

              <div className="box2 box">
                <div className="icon-box">
                  <div className="icon">
                    {/* <Icon icon="ant-design:windows-filled" className="symbol" /> */}
                    < lord-icon
                    class="symbol"
                    src = "https://cdn.lordicon.com/sbgmyyba.json"
                    trigger = "loop"
                    colors = "primary:#4be1ec,secondary:#cb5eee">
                      </lord-icon>
                  </div>
                  <h4 className="title">
                    Business Development
                  </h4>
                  <p className="description">
                    Highly detailed in Business growth analysis so has to boost the growth of an organization
                    to build the next generation technology and stay ahead of the competition.
                  </p>
                </div>
              </div>

              <div className="box3 box">
                <div className="icon-box">
                  {/* <div className="icon">
                    <Icon icon="bx:bx-code-curly" className="symbol" />
                  </div> */}
                  < lord-icon
                  className = "symbol"
                  class="symbol"
                  src = "https://cdn.lordicon.com/qkmmvfdj.json"
                  trigger = "loop"
                  colors = "primary:#4be1ec,secondary:#cb5eee" >
                    </lord-icon>
                  <h4 className="title">Software Programming</h4>
                  <p className="description">
                    Skilled in programming and developing applications using C++, JAVA, Python
                    Programming Languages.Experience in Competitive Programming to bring in more efficient result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
