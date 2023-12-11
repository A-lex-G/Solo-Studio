import styled from "styled-components";
import { ContentColorSecondary } from "../../utils/Colors";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    min-height: 300px;
    max-width: 600px;
    background-color: #fff;
    border: 1px solid ${ContentColorSecondary};
    border-radius: 5px;
`;