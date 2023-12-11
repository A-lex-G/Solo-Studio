import styled from "styled-components";
import { ContentColor, ContentColorSecondary } from "../../utils/Colors";

export const StyledLI = styled.li`
    box-sizing: border-box;
    padding: 10px;
    border: 2px solid ${ContentColorSecondary};
    border-radius: 5px;
    color: ${ContentColor};
    flex-basis: calc((100% - 20px) / 3);
`;