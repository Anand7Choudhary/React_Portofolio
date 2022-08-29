import React from 'react'
// import { Icon } from "../../@iconify/react";
// import { Icon } from "node_modules/@iconify/react"
import { Icon } from '@iconify/react';
import $ from "jquery";

export default function Header() {
  $(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        if (this.hash !== "#hero") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            300,
            function () {
              window.location.hash = hash;
            }
          );
        } else {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - 150,
            },
            300,
            function () {
              window.location.hash = hash - 150;
            }
          );
        }
      }
    });
  });
  // $("a[href='#hero']").click(function () {
  //   let val=document.getElementById("hero").getBoundingClientRect();
  //   let val2=val.top;
  //   // alert(val.top + " " + val2);
  //   $("html, body").animate({val2}, "slow");
  //   return false;
  // });
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("goup").style.display = "flex";
      document.getElementById("theme-icon").style.animationName = "themeMover";
      document.getElementById("goup").style.animationName = "goupMover";
    } else {
      document.getElementById("theme-icon").style.animationName = "themeMoverBack";
      document.getElementById("goup").style.animationName = "goupMoverBack";
      let cntAni = setTimeout(() => {
        document.getElementById("goup").style.display = "none";
      }, 1000)
      clearTimeout(cntAni);
    }
    animationCall();
    //=======================color change of navigation=================
    if (
      (document.body.scrollTop > document.getElementById("hero").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop > document.getElementById("hero").getBoundingClientRect().top - 10)
      &&
      (document.body.scrollTop < document.getElementById("about").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop < document.getElementById("about").getBoundingClientRect().top - 10)
    ) {
      navColorChange(0);
    } else if (
      (document.body.scrollTop >
        document.getElementById("about").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop >
          document.getElementById("about").getBoundingClientRect().top - 10) &&
      (document.body.scrollTop <
        document.getElementById("skills").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop <
          document.getElementById("skills").getBoundingClientRect().top - 10)
    ) {
      navColorChange(1);
    } else if (
      (document.body.scrollTop >
        document.getElementById("skills").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop >
          document.getElementById("skills").getBoundingClientRect().top - 10) &&
      (document.body.scrollTop <
        document.getElementById("portfolio").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop <
          document.getElementById("portfolio").getBoundingClientRect().top - 10)
    ) {
      navColorChange(2);
    } else if (
      (document.body.scrollTop >
        document.getElementById("portfolio").getBoundingClientRect().top - 10 ||
        document.documentElement.scrollTop >
          document.getElementById("portfolio").getBoundingClientRect().top -
            10) &&
      (document.body.scrollTop <
        document.getElementById("portfolio").getBoundingClientRect().bottom ||
        document.documentElement.scrollTop <
          document.getElementById("portfolio").getBoundingClientRect().bottom)
    ) {
      navColorChange(3);
    }else if (
      document.body.scrollTop <
        document.getElementById("about").getBoundingClientRect().top - 10 ||
      document.documentElement.scrollTop <
        document.getElementById("about").getBoundingClientRect().top - 10
    ) {
      navColorChange(0);
    }else{
      let navItems = document.getElementsByClassName("navItems");
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.color = "var(--title-color)";
      }
    }
  }
  const navColorChange = (n) => {
    let navItems = document.getElementsByClassName("navItems");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.color = "var(--title-color)";
    }
    navItems[n].style.color = "var(--button-color)";
  }
  // window.onscroll = function () {
  //   animationCall();
  // };
  const animationCall = () => {
    let xyz = document.getElementById("skills").getBoundingClientRect();
    let skillSpan = document.getElementsByClassName("skillSpan");
    if (
      document.body.scrollTop > xyz.top - 100 ||
      document.documentElement.scrollTop > xyz.top - 100
    ) {
      for (let i = 0; i < skillSpan.length; i++) {
        skillSpan[i].style.animationName = "animate";
      }
    }
  };
  setTimeout(() => {
    if (window.innerWidth > 1000) {
      document.getElementById("navbar").style.display = "block";
      document.getElementById("hamClose").style.display = "block";
    }
  }, 500);
  window.onload = function () {
    // if (
    //   document.body.scrollTop > 100 ||
    //   document.documentElement.scrollTop > 100
    // ) {
    //   document.getElementById("goup").style.display = "flex";
    //   document.getElementById("theme-icon").style.animationName =
    //     "themeMover";
    //   document.getElementById("goup").style.animationName = "goupMover";
    // } else {
    //   document.getElementById("theme-icon").style.animationName =
    //     "themeMoverBack";
    //   document.getElementById("goup").style.animationName = "goupMoverBack";
    //   let cntAni = setTimeout(() => {
    //     document.getElementById("goup").style.display = "none";
    //   }, 1000);
    //   clearTimeout(cntAni);
    // }
    checkTheme();
    navColorChange(0);
  }
  const navStyle = {
    color: "#ffffff"
  }
  function checkTheme() {
    let theme;
    theme = localStorage.getItem("theme");
    if (theme === "dark") {
      changeTheme(0);
    } else {
      changeTheme(1);
    }
  }
  function showMenu(n) {
    let dropMenu = document.getElementById("dropdownMenu");
    let social = document.getElementById("dropdown").getBoundingClientRect();
    if (dropMenu.style.display !== "flex") {
      if (n) {
        dropMenu.style.display = "none";
      } else {
        dropMenu.style.display = "flex";
        dropMenu.style.left = social.left - 50 + "px";
        dropMenu.style.top = social.bottom + 10 + "px";
      }
    } else {
      dropMenu.style.display = "none";
    }
    // document.querySelector(".dropdownMenu").style.display = "block";
  }
  function hideDropMenu() {
    let dropMenu = document.getElementById("dropdownMenu");
    dropMenu.style.display = "none";
  }
  function changeTheme(n) {
    if (!n) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.getElementById("moonIcon").style.display = "none";
      document.getElementById("sunIcon").style.display = "block";
      localStorage.setItem("theme", "dark");
      document.getElementById("body1_bg").style.fill = "#ffffff";
      document.getElementById("body2_bg").style.fill = "#ffffff";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.getElementById("moonIcon").style.display = "block";
      document.getElementById("sunIcon").style.display = "none";
      localStorage.setItem("theme", "light");
      document.getElementById("body1_bg").style.fill = "#ff6600";
      document.getElementById("body2_bg").style.fill = "#ff6600";
    }
  }
  function openMenu(n) {
    if (window.innerWidth <= 1000) {
      let navbar = document.getElementById("navbar");
      let ham = document.getElementById("ham");
      let cross = document.getElementById("hamClose");
      let navcut = document.getElementById("navcut");
      if (n) {
        navbar.style.display = "block";
        ham.style.display = "none";
        navbar.style.animationName = "slidein";
        cross.style.display = "block";
        navcut.style.display = "block";
        // let ctrAni=setTimeout(() => {
        //   navcut.style.display = "block";
        // }, 1000);
      } else {
        ham.style.display = "block";
        cross.style.display = "none";
        navcut.style.display = "none";
        navbar.style.animationName = "slideout";
        // navcut.style.animationName = "slideoutCut";
        let ctrAni = setTimeout(() => {
          navbar.style.display = "none";
        }, 1000);
        clearTimeout(ctrAni);
      }
    }
  }
  return (
    <>
      <header id="header" className="Header">
        <div className="header_body" onMouseEnter={() => hideDropMenu()}>
          <div className="title" onMouseEnter={() => hideDropMenu()}>
            <h1>
              <a href="#header">
                <span>Anand Choudhary</span>
              </a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  href="#hero"
                  onMouseEnter={() => hideDropMenu()}
                  onClick={() => openMenu(0)}
                  className="navItems"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onMouseEnter={() => hideDropMenu()}
                  onClick={() => openMenu(0)}
                  className="navItems"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onMouseEnter={() => hideDropMenu()}
                  onClick={() => openMenu(0)}
                  className="navItems"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onMouseEnter={() => hideDropMenu()}
                  onClick={() => openMenu(0)}
                  className="navItems"
                >
                  Portfolio
                </a>
              </li>
              <li
                className="dropdown"
                id="dropdown"
                onMouseEnter={() => showMenu(0)}
                onClick={() => showMenu(0)}
              //   onMouseLeave={() => showMenu(0)}
              >
                <a>
                  <span>Social </span>
                  <Icon icon="akar-icons:chevron-down" />
                </a>
                <ul
                  className="dropdownMenu"
                  id="dropdownMenu"
                  onMouseEnter={() => showMenu(0)}
                  onMouseLeave={() => showMenu(1)}
                >
                  <li>
                    <a
                      href="https://www.linkedin.com/in/anand-choudhary-51b4211b8/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Anand7Choudhary"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/anand_choudhary_07/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://accounts.snapchat.com/accounts/snapcodes"
                      target="_blank"
                    >
                      Snapchat
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100011517168750"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#contact"
                  className="contact_btn"
                  style={navStyle}
                  onMouseEnter={() => hideDropMenu()}
                  onClick={() => openMenu(0)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hamburger" id="hamburger">
          <Icon
            icon="foundation:align-right"
            className="ham"
            id="ham"
            onClick={() => openMenu(1)}
          />
          <Icon
            icon="eva:close-fill"
            className="hamClose"
            id="hamClose"
            onClick={() => openMenu(0)}
          />
        </div>
      </header>
      <div className="navcut" id="navcut" onClick={() => openMenu(0)}></div>
      <div
        className="theme-icon"
        id="theme-icon"
        onMouseEnter={() => hideDropMenu()}
      >
        <Icon
          icon="bx:bxs-sun"
          className="sunIcon"
          id="sunIcon"
          onClick={() => changeTheme(1)}
        />
        <Icon
          icon="bx:bxs-moon"
          className="moonIcon"
          id="moonIcon"
          onClick={() => changeTheme(0)}
        />
      </div>
      <a href="#hero">
        <div className="goup" id="goup">
          <Icon
            icon="akar-icons:chevron-up"
            className="gototop"
            id="gototop"
          />
        </div>
      </a>
    </>
  );
}
