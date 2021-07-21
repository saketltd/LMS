import React from "react";
import luke from "../../public/img/256_luke-porter-261779-unsplash.jpg";

export default function Feedback() {
  return (
    <div style={{ fontFamily: "'Exo 2'" }}>
      <div className="pt-4 pb-4 border-bottom">
        <div className="container text-center">
          <div style={{ paddingBottom: "3rem" }}>
            <h2 className="fw-bold mb-3 text-center">
              Feedback
              <hr
                style={{
                  borderRadius: "2px",
                  backgroundColor: "#5567ff",
                  margin: "5px auto",
                  width: "11%",
                  height: "4px",
                }}
              />
            </h2>
            <p className="text-black-70 mx-auto" style={{ width: "50%" }}>
              What other students turned professionals have to say about us
              after learning with us and reaching their goals.
            </p>
          </div>

          <div className="card" style={{ width: "50%", margin: "auto" }}>
            <div className="card-body text-muted">
              A wonderful course on how to start. Eddie beautifully conveys all
              essentials of a becoming a good Angular developer. Very glad to
              have taken this course. Thank you Eddie Bryan.
            </div>
          </div>

          <div className="row mt-3" style={{ width: "50%", margin: "auto" }}>
            <div className="col-auto">
              <img src={luke} alt="" className="rounded-circle" width="50px" />
            </div>
            <div className="col-auto text-start">
              <h6 class="card-title fw-bold mb-0">Learn Sketch</h6>
              <small className="text-muted">Elijah Murray</small>
              <div
                style={{
                  fontSize: "12px",
                  color: "orange",
                }}
              >
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                &nbsp;
                <span className="text-dark text-muted">4/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
