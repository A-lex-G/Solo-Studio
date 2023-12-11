import { Item } from "../PortfolioItem/PortfolioItem";

export const PortfolioList = ({galleryList, onImgClick}) => {
    return (
        <ul>
            {galleryList.map((item, index) => (
                <Item
                    key={index}
                    image={item}
                    index={index}
                    onImgClick={onImgClick} />
            ))}
        </ul>
    );
}