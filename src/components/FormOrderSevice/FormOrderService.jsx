import { Formik } from "formik";
import {
    StyledFIELD,
    StyledFORM,
    StyledFormERROR,
    StyledLABEL
} from "./FormOrderService.styled";
import {
    object, string
} from 'yup';

export const OrderForm = ({ price }) => {
    const options = Object.keys(price);
    console.log(options);

    const schema = object({
        name: string().required(),
        phone: string().min(10).max(13).required(),
        email: string().email().required(),
        service: string().oneOf(options),
    });

    const initials = {
        name: "",
        phone: "",
        email: "",
        service: "",
    };

    const onSubmitForm = (values, actions) => {
        console.log(values);
        // console.log(actions);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initials}
            validationSchema={schema}
            onSubmit={onSubmitForm}>
            <StyledFORM
                autoComplete="off"
            >
                <StyledLABEL
                    htmlFor="name">
                    Name
                    <StyledFIELD
                        name="name"
                        placeholder="Please enter your name..."
                        type="text" />
                </StyledLABEL>
                <StyledFormERROR
                    name="name"
                    component="div" />
                <StyledLABEL
                    htmlFor="phone">
                    Phone
                    <StyledFIELD
                        name="phone"
                        placeholder="Please enter your phone..."
                        type="text" />
                </StyledLABEL>
                <StyledFormERROR
                    name="phone"
                    component="div" />
                <StyledLABEL
                    htmlFor="email">
                    E-mail
                    <StyledFIELD
                        name="email"
                        placeholder="Please enter your e-mail..."
                        type="text" />
                </StyledLABEL>
                <StyledFormERROR
                    name="email"
                    component="div" />
                <StyledLABEL
                    htmlFor="service">
                    Service
                    <StyledFIELD
                        name="service"
                        component="select"
                        placeholder="Please select your service">
                        <option
                            value="">
                            Please select service
                        </option>
                        {options.map((option, idx) => (
                            <option
                                name="service"
                                value={option}
                                key={idx}>
                                {option}
                            </option>
                        ))}
                    </StyledFIELD>
                </StyledLABEL>
                <StyledFormERROR
                    name="service"
                    component="div" />
                <button
                    type="submit">
                    Order Service
                </button>
            </StyledFORM>
        </Formik>
    )
};