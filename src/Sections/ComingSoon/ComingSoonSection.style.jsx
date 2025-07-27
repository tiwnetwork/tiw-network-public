import styled from "styled-components";
import BgImg from "../../assets/images/tiwmedia/homepage-bi-weekly.png";

const ComingSoonSectionStyle = styled.section`
    background: url(${BgImg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 11;
    background-attachment: fixed;
    overflow: hidden;
    .countdown {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1.5rem;
        color: white;
    }

    .countdown div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .countdown span {
        font-size: 2rem;
        font-weight: bold;
    }

    .countdown p {
        margin: 0;
        font-size: 0.9rem;
        color: #bbbbbb;
    }

    .logo {
        width: 120px;
        margin-bottom: 1.5rem;
    }
    .overlay {
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .corporate-banner-text {
    max-width: 613px;
    width: 100%;
    margin: auto;
    padding: 0px 20px;
    text-align: center;
    h4 {
        margin-bottom: 19px;
    }
    h1 {
        font-size: 70px;
        line-height: 125%;
        margin-bottom: 32px;
    }
    p {
        font-size: 18px;
        line-height: 36px;
        margin-bottom: 48px;
    }
    }

    @media screen and (min-width: 991px) and (max-width: 1200px) {
    .overlay {
        padding: 140px 0px;
    }
    }
    @media screen and (max-width: 991px) {
    .overlay {
        padding: 120px 0px;
    }
    .corporate-banner-text {
        h1{
        font-size: 55px;
        }
    }
    }
    @media screen and (max-width: 767px) {
    .overlay {
        padding: 120px 0px 80px 0px;
    }
    .corporate-banner-text h1 {
        font-size: 40px;
    }
    }
    @media screen and (max-width: 575px) {
    .corporate-banner-text {
        h2 {
        font-size: 32px;
        }
    }
    }
`;

export default ComingSoonSectionStyle;
