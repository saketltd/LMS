import React from "react";

export default function Polular() {
  return (
    <>
      <div
        class="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
        style={{ whiteSpace: "nowrap" }}
      >
        <small class="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
          Displaying 4 out of 10 courses
        </small>
        <div class="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
          <small class="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">
            Sort by
          </small>

          <a href="/#" class="sort desc small text-headings text-uppercase">
            Newest
          </a>

          <a href="/#" class="sort small text-headings text-uppercase ml-2">
            Popularity
          </a>
        </div>

        <a
          href="/#"
          data-target="#library-drawer"
          data-toggle="sidebar"
          class="btn btn-sm btn-white ml-sm-16pt"
        >
          <i class="material-icons icon--left">tune</i> Filters
        </a>
      </div>

      <div class="page-separator">
        <div class="page-separator__text">Popular Courses</div>
      </div>

      <div class="row card-group-row">
        <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
            data-overlay-onload-show
            data-popover-onload-show
            data-force-reveal
            data-partial-height="44"
            data-toggle="popover"
            data-trigger="click"
          >
            <a href="/studentCourse" class="js-image" data-position="">
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span class="overlay__content align-items-start justify-content-start">
                <span class="overlay__action card-body d-flex align-items-center">
                  <i class="material-icons mr-4pt">play_circle_outline</i>
                  <span class="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div class="mdk-reveal__content">
              <div class="card-body">
                <div class="d-flex">
                  <div class="flex">
                    <a class="card-title" href="/studentCourse">
                      ADVANCE CONCEPTS IN CR LEVEL-1
                    </a>
                  </div>
                  <a
                    href="/studentCourse"
                    data-toggle="tooltip"
                    data-title="Remove Favorite"
                    data-placement="top"
                    data-boundary="window"
                    class="ml-4pt material-icons text-20 card-course__icon-favorite"
                  >
                    favorite
                  </a>
                </div>
                <div class="d-flex">
                  <div class="rating flex">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                  <small class="text-50">6 hours</small>
                </div>
              </div>
            </div>
          </div>
          <div class="popoverContainer d-none">
            <div class="media">
              <div class="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  class="rounded"
                />
              </div>
              <div class="media-body">
                <div class="card-title mb-0">CLINICAL RESEARCH APPROACHES</div>
              </div>
            </div>

            <p class="my-16pt text-70">
              Learn the fundamentals of CLINICAL RESEARCH APPROACHES.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-auto">
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div class="col text-right">
                <a href="/studentCourse" class="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
            data-partial-height="44"
            data-toggle="popover"
            data-trigger="click"
          >
            <a href="/studentCourse" class="js-image" data-position="">
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span class="overlay__content align-items-start justify-content-start">
                <span class="overlay__action card-body d-flex align-items-center">
                  <i class="material-icons mr-4pt">play_circle_outline</i>
                  <span class="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div class="mdk-reveal__content">
              <div class="card-body">
                <div class="d-flex">
                  <div class="flex">
                    <a class="card-title" href="/studentCourse">
                      DRUGS, APPROVAL &amp; MARKETING PROCESS
                    </a>
                  </div>
                  <a
                    href="/studentCourse"
                    data-toggle="tooltip"
                    data-title="Add Favorite"
                    data-placement="top"
                    data-boundary="window"
                    class="ml-4pt material-icons text-20 card-course__icon-favorite"
                  >
                    favorite_border
                  </a>
                </div>
                <div class="d-flex">
                  <div class="rating flex">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                  <small class="text-50">6 hours</small>
                </div>
              </div>
            </div>
          </div>
          <div class="popoverContainer d-none">
            <div class="media">
              <div class="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  class="rounded"
                />
              </div>
              <div class="media-body">
                <div class="card-title mb-0">
                  DRUGS, APPROVAL &amp; MARKETING PROCESS
                </div>
              </div>
            </div>

            <p class="my-16pt text-70">
              Learn the fundamentals of DRUGS, APPROVAL &amp; MARKETING PROCESS.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-auto">
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div class="col text-right">
                <a href="/studentCourse" class="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
            data-partial-height="44"
            data-toggle="popover"
            data-trigger="click"
          >
            <a href="/studentCourse" class="js-image" data-position="">
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span class="overlay__content align-items-start justify-content-start">
                <span class="overlay__action card-body d-flex align-items-center">
                  <i class="material-icons mr-4pt">play_circle_outline</i>
                  <span class="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div class="mdk-reveal__content">
              <div class="card-body">
                <div class="d-flex">
                  <div class="flex">
                    <a class="card-title" href="/studentCourse">
                      HARMONIZATION ACTIVITIES
                    </a>
                  </div>
                  <a
                    href="/studentCourse"
                    data-toggle="tooltip"
                    data-title="Add Favorite"
                    data-placement="top"
                    data-boundary="window"
                    class="ml-4pt material-icons text-20 card-course__icon-favorite"
                  >
                    favorite_border
                  </a>
                </div>
                <div class="d-flex">
                  <div class="rating flex">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                  <small class="text-50">6 hours</small>
                </div>
              </div>
            </div>
          </div>
          <div class="popoverContainer d-none">
            <div class="media">
              <div class="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  class="rounded"
                />
              </div>
              <div class="media-body">
                <div class="card-title mb-0">HARMONIZATION ACTIVITIES</div>
              </div>
            </div>

            <p class="my-16pt text-70">
              Learn the fundamentals of HARMONIZATION ACTIVITIES.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-auto">
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div class="col text-right">
                <a href="/studentCourse" class="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
            data-partial-height="44"
            data-toggle="popover"
            data-trigger="click"
          >
            <a href="/studentCourse" class="js-image" data-position="">
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span class="overlay__content align-items-start justify-content-start">
                <span class="overlay__action card-body d-flex align-items-center">
                  <i class="material-icons mr-4pt">play_circle_outline</i>
                  <span class="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div class="mdk-reveal__content">
              <div class="card-body">
                <div class="d-flex">
                  <div class="flex">
                    <a class="card-title" href="/studentCourse">
                      SCIENTIFIC COMMUNITY
                    </a>
                  </div>
                  <a
                    href="/studentCourse"
                    data-toggle="tooltip"
                    data-title="Add Favorite"
                    data-placement="top"
                    data-boundary="window"
                    class="ml-4pt material-icons text-20 card-course__icon-favorite"
                  >
                    favorite_border
                  </a>
                </div>
                <div class="d-flex">
                  <div class="rating flex">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                  <small class="text-50">6 hours</small>
                </div>
              </div>
            </div>
          </div>
          <div class="popoverContainer d-none">
            <div class="media">
              <div class="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  class="rounded"
                />
              </div>
              <div class="media-body">
                <div class="card-title mb-0">
                  SCIENTIFIC COMMUNITY - ROLES &amp; RESPONSIBILITIES
                </div>
              </div>
            </div>

            <p class="my-16pt text-70">
              Learn the fundamentals of SCIENTIFIC COMMUNITY - ROLES &amp;
              RESPONSIBILITIES.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-auto">
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div class="d-flex align-items-center mb-4pt">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div class="d-flex align-items-center">
                  <span class="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p class="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div class="col text-right">
                <a href="/studentCourse" class="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-32pt">
        <ul class="pagination justify-content-start pagination-xsm m-0">
          <li class="page-item disabled">
            <a class="page-link" href="/#" aria-label="Previous">
              <span aria-hidden="true" class="material-icons">
                chevron_left
              </span>
              <span>Prev</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Page 1">
              <span>1</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Page 2">
              <span>2</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Next">
              <span>Next</span>
              <span aria-hidden="true" class="material-icons">
                chevron_right
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
