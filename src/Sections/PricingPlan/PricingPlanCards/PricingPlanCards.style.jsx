import styled from "styled-components";

const PricingPlanCardsStyle = styled.section`
  background: transparent;
  margin-top: 0;
  position: relative;
  z-index: 2;
  padding-top: 200px;
  padding-bottom: 0px;

  .pricing-plan-breadcrumb-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 90px;
    .best-pricing-selector form button {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
  .title{
    color: #fff;
  }
  
  .radial-gradient {
    background: radial-gradient(circle at top center, #242424 0%, #131313e0 23%, #000000 64%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }
  .pricing-plan-card {
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    padding: 46px 40px;
    position: relative;
    min-height: 100%;
    &::before {
      content: "";
      border-radius: 15px 15px 0px 0px;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 15px;
    }
    &.single-card{
      &::before {
        background: #F8C73D;
      }
    }
    &.duo-card {
      &::before {
        background: #E6AD23;
      }
    }
    &.business-card {
      &::before {
        background: #D48E29;
      }
    }

    .best-pricing-card-body {
      .list {
        margin-top: 27px;
        padding: 0;
        list-style: none;
        color: rgba(255, 255, 255, 0.8);
        li {
          position: relative;
          padding-left: 16px;
          padding-bottom: 6px;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: rgba(255,255,255, 0.8);
            top: 15px;
          }

          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
    }

    &.active {
      .best-pricing-card-body {
        height: auto;
      }
      .pricing-plan-card-content.right {
        height: auto;
      }
    }
  }

  .pricing-plan-card-header {
    h6{
      font-weight: 800;
    }
    p{
      color: rgba(255,255,255, 0.8);
    }
    &.single {
      h6 {
        color: #F8C73D;
      }
    }
    &.duo {
      h6 {
        color: #E6AD23;
      }
    }
    &.business {
      h6 {
        color: #D48E29;
      }
    }
    &.enterprise {
      h6 {
        color: #B46C28;
      }
    }
    h6 {
      text-transform: uppercase;
      span {
        color: #fff;
        margin-left: 18px;
      }
    }
    h3 {
      margin-top: 35px;
      color: #fff;
      span {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
      }
    }
  }

  .pricing-plan-card-content {
    &.right {
      text-align: center;
      max-width: 220px;
      margin-left: auto;
      .pricing-plan-img {
        position: relative;
        bottom: -96px;
      }
    }
  }

  .pricing-plan-show-btn {
    color: ${({ theme }) => theme.colors.primary};
    width: 190px;
    text-align: left;
    padding-left: 36px;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: 0.3s;
    display: none;
    position: relative;
    &:hover {
      color: ${({ theme }) => theme.colors.title};
      &::before {
        color: ${({ theme }) => theme.colors.title};
      }
    }
    &::before {
      content: "+";
      font-size: 20px;
      min-height: 24px;
      min-width: 26px;
      position: absolute;
      left: 0px;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.whiteColor};
      background: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }
    &.active {
      &::before {
        content: "-";
      }
    }
  }

  .best-pricing-btn {
    max-width: 100%;
    width: 100%;
    font-weight: 800;
    height: 60px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255, 0.8);
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 0;
    .icon {
      transition: 0.3s;
      margin-left: 15px;
      filter: brightness(100) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
    }
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background: linear-gradient(90deg, #F8C73D 0%, #E6AD23 51.56%, #ce7902 100%);
      transform: translateX(-100%);
      transition: 0.3s;
    }
    &:hover {
      border: 1px solid #E6AD23;
      color: #1a1a1a;
      &::before {
        transform: translateX(0%);
      }
      .icon {
        transform: rotate(-45deg);
        filter: brightness(0) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
    &.active {
      border: 1px solid #E6AD23;
      color: #1a1a1a;
      background: linear-gradient(90deg, #F8C73D 0%, #E6AD23 51.56%, #ce7902 100%);
      .icon {
        transform: rotate(-45deg);
        filter: brightness(0) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
  }

  @media screen and (max-width: 991px) {
    .pricing-plan-card {
      padding-bottom: 10px;
      padding-top: 25px;
    }
    .pricing-plan-card-content {
      &.right {
        margin-left: 0px;
        margin-right: auto;

        .pricing-plan-img {
          bottom: 0px;
          margin-top: 20px;
        }
      }
    }
    .pricing-plan-card-header h3 {
      font-size: 23px;
      margin-top: 5px;
    }
    .faq-seciton.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .pricing-plan-card {
      padding-bottom: 30px;
    }
    .pricing-plan-card-content.right {
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
    }
    .pricing-plan-breadcrumb-right {
      justify-content: flex-start;
      margin-top: 40px;
    }
  }
`;

export default PricingPlanCardsStyle;
