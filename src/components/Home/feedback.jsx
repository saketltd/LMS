import React from "react";

export default function Feedback() {
  return (
    <div className="page-section">
      <div className="container page__container">
        <div className="page-headline text-center">
          <h2>Feedback</h2>
          <p className="lead measure-lead mx-auto text-70">
            What other students turned professionals have to say about us after
            learning with us and reaching their goals.
          </p>
        </div>

        <div className="position-relative carousel-card p-0 mx-auto">
          <div className="row d-block js-mdk-carousel" id="carousel-feedback">
            <a
              className="carousel-control-next js-mdk-carousel-control mt-n24pt"
              href="#carousel-feedback"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-icon material-icons"
                aria-hidden="true"
              >
                keyboard_arrow_right
              </span>
              <span className="sr-only">Next</span>
            </a>
            <div className="mdk-carousel__content">
              <div className="col-12 col-md-6">
                <div className="card card-feedback card-body">
                  <blockquote className="blockquote mb-0">
                    <p className="text-70 small mb-0">
                      Having joined ACRI in 2018, I have been subject to a
                      myriad of learning opportunities at the institute. The
                      staff at ACRI were always supportive throughout my journey
                      at the institute. All the technical sessions coupled with
                      the PD ones really opened the right gates for me. It is
                      because of the institute’s endeavour to provide excellent
                      clinical research education that I got placed at IQVIA. I
                      would recommend ACRI 10/10 for anyone that wants to carve
                      a niche for themselves in the clinical research space.
                    </p>
                  </blockquote>
                </div>
                <div className="media ml-12pt">
                  <div className="media-left mr-12pt">
                    <a href="student-profile.html" className="avatar avatar-sm">
                      <img
                        src="images/Poornima . H.D.jpg"
                        alt="Poornima . H.D"
                        className="avatar-title rounded-circle"
                      ></img>
                    </a>
                  </div>
                  <div className="media-body media-middle">
                    <a href="student-profile.html" className="card-title">
                      Purnima H.D.
                    </a>
                    <div className="rating mt-4pt">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card card-feedback card-body">
                  <blockquote className="blockquote mb-0">
                    <p className="text-70 small mb-0">
                      I joined ACRI after completing my Bachelor’s in
                      Biotechnology. I felt a pressing need to gather the right
                      technical knowledge prior to joining the industry. Hence,
                      I joined the PG Diploma course in Clinical Research. I
                      have to say, it was truly one of my best decisions as I
                      got placed in Accenture with the wonderful placement
                      support of the institute.
                    </p>
                  </blockquote>
                </div>
                <div className="media ml-12pt">
                  <div className="media-left mr-12pt">
                    <a href="student-profile.html" className="avatar avatar-sm">
                      <img
                        src="images/sreelakshmi.jpg"
                        alt="sreelakshmi"
                        className="avatar-title rounded-circle"
                      ></img>
                    </a>
                  </div>
                  <div className="media-body media-middle">
                    <a href="student-profile.html" className="card-title">
                      Sreelakshmi Sathyakumar
                    </a>
                    <div className="rating mt-4pt">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card card-feedback card-body">
                  <blockquote className="blockquote mb-0">
                    <p className="text-70 small mb-0">
                      ACRI is the perfect institute for aspirants of Life
                      Sciences, Healthcare and Clinical Research looking to
                      further their careers in the field. The courses offered at
                      ACRI are comprehensive and affordable. The staff, study
                      material and overall conduct of the institution is what
                      makes ACRI an ideal learning centre. Before joining ACRI,
                      I had been to a couple of Clinical Research institutes
                      only to see minimal infrastructure and training staff at
                      the time of my visit. I highly recommend ACRI as I have
                      gotten placed in one of the best companies with a handsome
                      package.
                    </p>
                  </blockquote>
                </div>
                <div className="media ml-12pt">
                  <div className="media-left mr-12pt">
                    <a href="student-profile.html" className="avatar avatar-sm">
                      <img
                        src="images/Anupama A Sattigeri.jpg"
                        alt="Anupama A Sattigeri"
                        className="avatar-title rounded-circle"
                      ></img>
                    </a>
                  </div>
                  <div className="media-body media-middle">
                    <a href="student-profile.html" className="card-title">
                      Dr. Anupama A Sattigeri
                    </a>
                    <div className="rating mt-4pt">
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star</span>
                      </span>
                      <span className="rating__item">
                        <span className="material-icons">star_border</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
