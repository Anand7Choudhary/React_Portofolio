import React from 'react'
import { Icon } from "@iconify/react";

export default function Faq() {
    function dropDeatils(n){
        let details=document.getElementsByClassName("collapse");
        if (details[n - 1].style.display != "flex") {
          // for (let i = 0; i < details.length; i++) {
          //   details[i].style.display = "none";
          //   document.getElementById("faqIcon" + (i+1)).style.transform ="rotateZ(0deg)";
          // }
          details[n - 1].style.animationName = "dropdown";
          details[n - 1].style.display = "flex";
          document.getElementById("faqIcon" + n).style.transform =
            "rotateZ(180deg)";
        } else {
          details[n - 1].style.display = "none";
          document.getElementById("faqIcon" + n).style.transform =
            "rotateZ(0deg)";
        }
    }
    return (
      <>
        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>EDUCATION</h2>
            </div>

            <ul className="faq-list">
              <li>
                <div
                  className="collapsed question"
                  href="#faq1"
                  onClick={() => dropDeatils(1)}
                >
                  <Icon
                    className="icon  faqIcon1"
                    id="faqIcon1"
                    icon="akar-icons:chevron-down"
                  />
                  Highest Studies?
                </div>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Studies Bachlore of Computers Applications from Presidency
                    College, Bangalore [2019-2022].
                    <br />
                    Current Grade
                    <br />I Semester - 9.25
                    <br />
                    II Semester - 10.00
                  </p>
                </div>
              </li>

              <li>
                <div
                  href="#faq2"
                  className="collapsed question"
                  onClick={() => dropDeatils(2)}
                >
                  <Icon
                    className="icon  faqIcon2"
                    id="faqIcon2"
                    icon="akar-icons:chevron-down"
                  />
                  School/College Information?
                </div>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    College : Kensri School and College (CBSE), Bangalore
                    [2016-2018].
                    <br />
                    Score : 86.4%
                    <br />
                    School : Florence Public School (ICSE), Bangalore
                    [2005-2016].
                    <br />
                    Score : 81.4%
                  </p>
                </div>
              </li>

              <li>
                <div
                  href="#faq3"
                  className="collapsed question"
                  onClick={() => dropDeatils(3)}
                >
                  <Icon
                    className="icon  faqIcon3"
                    id="faqIcon3"
                    icon="akar-icons:chevron-down"
                  />
                  Certified Courses?
                </div>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    FullStack Web Developer : Shaw Academy
                    <br />
                    ReactJS : Shaw Academy
                    <br />
                    Web Designing : Shaw Academy
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
}
