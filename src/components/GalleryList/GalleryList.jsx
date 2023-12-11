import { StyledIMG, StyledUL } from "./GalleryList.styled";

export const GalleryList = ({ galleryList, onImgClick }) => {
    
    return (
        <StyledUL>
            {galleryList.map(({ id, description, thumbnail }, index) => (
                <li
                    key={id}>
                    <StyledIMG
                        src={thumbnail}
                        alt={description}
                        onClick={() => onImgClick(index)} />
                </li>
            ))}
        </StyledUL>
    );
};