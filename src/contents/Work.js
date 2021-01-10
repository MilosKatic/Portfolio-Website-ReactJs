import React, { Component } from "react";
import "./work.css";
import profilepic from "../img/image_fixed_width.png";
import imgoe from "../img/Screenshot_3resized.png";
import imgtwo from "../img/image_fixed_widthMR.png";
import imgwo from "../img/Screenshot_2.png";
import imo from "../img/screencapture-fluted-layout-299912-firebaseapp-2021-01-04-14_21_34.png";

class Work extends Component {
  render() {
    return (
      <div className="condiv">
           <div className="post">
          <div className="post__header">
            <h2>Instagram-clone</h2>
          </div>
          <img className="post__image" src={imo} alt="ProfilePic"></img>

          <div className="post__comments">
            <p>
              {" "}
              React and firebase <br></br>
              <a
                className="blaa"
                href="https://fluted-layout-299912.firebaseapp.com/"
              >
                See on firebase hosting{" "}
              </a>{" "}
            </p>
          </div>
          </div>
           <div className="post">
          <div className="post__header">
            <h2>SkiResorts</h2>
          </div>
          <img className="post__image" src={imgoe} alt="ProfilePic"></img>

          <div className="post__comments">
            <p>
              {" "}
              Angular 7 web app <br></br>
              <a
                className="blaa"
                href="https://github.com/MilosKatic/Angular-Ski-Resorts"
              >
                See on github{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="post">
          <div className="post__header">
            <h2>Graphics Card Shop</h2>
          </div>
          <img className="post__image" src={imgwo} alt="ProfilePic"></img>
          
          <div className="post__comments">
            <p>
              {" "}
              Angular 7 web app <br></br>
              <a
                className="blaa"
                href="https://github.com/MilosKatic/Angular-Graphics-Card-Shop"
              >
                See on github{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="post">
          <div className="post__header">
            <h2>Landing page</h2>
          </div>
          <img className="post__image" src={imgtwo} alt="ProfilePic"></img>

          <div className="post__comments">
            <p>
              {" "}
              Landing page disign <br></br>
              <a
                className="blaa"
                href="https://github.com/MilosKatic/MegaRent-landingPage"
              >
                See on github{" "}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="post">
          <div className="post__header">
            <h2>Landing page</h2>
          </div>
          <img className="post__image" src={profilepic} alt="ProfilePic"></img>

          <div className="post__comments">
            <p>
              {" "}
              Landing page disign <br></br>
              <a
                className="blaa"
                href="https://github.com/MilosKatic/Escape-LandingPage"
              >
                See on github{" "}
              </a>{" "}
            </p>
          </div>
        </div>

       
      </div>
      
    );
  }
}

export default Work;
