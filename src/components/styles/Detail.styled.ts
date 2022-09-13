import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: min(95%, 1700px);
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  @media (max-width: 1023px) {
    display: block;
    width: 100%;
  }
`;

export const SideBar = styled.header`
  min-width: 270px;
  margin-right: 25px;
  margin-top: 20px;
  border-right: 1px solid #808080;

  @media (max-width: 1023px) {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #808080;
    border-right: 0;
    width: 100%;
  }
`;

interface HairInfoProps {
  isVisible: boolean;
}

export const HairInfo = styled.div<HairInfoProps>`
  color: #fff;
  font-weight: bold;
  position: fixed;
  transition: 0.3s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  @media (max-width: 1023px) {
    align-items: start;
    text-align: start;
    padding-bottom: 25px;
    position: relative;
    width: 90%;
  }
`;

export const HairTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 2rem;
`;

export const HairDescription = styled.p`
  line-height: 20px;
  width: min(22vw, 250px);
  font-weight: bolder;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;

  @media (max-width: 1023px) {
    width: 70%;
  }
`;

export const ImageContainer = styled.section`
  width: min(90%, 1400px);
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Line = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #ffffff;
  font-size: 2rem;
  margin: 50px 0 40px;

  &::before {
    content: '';
    flex-grow: 1;
    margin-right: 15px;
    background: #808080;
    height: 2px;
  }

  &::after {
    content: '';
    flex-grow: 1;
    margin-left: 15px;
    background: #808080;
    height: 2px;
  }
`;

export const Images = styled.ul`
  width: 100%;
`;

export const Image = styled.li`
  width: 100%;
  margin-bottom: 25px;

  & > span {
    border-radius: 5px;
  }

  & img {
    object-fit: cover;
    width: 100%;
  }
`;
