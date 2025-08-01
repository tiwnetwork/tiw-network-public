import SayHelloStyle from "./SayHello.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { supabase } from "../../../supabaseClient"; 
import ContactImg from "../../../assets/images/contact/contact-img.png";
import ShapeImg1 from "../../../assets/images/contact/shape-1.svg";
import ShapeImg2 from "../../../assets/images/contact/shape-2.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking-2.svg";
import CallOutgoingImg from "../../../assets/images/icons/call-outgoing.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const payload = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    preferredCallTime: formData.get("preferredCallTime"),
    message: formData.get("message"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/public-contact-message`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    alert("Submission failed.");
  } else {
    alert("Message sent successfully!");
    form.reset();
  }
};




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
                  <form onSubmit={handleSubmit}>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="fullName">Your Name *</label>
                        <input type="text" name="fullName" id="fullName" placeholder="Name" required />
                      </div>
                      <div className="form-input mb-20">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" name="email" id="email" placeholder="youremail@mail.com" required />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="eg. +44 1234 567 890" />
                      </div>
                    </div>
                    <div className="form-input-between">
                      <div className="form-input mb-20">
                        <label htmlFor="preferredCallTime">Preferred Call Time</label>
                        <input type="text" name="preferredCallTime" id="preferredCallTime" placeholder="eg. Afternoon, Weekdays only" />
                      </div>
                    </div>
                    <div className="form-input mb-30">
                      <label htmlFor="message">Message *</label>
                      <textarea name="message" id="message" cols="30" rows="5" placeholder="Type your message" required></textarea>
                    </div>
                    <div className="item-button">
                      <input type="submit" className="template-btn primary-bg" value="Submit Message" />
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
