import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";
import { ContentColorSecondary, SignColor } from "../../utils/Colors";

export const StyledFORM = styled(Form)`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border: 2px solid ${ContentColorSecondary};
    border-radius: 5px;
    padding: 20px 20px;
    // background-color: #D2D1D1;
`;

export const StyledLABEL = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    color: ${ContentColorSecondary};
    font-weight: 600;
`;

export const StyledFIELD = styled(Field)`
    border: 2px solid ${ContentColorSecondary};
    border-radius: 5px;
    font-size: 20px;
`;

export const StyledFormTITLE = styled.b`
    text-transform: uppercase;
    color: ${SignColor};
    font-size: 30px;
`;

export const StyledFormERROR = styled(ErrorMessage)`
    color: ${SignColor};
    font-weight: 600;
`;