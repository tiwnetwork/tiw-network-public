import { useEffect } from "react";
import ChatbotChooseStyle from "./ChatbotChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import chatbotImage from "../../../assets/images/tiwmedia/tiwlogo370px.svg";
import { reasons } from "../../../assets/data/ChatbotData/ChatbotChooseData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotChoose = () => {
  useEffect(() => {
    const handleScroll = () => {
      const chooseImage = document.querySelector(".chatbot-why-choose-img");
      if (!chooseImage) return;

      const y = window.scrollY;
      let x = chooseImage.offsetTop;
      x = x + 1200;

      let animationValue = 0;
      animationValue = (y - x) / 3;

      const animationStop = 100;

      if (animationValue < 0) {
        animationValue = 0;
      }

      if (animationValue > animationStop) {
        animationValue = animationStop;
      }

      chooseImage.style.transform = `translateY(${animationValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChatbotChooseStyle className="chatbot-why-choose-us-section z-index-3">
      <div className="container">
        <div className="chatbot-why-choose-us-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="chatbot-why-choose-us-left">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    title="The Visionaries"
                    subtitle="TIW NETWORK"
                    parentClass="mb-0"
                  />
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                  <p className="description">
                    Founded by Sam Dyer and Steven Clark. TIW Network is Scotland’s largest and most  progressive property community.
                  </p>
                </ScrollAnimate>
                <div className="chatbot-why-choose-img">
                  <img src={chatbotImage} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="chatbot-why-choose-us-right">
                {reasons.map((reason, index) => (
                  <div className="chatbot-why-choose-info" key={index}>
                    <ScrollAnimate delay={reason.delay}>
                      <h5>{reason.title}</h5>
                      <p>{reason.description}</p>
                    </ScrollAnimate>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChatbotChooseStyle>
  );
};

export default ChatbotChoose;
