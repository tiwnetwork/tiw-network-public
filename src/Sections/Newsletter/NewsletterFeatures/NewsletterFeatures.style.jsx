import styled from "styled-components";

const NewsletterFeaturesStyle = styled.section`
  padding-bottom: 110px;
  padding-top: 110px;
  .newsleter-features-card {
    background: rgba(255,255,255, 0.05);
    border-radius: 20px;
    margin-bottom: 30px;
    display: flex;
    min-height: 281px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px;
    align-items: center;
    transition: 0.3s;
    &:hover{
      background: rgba(255,255,255, 0.1);
      border: 1px solid rgb(230, 171, 35);
      .newsleter-features-card-img {
        img {
          transform: scale(1.1);
        }
      }
    }
    .newsleter-features-card-img {
      position: relative;
      overflow: hidden;
      width: 195px;
      height: 211px;
      flex-shrink: 0;
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1);
        transition: 0.3s;
        
      }
    }
  }
  .title{
    color: #fff;

  }
  h2.form-title{
    font-size: 40px;    
    color: #fff;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .sub-title{
    color: #E6AD23;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
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
  .newsleter-features-card-text {
    padding: 0px 30px 0px 30px;
    flex: 1; 
    h5 {
      margin-bottom: 19px;
      max-width: 290px;
      color: #fff;
      font-size: 24px;
      font-weight: 800;
    }
    p {
      margin-bottom: 16px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
    }
    a {
      font-weight: 700;
      color: #fff;
      transition: 0.3s;
      img {
        margin-left: 10px;
        transition: 0.3s;
        filter: invert(100%);
      }
      &:hover {
        color: #E6AD23 ;
        img {
          filter: invert(66%) sepia(98%) saturate(367%) hue-rotate(355deg) brightness(90%) contrast(101%);
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .newsleter-features-card-text {
      padding: 20px;
    }
    .newsleter-features-card{
      flex-direction: column;
      align-items: center;
      text-align: center;
      .newsleter-features-card-img {
        width: 135px;
        height: 135px;
      }
    }
  }
`;

export default NewsletterFeaturesStyle;
