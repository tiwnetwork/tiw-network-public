import styled from "styled-components";

const TeamStyleWrapper = styled.section`
  padding: 0px 0 110px 0;
  .container{
    max-width: 1140px!important;
  }
  .title{
    color: #fff;

  }
  .sub-title{
    color: #E6AD23;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
  }
  .description{
    color: rgba(255, 255, 255, 0.8);
    }
  .team-card {
    padding: 25px 25px 36px 25px;
    margin-bottom: 35px;
    background: transparent;
    transition: 0.3s;
    border: 1px solid transparent;
    border-image: linear-gradient(
        to top,
        transparent 0%,
        transparent 25%,
        transparent 50%,
        transparent 75%,
        transparent 100%
      ) 1;
    &:hover {
      border: 1px solid transparent;
      border-image: linear-gradient(
        to top,
        transparent 0%,
        #B46C28 25%,
        #E6AD23 50%,
        #B46C28 75%,
        transparent 100%
      ) 1;
    }

    &-img {
      margin-bottom: 25px;
      img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
    
    &-info {
      margin-bottom: 20px;
      text-align: center;
      h5 {
        font-weight: 700;
        color: #fff;
      }
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  .team-social-link {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    li a {
      opacity: 0.5;
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding: 30px 0;
  }
`;

export default TeamStyleWrapper;
