import styled from "styled-components";

const TermsAndPrivacyStyleWrapper = styled.section`
  padding-top: 200px;
  padding-bottom: 120px;

  h1 {
    margin-top: 11px;
    color: #fff;
  }
  h2, h3, h4{
    color: #fff;
  }
  .terms-and-service-inner {
    margin-top: 112px;
  }
  .description, .effective-date {
    color: rgba(255, 255, 255, 0.8);
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
  .terms-and-service-content {
    ul{
      color: rgba(255, 255, 255, 0.8);
      li {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    p {
      margin-bottom: 20px;
      color: rgba(255, 255, 255, 0.8);
      b {
        color: rgba(255, 255, 255, 0.8);
      }
      strong {
        color: rgba(255, 255, 255, 1);
        font-weight: 700;
      }
      a {
        color: rgba(255, 255, 255, 1);
        font-weight: 700;
      }
    }
    h4 {
      margin-bottom: 7px;
    }
  }

  .content-table-title {
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 20px;
    img {
      margin-right: 15px;
    }
  }

  .terms-list {
    li {
      line-height: 36px;
      color:rgba(255, 255, 255, 0.8);
      &:not(:first-child) {
        margin-top: 5px;
      }

      a {
        &.active,
        &:hover {
          color: #fff;
        }
      }
    }
  }

  .terms-and-service-sidebar {
    left: inherit !important;
    ol {
      li {
        line-height: 36px;

        a {
          &.active,
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  @media screen and (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 80px;

    .terms-and-service-inner {
      margin-top: 80px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 50px;
    h1 {
      font-size: 32px;
    }

    .terms-and-service-inner {
      margin-top: 60px;
      .sidebar {
        margin-bottom: 40px;
      }
    }

    .terms-and-service-sidebar {
      position: relative !important;
      top: 0px !important;
      width: 100% !important;
    }
  }
`;

export default TermsAndPrivacyStyleWrapper;
