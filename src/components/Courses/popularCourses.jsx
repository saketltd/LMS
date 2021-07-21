import React from "react";
import image from "../../public/img/sketch_430x168.png";

export default function Polular() {
  return (
    <div style={{ fontFamily: "'Exo 2'" }}>
      <div className="pt-4 pb-4 border-bottom">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8">
              <small className="text-uppercase text-muted">
                DISPLAYING 4 OUT OF 10 COURSES
              </small>
            </div>
            <div className="col-4">
              <small className="text-uppercase text-muted">
                SORT BY &nbsp;&nbsp;
                <a href="/#" className="text-dark">
                  NEWEST&nbsp;&nbsp;<i class="fas fa-sort"></i>
                </a>
                &nbsp;&nbsp;
                <a href="/#" className="text-dark">
                  POPULARITY&nbsp;&nbsp;<i class="fas fa-sort"></i>
                </a>
              </small>
            </div>
          </div>
          <p style={{ fontWeight: "bold" }}>POPULAR COURSES</p>
          <div className="row">
            <div className="col-3">
              <div
                class="card"
                style={{
                  width: "212px",
                  height: "212px",
                  borderRadius: ".5rem",
                }}
              >
                <img
                  src={image}
                  class="card-img-top"
                  height="168"
                  alt="..."
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                  }}
                />
                <div
                  class="card-footer text-muted"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="row">
                    <div className="col-10">
                      <a href="/#" className="text-decoration-none">
                        <h6 class="card-title text-dark fw-bold mb-0">
                          Learn Sketch
                        </h6>
                      </a>
                    </div>
                    <div className="col-2">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                class="card"
                style={{
                  width: "212px",
                  height: "212px",
                  borderRadius: ".5rem",
                }}
              >
                <img
                  src={image}
                  class="card-img-top"
                  height="168"
                  alt="..."
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                  }}
                />
                <div
                  class="card-footer text-muted"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="row">
                    <div className="col-10">
                      <a href="/#" className="text-decoration-none">
                        <h6 class="card-title text-dark fw-bold mb-0">
                          Learn Sketch
                        </h6>
                      </a>
                    </div>
                    <div className="col-2">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                class="card"
                style={{
                  width: "212px",
                  height: "212px",
                  borderRadius: ".5rem",
                }}
              >
                <img
                  src={image}
                  class="card-img-top"
                  height="168"
                  alt="..."
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                  }}
                />
                <div
                  class="card-footer text-muted"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="row">
                    <div className="col-10">
                      <a href="/#" className="text-decoration-none">
                        <h6 class="card-title text-dark fw-bold mb-0">
                          Learn Sketch
                        </h6>
                      </a>
                    </div>
                    <div className="col-2">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                class="card"
                style={{
                  width: "212px",
                  height: "212px",
                  borderRadius: ".5rem",
                }}
              >
                <img
                  src={image}
                  class="card-img-top"
                  height="168"
                  alt="..."
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                  }}
                />
                <div
                  class="card-footer text-muted"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="row">
                    <div className="col-10">
                      <a href="/#" className="text-decoration-none">
                        <h6 class="card-title text-dark fw-bold mb-0">
                          Learn Sketch
                        </h6>
                      </a>
                    </div>
                    <div className="col-2">
                      <i class="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-muted mt-3 my-auto">
            <i class="fas fa-angle-left"></i> Prev &nbsp;
            <span class="badge bg-primary">1</span>&nbsp; Next &nbsp;
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
