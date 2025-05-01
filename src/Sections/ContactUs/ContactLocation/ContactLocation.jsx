import ContactLocationStyle from "./ContactLocation.style";
import Data from "../../../assets/data/contact-us/location";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ContactLocation = () => {
  return (
    <ContactLocationStyle>
      <ScrollAnimate>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map-content">
                <ScrollAnimate delay={200}>
                  <div className="map-info-card">
                    <ul className="list">
                      {Data?.map((location, index) => (
                        <li key={index}>
                          <div className="list-item">
                            <div className="list-icon">
                              <img src={location.icon} alt="icon" />
                            </div>
                            <div className="list-text">
                              <h4>{location.title}</h4>
                              {location.address && <p>{location.address}</p>}
                              {location.phoneNumbers &&
                                location.phoneNumbers?.map((phoneNumber, i) => (
                                  <p key={i}>{phoneNumber}</p>
                                ))}
                              {location.emails &&
                                location.emails?.map((email, i) => (
                                  <p key={i}>{email}</p>
                                ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>

                <div className="contact-map">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.5861442614405!2d-3.427286122898344!3d56.043154269589735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d1dfeaa3b3b5%3A0x6a33388b8e32e80f!2s195%20Queensferry%20Rd%2C%20Rosyth%2C%20Dunfermline%20KY11%202JH%2C%20UK!5e0!3m2!1sen!2sph!4v1746065907944!5m2!1sen!2sph"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </ContactLocationStyle>
  );
};

export default ContactLocation;
