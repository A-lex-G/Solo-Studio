import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { StyledFIELD, StyledFORM, StyledFormERROR, StyledFormTITLE, StyledLABEL } from "./FormFeedback.styled";

export function FeedbackForm() {

    const schema = object({
        name: string().required(),
        phone: string().min(10).max(13).required(),
    })

    const initials = {
        name: "",
        phone: "",
    };

    const onFeedbackRequest = (values, actions) => {
        console.log(values);
        console.log(actions);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initials}
            validationSchema={schema}
            onSubmit={onFeedbackRequest}>
            <StyledFORM
                autoComplete="off">
                <StyledFormTITLE>
                    Ask question
                </StyledFormTITLE>
                <StyledLABEL htmlFor="name">
                    Name
                    <StyledFIELD
                        name="name"
                        placeholder="Please enter your name..."
                        type="text"/>
                </StyledLABEL>
                <StyledFormERROR
                    name="name"
                    component="div" />
                <StyledLABEL htmlFor="phone">
                    Phone
                    <StyledFIELD
                        name="phone"
                        placeholder="Please enter your phone..."
                        type="text"/>
                </StyledLABEL>
                <StyledFormERROR
                    name="phone"
                    component="div" />
                <button
                    type="submit">
                    Ask question
                </button>
            </StyledFORM>
        </Formik>
    )
}