import styled from "styled-components";

const WhyChoseStyleWrapper = styled.section`
  padding-bottom: 0px;
  position: relative;
  z-index: 2;
  background: transparent;
  h2{
    margin-bottom: 38px;
    color: #fff;
  }
  .title-group{
    max-width: 600px;
    margin: auto;
  }
  .sub-title {
    font-size: 18px;
    font-weight: 700;
    color: #EFBA30;
    text-transform: uppercase;
    line-height: 30px;
    letter-spacing: 0.2em;
    margin-bottom: 12px;
  }
  .choose-us-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    .choose-us-text {
      max-width: 310px;
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 90px;
      color: rgba(255, 255, 255, 0.8);
      h4{
        color: #fff;
      }
      
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 70px;
    .choose-us-content {
      flex-direction: column;
      .choose-us-text {
        gap: 30px;
        max-width: 355px;
        .text-right{
          text-align: left !important;
        }
      }
    }
  }
`;

export default WhyChoseStyleWrapper;
