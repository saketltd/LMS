import React from "react";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import UpdateIcon from "@material-ui/icons/Update";
import image from "../../public/img/sketch_430x168.png";
import image1 from "../../public/img/invision_430x168.png";
import image2 from "../../public/img/photoshop_430x168.png";
import luke from "../../public/img/256_luke-porter-261779-unsplash.jpg";
import luke1 from "../../public/img/256_michael-dam-258165-unsplash.jpg";
import luke2 from "../../public/img/256_rsz_1andy-lee-642320-unsplash.jpg";
import invision from "../../public/img/invision_200x168.png";

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Exo 2'" }}>
      <div className="bg-white border-bottom pt-3 pb-3">
        <div className="container" style={{ fontFamily: "'Exo 2'" }}>
          <div className="row">
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <SubscriptionsIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  8,000+ Courses
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Explore a wide range of skills.
                </p>
              </div>
            </div>
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <VerifiedUserIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  By Industry Experts
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Professional development from the best people.
                </p>
              </div>
            </div>
            <div class="d-flex col-md align-items-center border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
              <div
                class="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt"
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  marginRight: 12,
                }}
              >
                <UpdateIcon style={{ color: "white" }} />
              </div>
              <div class="flex">
                <div class="card-title mb-4pt" style={{ fontWeight: "bold" }}>
                  Unlimited Access
                </div>
                <p
                  class="card-subtitle text-black-70"
                  style={{ fontSize: 12, color: "gray" }}
                >
                  Unlock Library and learn any topic with one subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-4 border-bottom">
        <div className="container">
          <p style={{ fontWeight: "bold" }}>FROM THE BLOG</p>
          <div class="row">
            <div class="col-sm-4">
              <div
                class="card shadow-sm p-3 mb-5 bg-white rounded"
                style={{ backgroundImage: `url(${image})`, height: "12rem" }}
              >
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <a href="/#">
                        <img
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            border: "2px solid white",
                          }}
                          src={luke}
                          alt="Luke"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                    <div className="col-2 justify-content-center align-items-center">
                      <span className="text-light" style={{ fontSize: 13 }}>
                        <i class="fas fa-eye"></i> <small>327</small>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <p class="mb-0 text-muted">SKETCH</p>
                    <h5 class="card-title text-light mb-3">
                      Merge Duplicates Inconsistent Symbols
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div
                class="card shadow-sm p-3 mb-5 bg-white rounded"
                style={{
                  backgroundImage: `url(${image1})`,
                  height: "12rem",
                }}
              >
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <a href="/#">
                        <img
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            border: "2px solid white",
                          }}
                          src={luke1}
                          alt="Luke"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                    <div className="col-2 justify-content-center align-items-center">
                      <span className="text-light" style={{ fontSize: 13 }}>
                        <i class="fas fa-eye"></i> <small>327</small>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <p class="mb-0 text-muted">INVISION</p>
                    <h5 class="card-title text-light mb-3">
                      Design Systems Essentials
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div
                class="card shadow-sm p-3 mb-5 bg-white rounded"
                style={{
                  backgroundImage: `url(${image2})`,
                  height: "12rem",
                }}
              >
                <div class="card-body">
                  <div className="row">
                    <div className="col-10">
                      <a href="/#">
                        <img
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            border: "2px solid white",
                          }}
                          src={luke2}
                          alt="Luke"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                    <div className="col-2 justify-content-center align-items-center">
                      <span className="text-light" style={{ fontSize: 13 }}>
                        <i class="fas fa-eye"></i> <small>327</small>
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <p class="mb-0 text-muted">Photoshop</p>
                    <h5 class="card-title text-light mb-3">
                      Semantic Logo Design
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="row">
              <div class="col-auto">
                <a href="/#">
                  <img
                    src={invision}
                    alt=""
                    srcset=""
                    className="rounded"
                    width="70"
                  />
                </a>
              </div>
              <div className="col-3">
                <a
                  href="/#"
                  className="card-title text-dark fw-bold text-decoration-none mr-3"
                >
                  Design System Essentials
                </a>
                <br />
                <small className="text-muted">35 Views last week</small>
              </div>
              <div className="col-2 my-auto">
                <div className="text-uppercase text-muted">
                  <i class="far fa-folder"></i> invision
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="text-muted">11 Nov, 2018 07:46 AM</div>
              </div>
              <div className="col-auto my-auto">
                <a href="/#">
                  <img
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      border: "2px solid white",
                    }}
                    src={luke2}
                    alt="Luke"
                    className="rounded-circle"
                  />
                </a>
                <a href="/#">
                  <img
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      border: "2px solid white",
                    }}
                    src={luke2}
                    alt="Luke"
                    className="rounded-circle"
                  />
                </a>
                <a href="/#">
                  <img
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      border: "2px solid white",
                    }}
                    src={luke2}
                    alt="Luke"
                    className="rounded-circle"
                  />
                </a>
              </div>
              <div className="col-auto text-muted my-auto">
                <a href="/#" className="text-dark text-decoration-none">
                  <small>+2 more</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
