import React, { Component } from "react";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Icon_01,
  Icon_02,
  Icon_03,
  Icon_04,
  Icon_05,
  Icon_06,
  Icon_07,
  Icon_08,
  Icon_09,
  Testi_01,
  Testi_02,
  Testi_03,
  Testi_04,
  Testi_05,
  Doctor_thumb_01,
  Doctor_thumb_02,
  Doctor_thumb_03,
  Doctor_thumb_04,
  Doctor_thumb_05,
  Doctor_thumb_06,
  Doctor_thumb_07,
  Doctor_thumb_08,
  Doctor_thumb_09,
} from "../imagepath";

class Home extends Component {
  render() {
    var responsive = {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    };
    var responsive1 = {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 6,
      },
    };
    return (
      <>
        {/* Content */}
        <div className="main-content">
          <section className="section home-banner row-middle">
            <div className="inner-bg" />
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-9">
                  <div className="banner-content">
                    <h1>Welcome To Bolz Clinic</h1>
                    <p>
                      We offer the best health care services to our patients.
                    </p>
                    <Link
                      title="Consult"
                      className="btn btn-primary consult-btn"
                      to="/appointment"
                    >
                      Consult
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section features">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <h3 className="header-title">About Bolz Clinic</h3>
                    <div className="line" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce vitae risus nec dui venenatis dignissim. Aenean
                      vitae metus in augue pretium ultrices. Duis dictum eget
                      dolor vel blandit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row feature-row">
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-img">
                      <img
                        width={60}
                        height={60}
                        alt="Book an Appointment"
                        src={Icon_01}
                      />
                    </div>
                    <h4>Book an Appointment</h4>
                    <p>
                      You can book an appointment with us from the comfort of
                      your house.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-img">
                      <img
                        width={60}
                        height={60}
                        alt="Consult with a Doctor"
                        src={Icon_02}
                      />
                    </div>
                    <h4>Check for Doctors</h4>
                    <p>Our doctors are professionals and well qualified.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="feature-box">
                    <div className="feature-img">
                      <img
                        width={60}
                        height={60}
                        alt="Make a family Doctor"
                        src={Icon_03}
                      />
                    </div>
                    <h4>Check for working days of departments</h4>
                    <p>
                      You can check the days of week in which our departments
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section meet-doctors">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <h3 className="header-title">Meet our Doctors</h3>
                    <div className="line" />
                    <p>
                      Our Doctors are qualified and your well being is their
                      outmost concern.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div id="our_doctor" className="owl-carousel text-center"> */}
              <OwlCarousel
                loop
                nav
                margin={10}
                id="our_doctor"
                className="text-center"
                items={6}
                responsive={responsive1}
              >
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_01}
                        alt="Dr. Albert Sandoval"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Albert Sandoval</div>
                      <div className="doctors-position">Neurologist</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <Link to="/doctor-details">
                    <div className="doctor text-center">
                      <img
                        src={Doctor_thumb_02}
                        alt="Dr. Linda Barrett"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Linda Barrett</div>
                      <div className="doctors-position">Dentist</div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_03}
                        alt="Dr. Cristina Groves"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Cristina Groves</div>
                      <div className="doctors-position">Gynecologist</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_04}
                        alt="Dr. Henry Daniels"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Henry Daniels</div>
                      <div className="doctors-position">Cardiologist</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_05}
                        alt="Dr. Diana Bailey"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Diana Bailey</div>
                      <div className="doctors-position">General Surgery</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_06}
                        alt="Dr. Justin Parker"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Justin Parker</div>
                      <div className="doctors-position">Physical Therapist</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_07}
                        alt="Dr. Marie Wells"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Marie Wells</div>
                      <div className="doctors-position">Psychiatrist</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_08}
                        alt="Dr. Pamela Curtis"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Pamela Curtis</div>
                      <div className="doctors-position">Pediatrics</div>
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="doctor text-center">
                    <Link to="/doctor-details">
                      <img
                        src={Doctor_thumb_09}
                        alt="Dr. Ronald Jacobs"
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                      <div className="doctors-name">Dr. Ronald Jacobs</div>
                      <div className="doctors-position">Oncologist</div>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
              <div className="row">
                <div className="col-12">
                  <div className="see-all">
                    <Link to="/doctors" className="btn btn-primary see-all-btn">
                      See all Doctors
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section departments">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-header text-center">
                    <h3 className="header-title">Departments</h3>
                    <div className="line" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce vitae risus nec dui venenatis dignissim. Aenean
                      vitae metus in augue pretium ultrices. Duis dictum eget
                      dolor vel blandit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={67}
                          height={80}
                          alt="Dentists"
                          src={Icon_04}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">Dentists</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={63}
                          height={80}
                          alt="Neurology"
                          src={Icon_05}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">Neurology</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={92}
                          height={80}
                          alt="Opthalmology"
                          src={Icon_06}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">Opthalmology</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={40}
                          height={80}
                          alt="Orthopedics"
                          src={Icon_07}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">Orthopedics</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={76}
                          height={80}
                          alt="Cancer Department"
                          src={Icon_08}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">Cancer Department</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="dept-box">
                    <div className="dept-img">
                      <Link to="/department-details">
                        <img
                          width={47}
                          height={80}
                          alt="ENT Department"
                          src={Icon_09}
                        />
                      </Link>
                    </div>
                    <h4>
                      <Link to="/department-details">ENT Department</Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="see-all">
                    <Link
                      to="/departments"
                      className="btn btn-primary see-all-btn"
                    >
                      See all Departments
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Content /*/}
      </>
    );
  }
}

export default Home;
