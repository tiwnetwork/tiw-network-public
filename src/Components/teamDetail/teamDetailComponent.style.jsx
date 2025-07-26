// teamDetailComponent.style.jsx

import styled, { keyframes } from "styled-components";


const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  background: #2a2a2a;
  height: 600px;
  color: rgba(255, 255, 255, 0.8);
`;

export const SkeletonLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  max-width: 300px;
`;

export const SkeletonAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(90deg, #333, #444, #333);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

export const SkeletonText = styled.div`
  width: ${(props) => props.width || "70%"};
  height: 16px;
  border-radius: 4px;
  background: linear-gradient(90deg, #333, #444, #333);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

export const SkeletonRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 12px;
`;

export const SkeletonTitle = styled(SkeletonText)`
  width: 60%;
  height: 24px;
`;

export const SkeletonParagraph = styled(SkeletonText)`
  width: 100%;
  height: 14px;
`;

export const Container = styled.div`
  
  display: flex;
  color: rgba(255,255,255,.8);
  justify-content: center;
  max-width: 1210px;
  margin: 200px auto 0 auto;
  align-items: center;
  height: auto;
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
  padding: 30px;
  border: 1px solid #262626;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    border: transparent;
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  background: transparent;
  padding: 20px;
  text-align: center;
  border: 1px solid #262626;
  border-radius: 16px;
  position: relative;
  z-index: 2;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 16px;
  width: auto;
  
  margin-right: 30px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  width: auto;
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
