import { useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import ParallaxStyleWrapper from "./Parallax.style";
import ParallaxBgImg from "../../assets/images/bg/vector-map.svg";
import ScrollAnimate from "../ScrollAnimate";

const ParallaxComponent = ({ parallaxTextClass }) => {
  // counter up
  const sectionRef = useRef(null);

  useEffect(() => {
    let isAnimated = 0;
    function counterUp() {
      if (isAnimated == 0) {
        const counterItem = document.querySelectorAll(".counter");
        counterItem.forEach((item) => {
          var counterText = item.innerText;
          item.innerText = "0";
          const updateCounter = () => {
            let dataTarget = +item.getAttribute("data-target");
            if (dataTarget > 999) {
              dataTarget = dataTarget / 1000;
            }
            counterText = +item.innerText;
            let increment = dataTarget / 1000;
            if (counterText < dataTarget) {
              item.innerText = `${Math.ceil(counterText + increment)}`;
              setTimeout(updateCounter, 1);
            }
          };
          updateCounter();
        });
      }
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const x = sectionRef.current.offsetTop - 400;
      if (y > x && y < x + window.innerHeight) {
        counterUp();
        isAnimated++;
      } else {
        isAnimated = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxStyleWrapper ref={sectionRef}>
      <Parallax
        className="index2-statistics-section"
        bgImage={ParallaxBgImg}
        bgImageAlt="map"
        strength={200}
      >
        <div className="container">
          <div className="index2-statistics-content">
            <div className="row">
              <div className="col-lg-5 col-md-4 md-mb-30">
                <ScrollAnimate delay={200}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" data-target="200">
                        250
                      </span>
                      +
                    </h2>
                    <p>Members</p>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-lg-4 col-md-4 md-mb-30">
                <ScrollAnimate delay={230}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" data-target="23">
                        25
                      </span>
                      +
                    </h2>
                    <p>Partners</p>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-lg-3 col-md-4">
                <ScrollAnimate delay={260}>
                  <div className={`statistics-text ${parallaxTextClass}`}>
                    <h2>
                      <span className="counter" data-target="100">
                        1000
                      </span>
                      +
                    </h2>
                    <p>Deals Sold</p>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxStyleWrapper>
  );
};

export default ParallaxComponent;
