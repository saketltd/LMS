import React from "react";

export default function Dashboard() {
  return (
    <div className="mdk-header-layout__content page-content ">
      <div className="pt-32pt">
        <div className="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
          <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
            <div className="mb-24pt mb-sm-0 mr-sm-24pt">
              <h2 className="mb-0">Dashboard</h2>

              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>

                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>

          <div className="row" role="tablist">
            <div className="col-auto">
              <a
                href="instructor-earnings.html"
                className="btn btn-outline-secondary"
              >
                Earnings
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section border-bottom-2">
        <div className="container page__container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card border-1 border-left-3 border-left-accent text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 1,569.00</h4>
                  <div>Earnings this month</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 3,917.80</h4>
                  <div>Account Balance</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center mb-lg-0">
                <div className="card-body">
                  <h4 className="h2 mb-0">₹ 10,211.50</h4>
                  <div>Total Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container page__container page-section">
        <div className="page-separator">
          <div className="page-separator__text">Earnings</div>
        </div>
        <div className="card card-body mb-32pt">
          <div
            id="legend"
            className="chart-legend mt-0 mb-24pt justify-content-start"
          ></div>
          <div className="chart" style={{ height: 320 }}>
            <canvas
              id="earningsChart"
              className="chart-canvas js-update-chart-bar"
              data-chart-legend="#legend"
              data-chart-line-background-color="gradient:primary,gray"
              data-chart-prefix="$"
              data-chart-suffix="k"
            ></canvas>
          </div>
        </div>

        <div className="row mb-8pt">
          <div className="col-lg-6">
            <div className="page-separator">
              <div className="page-separator__text">Transactions</div>
            </div>
            <div className="card">
              <div
                data-toggle="lists"
                data-lists-values='[
      "js-lists-values-course", 
      "js-lists-values-document",
      "js-lists-values-amount",
      "js-lists-values-date"
    ]'
                data-lists-sort-by="js-lists-values-date"
                data-lists-sort-desc="true"
                className="table-responsive"
              >
                <table className="table table-flush table-nowrap">
                  <thead>
                    <tr>
                      <th colspan="2">
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-course"
                        >
                          Course
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-document"
                        >
                          Document
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-amount"
                        >
                          Amount
                        </a>
                        <a
                          href="/"
                          className="sort"
                          data-sort="js-lists-values-date"
                        >
                          Date
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_routing_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Routing In-Depth
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8734
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          12 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_testing_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Angular Unit Testing
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8735
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          13 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/typescript_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Introduction to TypeScript
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8736
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          14 Nov 2018
                        </small>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex flex-nowrap align-items-center">
                          <a
                            href="instructor-edit-course.html"
                            className="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                          >
                            <img
                              src="images/paths/angular_200x168.png"
                              alt="course"
                              className="avatar-img rounded"
                            />
                            <span className="overlay__content"></span>
                          </a>
                          <div className="flex">
                            <a
                              className="card-title js-lists-values-course"
                              href="instructor-edit-course.html"
                            >
                              Learn Angular Fundamentals
                            </a>
                            <small className="text-muted mr-1">
                              Invoice
                              <a
                                href="invoice.html"
                                style={{ color: "inherit" }}
                                className="js-lists-values-document"
                              >
                                #8737
                              </a>{" "}
                              - &dollar;
                              <span className="js-lists-values-amount">
                                89
                              </span>{" "}
                              USD
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <small className="text-muted text-uppercase js-lists-values-date">
                          15 Nov 2018
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="page-separator">
              <div className="page-separator__text">Comments</div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="media">
                  <div className="media-left mr-12pt">
                    <a href="/#" className="avatar avatar-sm">
                      <span className="avatar-title rounded-circle">LB</span>
                    </a>
                  </div>
                  <div className="media-body d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <a href="profile.html" className="card-title">
                        Laza Bogdan
                      </a>
                      <small className="ml-auto text-muted">27 min ago</small>
                      <br />
                    </div>
                    <span className="text-muted">
                      on{" "}
                      <a
                        href="instructor-edit-course.html"
                        className="text-50"
                        style={{ textDecoration: "underline" }}
                      >
                        Data Visualization With Chart.js
                      </a>
                    </span>
                    <p className="mt-1 mb-0 text-70">
                      How can I load Charts on a page?
                    </p>
                  </div>
                </div>
                <div className="media ml-sm-32pt mt-3 border rounded p-3 card mb-0 d-inline-flex measure-paragraph-max">
                  <div className="media-left mr-12pt">
                    <a href="/#" className="avatar avatar-sm">
                      <span className="avatar-title rounded-circle">FM</span>
                    </a>
                  </div>
                  <div className="media-body">
                    <div className="d-flex align-items-center">
                      <a href="profile.html" className="card-title">
                        FrontendMatter
                      </a>
                      <small className="ml-auto text-muted">just now</small>
                    </div>
                    <p className="mt-1 mb-0 text-70">
                      Hi Bogdan,
                      <br /> Thank you for purchasing our course! <br />
                      <br />
                      Please have a look at the charts library documentation{" "}
                      <a href="/#" className="text-underline">
                        here
                      </a>{" "}
                      and follow the instructions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <form action="#" id="message-reply">
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      className="form-control form-control-appended"
                      required=""
                      placeholder="Quick Reply"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text pr-2">
                        <button className="btn btn-flush" type="button">
                          <i className="material-icons">tag_faces</i>
                        </button>
                      </div>
                      <div className="input-group-text pl-0">
                        <div
                          className="custom-file custom-file-naked d-flex"
                          style={{ width: 24, overflow: "hidden" }}
                        >
                          <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                          />
                          <label
                            className="custom-file-label"
                            style={{ color: "inherit" }}
                            for="customFile"
                          >
                            <i className="material-icons">attach_file</i>
                          </label>
                        </div>
                      </div>
                      <div className="input-group-text pl-0">
                        <button className="btn btn-flush" type="button">
                          <i className="material-icons">send</i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
