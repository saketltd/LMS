import React from "react";

export default function Header() {
  return (
    // Header
    <div
      id="header"
      class="mdk-header js-mdk-header mb-0"
      data-fixed
      data-effects=""
    >
      <div class="mdk-header__content">
        <div
          class="navbar navbar-expand navbar-light navbar-shadow"
          id="default-navbar"
          data-primary
        >
          <a href="/" className="navbar-brand mr-16pt">
            <img
              src="images/logo-black@2x.png"
              alt="logo"
              className="img-fluid"
              style={{ width: 200 }}
            />
          </a>

          <span
            style={{ borderLeft: "1px solid #bababa", height: "30px" }}
          ></span>

          <ul className="nav navbar-nav ml-auto mr-0">
            <li className="nav-item">
              <a href="/signup" className="btn btn-outline-primary">
                Get Started
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/signup"
                className="btn btn-outline-primary"
                style={{ height: "100%", fontSize: "17px" }}
              >
                <i class="far fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <img
                src="images/256_michael-dam-258165-unsplash.jpg"
                class="rounded"
                width="35"
                alt="..."
              />
              <div className="ml-2">
                <strong>Emma Tylor</strong>
                <br />
                <small>Student</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
