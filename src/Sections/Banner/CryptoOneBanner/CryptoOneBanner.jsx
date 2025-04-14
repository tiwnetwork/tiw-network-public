import { useEffect, useState } from "react";
import CryptoOneBannerStyle from "./CryptoOneBanner.style";

import BannerGraphicsImg from "../../../assets/images/crypto/banner-graphics.svg";
import MeshGradImg from "../../../assets/images/crypto/mesh-grad.png";
import ArrowRightIcon from "../../../assets/images/crypto/arrow-right.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from './../../../Components/ScrollAnimate';
import { useTypingHeadlines } from "use-typing-headlines";

const CryptoOneBanner = () => {
  const [animationValue, setAnimationValue] = useState(1);
  const [rotatingHeadline] = useTypingHeadlines(["Investors", "Backers", "Providers"], {
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
            {/* <div className="banner-animetion">
              <div className="new">New</div>
              <p>Polygon network NFTs added for mint</p>
              <span>
                <img src={ArrowRightIcon} alt="icon" />
              </span>
            </div> */}
            <h1>
              Scotland's Leading Property <span className="cd-words-wrapper animation-text">
                <b>{rotatingHeadline}</b>
              </span>
            </h1>
            <p className="banner-text">
            Become part of a thriving community of over 200 property investors and developers.
            Unlock exclusive benefits, expert insights, and unparalleled networking opportunities.
            </p>
            <NavLink to={"/sign-up"} className="crypto-glow-btn">
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
