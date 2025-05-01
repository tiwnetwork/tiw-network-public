import styled from "styled-components";

const SayHelloStyle = styled.section`
  padding: 130px 0 65px 0;

  position: relative;

  h2{
    color: #fff;
    margin-bottom: 20px;
  }
  .title-group{
    max-width: 400px;
  }
  .sub-title{
    color: #EFBA30;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2.8px;
  }
  .contact-img {
    margin-right: 50px;
    position: relative;
    > img {
      width: 100%;
    }
    .overlay-item {
      position: absolute;

      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.shape-1 {
        bottom: 130px;
        right: 0;
        .icon {
          img {
            width: 42px;
            height: 36px;
          }
        }
      }
      &.shape-2 {
        bottom: 0;
        left: 186px;
        .icon {
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .contact-content {
    &-title {
      margin-bottom: 35px;
    }
    h3 {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    label {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      text-transform: uppercase;
      color: #fff;
    }
    input,
    textarea {
      border: 1px solid #3A3A3A;
      border-radius: 10px;
      padding: 10px 15px;
      font-weight: 500;
      font-size: 15px;
      line-height: 28px;
      color: #fff;
      transition: 0.3s;
      background: transparent;
    }
    textarea {
      resize: none;
    }
  }

  .form-input-between {
    display: flex;
    align-items: center;
    gap: 30px;
    .form-input {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 80px 0 30px 0;
    .contact-img {
      margin-right: 0px;
    }
    .contact-content {
      &-title {
        margin-bottom: 20px;
      }

      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .form-input-between {
      gap: 0px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 480px) {
    .contact-img {
      .overlay-item {
        &.shape-1 {
          bottom: 60px;
          right: 0;

          img {
            width: 100px;
          }

          .icon {
            img {
              width: 30px;
              height: auto;
            }
          }
        }

        &.shape-2 {
          bottom: 0;
          left: 80px;

          img {
            width: 60px;
          }

          .icon {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 374px) {
    .contact-content h2 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`;

export default SayHelloStyle;
