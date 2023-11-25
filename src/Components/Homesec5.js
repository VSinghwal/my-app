import React, { useRef } from 'react';
import "./Homesec1.css";
import emailjs from '@emailjs/browser';

const Homesec5 = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_spwxn7o', 'template_9rf4nhf', form.current, 'c7FoqRKfROAxX8FL_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-12 d-md-flex">
            <div className="col-md-6 col-sm-12">
              <img src="./Txtpage5.png" className="hometxtimg001" alt="hh" />
              <p className="para001">
                Registrations for stage 1 open on 26th November 2023{" "}
              </p>
              <p className="lastpara">Registration Fee : </p>
              <p className="lastpara">INR 349/-</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="./page5img.png" className="rightimg1" alt="hh" />
            </div>
          </div>
          <div className="bb">
            <a>
              {" "}
              <button className="btn-register">REGISTER</button>
            </a>
          </div>
          <div className="container mb-5 ourteam-main-div">
            <h1 className='card-title mb-2 '  >OUR TEAM</h1>
            <div className="row">
              <div className="col-lg-4 ">
                <div className="card our-team-card">
                  <img
                    className="card-img"
                    src="/gauravsir.png"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Gaurav Tonger</h5>
                    <p className="card-text">Ceo & Founder of Womeki Group</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card our-team-card">
                  <img
                    className="card-img"
                    src="/sahilsir.jpeg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Mr. Sahil Chahar</h5>
                    <p className="card-text">Director of Womeki Tech Solution</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card our-team-card">
                  <img
                    className="card-img"
                    src="/atifsir.jpeg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Atif Naquee</h5>
                    <p className="card-text">Director of Womeki Tech Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container pb-5">
            <div className="row ">
              <div className="col-lg-6 form-container">
              <form  ref={form} className='valid-form' onSubmit={sendEmail} >
              <img className='wic-form-logo'  src='./logo.png' alt='logo'/>
              <div className="form-group valid mt-lg-5 mt-md-3">
                <input type="name" className="form-control border-0 form-input" name='to_name' placeholder="Name"/>
              </div>
              <div className="form-group  valid mt-lg-5 mt-md-3">
                <input type="tel" className="form-control border-0 form-input" name='message' placeholder="Phone"/>
              </div>
              <div className="form-group  valid mt-lg-5 mt-md-3">
                <input type="email" className="form-control border-0 form-input" name='from_name' placeholder="Enter email"/>
              </div>
              <div className="form-check mt-lg-5 mt-md-3">
               
              </div>
              <button type="submit" value="Send" className=" btn-valid-form mt-lg-4 mt-md-2">Submit</button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   
  );
};
export default Homesec5;
