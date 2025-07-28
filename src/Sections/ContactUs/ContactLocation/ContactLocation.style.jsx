import styled from "styled-components";

const ContactLocationStyle = styled.section`
  padding: 65px 0 130px 0;

  .map-content {
    border-radius: 30px;
    overflow: hidden;
    position: relative;
  }

  .contact-map {
    width: 100%;
    height: 450px;
    iframe {
      width: 100%;
    }
  }

  .map-info-card {
    position: absolute;
    z-index: 1;
    top: 30px;
    left: 30px;
    width: 350px;
    height: auto;
    padding: 30px;
    background-color: #000;
    border-radius: 20px;
    &:before{
      content: "";
      position: absolute;
      inset: 0;
      padding: 3px; 
      background: linear-gradient(90deg, #F8C73D 0%, #E6AD23 51.56%, #ce7902 100%);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      pointer-events: none;
      border-radius: 20px;
    }
    .list {
      padding: 0;
      list-style: none;
      margin: 0;
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      /* Internet Explorer 10+ */
      scrollbar-width: none;
      transition: width 0.3s;

      &::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
      }
      li {
        &:not(:first-child) {
          margin-top: 10px;
        }
      }

      .list-item {
        display: flex;
        gap: 19px;
        .list-icon {
          flex: 0 0 auto;
        }
        img {
          width: 20px;
          height: 20px;
        }
        h4 {
          font-size: 15px;
          line-height: 45px;
          margin-bottom: 0;
          color: #fff;
        }
        p {
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .list-icon {
        line-height: 45px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 30px 0 80px;
  }

  @media screen and (max-width: 575px) {
    .map-info-card {
      left: 0px;
      top: -21px;
      position: relative;
      width: 100%;
    }
    .map-content {
      overflow: unset;
      padding-top: 23px;
    }
  }
`;

export default ContactLocationStyle;
