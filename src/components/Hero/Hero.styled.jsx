import styled from "styled-components";
import BackGroundImage from '../../images/main.jpg';
import { ContentColor } from "../../utils/Colors";

export const HeroSection = styled.section`
    width: 100%;
    // height: 200px;
    // margin-top: 50px;
    padding: 100px 0;
    background-image:
      linear-gradient(to right,
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)),
      url(${BackGroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 38%;
    background-color: #000;
    text-align: center;
    border-radius: 5px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${ContentColor};
  font-size: 64px;
`;