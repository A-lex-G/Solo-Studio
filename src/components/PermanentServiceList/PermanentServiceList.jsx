import {
    StyledSECTION,
    StyledUL,
} from "./PermanentServiceList.styled";
import { Container } from "../StylesCommon/StylesCommon.styled";
import { PermamnentServiceItem } from "../PermanentServiceItem/PermanentServiceItem";

export const ServiceList = ({ serviceslist }) => {

    return (
        <StyledSECTION>
            <Container>
                <StyledUL>
                    {serviceslist.map(({ description, id, thumbnail, title, ...otherProps }) => (
                        <PermamnentServiceItem
                            description={description}
                            key={id}
                            thumbnail={thumbnail}
                            title={title}
                            {...otherProps} />
                    ))}
                </StyledUL>
            </Container>
        </StyledSECTION>
    )
}