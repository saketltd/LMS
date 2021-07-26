import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark border-top-2 mt-auto">
      <div className="container page__container page-section d-flex flex-column">
        <div className="row" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
          <div className="col-12 col-lg-3 col-md-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
            <img
              className="brand-icon"
              style={{ marginBottom: 30 }}
              src="images/logo-white.png"
              width="200"
              alt="Luma"
            />
            <p
              className="measure-lead-max mr-8pt"
              style={{ width: "95%", color: "#7f8b9c" }}
            >
              True Lessons is a dedicated platform offering specialized courses
              in Clinical Research as well as in all-round communicative and
              language development training.
            </p>
          </div>
          <div className="col-12 col-lg-2 offset-lg-1 col-md-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"></span>
            <ul
              style={{
                marginTop: 25,
                fontSize: 15,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li>
                <a href="/about" style={{ color: "#7f8b9c" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/clinical" style={{ color: "#7f8b9c" }}>
                  Clinical Research
                </a>
              </li>
              <li>
                <a href="/career" style={{ color: "#7f8b9c" }}>
                  Career Development
                </a>
              </li>
              <li>
                <a href="/about#team" style={{ color: "#7f8b9c" }}>
                  Team
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "#7f8b9c" }}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mb-8pt d-flex">
          <a href="/#" className="text-70 text-underline mr-8pt small">
            Terms
          </a>
          <a href="/#" className="text-70 text-underline small">
            Privacy policy
          </a>
        </p>
        <p className="text-50 small mt-n1 mb-0">
          Copyright 2019 &copy; All rights reserved.
        </p>
      </div>
    </div>
  );
}
