import styled from "styled-components";

import BgImg from "../../../assets/images/crypto/cross-platform-bg.svg";

const CrossPlatformStyle = styled.section`
  background: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 160px 0px;
  .btn-group{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 767px) {
        justify-content: center;
        
      }
  }
  .title-section{
    max-width: 480px;
  }
  .list{
    color: rgba(255, 255, 255, 0.8);
  }
  .crypto-glow-btn{
    margin: 0 0;
  }
  .lets-talk-bttn{
    padding: 12px 39px;
    width: 220px;
  }
  .featured-list-title{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    }
  .cross-platform-card {
    max-width: 1100px;
    width: 100%;
    margin: auto;
    background: transparent;
    border-radius: 20px;
    padding: 96px 30px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
    gap: 15px;
    @media screen and (max-width: 767px) {
      flex-direction: column;
      }
    .section-title {
      position: relative;
      z-index: 2;
      margin-bottom: 0px;
      text-align: center;
    }
    .cross-platform-mesh-grad {
      position: absolute;
      z-index: 0;
    }
    .paragraph{
      color: rgba(255, 255, 255, 0.8);
      text-align: left;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 45px 0px;
    background-size: 700px;
    background-position: bottom center;
    .lets-talk-bttn{
      justify-content: center;
    }
    .cross-platform-card {
      max-width: 410px;
      padding: 60px 0px;
      h2{
        max-width: 367px;
        text-align: center;
        margin: 0 auto;
      }
      .paragraph{
        text-align: center;
      }
    }
  }
`;

export default CrossPlatformStyle;
