import styled from "styled-components";

import BgImg from "../../../assets/images/crypto/cross-platform-bg.svg";

const CrossPlatformStyle = styled.section`
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 160px 0px;
  .cross-platform-card {
    max-width: 925px;
    width: 100%;
    margin: auto;
    background: transparent;
    border-radius: 20px;
    padding: 96px 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-direction: column;
    gap: 15px;
    .section-title {
      position: relative;
      z-index: 2;
      margin-bottom: 0px;
    }
    .cross-platform-mesh-grad {
      position: absolute;
      z-index: 0;
    }
    .paragraph{
      color: #fff;
      text-align: center;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0px;
    .cross-platform-card {
      max-width: 410px;
      padding: 60px 0px;
    }
  }
`;

export default CrossPlatformStyle;
