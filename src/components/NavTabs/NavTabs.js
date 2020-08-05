import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navTabs.style.css"

class NavTabs extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav id="navBar" className="navbar navbar-expand-lg navbar-dark  transparent-nav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Volodymyr Petrytsya
          </Link>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/portfolio-r">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
// function NavTabs() {
//   // We'll go into the Hooks API later, for now, we are just using some code
//   // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
//   // This allows the component to check the route any time the user uses a link to navigate.
//   const location = useLocation();

//   return (
//     <div>
//       <header>
//         <nav class="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary">
//           <div class="container">
//             <div className="nav nav-tabs">
//               <div className="navbar-brand ">
//                 <Link
//                   to="/"
//                   className={
//                     location.pathname === "/" ? "nav-link active" : "nav-link"
//                   }
//                 >
//                   Volodymyr Petrtytsya
//                   <button
//                     class="navbar-toggler"
//                     type="button"
//                     data-toggle="collapse"
//                     data-target="#navbarNavAltMarkup"
//                     aria-controls="navbarNavAltMarkup"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                   >
//                     <span class="navbar-toggler-icon"></span>
//                   </button>
//                 </Link>
//               </div>
//               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="nav-item">
//                   <Link
//                     to="/about"
//                     className={
//                       location.pathname === "/about"
//                         ? "nav-link active"
//                         : "nav-link"
//                     }
//                   >
//                     About
//                   </Link>
//                 </div>

//                 <div className="nav-item">
//                   <Link
//                     to="/blog"
//                     className={
//                       location.pathname === "/blog"
//                         ? "nav-link active"
//                         : "nav-link"
//                     }
//                   >
//                     Portfolio
//                   </Link>
//                 </div>
//                 <div className="nav-item">
//                   <Link
//                     to="/contact"
//                     className={
//                       location.pathname === "/contact"
//                         ? "nav-link active"
//                         : "nav-link"
//                     }
//                   >
//                     Contact
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

export default NavTabs;
