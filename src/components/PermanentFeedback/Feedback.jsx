import { FeedbackForm } from "../FormFeedback/FormFeedback"
import {
    Container,
    StyledSECTION
} from "../StylesCommon/StylesCommon.styled"
import {
    InnerWRAPPER,
    OuterWRAPPER,
    StyledTITLE
} from "./Feedback.styled"

export const Feedback = () => {
    return (
        <StyledSECTION>
            <Container>
                <OuterWRAPPER>
                    <InnerWRAPPER>
                        <StyledTITLE>
                            Still have a question?...
                        </StyledTITLE>
                        <p>
                            Set your credentials and we will contact you at your early convenience
                        </p>
                    </InnerWRAPPER>
                    <FeedbackForm/>
                </OuterWRAPPER>
            </Container>
        </StyledSECTION>
    )
}