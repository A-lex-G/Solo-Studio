import { useState } from "react";
import {
    StyledLI,
    StyledInnerDIV,
    // StyledOuterDIV,
    StyledButtonDIV,
    StyledTITLE,
    StyledButton,
    StyledIMG,
    StyledDESCRIPTION
} from "./PermanantServiceItem.styled";
import { Modal } from "../Modal/Modal";
import { Price } from "../PriceList/PriceList";
import { OrderForm } from "../FormOrderSevice/FormOrderService";

export const PermamnentServiceItem = ({ title, description, thumbnail, ...otherProps }) => {
    const [showModal, setModal] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    // console.log(otherProps);
    
    const toogleModal = (value) => {
        // console.log("showPrice =>",value);
        setModal(!showModal);
        setShowPrice(value);
    };

    return (
        <StyledLI>
            <StyledIMG
                src={thumbnail}
                alt={title} />
            <StyledInnerDIV>
                <StyledTITLE>
                    {title}
                </StyledTITLE>
                <StyledDESCRIPTION>
                    {description}
                </StyledDESCRIPTION>
                <StyledButtonDIV>
                    <StyledButton
                        type="button"
                        onClick={() => toogleModal(true)}>
                        Price List
                    </StyledButton>
                    <StyledButton
                        type="button"
                        onClick={() => toogleModal(false)}>
                        Order service
                    </StyledButton>
                </StyledButtonDIV>
            </StyledInnerDIV>
             
            {showModal &&
                <Modal
                    onToogleModal={()=>setModal(!showModal)}>
                    {showPrice ?
                        (<Price
                            {...otherProps} />)
                        :
                        (<OrderForm
                            {...otherProps} />)}
                </Modal>}
        </StyledLI>
    );
}

// return (
    //     <StyledLI>
    //         <StyledInnerDIV>
    //             <StyledTITLE>
    //                 {title}
    //             </StyledTITLE>
    //             <StyledIMG
    //                 src={thumbnail}
    //                 alt={title} />
    //             <StyledDESCRIPTION>
    //                 {description}
    //             </StyledDESCRIPTION>
    //         </StyledInnerDIV>
    //         <StyledButtonsDIV>
    //             <StyledButton
    //                 type="button"
    //                 onClick={() => toogleModal(true)}>
    //                 Price List
    //             </StyledButton>
    //             <StyledButton
    //                 type="button"
    //                 onClick={() => toogleModal(false)}>
    //                 Order service
    //             </StyledButton>
    //         </StyledButtonsDIV>
    //         {showModal &&
    //             <Modal
    //                 onToogleModal={()=>setModal(!showModal)}>
    //                 {showPrice ?
    //                     (<Price
    //                         {...otherProps} />)
    //                     :
    //                     (<OrderForm
    //                         {...otherProps} />)}
    //             </Modal>}
    //     </StyledLI>
    // );