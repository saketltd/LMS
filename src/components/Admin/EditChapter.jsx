import React from "react";
import Header from "./Header";

export default function EditChapter() {
  return (
    <>
      <Header />
      <div class="mdk-header-layout__content page-content ">
        <div class="pt-32pt">
          <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
            <div class="flex d-flex flex-column flex-sm-row align-items-center">
              <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                <h2 class="mb-0">Edit Chapter</h2>

                <ol class="breadcrumb p-0 m-0">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>

                  <li class="breadcrumb-item active">Edit Chapter</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="page-section border-bottom-2">
          <div class="container page__container">
            <div class="row">
              <div class="col-md-8">
                <div class="page-separator">
                  <div class="page-separator__text">Basic information</div>
                </div>

                <label class="form-label">Course title</label>
                <div class="form-group mb-24pt">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Course title"
                    value="Angular Fundamentals"
                  />
                  <small class="form-text text-muted">
                    Please see our <a href="#">course title guideline</a>
                  </small>
                </div>

                <div class="form-group mb-32pt">
                  <label class="form-label">Description</label>
                  <div
                    style={{ height: "150px" }}
                    class="mb-0"
                    data-toggle="quill"
                    data-quill-placeholder="Course description"
                  >
                    <h1>Hello World!</h1>
                    <p>
                      Some initial <strong>bold</strong> text
                    </p>
                    <p>
                      <br />
                    </p>
                  </div>
                  <small class="form-text text-muted">
                    Shortly describe this course.
                  </small>
                </div>

                <div class="page-separator">
                  <div class="page-separator__text">Questions</div>
                </div>

                <div
                  class="accordion js-accordion accordion--boxed mb-24pt"
                  id="parent"
                >
                  <div class="accordion__item">
                    <a
                      href="#"
                      class="accordion__toggle collapsed"
                      data-toggle="collapse"
                      data-target="#course-toc-1"
                      data-parent="#parent"
                    >
                      <span class="flex">Write Questions</span>
                      <span class="accordion__toggle-icon material-icons">
                        keyboard_arrow_down
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  class="accordion js-accordion accordion--boxed mb-24pt"
                  id="parent"
                >
                  <div class="accordion__item">
                    <a
                      href="#"
                      class="accordion__toggle collapsed"
                      data-toggle="collapse"
                      data-target="#course-toc-1"
                      data-parent="#parent"
                    >
                      <span class="flex">1. Add Option</span>
                      <span class="accordion__toggle-icon material-icons">
                        keyboard_arrow_down
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  class="accordion js-accordion accordion--boxed mb-24pt"
                  id="parent"
                >
                  <div class="accordion__item">
                    <a
                      href="#"
                      class="accordion__toggle collapsed"
                      data-toggle="collapse"
                      data-target="#course-toc-1"
                      data-parent="#parent"
                    >
                      <span class="flex">2. Add Option</span>
                      <span class="accordion__toggle-icon material-icons">
                        keyboard_arrow_down
                      </span>
                    </a>
                  </div>
                </div>

                <a href="#" class="btn btn-outline-secondary mb-24pt mb-sm-0">
                  <i class="fas fa-plus"></i> &nbsp; Add Option
                </a>
                <a
                  href="#"
                  class="btn btn-outline-secondary ms-2 mb-24pt mb-sm-0"
                >
                  Save
                </a>
              </div>
              <div class="col-md-4">
                <div class="page-separator">
                  <div class="page-separator__text">Video</div>
                </div>

                <div class="card">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div class="card-body">
                    <label class="form-label">URL</label>
                    <input
                      type="text"
                      class="form-control"
                      value="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0"
                      placeholder="Enter Video URL"
                    />
                    <small class="form-text text-muted">
                      Enter a valid video URL.
                    </small>
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
