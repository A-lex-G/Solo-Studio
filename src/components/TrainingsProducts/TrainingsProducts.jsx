import { Container, StyledSECTION } from "../StylesCommon/StylesCommon.styled";
import { TrainingsProduct } from "../TrainingsProduct/TrainingsProduct";
import { StyledUL } from "./TrainingsProducts.styled";

export const TrainingsProducts = ({ products }) => {
    // console.log(products);
    return (
        <StyledSECTION>
            <Container>
                <StyledUL>
                    {products.map((product) => (
                        <TrainingsProduct
                            key={product.id}
                            product={product} />
                    ))}
                </StyledUL>
            </Container>
        </StyledSECTION>
    );
};