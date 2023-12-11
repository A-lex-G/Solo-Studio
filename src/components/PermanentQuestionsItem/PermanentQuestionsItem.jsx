import { useState } from "react";
import { StyledANSWER, StyledLI, StyledQUESTION } from "./PermanentQuestionsItem.styled";

export const Question = ({ values }) => {
    // console.log(values);
    // const [showAnswer, setShowAnswer] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toogleAnswer = (index) => {
        // console.log(index)
        console.log("selectedQuestion=>", selectedQuestion);
        
        //     setShowAnswer(!showAnswer);
        //     setSelectedQuestion(index);
        setSelectedQuestion((prevSelected) => (prevSelected !== index ? index : null));
    };

    return (
        <>
            {values.map(({ question, answer }, index) => (
                <StyledLI
                    key={index}>
                    <StyledQUESTION
                        onClick={() => toogleAnswer(index)}>
                        {question}
                    </StyledQUESTION>
                    {selectedQuestion === index &&
                        <StyledANSWER>
                            {answer}
                        </StyledANSWER>
                    }
                </StyledLI>
            ))}
        </>
    )
};