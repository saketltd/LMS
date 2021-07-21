import React from "react";
import india from "../../public/img/1280px-Flag_of_India.svg.png";

export default function Dashboard() {
  return (
    <div style={{ fontFamily: "'Exo 2'" }}>
      <div
        className="container border"
        style={{ maxWidth: "100%", borderRadius: "10px" }}
      >
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex rounded justify-content-center align-items-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#373d43",
                  }}
                >
                  <i class="fas fa-chart-line"></i>
                </div>
                <div className="ms-3" style={{ fontSize: "13px" }}>
                  <p class="fw-bold mb-0">Earnings</p>
                  <small className="text-muted">₹12.60k</small>
                </div>
                <div
                  className="d-flex rounded justify-content-center align-items-center ms-3"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#373d43",
                  }}
                >
                  <i class="fas fa-receipt"></i>
                </div>
                <div className="ms-3" style={{ fontSize: "13px" }}>
                  <p class="fw-bold mb-0">Sales</p>
                  <small className="text-muted">256</small>
                </div>
              </div>
            </a>
            <div className="d-flex my-auto justify-content-center align-items-center">
              <a href="/#" className="text-light fs-5 me-3">
                <i class="far fa-envelope"></i>
              </a>
              <a href="/#" className="text-light fs-5 me-3">
                <i class="far fa-bell"></i>
              </a>
              <a href="/#" className="text-light fs-5 me-3">
                <img
                  className="rounded-circle"
                  src={india}
                  width="30"
                  height="30"
                  alt=""
                  srcset=""
                />
              </a>
              <a href="/#">
                <div
                  className="d-flex text-light fs-5 rounded-circle justify-content-center align-items-center"
                  style={{
                    backgroundColor: "blue",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <i class="far fa-user"></i>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
