import { useEffect, useRef, useState } from "react";
import SassOneBannerStyle from "./SassOneBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

import index5BannerImg from "../../../assets/images/sass1/index5-banner-img.png";
import laptopshadow from "../../../assets/images/tiwmedia/laptopshadow.png";

const SassOneBanner = () => {
  const shadowRef = useRef(null);
  const [shadowVisible, setShadowVisible] = useState(false);
  const hasAnimatedRef = useRef(false); // NEW: tracks if rotation has occurred

  useEffect(() => {
    const handleScroll = () => {
      const hero5 = document.querySelector(".hero-section-index5");
      if (hero5 && !hasAnimatedRef.current) {
        const indexVImg = hero5;
        const y = window.scrollY;
        const x = indexVImg.offsetTop + 100;
        const heroVImg = indexVImg.querySelector(".index5-hero-img img");

        let animationValue = (40 - (y - x)) / 5;
        animationValue = Math.max(0, Math.min(40, animationValue));

        if (y > x) {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        } else {
          heroVImg.style.transform = `rotateX(${animationValue}deg)`;
        }

        // Lock animation after it's in view
        if (y > x + 200) {
          hasAnimatedRef.current = true;
        }
      }

      const scrollSlider = document.querySelector(".index5-scroll-carousel-section");
      let z = scrollSlider?.offsetTop || 0;
      z = z - 500;
      let val = (-1 * window.scrollY) / 4;
      let val2 = window.scrollY / 4;
      if (window.scrollY > z && scrollSlider) {
        document.querySelector(".slide-left").style.transform = `translateX(${val}px)`;
        document.querySelector(".slide-right").style.transform = `translateX(${val2}px)`;
      }
    };

    // Observer for .laptop-shadow fade-in
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShadowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (shadowRef.current) {
      observer.observe(shadowRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
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
                Discover the TIW Network member dashboard – your gateway to exclusive events,
                vital announcements, and valuable resources. Seamlessly register for events,
                access partner data, explore trade deals, and download essential materials.
                Stay connected and informed with everything you need, all in one place.
              </p>
            </div>
          </ScrollAnimate>
        </div>
        <div className="laptop-image-container">
          <div className="index5-hero-img">
            <img src={index5BannerImg} alt="img" />
          </div>
          <img
            ref={shadowRef}
            className={`laptop-shadow ${shadowVisible ? "visible" : ""}`}
            src={laptopshadow}
            alt="img"
          />
        </div>
      </div>
    </SassOneBannerStyle>
  );
};

export default SassOneBanner;
