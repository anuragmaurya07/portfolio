import { useState } from "react";
import underline from "../../../src/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function NavbarFolio() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top">
      <div className="container-fluid">

        {/* Brand */}
        <a className="navbar-brand fs-3 fw-bold fst-italic" href="#home">
          Anurag
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav mx-auto">

            {[
              ["hero", "Home"],
              ["about", "About Me"],
              ["services", "Services"],
              ["mywork", "Portfolio"],
              ["contact", "Contact"],
            ].map(([key, label]) => (
              <li className="nav-item mx-2 text-center" key={key}>
                <AnchorLink
                  className="nav-link"
                  href={`#${key}`}
                  onClick={() => setMenu(key)}
                >
                  {label}
                </AnchorLink>
                {menu === key && (
                  <img src={underline} className="d-block mx-auto" />
                )}
              </li>
            ))}
          </ul>

          {/* Button */}
          <AnchorLink
            href="#contact"
            className="btn btn-outline-warning ms-lg-3"
            onClick={() => setMenu("contact")}
          >
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
}
