import React from "react";

export default function Dashboard() {
  return (
    <div style={{ fontFamily: "'Exo 2'" }}>
      <div className="pt-4 pb-4 border-bottom">
        <div className="container mx-auto">
          <h1 className="mb-0 h2">Dashboard</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
          <div className="row pt-5">
            <div className="col-4">
              <div class="shadow p-3 mb-5 bg-body rounded-3 text-center border-start border-3 border-danger">
                <h1>₹1569.00</h1>
                <small>Earnings this month</small>
              </div>
            </div>
            <div className="col-4">
              <div class="shadow p-3 mb-5 bg-body rounded text-center">
                <h1>₹1569.00</h1>
                <small>Earnings this month</small>
              </div>
            </div>
            <div className="col-4">
              <div class="shadow p-3 mb-5 bg-body rounded text-center">
                <h1>₹1569.00</h1>
                <small>Earnings this month</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
