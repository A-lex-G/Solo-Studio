import {
    StyledSection,
    ProductsList,
    Item,
    InnerItemWrapper,
    ServiceTitle,
    StyledTitle,
    StyledSpan,
    TitleWrapper,
    StyledLink,
    StyledImg
} from "./Products.styled";
import { Container } from "../StylesCommon/StylesCommon.styled";
import { Line } from "../Icons/Line";
import Image from "../../images/Studio.jpg";

const Products = () => {
    return (
        <StyledSection>
            <Container>
                    <TitleWrapper>
                        <StyledTitle>
                            Our{' '}
                            <StyledSpan>
                                Products
                            </StyledSpan>
                        </StyledTitle>
                        <Line />
                    </TitleWrapper>
                <ProductsList>
                    <Item>
                        <InnerItemWrapper>
                            <ServiceTitle>
                                Permanent Makeup
                            </ServiceTitle>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto, cum aut a aperiam, earum id blanditiis voluptatibus voluptas dolor dolore? Culpa, beatae veniam. Ipsum voluptatum rerum autem. Reiciendis voluptatum dolorem necessitatibus temporibus quidem rem explicabo esse doloribus nostrum alias repellat dolorum sit omnis veritatis nemo, cupiditate illum modi! Beatae?
                            </p>
                            <StyledLink
                                to={'/permanent'}>
                                See more
                            </StyledLink>
                        </InnerItemWrapper>
                        <StyledImg
                            src={`${Image}`} />
                    </Item>
                    <Item>
                        <InnerItemWrapper>
                            <ServiceTitle>
                                Trainings & Courses
                            </ServiceTitle>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi delectus reiciendis sit maxime libero consequatur! Est velit, repellendus quam voluptatem repellat illo libero aliquam maiores consectetur vitae eius, atque quae excepturi consequuntur iure in asperiores error? Laudantium, nisi porro? Tempore harum veritatis dignissimos fuga iusto odit eum quasi quam.
                            </p>
                            <StyledLink
                                to={'/trainings'}>
                                See more
                            </StyledLink>
                        </InnerItemWrapper>
                        <StyledImg
                            src={`${Image}`} />
                    </Item>
                    <Item>
                        <InnerItemWrapper>
                            <ServiceTitle>
                                Equipment&Accessories
                            </ServiceTitle>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium modi blanditiis itaque maxime molestias incidunt vero nisi exercitationem nesciunt aperiam neque, officiis eligendi perferendis, laboriosam tenetur tempore est inventore quibusdam dolore non animi nam quisquam delectus placeat. Laboriosam cum ad, consequatur est maxime soluta molestias veniam autem eum rem id!
                            </p>
                            <StyledLink
                                to={'/store'}>
                                See more
                            </StyledLink>
                        </InnerItemWrapper>
                        <StyledImg
                            src={`${Image}`} />
                    </Item>
                </ProductsList>
            </Container>
        </StyledSection>
    )
};

export default Products;