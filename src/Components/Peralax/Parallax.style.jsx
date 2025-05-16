import styled from "styled-components";

const ParallaxStyleWrapper = styled.section`
  /*-- index2-statistics-section start --*/
  .index2-statistics-section {
    background: transparent;
    height: auto;
    margin-top: 0px;
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
      #B46C28 35%,
      #E6AD23 50%,
      #B46C28 65%,
        transparent 100%
        );
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
      #B46C28 35%,
      #E6AD23 50%,
      #B46C28 65%,
        transparent 100%
        );
    }   
    & .index2-statistics-content {
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      padding: 77.5px 0;
      position: relative;
      z-index: 0;
    }
    .react-parallax-bgimage {
      width: auto !important;
    }
  }
  .statistics-text {
    & h2 {
      color: #E6AD23;
    }
    & p {
      font-size: 18px;
      font-weight: 500;
      line-height: 40px;
      color: rgba(255, 255, 255, 0.8);
    }
    &.v6 {
      h2,
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  /*-- index2-statistics-section End --*/
  @media screen and (max-width: 1199px) {
    .index2-statistics-section {
      min-height: auto;
    }
    .index2-statistics-section .index2-statistics-content {
      min-height: auto;
      padding: 60px 20px;
    }
    .statistics-text h2 {
      font-size: 30px;
      line-height: 35px;
    }
  }
  @media screen and (max-width: 767px) {
    /*-- brands-section End --*/
    .index2-statistics-section {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 575px) {
    .statistics-text {
      text-align: center;
    }
  }
`;

export default ParallaxStyleWrapper;
