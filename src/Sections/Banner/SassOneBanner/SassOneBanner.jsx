import { useEffect } from "react";
import { useTypingHeadlines } from "use-typing-headlines";
import SassOneBannerStyle from "./SassOneBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

import teamManagementImg from "../../../assets/images/sass1/team-managemnet.svg";
import invoiceImg from "../../../assets/images/sass1/invoice.svg";
import meetingImg from "../../../assets/images/sass1/meeting.svg";
import chatbotImg from "../../../assets/images/sass1/chatbot.svg";
import seoImg from "../../../assets/images/sass1/seo.svg";
import telehealthImg from "../../../assets/images/sass1/telehealth.svg";
import emailAutomotionImg from "../../../assets/images/sass1/email-automotion.svg";
import helpDeskImg from "../../../assets/images/sass1/help-desk.svg";
import campaignImg from "../../../assets/images/sass1/campaign.svg";
import saasImg from "../../../assets/images/sass1/saas.svg";
import chatInventoryImg from "../../../assets/images/sass1/chat-inventory.svg";
import inventoryImg from "../../../assets/images/sass1/inventory.svg";
import index5BannerImg from "../../../assets/images/sass1/index5-banner-img.png";
import handsIcon from "../../../assets/images/icons/hands.png";

const SassOneBanner = () => {
  const [sassOneHeadline] = useTypingHeadlines(["All-in-One"], {
    speed: 200, // adjust this to make typing faster; lower values mean faster typing
    delay: 200, // adjust delay between words
  });

  useEffect(() => {
    const handleScroll = () => {
      const hero5 = document.querySelector(".hero-section-index5");
      if (hero5) {
        const indexVImg = document.querySelector(".hero-section-index5");
        const y = window.scrollY;
        let x;
        let heroVImg;
        x = indexVImg.offsetTop;
        heroVImg = indexVImg.querySelector(".index5-hero-img img");
        x = x + 100;

        let animationValue = 40;
        animationValue = (animationValue - (y - x)) / 5;

        const animationStop = 0;

        if (animationValue > 40) {
          animationValue = 40;
        }

        if (animationValue < animationStop) {
          animationValue = animationStop;
        }

        if (y > x) {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        } else {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        }

        const scrollSlider = document.querySelector(
          ".index5-scroll-carousel-section"
        );
        let z = scrollSlider.offsetTop;
        z = z - 500;
        let val = (-1 * y) / 4;
        let val2 = y / 4;
        if (y > z) {
          document.querySelector(
            ".slide-left"
          ).style.transform = `translateX(${val}px)`;
          document.querySelector(
            ".slide-right"
          ).style.transform = `translateX(${val2}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SassOneBannerStyle className="hero-section-index5">
      <div className="container">
        <div className="index5-hero-content">
          <ScrollAnimate delay={200}>
          <div className="v5banner-text">
            <h1 className="cd-headline clip is-full-width banner-title">
            Your <span className="gold-gradient">All-in-One</span> Member Dashboard
            </h1>
            <p>
              Discover the TIW Network member dashboard – your gateway to exclusive events, vital announcements, and valuable resources. Seamlessly register for events, access partner data, explore trade deals, and download essential materials. Stay connected and informed with everything you need, all in one place.
            </p>
          </div>
          </ScrollAnimate>
        </div>
        <div className="index5-hero-img">
          <img src={index5BannerImg} alt="img" />
        </div>
      </div>

    </SassOneBannerStyle>
  );
};

export default SassOneBanner;
