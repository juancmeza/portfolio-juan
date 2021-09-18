import React, { Component } from "react";
import Navbar from "reactjs-navbar";
import Loader from "react-loader-spinner";
import {
  faUserCircle,
  faNewspaper,
  faHammer,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import "reactjs-navbar/dist/index.css";


class Nav extends Component {
  state = {
    isLoading: false,
  };
 
  render() {

    return (
      <div className="navbar">
        <Navbar
          // logo={logo}
          loader={<Loader type="Puff" color="#C0C0C0" height={25} width={25} />}
          isLoading={this.state.isLoading}
          menuItems={[
            {
              title: "About",
              icon: faUserCircle,
              path:"/",
              isAuth: true,
              onClick: () => {
                window.location.href = "#AboutContainer";
              },
            },
            {
              title: "Projects",
              icon: faHammer,
              isAuth: true,
              onClick: () => {
                window.location.href = "#Projects";
              },
            },
            {
              title: "Publications",
              icon: faNewspaper,
              isAuth: true,
              onClick: () => { 
                window.location.href = "#Publications";
              },
            },
            {
              title: "Contact",
              icon: faEnvelopeOpen,
              isAuth: true,
              onClick: () => { 
                window.location.href = "#Contact";
              },
            },
          ]}
        />
      </div>
    );
  }
}


export default Nav;