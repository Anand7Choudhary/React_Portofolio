import React from 'react'

export default function Skills() {
    return (
      <>
        <section id="skills" className="skills">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>My Programming Knowledge</p>
            </div>
            <div className="skill-sets">
              <div className="bar">
                <div className="info">
                  <span>C++</span>
                </div>
                <div className="progress-line cpp">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>C</span>
                </div>
                <div className="progress-line c">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>C#</span>
                </div>
                <div className="progress-line csharp">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>React.JS</span>
                </div>
                <div className="progress-line reactjs">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>HTML</span>
                </div>
                <div className="progress-line html">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>CSS</span>
                </div>
                <div className="progress-line css">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>jQuery</span>
                </div>
                <div className="progress-line jquery">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
              <div className="bar">
                <div className="info">
                  <span>MySQL</span>
                </div>
                <div className="progress-line mysql">
                  <span id="skillSpan" className="skillSpan"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
