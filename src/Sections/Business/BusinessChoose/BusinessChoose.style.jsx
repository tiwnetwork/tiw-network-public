import styled from "styled-components";

const BusinessChooseStyle = styled.section`
  padding: 40px 0 140px;
  position: relative;
  max-width: 1800px;
  margin: auto;
  .why-choose-tab {
    // border-bottom: 2px solid rgba(0, 206, 201, 0.2);
    max-width: 1170px;
    margin: auto;
    margin-bottom: 60px;
    padding-bottom: 12px;
    height: 38px;
    position: relative;
    /* &::before {
      content: "";
      position: absolute;
      height: 2px;
      background: rgba(0, 206, 201, 0.2);
      border-radius: 1px;
      width: 100%;
      bottom: 0px;
      left: 0px;
    } */
    .tab-buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .slick-list {
        padding: 0 !important;
        width: 100% !important;
        overflow: visible;
      }

      .slick-track {
        width: 100% !important;
        transform: translate3d(0px, 0px, 0px) !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .slick-slide {
        cursor: pointer;
        width: max-content !important;
        position: relative;
        text-align: center;
        
        &.slick-current {
          opacity: 1;
          &::after {
            content: "";
            position: absolute;
            height: 2px;
            background: #e6ad23;
            border-radius: 1px;
            width: 0%;
            bottom: -8px;
            left: 0px;
            animation: lineProgress 9s linear infinite;
            -webkit-animation: lineProgress  9s linear infinite;
          }
          span {
            &:nth-child(1) {
              color: #e6ad23;
            }
          }
          .text,
          .text2 {
            color: rgba(255,255,255, 1);
          }

        }
      }
      .tab-btn {
        height: 26px;
        text-align: center;
        &::after {
            content: "";
            position: absolute;
            height: 2px;
            background: rgba(255,255,255,0.1);
            border-radius: 1px;
            width: 100%;
            bottom: -8px;
            left: 0px;
          }
      }
    }
  }
  .tab-body-img{
    border-radius: 30px;
    overflow: hidden;
  }
  .tab-content {
    margin-top: 60px;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tab-btn {
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.title};
    transition: 0.3s;
    span {
      color: #fff;
      transition: 0.3s;
    }

    .text,
    .text2 {
      color: rgba(255,255,255,0.4);
    }

    &.active {
      span {
        color: ${({ theme }) => theme.colors.heroimg1Bg};
      }

      .text,
      .text2 {
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }
  .tab-body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 50px;

    &-icon {
      width: 30%;
      flex: 0 0 auto;
    }
    &-text {
      flex: 0 0 auto;
      width: 50%;
    }
    h2 {
      font-size: 24px;
      line-height: 36px;
      color: #fff;
    }
    p {
      margin-top: 29px;
      color: rgba(255,255,255,0.8);
    }
    .list {
      margin-top: 11px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          font-size: 18px;
          color: #e6ad23;
          position: relative;
          top: -5px;
        }
        p {
          margin-top: 0;
          color: rgba(255,255,255,0.8);;
        }
      }
    }
  }

  .why-choose-parent {
    width: 100%;
    margin: 0 auto;
    position: relative;
    width: 100%;
    overflow: hidden;
    .overlay-left,
    .overlay-right {
      position: absolute;
      z-index: 3;
      top: 0;
      width: 20%;
      height: 100%;
    }
    .overlay-left {
      left: 0;
      background: linear-gradient(
        90deg,
        #000 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .overlay-right {
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #000 100%
      );
    }
  }

  .why-chose-slider {
    .slick-list {
      overflow: visible;
    }
    .slick-slide{
      padding: 0 20px;
    }
    .section {
      max-width: 1170px;
      width: 100%;
      margin: auto;
    }
  }

  .why-choose-tab {
    progress {
      position: relative;
      top: -20px;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 2px;
      border: none;
      background: transparent;
      z-index: 2000;
    }

    progress::-webkit-progress-bar {
      background: transparent;
    }
    progress::-webkit-progress-value {
      background: ${({ theme }) => theme.colors.heroimg1Bg};
      background-attachment: fixed;
    }
    progress::-moz-progress-bar {
      background: ${({ theme }) => theme.colors.heroimg1Bg};
      background-attachment: fixed;
    }
  }

  @media screen and (max-width: 1200px) {
    .tab-body {
      align-items: flex-start;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20px 0 70px;  
    .why-choose-tab {
      height: 130px;
      .tab-buttons {
        .slick-track {
          flex-wrap: wrap;
        }
        .tab-btn {
          text-align: left;
          &::after {
            background:rgba(255, 255, 255, 0);
          }
        }
        .slick-slide {
          width: 50% !important;
          margin-bottom: 15px;
        }
      }
    }
    .why-choose-parent {
      .overlay-left,
      .overlay-right {
        display: none;
      }
    }
    .tab-btn {
      padding: 0px;
      &::after {
        
      }
    }
    .tab-body {
      flex-wrap: wrap;
    }
    .tab-body-text {
      width: 100%;
    }
  }
`;

export default BusinessChooseStyle;
