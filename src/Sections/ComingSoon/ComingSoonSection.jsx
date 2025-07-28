import { useState, useEffect } from "react";
import ComingSoonSectionStyleWrapper from "./ComingSoonSection.style";
import ScrollAnimate from "../../Components/ScrollAnimate";
import tiwLogo from "../../assets/images/tiwmedia/tiwlogo370px.svg";

const ComingSoonSection = () => {
  // Set your launch date here
  const launchDate = new Date("2025-07-31T20:00:00+01:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <ComingSoonSectionStyleWrapper>
      <div className="overlay">
        <ScrollAnimate delay={200}>
          <div className="corporate-banner-text">
            <img src={tiwLogo} alt="TIW Network Logo" className="logo" />
            <h1 className="text-white text-center">TIW Network</h1>
            <p className="text-white text-center">Something exciting is on the way.</p>

            <div className="countdown">
              <div><span>{timeLeft.days}</span><p>Days</p></div>
              <div><span>{timeLeft.hours}</span><p>Hours</p></div>
              <div><span>{timeLeft.minutes}</span><p>Minutes</p></div>
              <div><span>{timeLeft.seconds}</span><p>Seconds</p></div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </ComingSoonSectionStyleWrapper>
  );
};

export default ComingSoonSection;
