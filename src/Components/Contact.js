import React from 'react'
import { Icon } from "@iconify/react";
// import $ from "jquery";

export default function Contact() {
    const style1={
        width:"100%"
    }
    const style2={
        textDecoration:"none"
    }
    // $(window)
    //   .on("resize", function () {
    //     $("table").each(function () {
    //       if ($(this).width() > $(this).parent("div").width()) {
    //         $(this).css("word-break", "break-all");
    //       } else {
    //         $(this).css("word-break", "break-word");
    //         if ($(this).width() > $(this).parent("div").width()) {
    //           $(this).css("word-break", "break-all");
    //         }
    //       }
    //     });
    //   })
    //   .trigger("resize");
    return (
      <>
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact me and lets get started</p>
            </div>

            <div className="row">
              <div
                style={style1}
              >
                <div className="info">
                  <div className="address">
                    {/* <Icon className="icon" icon="akar-icons:location" /> */}
                    < lord-icon
                    class="icon"
                    src = "https://cdn.lordicon.com/elzslyvl.json"
                    trigger = "loop"
                    colors = "primary:#4be1ec,secondary:#cb5eee">
                      </lord-icon>
                    <h4>Location:</h4>
                    <a style={style2}>
                      <p>Bangalore, Karnataka</p>
                    </a>
                  </div>

                  <div className="email">
                    {/* <Icon className="icon" icon="carbon:email" /> */}
                    < lord-icon
                    class="icon"
                    src = "https://cdn.lordicon.com/sdhhsgeg.json"
                    trigger = "loop"
                    colors = "primary:#4be1ec,secondary:#cb5eee">
                      </lord-icon>
                    <h4>Email:</h4>
                    <a href="mailto:raschoudhary879@gmail.com" style={style2}>
                      <p>raschoudhary879@gmail.com</p>
                    </a>
                  </div>

                  <div className="phone">
                    {/* <Icon className="icon" icon="bx:bx-phone" /> */}
                    < lord-icon
                    class = "icon"
                    src = "https://cdn.lordicon.com/psseymno.json"
                    trigger = "loop"
                    colors = "primary:#4be1ec,secondary:#cb5eee" >
                      </lord-icon>
                    <h4>Call:</h4>
                    <a href="phone:7019640462" style={style2}>
                      <p>+91 7019640462</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
