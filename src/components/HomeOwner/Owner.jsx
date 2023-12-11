import { Line } from "../Icons/Line";
import {
    Container, StyledSECTION, StyledSPAN
} from "../StylesCommon/StylesCommon.styled";
import {
    StyledIMG, StyledInnerDIV, StyledNAME, StyledTEXT, StyledTITLE, TitleWRAPPER
} from "./Owner.styled";
import OwnerIMG from "../../images/Sweetlana.jpeg"


export const Owner = () => {
    return (
        <StyledSECTION>
            <Container>
                <TitleWRAPPER>
                    <StyledTITLE>
                        Owner...
                    </StyledTITLE>
                    <Line />
                </TitleWRAPPER>
                <StyledNAME>
                    Svitlana
                    {" "}
                    <StyledSPAN>
                        SOLO
                    </StyledSPAN>
                    GUB
                </StyledNAME>
                <StyledInnerDIV>
                    <StyledIMG
                        src={`${OwnerIMG}`}
                        alt="Owner" />
                    <StyledTEXT>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda blanditiis iure sequi exercitationem quisquam suscipit hic modi perspiciatis alias illo iste officiis eaque omnis sed neque veritatis laborum esse, dolores tempore rerum pariatur consectetur veniam numquam nesciunt? Sunt inventore mollitia, quis doloremque maiores repellendus eum, laboriosam, officiis vero natus id!
                    </StyledTEXT>
                </StyledInnerDIV>
            </Container>
        </StyledSECTION>
    )
}