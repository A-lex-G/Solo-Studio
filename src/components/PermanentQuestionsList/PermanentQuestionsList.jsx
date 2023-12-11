import { Line } from "../Icons/Line";
import { Question } from "../PermanentQuestionsItem/PermanentQuestionsItem";
import {
    Container,
    StyledSECTION,
    StyledSPAN
} from "../StylesCommon/StylesCommon.styled";
import {
    StyledQuestionLIST,
    StyledTITLE,
    TitleWRAPPER
} from "./PermanentQuestionsList.styled";

export const Questions = ({ servicesList }) => {
    // console.log(servicesList.flatMap(item => item.qa))
    // console.log(servicesList);
    return (
        <StyledSECTION>
            <Container>
                <TitleWRAPPER>
                    <StyledTITLE>
                        Frequently asked
                        {" "}
                        <StyledSPAN>
                            questions
                        </StyledSPAN>
                    </StyledTITLE>
                    <Line/>
                </TitleWRAPPER>
                {/* <div> */}
                    <StyledQuestionLIST>
                    <Question
                        values={servicesList.flatMap((item) => (item.qa))} />
                    </StyledQuestionLIST>
                {/* </div> */}
            </Container>
        </StyledSECTION>
    );
 };