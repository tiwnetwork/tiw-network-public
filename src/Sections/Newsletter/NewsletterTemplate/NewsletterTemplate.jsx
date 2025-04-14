import { useEffect, useState } from "react";
import NewsletterTemplateStyle from "./NewsletterTemplate.style";
import { imagePaths } from "../../../assets/data/NewsletterData/NewsletterTamplateData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterTemplate = () => {
  const [scrollTransformRow1, setScrollTransformRow1] = useState(0);
  const [scrollTransformRow2, setScrollTransformRow2] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".portfolio-gallery");
      const y = window.scrollY;
      const x = container.offsetTop - 400;

      const valRow1 = y / 2;               // Row 1 moves left to right
      const valRow2 = -y / 2;              // Row 2 moves right to left

      if (y > x) {
        setScrollTransformRow1(valRow1);
        setScrollTransformRow2(valRow2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialOffset = -500;  // Initial left offset for both rows

  return (
    <NewsletterTemplateStyle className="portfolio-section newsletter p-0" >
      <ScrollAnimate delay={300}>
        {/* Row 1: Left to Right */}
        <div
          className="portfolio-gallery pg-first"
          style={{ transform: `translateX(${scrollTransformRow1 + initialOffset}px)` }}
        >
          {imagePaths.slice(0, imagePaths.length / 2).map((path, index) => (
            <div key={index} className="portfolio-img">
              <img src={path} alt={`img-${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div
          className="portfolio-gallery"
          style={{ transform: `translateX(${scrollTransformRow2 + initialOffset}px)` }}
        >
          {imagePaths.slice(imagePaths.length / 2).map((path, index) => (
            <div key={index} className="portfolio-img">
              <img src={path} alt={`img-${index + 1}`} />
            </div>
          ))}
        </div>
      </ScrollAnimate>
    </NewsletterTemplateStyle>
  );
};

export default NewsletterTemplate;
