import { StyledLI } from "./PriceList.styled";
export const Price = ({ price }) => {
    const keys = Object.keys(price);
    return (
        <ul>
            {keys.map((key) => (
                <StyledLI
                    key={key}>
                    <p>
                        {key}
                        :
                        {' '}
                        <span>
                            {price[key]}
                            {' '}
                            $
                        </span>
                    </p>
                </StyledLI>
            ))}
        </ul>
    );
}