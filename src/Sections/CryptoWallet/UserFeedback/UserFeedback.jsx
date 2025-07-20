import UserFeedbackStyle from "./UserFeedback.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {
  feedbackDataColumn1,
  feedbackDataColumn2,
  feedbackDataColumn3,
} from "../../../assets/data/CryptoWallet/UserFeedback";

import playIcon from "../../../assets/images/crypto/play.svg";
import pauseIcon from "../../../assets/images/crypto/pause.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const UserFeedback = () => {
  const handleFeedbackStopBtnClick = () => {
    const feedbackStopBtn = document.querySelector(".feedback-stop-btn");
    const feedbackCardLists = document.querySelectorAll(".feedback-card-list");
  
    // Toggle the button's active state
    feedbackStopBtn.classList.toggle("active");
  
    // Toggle all testimonial lists
    feedbackCardLists.forEach((list) => {
      list.classList.toggle("active");
    });
  };

  return (
    <UserFeedbackStyle className="feedbacks-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Members Perspective"
            subtitle="The power of connections"
            alignment="center"
            titleMaxW="650px"
            titleMargin="auto"
            parentClass="crypto md-mb-0"
          />
          <p className="description text-center position-relative">TIW Network lets you experience the power of connections and collaboration first-hand. Through its events, you can build genuine relationships that open doors to new opportunities and partnerships. By bringing together like-minded professionals, TIW encourages an environment where businesses grow, innovate, and support one another. It’s more than networking… it’s about creating a strong, thriving community that drives both personal and professional success.</p>
          <div className="layer-1">
            <button
              className="feedback-stop-btn"
              onClick={handleFeedbackStopBtnClick}
            >
              <img src={playIcon} alt="play icon" className="play" />
              <img src={pauseIcon} alt="pause icon" className="pause" />
            </button>
          </div>
          <div className="layer-2" />
          <div className="feedback-content">
            <div className="row">
              <div className="col-md-4">
                <div className="feedback-card-list up">
                  {feedbackDataColumn1.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list up">
                  {feedbackDataColumn1.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="feedback-card-list down">
                  {feedbackDataColumn2.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list down">
                  {feedbackDataColumn2.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="feedback-card-list up">
                  {feedbackDataColumn3.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
                <div className="feedback-card-list up">
                  {feedbackDataColumn3.map((feedback, index) => (
                    <div className="feedback-card" key={index}>
                      <div className="people">
                        <div className="people-img">
                          <img src={feedback.image} alt="img" />
                        </div>
                        <div className="people-text">
                          <p>
                            {feedback.name} <span>{feedback.company}</span>
                          </p>
                        </div>
                      </div>
                      <p>{feedback.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>

      </div>
    </UserFeedbackStyle>
  );
};

export default UserFeedback;
