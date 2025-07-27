import { useEffect } from "react";
import Slider from "react-slick";

const posts = [
  "https://www.instagram.com/p/DMakksAt-oW/",
  "https://www.instagram.com/p/DMLCHqFNH5t",
  "https://www.instagram.com/p/DMZ8COpN9vd",
  "https://www.instagram.com/p/POST_ID_4/",
  "https://www.instagram.com/p/POST_ID_5/",
  "https://www.instagram.com/p/POST_ID_6/",
  "https://www.instagram.com/p/POST_ID_7/",
  "https://www.instagram.com/p/POST_ID_8/"
];

const InstagramSlider = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Slider {...settings}>
      {posts.map((url, index) => (
        <div
          key={index}
          style={{
            maxHeight: "600px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              margin: "auto",
              maxHeight: "600px",
              width: "auto"
            }}
          ></blockquote>
        </div>
      ))}
    </Slider>
  );
};

export default InstagramSlider;
