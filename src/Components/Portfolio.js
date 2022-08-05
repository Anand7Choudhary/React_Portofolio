import React from 'react'
import work1 from '../Images/work1.PNG'
import work2 from "../Images/work2.PNG";
import work3 from "../Images/work3.PNG";
import work5 from "../Images/work5.PNG";
import work44 from "../Images/work44.PNG";
import { Icon } from "@iconify/react";

export default function Portfolio() {
    return (
      <>
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Check out some of my beautiful Work</p>
            </div>
            <div className="row portfolio-container workBox">
              <div className = "portfolio-item" >
                <div className = "portfolio-wrap" >
                <img src = {work5}className = "img-fluid" alt = "" />
                <div className = "portfolio-links" > {
                  /* <a href="assets\img\work1.PNG">
                                        <i className="bi bi-plus"></i>
                                      </a> */
                } 
                <a a href = "https://movieium.herokuapp.com/"
                rel = "noreferrer"
                target = "_blank"
                title = "More Details" >
                <Icon className = "icon" icon = "akar-icons:link-chain" />
                </a> 
                </div>
                <div className = "portfolio-info" >
                <h4> Movieium </h4> 
                <p >Personal Movie Library</p> 
                </div> 
                </div> 
                </div>

              <div className="portfolio-item">
                <div className="portfolio-wrap">
                  <img src={work1} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    {/* <a href="assets\img\work1.PNG">
                      <i className="bi bi-plus"></i>
                    </a> */}
                    <a a href = "https://anand7choudhary.github.io/drager2.0/"
                    rel = "noreferrer"
                    target = "_blank"
                    title = "More Details" >
                      <Icon className="icon" icon="akar-icons:link-chain" />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>WebDezn</h4>
                    <p>Pre Design your website</p>
                  </div>
                </div>
              </div>

              <div className="portfolio-item">
                <div className="portfolio-wrap">
                  <img src={work2} className="img-fluid" alt="" />
                  {/* <div className="portfolio-links">
                    <a href="assets\img\work2.PNG">
                      <i className="bi bi-plus"></i>
                    </a>
                  </div> */}
                  <div className="portfolio-info">
                    <h4>FoodOPedia</h4>
                    <p>Search and create a dish</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-wrap">
                  <img src={work3} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    {/* <a href="assets\img\work3.PNG">
                      <i className="bi bi-plus"></i>
                    </a> */}
                    <a
                      href="https://anand7choudhary.github.io/slideGame/"
                      rel = "noreferrer"
                      target="_blank"
                      title="More Details"
                    >
                      <Icon className="icon" icon="akar-icons:link-chain" />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>Slider</h4>
                    <p>play a fun Slider game</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-wrap">
                  <img src={work44} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    {/* <a href="assets\img\work4.PNG">
                      <i className="bi bi-plus"></i>
                    </a> */}
                    <a
                      href="https://www.codechef.com/users/anand07101999"
                      target="_blank"
                      rel = "noreferrer"
                      title="More Details"
                    >
                      <Icon className="icon" icon="akar-icons:link-chain" />
                    </a>
                  </div>
                  <div className="portfolio-info">
                    <h4>CodeChef</h4>
                    <p>Competitive Coding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
