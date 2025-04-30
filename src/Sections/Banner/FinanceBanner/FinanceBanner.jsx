import { useEffect, useRef, useState } from "react";
import FinanceBannerStyle from "./FinanceBanner.style";

import vector1 from "../../../assets/images/finance-index/Vector-1.svg";
import vector2 from "../../../assets/images/finance-index/Vector-2.svg";
import vector3 from "../../../assets/images/finance-index/Vector-3.svg";
import vector4 from "../../../assets/images/finance-index/Vector-4.svg";
import vector5 from "../../../assets/images/finance-index/Vector-5.svg";
import vector6 from "../../../assets/images/finance-index/Vector-6.svg";
import vectorLine1 from "../../../assets/images/finance-index/banner-vector-line1.svg";
import vectorLine2 from "../../../assets/images/finance-index/banner-vector-line2.svg";

const vectorImages = [vector1, vector2, vector3, vector4, vector5, vector6];

import BannerVideo from "../../../assets/videos/h6-video.mp4";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBanner = () => {
  const headlines = ["Easier", "Accountable", "Unbeatable"];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleIndex]);

  const VideoRef = useRef(null);
  const VideoControlRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoControl = () => {
    if (isPlaying) {
      VideoRef.current.pause();
      VideoControlRef.current.classList.add("active");
    } else {
      VideoRef.current.play();
      VideoControlRef.current.classList.remove("active");
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <FinanceBannerStyle className="hero-section6">

      <div className="container">
        <div className="row">
          <div className="text-right">
            <ScrollAnimate delay={300}>
              <div className="v6-banner-img-section">
                <div className="v6-banner-img">
                  <video
                    ref={VideoRef}
                    id="staco-h6-video"
                    loop
                    autoPlay
                    playsInline
                    muted
                  >
                    <source src={BannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <button
                    ref={VideoControlRef}
                    id="staco-h6-video-control"
                    onClick={handleVideoControl}
                  >
                    <span className="play">
                      <span
                        className="iconify"
                        data-icon="material-symbols:play-arrow"
                      />
                    </span>
                    <span className="pause">
                      <span className="iconify" data-icon="fe:pause" />
                    </span>
                  </button>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </FinanceBannerStyle>
  );
};

export default FinanceBanner;
