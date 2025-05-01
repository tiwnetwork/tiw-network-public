import SayHelloStyle from "./SayHello.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import ContactImg from "../../../assets/images/contact/contact-img.png";
import ShapeImg1 from "../../../assets/images/contact/shape-1.svg";
import ShapeImg2 from "../../../assets/images/contact/shape-2.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking-2.svg";
import CallOutgoingImg from "../../../assets/images/icons/call-outgoing.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";


const SayHello = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);
  
  return (
    <SayHelloStyle>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="contact-img">
                <img src={ContactImg} alt="contact-img" />

              </div>
            </ScrollAnimate>
          </div>

          <div className="col-lg-6">
            <div className="contact-content">
            <ScrollAnimate delay={200}>
              <div className="title-group">
                <span className="sub-title" data-splitting>Say hello</span>
                <h2 className="title" data-splitting>We'd love to hear from you!</h2>
              </div>
            </ScrollAnimate>

              <ScrollAnimate>
                <div className="contact-content-body">
                  <form action="/" method="post">
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="user-name">Your Name *</label>
                        <input
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="email-address">Email Address *</label>
                        <input
                          type="email"
                          name="email-address"
                          id="email-address"
                          placeholder="youremail@mail.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$"
                          placeholder="eg. +44 1234 567 890"
                        />
                      </div>

                    </div>
                    <div className="form-input mb-30">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        placeholder="Type your message"
                        required
                      ></textarea>
                    </div>
                    <div className="item-button ">
                      <input
                        type="submit"
                        className="template-btn primary-bg"
                        value="Submit Message"
                      />
                    </div>
                  </form>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </SayHelloStyle>
  );
};

export default SayHello;
