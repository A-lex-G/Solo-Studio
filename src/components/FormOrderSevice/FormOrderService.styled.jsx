import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";
import { ContentColorSecondary, SignColor } from "../../utils/Colors";

export const StyledFORM = styled(Form)`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 10px;
    align-items: center;
`;

export const StyledLABEL = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 100%;
    color: ${ContentColorSecondary};
    font-weight: 600;
`;

export const StyledFIELD = styled(Field)`
    border: 2px solid ${ContentColorSecondary};
    border-radius: 2px;
    font-size: 20px;
`;

export const StyledFormERROR = styled(ErrorMessage)`
    color: ${SignColor};
    font-weight: 600;
`;