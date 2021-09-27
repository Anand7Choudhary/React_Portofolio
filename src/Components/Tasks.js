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
                    <Icon
                      icon="ic:baseline-desktop-windows"
                      className="symbol"
                    />
                  </div>
                  <h4 className="title">Web Development</h4>
                  <p className="description">
                    Skilled in developing web application using HTML, CSS,
                    JavaScript, React framework, C#, ASP.net and MySQL,
                  </p>
                </div>
              </div>

              <div className="box2 box">
                <div className="icon-box">
                  <div className="icon">
                    <Icon icon="ant-design:windows-filled" className="symbol" />
                  </div>
                  <h4 className="title">
                    Windows Desktop Application Development
                  </h4>
                  <p className="description">
                    Experienced in developing Windows Application using VB.net
                    and C#.net and SQL Database
                  </p>
                </div>
              </div>

              <div className="box3 box">
                <div className="icon-box">
                  <div className="icon">
                    <Icon icon="bx:bx-code-curly" className="symbol" />
                  </div>
                  <h4 className="title">Software Programming</h4>
                  <p className="description">
                    Skilled in programming and developing applications using C++
                    Programming Language. Experience in Competitive Programming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
