import styled from "styled-components";

const ChatbotChooseStyle = styled.section`
  padding-top: 110px;
  padding-bottom: 220px;
  background: transparent;
  .chatbot-why-choose-us-content {
    background: rgba(255,255,255,0.03);
    border-radius: 30px;
    padding: 112px 70px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 700px;
      height: 700px;
      border-radius: 30px 0 0 0;
      background: radial-gradient(circle at left top, #1a1a1a 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
  }
  .chatbot-why-choose-us-left {
    min-height: 100%;
    position: relative;
    p {
      max-width: 400px;
      width: 100%;
      margin-top: 35px;
      
    }
    p.description{
      color:rgba(255, 255, 255, 0.8);
    }
    .chatbot-why-choose-img {
      position: absolute;
      left: 0px;
      bottom: -182px !important;
      //        transform: translateY(182px);
      transition: 0.5s;
      transform-style: preserve-3d;
    }
  }
  .chatbot-why-choose-us-right {
    min-height: 100%;
  }
  .chatbot-why-choose-info {
    margin-bottom: 50px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
    .chatbot-why-choose-icon {
      margin-bottom: 23px;
    }
    h5 {
      margin-bottom: 14px;
      font-weight: 700;
    }
    h2.title {
      color: #fff;
    }

    p {
      margin-bottom: 0px;
      color:rgba(255, 255, 255, 0.8);
    }
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 140px;
    .chatbot-why-choose-us-content {
      padding: 70px;
    }
    .chatbot-why-choose-us {
      &-left {
        padding-bottom: 30%;
      }
      &-right {
        padding-top: 50%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 80px;
    .chatbot-why-choose-us-content {
      padding: 50px;
      &:before {
        width: 200px;
        height: 200px;
        border-radius: 30px 0 0 0;
      }
    }
    .chatbot-why-choose-us-left .chatbot-why-choose-img {
      bottom: -150px !important;
    }
  }
  @media screen and (max-width: 575px) {
    .chatbot-why-choose-us-left {
      .chatbot-why-choose-img {
        max-width: 210px;
      }
    }
    .chatbot-why-choose-us-content {
      padding: 40px 20px;
    }
    .chatbot-why-choose-us-right {
      padding-top: 65%;
    }
  }
  @media screen and (max-width: 425px) {
    .chatbot-why-choose-us-right {
      padding-top: 80%;
    }
  }
`;

export default ChatbotChooseStyle;
