import styled from "styled-components";
import { ContentColor } from "../../utils/Colors";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    border: 2px solid ${ContentColor};
    border-left:none;
    border-right:none;
    color: ${ContentColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`