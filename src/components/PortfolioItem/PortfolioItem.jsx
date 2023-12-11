import { StyledIMG, StyledLI } from "./PortfolioItem.styled";

export const Item = ({ image, index, onImgClick }) => {
    // console.log(onImgClick);
    return (
        <StyledLI>
            <StyledIMG
                src={image}
                alt=""
                onClick={() => onImgClick(index)} />
        </StyledLI>
    );
}