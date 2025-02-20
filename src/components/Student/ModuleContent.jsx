import React from "react";

export default function ModuleContent() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mx-5 my-2">
          <h2 className="mb-0 text-info">Clinical Research</h2>
          <p style={{ fontSize: 15 }}>Clinical Research Aproaches</p>
        </div>
        <div className="container">
          <div class="card">
            <div class="card-header" style={{ backgroundColor: "#CBE7FF66" }}>
              <h3 className="text-info">
                Chapter 1 - Evolution of clinical research
              </h3>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-8 border-end">
                  <table class="table table-borderless mx-5">
                    <thead>
                      <tr>
                        <th scope="col">Required</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <div className="d-flex ">
                            <i
                              class="fas fa-file-invoice me-2"
                              style={{ fontSize: "18px" }}
                            ></i>
                            <div>
                              <h5 className="mb-1 p-0">Quiz</h5>
                              <small
                                className="mb-1 p-0 tex-muted text-secondary"
                                style={{ fontWeight: "normal" }}
                              >
                                Evolution of clinic reaserch part-2
                              </small>{" "}
                              <br />
                              <span className="mb-1 p-0 text-dark">
                                3-4 mins
                              </span>
                            </div>
                          </div>
                        </th>

                        <td>8/10</td>
                        <td>
                          <span>
                            May 9 <br /> 11:49 PM
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div className="d-flex ">
                            <i
                              class="fas fa-file-invoice me-2"
                              style={{ fontSize: "18px" }}
                            ></i>
                            <div>
                              <h5 className="mb-1 p-0 ">Quiz</h5>
                              <small
                                className="mb-1 p-0 tex-muted text-secondary"
                                style={{ fontWeight: "normal" }}
                              >
                                Evolution of clinic reaserch part-2
                              </small>{" "}
                              <br />
                              <span className="mb-1 p-0 text-dark">
                                3-4 mins
                              </span>
                            </div>
                          </div>
                        </th>

                        <td>8/10</td>
                        <td>
                          <span>
                            May 9 <br /> 11:49 PM
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-4">
                  <div className="row mt-3">
                    <div className="col-6 d-flex justify-content-center">
                      <div className="text-center">
                        <i class="fas fa-desktop text-info fs-4 mb-2"></i>
                        <p className="m-0 p-0">Videos</p>
                        <small className="text-muted">2-6 Hours</small>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <div className="text-center">
                        <i class="fas fa-info-circle text-info fs-4 mb-2"></i>
                        <p className="m-0 p-0">Status</p>
                        <small className="text-muted">Completed</small>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div class="col-auto me-auto"></div>
                    <div class="col-auto">
                      <button className="btn btn-outline-info">
                        Start Again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
