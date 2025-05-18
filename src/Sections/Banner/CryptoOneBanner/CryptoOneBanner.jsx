import { useEffect, useState } from "react";
import CryptoOneBannerStyle from "./CryptoOneBanner.style";
import { NavLink } from "react-router-dom";
import ScrollAnimate from './../../../Components/ScrollAnimate';
import { useTypingHeadlines } from "use-typing-headlines";

const CryptoOneBanner = () => {
  const [animationValue, setAnimationValue] = useState(1);
  const [rotatingHeadline] = useTypingHeadlines(["Property Investors", "Property Developers", "Property Sources", "Business Owners", "Mortgage Brokers", "Property Solicitors", "Property Conveyancers", "Trades"], {
    speed: 200, // adjust this to make typing faster; lower values mean faster typing
    delay: 200, // adjust delay between words
  });
  useEffect(() => {
    const handleScroll = () => {
      const bannerElements = document.querySelectorAll(
        ".mobile-img, .banner-grad"
      );

      bannerElements.forEach((cryptoBannerImg) => {
        const y = window.scrollY;
        let x = cryptoBannerImg.offsetTop;
        x = x - 400;

        let newAnimationValue = (y - x) / 6;

        const animationStop = 100;

        newAnimationValue = newAnimationValue < 0 ? 0 : newAnimationValue;
        newAnimationValue =
          newAnimationValue > animationStop ? animationStop : newAnimationValue;

        cryptoBannerImg.style.transform = `translateY(${newAnimationValue}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationValue]);


  return (
    <CryptoOneBannerStyle className="crypto-wallet-hero-section">
      <div className="hero-overlay">
        <ScrollAnimate delay={300}>
        </ScrollAnimate>
        
      </div>  
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="crypto-hero-section-text">
            <h1>
              Scotland's Leading <br/> <span className="cd-words-wrapper animation-text">
                <b>{rotatingHeadline}</b> 
              </span> Network
            </h1>
            <p className="banner-text">
              Build meaningful relationships, access exclusive deals, and scale your success with Scotland’s leading network, we facilitate valuable connections, foster collaboration, and provide the resources needed for members to grow their businesses and property portfolios.
            </p>
            <NavLink to={"/pricing"} className="crypto-glow-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Join Network</span>
                <span className="btn-hover-text">Join Network </span>
              </span>
            </NavLink>
          </div>
        </ScrollAnimate>
      </div>
    </CryptoOneBannerStyle>
  );
};

export default CryptoOneBanner;
