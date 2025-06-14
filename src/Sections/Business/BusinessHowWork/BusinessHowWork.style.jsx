import styled from "styled-components";
import eventsBG from '../../../assets/images/tiwmedia/events/events-bg.png';

const BusinessHowWorkStyle = styled.section`
  padding: 110px 0 110px 0;
  background: url('${eventsBG}') center bottom;
  .skeleton {
    background:rgba(41, 41, 41, 0.11);
    border-radius: 8px;
    min-height: 250px;
    overflow: hidden;
    position: relative;
  }

  .skeleton-box {
    background: rgba(255, 255, 255, 0);
  }

  .skeleton-line {
    height: 16px;
    background: rgba(255,255,255,.0);
    margin: 12px;
    border-radius: 4px;
  }

  .skeleton::after {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%,rgba(248, 248, 248, 0.14) 50%, transparent 100%);
    animation: loading 1.2s infinite;
  }

  @keyframes loading {
    0% {
      left: -150px;
    }
    100% {
      left: 100%;
    }
  }
  

  .how-works-card-modern {
    
    color: #fff;
    padding: 25px 25px 36px 25px;
    border-radius: 30px;
    font-family: sans-serif;
    border: 1px solid transparent;
    border-image: linear-gradient(to top, transparent 0%,rgba(180, 108, 40, 0) 25%,rgba(230, 171, 35, 0) 50%,rgba(180, 108, 40, 0) 75%, transparent 100%) 1;
    transition: .3s ease;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 15px;
      height: 29px;
      transition: 0.3s;
      span {
        font-size: 15px;
        font-weight: 700;
        line-height: 30px;
        color: #fff;
        display: none;
        transition: 0.3s;
      }
      img {
        transition: 0.3s;
        filter: invert(100%);
        
      }
    }

    &:hover {
      border: 1px solid transparent;
      border-image: linear-gradient(to top, transparent 0%, #B46C28 25%, #E6AD23 50%, #B46C28 75%, transparent 100%) 1;
      .image-container{
        img {
          transform: scale(1.1);
        }
      }
    
      a {
        span {
          display: block;
          
        }
        img {
          transform: rotate(-45deg);
        }
        &:hover{
          span {
            color: #EFBA30;
          }
          img {
            filter: invert(85%) sepia(57%) saturate(1035%) hue-rotate(328deg) brightness(94%) contrast(99%);
          }
        }
      }
    }
  }

  h2.form-title{
    font-size: 40px;    
    color: #fff;
    font-weight: 700;
    margin-bottom: 40px;
  }

  input.form-control{
    padding: 10px;
    outline: none;
    width: 100%;
    border: 1px solid #262628;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
    color:rgba(255, 255, 255, 1);
    background: transparent;
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  input.form-control:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: none;
  }
  .no-results{
    font-size: 16px;
    color:rgba(255, 255, 255, 0.8);

  }


  .image-container{
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 1 / 1;
    margin-bottom: 35px;
  }
  .how-works-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
    
  }

  .how-works-meta {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: #ccc;
    margin-bottom: 12px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .meta-icon {
    font-size: 14px;
  }

  .how-works-title {
    font-size: 18px;
    font-weight: 800;
    margin: 14px 0;
    color: #fff;
  }

  .how-works-description {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
  }
  p, span, a{
    font-family: 'DM Sans', sans-serif;
  }
  .how-works-link {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .arrow {
    font-size: 20px;
  }

  .how-works-card {
    margin-bottom: 30px;
    padding: 40px 30px 32px 30px;
    border-radius: 30px;
    transition: 0.3s;



    &.card-1 {
      background-color: ${({ theme }) => theme.colors.blueGray};
    }
    &.card-2 {
      background-color: #f8f0e6;
    }
    &.card-3 {
      background-color: #f6eafe;
    }

    &-icon {
      margin-bottom: 40px;
    }

    &-content {
      h4 {
        margin-bottom: 16px;
        font-size: 18px;
        line-height: 26px;
      }
      p {
        margin-bottom: 25px;
      }
      a {
        transition: 0.3s;
        img {
          width: 15px;
          height: 12px;
          transition: 0.3s;
        }
        &:hover {
          img {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0px 50px 0px;
    .how-works-card-modern {
      padding: 20px 25px;
      border-radius: 20px
    }
    h2.form-title {
      font-size: 37px;
    }
    .how-works-title {
      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 30px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }
`;

export default BusinessHowWorkStyle;
