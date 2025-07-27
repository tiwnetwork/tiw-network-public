import styled from "styled-components";

import PlusImg from "../../../assets/images/icons/accordion-plus-white.png";
import MinusImg from "../../../assets/images/icons/accordion-minus-white.png";
import VisionBG from "../../../assets/images/tiwmedia/about-us/vision-bg.jpg";

const FinanceBenefitsStyle = styled.section`
  padding: 110px 0;
  background: 
    linear-gradient(138deg, rgba(248, 198, 61, 0), rgba(230, 173, 35, .9), rgba(206, 121, 2, .9), rgba(206, 121, 2, 0)), url(${VisionBG});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
 
  .vision-footer{
  color: #fff;
    text-align: center;
    margin: 50px auto 0 auto;
    max-width: 900px;
  }
  .description{
    color: #fff;
    text-align: center;
    margin: 0 auto; 
  }
  .green-color {
      color: #fff !important;
      background: unset !important;
      -webkit-text-fill-color: unset;
  }
  .benefits-content {
    padding-top: 50px;
  }
  /*-- benefits-img --*/
  .benefits-left-section {
    background: transparent;
    border-radius: 20px;
  }
  .benefits-img-bg {
    background: transparent;
    padding: 0px;
    position: relative;
    .benefits-img-tag {
      position: absolute;
      background: ${({ theme }) => theme.colors.primary6};
      color: #fff;
      border-radius: 20px;
      padding: 10px 23px;
      z-index: 111;
      &1 {
        right: 40px;
        top: 20%;
      }
      &2 {
        right: 40px;
        top: 31%;
      }
      &3 {
        left: 20%;
        bottom: 40px;
      }
    }

    &.benefits-img-bg2 {
      .benefits-img-tag {
        &1 {
          left: 40px;
          top: 8%;
          right: auto !important;
        }

        &2 {
          left: 40px;
          top: 21%;
          right: auto !important;
        }

        &3 {
          left: 40px;
          top: 37%;
          bottom: auto !important;
        }
      }
      .benefits-img-chart {
        position: absolute;
        left: 40px;
        z-index: 111;
        bottom: 16%;
      }
      .benefits-img {
        margin-left: auto;
      }
    }

    &.benefits-img-bg3 {
      .benefits-img-tag {
        &1 {
          right: 40px;
          top: auto;
          bottom: 35%;
        }

        &2 {
          right: 40px;
          top: auto;
          bottom: 21%;
        }

        &3 {
          right: 40px;
          left: auto;
          top: auto;
          bottom: 8%;
        }
      }
      .benefits-img-chart {
        position: absolute;
        left: 40px;
        z-index: 111;
        bottom: 16%;
        left: 40px;
      }
    }

    &.benefits-img-bg4 {
      .benefits-img-tag {
        &1 {
          left: 20%;
          top: 9%;
          right: auto !important;
        }

        &2 {
          left: auto !important;
          top: 9%;
          right: 40px;
        }

        &3 {
          left: auto !important;
          top: 35%;
          right: 40px;
          bottom: auto;
        }
      }
      .benefits-img-chart {
        position: absolute;
        left: auto;
        right: 40px;
        z-index: 111;
        bottom: 16%;
      }
    }

    .benefits-img {
      border-radius: 10px;
      border-bottom-right-radius: 50%;
      max-width: 100%;
      > img {
        height: 100%;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        border-radius: 20px;
      }
    }
  }

  .benefits-img {
    .overlay-item {
      position: absolute;
    }

    .overlay-item.success-rate {
      bottom: 30px;
      right: 30px;
    }

    .success-rate-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .pie_progress {
      width: 130px;
      height: 130px;
      margin: auto 0;
      background-color: transparent;
    }
  }

  /*-- benefits-faq --*/
  .benefits-faq {
    padding-left: 50px;
    .slider-benefits-content {
      border-top: 1px solid #fff;
    }
    .benefits-slider-nav {
      border-bottom: 1px solid #fff;
      padding: 26px 0px;
      .benefits-nav-btn {
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        color: #fff;
        position: relative;
        width: 100%;
        text-align: left;
        &::after {
          position: absolute;
          content: url(${PlusImg});
          top: 2px;
          right: 0;
          width: 20px;
          height: 20px;
          transition: 0.3s;
          transform: rotate(0deg);
        }
      }
      .benefits-nav-content {
        height: 0px;
        overflow: hidden;
        transition: 0.5s;
        p {
          padding-top: 15px;
          max-width: 515px;
          width: 100%;
          color: #fff;
        }
      }
    }

    .slick-list {
      padding: 0 !important;
    }
    .slick-slide {
      width: 100% !important;
      &.slick-current {
        padding-bottom: 22px;
        opacity: 1;
        position: relative;
        &::after {
          position: absolute;
          bottom: 22px;
          left: 0px;
          content: "";
          height: 1px;
          width: 30%;
          background: #fff;
          animation: lineProgress 3s linear infinite;
          -webkit-animation: lineProgress 5s linear infinite;
        }
        .benefits-nav-btn {
          &::after {
            content: url(${MinusImg});
            top: -7px;
            transform: rotate(360deg);
          }
        }

        .benefits-nav-content {
          height: auto;
        }
      }
    }
    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 1199px) {
    .benefits-img-bg .benefits-img-chart {
      width: 50%;
    }
    .benefits-faq {
      padding-left: 30px;
    }
  }
  @media screen and (max-width: 991px) {
    .benefits-img-bg {
      .benefits-img {
        max-width: 100%;

        img {
          max-height: 100%;
        }
      }
    }
    .benefits-faq {
      padding-left: 10px;

      .template-accordion {
        .accordion-button {
          &::after {
            top: 20px;
          }

          padding: 16px 0px;

          &:not(.collapsed) {
            padding-bottom: 10px;
          }
        }

        .accordion-body {
          p {
            font-size: 12px;
            line-height: 22px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    .benefits-img-bg {
      padding: 20px;

      .benefits-img-tag {
        font-size: 13px;
        padding: 8px 16px;

        &1 {
          right: 10px;
        }

        &2 {
          right: 10px;
          top: 33%;
        }

        &3 {
          left: 10%;
          bottom: 16px;
        }
      }

      .about-feature-img .overlay-item.success-rate {
        bottom: 10px;
        right: 0px;
      }
    }
    .benefits-faq {
      .benefits-slider-nav {
        padding: 18px 0px;

        .slick-current {
          padding-bottom: 15px;
        }

        .benefits-nav-btn {
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .benefits-faq {
      padding-left: 0px;
      padding-top: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    .benefits-img-bg {
      padding: 20px;

      .benefits-img-tag {
        font-size: 13px;
        padding: 8px 16px;

        &1 {
          right: 10px;
        }

        &2 {
          right: 10px;
          top: 33%;
        }

        &3 {
          left: 10%;
          bottom: 16px;
        }
      }

      .about-feature-img .overlay-item.success-rate {
        bottom: 10px;
        right: 0px;
      }
    }
    .benefits-faq {
      .benefits-slider-nav {
        padding: 18px 0px;

        .slick-current {
          padding-bottom: 15px;
        }

        .benefits-nav-btn {
          font-size: 16px;
        }

        .benefits-nav-content {
          p {
            font-size: 13px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;

export default FinanceBenefitsStyle;
