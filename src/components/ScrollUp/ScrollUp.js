import "./scrollUp.style.css";
import uArrow from "../assets/uArrow.png";

// import React from 'react';

// const ScrollUp = () => {
//     return (
//         <div>
//             <a href="#navBar">
//                 <img id="up-scroll" src={uArrow} alt="scrollUp"/>
//             </a>
//         </div>
//     );
// };

// export default ScrollUp;
import React, { Component } from "react";




export default class ScrollUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="container">
        <div className="scroll-to-top">
          {is_visible && (
            <div onClick={() => this.scrollToTop()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                width="34"
              >
                <g transform="translate(-18.121 -3.364)">
                  <rect
                    ry="4"
                    y="3"
                    x="18"
                    height="40"
                    width="34"
                    // fill="rgb(46, 2, 104)"
                  />
                  <g transform="translate(-.48 2.134)">
                    <rect
                      ry="4"
                      y="1"
                      x="18"
                      height="40"
                      width="34"
                      // fill="rgb(46, 2, 104)"

                    />

                    <g fill="#ececec">
                      <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                      <path d="M22.435 17.62l4.684 4.685 5.044-5.044v19.352h6.625V17.26l5.044 5.044 4.683-4.684-13.04-13.04z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  }
}
