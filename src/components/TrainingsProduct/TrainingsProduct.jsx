import { useState } from "react";
import { StyledLI } from "./TrainingsProduct.styled";
import { Modal } from "../Modal/Modal";
import { TrainingsDetails } from "../TrainingsDetails/TrainingsDetails";
import { FormOrderTraining } from "../FormOrderTraining/FormOrderTraining";

export const TrainingsProduct = ({product:{ title, description, price, duration, format, ...otherProps }}) => {
    const [showModal, setShowModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const toogleModal = (value) => { 
        setShowModal(!showModal);
        setShowDetails(value);
    };

    return (
        <>
            <StyledLI>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <p>
                        Duration: {duration}
                    </p>
                    <p>
                        Format: {format}
                    </p>
                    <p>
                        Price: {price}$
                    </p>
                    <button
                        type="button"
                        onClick={() => toogleModal(true)}>
                        Details
                    </button>
                    <button
                        type="button"
                        onClick={() => toogleModal(false)}>
                        Order training
                        </button>
                </div>
            </StyledLI>
            {showModal &&
                <Modal
                    onToogleModal={() => setShowModal(!showModal)}>
                    {showDetails ?
                        (<TrainingsDetails
                            {...otherProps} />)
                        :
                        (<FormOrderTraining />)}
                </Modal>
            }
        </>
        
        
    );
};