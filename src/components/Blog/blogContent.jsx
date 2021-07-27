import React from "react";

export default function BlogContent() {
  return (
    <div
      class="mdk-header-layout__content page-content "
      style={{ paddingTop: "64px" }}
    >
      <div class="page-section bg-alt border-bottom-2">
        <div class="container page__container">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start flex mb-16pt mb-lg-0 text-center text-md-left">
              <div class="avatar overlay overlay--primary mb-16pt mb-md-0 mr-md-16pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  class="avatar-img rounded"
                  alt="lesson"
                />
                <div class="overlay__content"></div>
              </div>
              <div class="flex">
                <h1 class="h2 measure-lead-max mb-16pt">
                  Defects in the Healthcare System as highlighted during the
                  Covid-19 pandemic.
                </h1>
              </div>
            </div>
            <div class="ml-lg-16pt"></div>
          </div>
        </div>
      </div>

      <div class="page-section border-bottom-2">
        <div class="container page__container">
          <div class="row">
            <div class="col-lg-8">
              <div class="d-flex flex-column flex-md-row align-items-md-center mb-16pt">
                <div class="mb-16pt mb-md-0 mr-md-16pt">
                  <div class="rounded p-relative o-hidden overlay overlay--primary">
                    <img
                      class="img-fluid rounded"
                      src="images/paths/sketch_200x168.png"
                      alt="..."
                    />
                    <div class="overlay__content"></div>
                  </div>
                </div>
                <div class="flex">
                  <p class="lead measure-paragraph-max">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    accusamus culpa deserunt distinctio, eos expedita inventore
                    labore laborum libero magnam nisi recusandae sapiente sunt
                    unde, voluptatibus? Accusantium distinctio laborum nihil,
                    nostrum possimus quos rem repellendus tenetur voluptatem! A,
                    ad adipisci commodi doloribus id maxime provident quo
                    suscipit. Itaque, recusandae ut.
                  </p>
                </div>
              </div>

              <blockquote class="blockquote blockquote--reverse pl-0">
                <p class="text-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque debitis distinctio earum et fugiat id itaque officia
                  provident quasi! Dolorem, fuga modi molestias natus non nulla
                  optio porro praesentium provident quaerat.
                </p>
                <footer class="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div class="col-lg-4">
              <div class="page-separator">
                <div class="page-separator__text">Recommended</div>
              </div>

              <div class="mb-8pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/invision_200x168.png"
                    alt="public/images/paths/invision_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Design Systems Essentials
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">inVision</a>
                    </small>
                    <small class="text-muted mr-8pt">35 Views</small>
                    <small class="text-muted">11 Nov, 2018</small>
                  </div>
                </div>
              </div>

              <div class="mb-8pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/photoshop_200x168.png"
                    alt="public/images/paths/photoshop_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Semantic Logo Design
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">Photoshop</a>
                    </small>
                    <small class="text-muted mr-8pt">78 Views</small>
                    <small class="text-muted">10 Nov, 2018</small>
                  </div>
                </div>
              </div>

              <div class="mb-16pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/sketch_200x168.png"
                    alt="public/images/paths/sketch_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Merge Duplicates Inconsistent Symbols &amp; Styles
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">Sketch</a>
                    </small>
                    <small class="text-muted mr-8pt">78 Views</small>
                    <small class="text-muted">09 Nov, 2018</small>
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
