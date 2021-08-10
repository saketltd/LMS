import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore, { Autoplay,Pagination,Navigation} from 'swiper/core';
const isMobile = window.orientation > -1;

export default function CareerContent() {
  return (
    <div class="mdk-header-layout__content page-content ">
      <div class="page-section">
        <div class="container page__container">
          <div class="page-headline text-center mt-5">
            <h2>A Glimpse of What We're Building</h2>
            <h4>Placed Students</h4>
          
       
        <section className="no-padding-top wow animate__fadeIn">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 padding-8-half-rem-lr xl-padding-five-lr lg-padding-two-lr sm-padding-15px-lr">
                        <div className="swiper-container overflow-hidden portfolio-classic position-relative swiper-pagination-bottom" data-slider-options='{ "slidesPerView": 1, "spaceBetween": 26, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 5 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } }, "effect": "slide" }'>
							<div className="col-md-12 text-center margin-five-bottom">
                        <h6 className="alt-font text-font-weight text-dark font-weight-500">Placed Students</h6>
                    </div>
                           
                            <div className="swiper-wrapper margintop-swiper">
                            <Swiper slidesPerView={isMobile ? 1: 5} navigation={true} loopFillGroupWithBlank={true} autoplay={{
                                "delay": 4000,
                                "disableOnInteraction": false
                                }}  className="mySwiper">
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Priya Sunny.jpg" alt=""/></a>
                                            {/* <div className= "align-items-center justify-content-center d-flex">
                                                {/* <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"></i></a>
                                                </div> }
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Priya Sunny</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B.Tech Biotechnology</span>*/}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/PAREXEL 1.png" className="img-height" alt=""/></span> 
   
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                {/* <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Anjana K.P.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> }
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Anjana K.P</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B Pharmacy</span>}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">Iqvia</span> 
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide> */}
                                <SwiperSlide>
                              
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Anupama Kurle.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Anupama Kurle</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B.E Biotechnology</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/Forte.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                              
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Swathi N.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Swathi N</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">BSc Biotechnology</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/Forte.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Pradeeksha.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Pradeeksha</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">MSc Zoology</span>
                                          */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/COVANCE 1.jpg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Elavarasi M.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Elavarasi M</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">Pharm D</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/Forte.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Neelima Pinapati.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Neelima Pinapati</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">M Pharmacy</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/IQVIA.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Maanya K.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Maanya K</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B Pharmacy </span>
                                           */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/PAREXEL 1.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Dr. S.R Sadiya Pervaze.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase"><img src="../assets/images/logos/PAREXEL 1.png" className="img-height" alt=""/>Dr. S.R Sadiya Pervaze</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">Pharm D</span>
                                           */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/IQVIA.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Smitha B R.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Smitha B R</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">MSc Biochemistry</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/IQVIA.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Nimna.RS.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Nimna R S</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B Pharm</span>
                                             */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/IQVIA.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Dr. Anagha Pradeep Data.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Dr. Anagha Pradeep Datar</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">B.D.S</span>
                                           */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/" className="img-height" alt=""/>CogScentia</span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Devnandan Shaw.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Devnandan Shaw</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">BSc Biotechnology</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/Nethradhama.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Talluri Pratyusha.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Talluri Pratyusha</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">MSc Microbiology</span>
                                             */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/PAREXEL 1.png" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Chaithrashree G S.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Chaithrashree G S</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">MSc Biochemistry</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/Nethradhama.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="swiper-slide overflow-hidden">
                                    <div className="portfolio-box text-center">
                                        <div className="">
                                            <a href="#"><img src="../../assets/images/students/Gaddam Chandra kiran.jpg" alt=""/></a>
                                            {/* <div className="portfolio-hover align-items-center justify-content-center d-flex">
                                                <div className="portfolio-icon">
                                                    <a href="#" className="border-all border-width-2px rounded-circle border-color-white bg-white"><i className="ti-arrow-right text-extra-dark-gray"></i></a>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="portfolio-caption padding-30px-tb">
                                            <a href="#" className="alt-font text-extra-dark-gray font-weight-500 text-uppercase">Gaddam Chandra kiran</a>
                                            {/* <span className="d-block text-medium-gray text-small line-height-18px text-uppercase">BSc Biotechnology</span>
                                            */}
                                            <span className="d-block text-medium-gray text-small line-height-18px text-uppercase"><img src="../assets/images/logos/eye-hospital.jpeg" className="img-height" alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                 
                               
                                </Swiper>
                                <div className="swiper-button-next-nav swiper-button-next rounded-circle light slider-navigation-style-07 box-shadow-double-large"><i className="feather icon-feather-arrow-right"></i></div>
                                <div className="swiper-button-previous-nav swiper-button-prev rounded-circle light slider-navigation-style-07 box-shadow-double-large"><i className="feather icon-feather-arrow-left"></i></div>
                       
                            </div>
                         
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
          
            </div>
          

          <div class="page-headline text-center mt-5">
            <h2>Career Insights</h2>
            <h4>
              Opportunities don't{" "}
              <span style={{ color: "#007bff" }}>happen</span> you{" "}
              <span style={{ color: "#007bff" }}>create</span> them.
            </h4>
          </div>

          <div
            class="accordion js-accordion accordion--boxed list-group-flush"
            id="parent"
            data-domfactory-upgraded="accordion"
          >
            <div class="accordion__item open">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-1"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Careers In Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-1">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    India is evolving in many phases to run the race in the
                    world; and Clinical Research is one such phase where India
                    is making remarkable development and growth. India has been
                    involved in clinical research for the past many years and is
                    now on its way to becoming a major focus for it. The billion
                    dollar industry is already witnessing high demand for
                    qualified professionals. Indian pharmaceutical industry is
                    one of the fastest growing sectors of the Indian economy and
                    has made rapid strides over the years. There is a massive
                    need for clinical research professionals in this
                    fast-growing field. Clinical research makes an interesting
                    career option with a great scope for professional growth. To
                    build a career in clinical research, basic education in this
                    field is necessary and a good hands on is the need. <br />
                    <br /> By 2020, the Indian pharma market is expected to rank
                    among the global top three by increasing growth and is
                    supposed to be the 6th largest market in the world with
                    respect to absolute size. <br /> <br /> The term clinical
                    trial refers to the entire record of any test article from
                    its initiation in the lab to its introduction to the market
                    and beyond. Once the promising molecule is identified in the
                    lab, it is subjected to more per-clinical studies to get an
                    idea about different aspects of the test article. Clinical
                    research is often conducted at academic medical centers and
                    recognized research centers. <br />
                    <br /> Many believe that informed consent makes clinical
                    research ethical. However, informed consent is not
                    sufficient. Drawing on the basic philosophies there are some
                    requirements that systematically explain a logical framework
                    for evaluating the ethics of clinical research studies. The
                    requirements are universal and they must be adapted to the
                    various fields in which clinical research is conducted.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-2"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Research Associate (CRA)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-2">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Clinical Research Associate (CRA) is a health-care
                    professional who performs activities related to clinical
                    trials. They are the soul in the field of Clinical Research.
                    The experts find their place in various organizations such
                    as pharmaceutical companies, medical research institutes and
                    government agencies. Depending on the organization’s
                    policies different education and certification requirements
                    may be necessary to practice as a Clinical Research
                    Associate.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-3"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Data Management (CDM)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-3">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Clinical Data Management (CDM) is a critical phase in
                    clinical research. CDM leads to generation of superior
                    quality, dependable, and statistically well informed data
                    from clinical trials. The ultimate goal of CDM is to assure
                    a well maintained data support conclusions drawn from
                    research and thus achieving this goal protects public health
                    and creates confidence in the world of therapeutics.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-4"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Clinical Research Organisation (CRO)
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-4">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    A CRO landscape is vast; using a CRO’s expertise you can
                    maximize the efficiency of your clinical trials, but only if
                    you choose the right one for the project at hand.Typically,
                    a CRO will organize and conduct clinical trials to check the
                    test molecule in humans. As independent companies, they
                    offer an objective assessment of a new drug in the clinical
                    setting and since they partner with many companies,
                    typically provide broader experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-5"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Key Cities in India for Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-5">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Delhi & NCR Region
                    <br /> Mumbai
                    <br /> Pune
                    <br /> Ahmedabad
                    <br /> Vadodara
                    <br /> Hyderabad
                    <br /> Bangalore
                    <br /> Chennai
                    <br /> Chandigarh, Bhopal, Indore, Coimbatore and Vizag are
                    emerging as new centres for clinical trials.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion__item open">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-6"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Advantages Of Taking up Clinical Research As a Career
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-6">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    Recession proof Industry <br /> Huge Demand & Supply Gap
                    <br /> White Collared, Knowledge Intensive Job <br /> Good
                    Career Prospects
                    <br /> Quick money
                    <br /> National & International Travel
                    <br /> Cross-cultural Exposure
                    <br /> Increased Contacts, Marketability
                    <br /> Understanding of Drugs, Diseases & Management
                    <br />
                    Research, Documentation, Paper Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="page-headline text-center mt-5">
            <h2>FAQ</h2>
          </div>
          <div class="row card-group-row">
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
              <div class="accordion__item open">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-1"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Careers In Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-1">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    India is evolving in many phases to run the race in the
                    world; and Clinical Research is one such phase where India
                    is making remarkable development and growth. India has been
                    involved in clinical research for the past many years and is
                    now on its way to becoming a major focus for it. The billion
                    dollar industry is already witnessing high demand for
                    qualified professionals. Indian pharmaceutical industry is
                    one of the fastest growing sectors of the Indian economy and
                    has made rapid strides over the years. There is a massive
                    need for clinical research professionals in this
                    fast-growing field. Clinical research makes an interesting
                    career option with a great scope for professional growth. To
                    build a career in clinical research, basic education in this
                    field is necessary and a good hands on is the need. <br />
                    <br /> By 2020, the Indian pharma market is expected to rank
                    among the global top three by increasing growth and is
                    supposed to be the 6th largest market in the world with
                    respect to absolute size. <br /> <br /> The term clinical
                    trial refers to the entire record of any test article from
                    its initiation in the lab to its introduction to the market
                    and beyond. Once the promising molecule is identified in the
                    lab, it is subjected to more per-clinical studies to get an
                    idea about different aspects of the test article. Clinical
                    research is often conducted at academic medical centers and
                    recognized research centers. <br />
                    <br /> Many believe that informed consent makes clinical
                    research ethical. However, informed consent is not
                    sufficient. Drawing on the basic philosophies there are some
                    requirements that systematically explain a logical framework
                    for evaluating the ethics of clinical research studies. The
                    requirements are universal and they must be adapted to the
                    various fields in which clinical research is conducted.
                  </p>
                </div>
              </div>
            </div>

              </div>
            </div>
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
              <div class="accordion__item open">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-1"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Careers In Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-1">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    India is evolving in many phases to run the race in the
                    world; and Clinical Research is one such phase where India
                    is making remarkable development and growth. India has been
                    involved in clinical research for the past many years and is
                    now on its way to becoming a major focus for it. The billion
                    dollar industry is already witnessing high demand for
                    qualified professionals. Indian pharmaceutical industry is
                    one of the fastest growing sectors of the Indian economy and
                    has made rapid strides over the years. There is a massive
                    need for clinical research professionals in this
                    fast-growing field. Clinical research makes an interesting
                    career option with a great scope for professional growth. To
                    build a career in clinical research, basic education in this
                    field is necessary and a good hands on is the need. <br />
                    <br /> By 2020, the Indian pharma market is expected to rank
                    among the global top three by increasing growth and is
                    supposed to be the 6th largest market in the world with
                    respect to absolute size. <br /> <br /> The term clinical
                    trial refers to the entire record of any test article from
                    its initiation in the lab to its introduction to the market
                    and beyond. Once the promising molecule is identified in the
                    lab, it is subjected to more per-clinical studies to get an
                    idea about different aspects of the test article. Clinical
                    research is often conducted at academic medical centers and
                    recognized research centers. <br />
                    <br /> Many believe that informed consent makes clinical
                    research ethical. However, informed consent is not
                    sufficient. Drawing on the basic philosophies there are some
                    requirements that systematically explain a logical framework
                    for evaluating the ethics of clinical research studies. The
                    requirements are universal and they must be adapted to the
                    various fields in which clinical research is conducted.
                  </p>
                </div>
              </div>
            </div>

              </div>
            </div>
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
                <div class="card-body d-flex">
                  <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                    <i class="material-icons">question_answer</i>
                  </span>
                  <div class="accordion__item open">
              <a
                href="#"
                class="accordion__toggle collapsed"
                data-toggle="collapse"
                data-target="#course-toc-1"
                data-parent="#parent"
              >
                <span class="flex" style={{ fontSize: "17px" }}>
                  Careers In Clinical Research
                </span>
                <span class="accordion__toggle-icon material-icons">
                  keyboard_arrow_down
                </span>
              </a>
              <div class="accordion__menu collapse" id="course-toc-1">
                <div class="accordion__menu-link">
                  <p style={{ fontSize: "15px" }}>
                    India is evolving in many phases to run the race in the
                    world; and Clinical Research is one such phase where India
                    is making remarkable development and growth. India has been
                    involved in clinical research for the past many years and is
                    now on its way to becoming a major focus for it. The billion
                    dollar industry is already witnessing high demand for
                    qualified professionals. Indian pharmaceutical industry is
                    one of the fastest growing sectors of the Indian economy and
                    has made rapid strides over the years. There is a massive
                    need for clinical research professionals in this
                    fast-growing field. Clinical research makes an interesting
                    career option with a great scope for professional growth. To
                    build a career in clinical research, basic education in this
                    field is necessary and a good hands on is the need. <br />
                    <br /> By 2020, the Indian pharma market is expected to rank
                    among the global top three by increasing growth and is
                    supposed to be the 6th largest market in the world with
                    respect to absolute size. <br /> <br /> The term clinical
                    trial refers to the entire record of any test article from
                    its initiation in the lab to its introduction to the market
                    and beyond. Once the promising molecule is identified in the
                    lab, it is subjected to more per-clinical studies to get an
                    idea about different aspects of the test article. Clinical
                    research is often conducted at academic medical centers and
                    recognized research centers. <br />
                    <br /> Many believe that informed consent makes clinical
                    research ethical. However, informed consent is not
                    sufficient. Drawing on the basic philosophies there are some
                    requirements that systematically explain a logical framework
                    for evaluating the ethics of clinical research studies. The
                    requirements are universal and they must be adapted to the
                    various fields in which clinical research is conducted.
                  </p>
                </div>
              </div>
            </div>

                </div>
              </div>
            </div>
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
                <div class="card-body d-flex">
                  <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                    <i class="material-icons">question_answer</i>
                  </span>
                  <div class="flex">
                    <a class="card-title mb-4pt" href="/#">
                      Writing and Speaking
                    </a>
                    <p class="text-70 mb-0">
                      Your performances on the Writing and Speaking sub-tests
                      are each rated by at least two trained Assessors. Audio
                      files and scripts are assigned to Assessors at random to
                      avoid any conflict of interest. Your test-day Interlocutor
                      is not involved in the assessment process. Writing and
                      Speaking Assessors are monitored for accuracy and
                      consistency, and the scores they award are adjusted to
                      take into account any leniency or severity. If two
                      Assessors award different scores to your performance, your
                      script and/or audio file will be referred to at least one
                      other senior Assessor not previously involved in your
                      assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
                <div class="card-body d-flex">
                  <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                    <i class="material-icons">question_answer</i>
                  </span>
                  <div class="flex">
                    <a class="card-title mb-4pt" href="/#">
                      For the Writing sub-test
                    </a>
                    <p class="text-70 mb-0">
                      Each Assessor scores your performance according to five
                      criteria: Overall Task Fulfilment, Appropriateness of
                      Language, Comprehension of Stimulus, Linguistic Features
                      (Grammar and Cohesion), and Presentation Features
                      (Spelling, Punctuation, and Layout). The five criteria are
                      assessed on a scale from 0 to 6 and are equally weighted.
                      A score of 350 (previously grade B) for Writing requires a
                      high level of performance on all five criteria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 card-group-row__col">
              <div class="card card--elevated card-group-row__card">
                <div class="card-body d-flex">
                  <span class="icon-holder icon-holder--outline-muted rounded-circle d-inline-flex mr-16pt">
                    <i class="material-icons">question_answer</i>
                  </span>
                  <div class="flex">
                    <a class="card-title mb-4pt" href="/#">
                      For the Speaking sub-test
                    </a>
                    <p class="text-70 mb-0">
                      Each Assessor scores your performance according to nine
                      criteria. The four linguistically-oriented criteria are
                      Intelligibility, Fluency, Appropriateness of Language, and
                      Resources of Grammar and Expression. They are assessed on
                      a scale from 0 to 6. Clinical communication criteria
                      include Indicators of Relationship Building, Indicators of
                      Understanding & Incorporating the Patient’s Perspective,
                      Indicators of Providing Structure, Indicators for
                      Information Gathering and Indicators for Information
                      Giving. They are assessed on a scale from 0 to 3. A high
                      level of performance on all nine criteria is required in
                      order to achieve a score of 350 (previously grade B) on
                      the speaking test.
                    </p>
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

