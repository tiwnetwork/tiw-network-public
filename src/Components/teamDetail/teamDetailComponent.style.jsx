// teamDetailComponent.style.jsx
import styled from "styled-components";


export const Container = styled.div`
  
  display: flex;
  color: rgba(255,255,255,.8);
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px 0 0 0;
    background: radial-gradient(circle at center top, #1a1a1a 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`;
export const Row = styled.div`
  align-items: flex-start;
  display: flex;
  text-align: left;
  margin-bottom: 9px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: #000;
  color: #fff;
  border-radius: 30px;
  overflow: hidden;
  max-width: 1210px;
  width: 100%;
  padding: 64px;
  border: 1px solid #262626;
  position: relative;
  margin-top: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    border: transparent;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  background: transparent;
  padding: 30px;
  text-align: center;
  border: 1px solid #262626;
  border-radius: 16px;
  position: relative;
  z-index: 2;
`;

export const Image = styled.img`
  width: auto;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  width: 110px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #ccc;
  width: 210px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
  width: auto;
  img {
    width: 22px;
    height: 22px;
    filter: brightness(0) invert(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;


export const RightSide = styled.div`
  flex: 2;
  padding: 30px 60px;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const Title = styled.h2`
  font-size: 53px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  span {
    background: linear-gradient(90deg, #F8C73D 0%, #E6AD23 51.56%, #ce7902 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Paragraph = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 20px;
`;
