import styled from "styled-components";

const OurSkilStyle = styled.section`
  padding: 112px 0;
  background-color: transparent;
  position: relative;
  .container{
    max-width: 100%!important;
    padding-right: 0!important;
    padding-left: 120px!important;
  }
  .crypto-glow-btn{
    margin: unset;
  }
  .lets-talk-bttn {
    padding: 12px 39px;
    width: 220px;
    justify-content: center;
  }
  .radial-gradient{
    background: radial-gradient(circle at top left, #242424a6 0%, #13131394 10%, #000000 36%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    bottom: 0;
    @media screen and (max-width: 800px) {
      height: 100%;
    }
  }
  .btn-group{
    margin-top: 30px;

  }

  .skills-content {
    &-text {
      margin-bottom: 45px;
    }
    h5 {
      margin-bottom: 16px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
    h2 {
      color: #fff;
      font-size: 40px;
    }
    p {
      margin-top: 22px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0;
    }
    span.sub-title{
      color: #E6AD23;
    }
  }
  .progress-inner {
    height: 80%;
    width: 80%;
    margin: 0 auto;
  }
  .skills-status {
    display: flex;
    align-items: center;
    gap: 70px;

    .skills-item {
      text-align: center;
      p {
        margin-top: 18px;
        text-align: center;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.title};
      }
    }

    .pie_progress {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      background-color: transparent;
    }

    .pie_progress__label {
      margin-top: 0px;
    }

    .pie_progress__label h4 {
      margin-bottom: 0;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
      letter-spacing: 0.01em;
    }
  }

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    .btn-group{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      width: 100%;
    }
    .container{
      max-width: 100%!important;
      padding-right: calc(var(--bs-gutter-x) * .5)!important;
      padding-left: calc(var(--bs-gutter-x) * .5)!important;
    }
    .skills-content {
      &-text {
        margin-bottom: 25px;
      }

      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 30px);
      }

      h2 {
        @include textStyle(32px, 700, 45px);
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding: 72px 0 80px;
    .skills-status {
      gap: 50px;

      .skills-item {
        text-align: center;

        p {
          margin-top: 18px;
        }
      }

      .pie_progress {
        width: 80px;
        height: 80px;
      }

      .pie_progress__label h4 {
        @include textStyle(16px, 600, 26px);
      }
    }
  }
  @media screen and (max-width: 480px) {
    .skills-status {
      gap: 20px;

      .skills-item {
        text-align: center;
        p {
          margin-top: 15px;
        }
      }
      .pie_progress {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
  @media screen and (min-width: 768px) {
  }
`;

export default OurSkilStyle;
