import { useState } from "react";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import { Container, StyledSECTION } from "../StylesCommon/StylesCommon.styled"
import {
    OuterWRAPPER, StyledInnerWRAPPER, StyledScrollWRAPPER, StyledTITLE
} from "./Portfolio.styled";
import { Modal } from "../Modal/Modal";
import { permanentItems } from "../ItemsPermanent/ItemsPermanent";
import ReactImageGallery from "react-image-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Portfolio = () => {
    // console.log(servicesList);
    const [showModal, setShowModal] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);

    const handleImgClick = (index) => {
        console.log(index);
        console.log(event.target.value);
        setShowModal(true);
        setSelectedImgIndex(index);
    }
    return (
        <StyledSECTION>
            <Container>
                {/* ADD TITLE */}
                <OuterWRAPPER>
                    {permanentItems.map(({ id, title, gallery }) => (
                        <StyledInnerWRAPPER
                            key={id}>
                            <StyledTITLE>
                                {title}
                            </StyledTITLE>
                            <StyledScrollWRAPPER>
                                <PortfolioList
                                    galleryList={gallery}
                                    onImgClick={handleImgClick} />
                            </StyledScrollWRAPPER>
                        </StyledInnerWRAPPER>
                    ))}
                </OuterWRAPPER>
                {showModal &&
                    <Modal
                        onToogleModal={()=>setShowModal(!showModal)}>
                        <ReactImageGallery
                            items={permanentItems.map(({ gallery, title }) =>
                            ({
                                original: gallery,
                                thumbnail: gallery,
                                description: title,
                            })
                            )}
                            showPlayButton={false}
                            showBullets={true}
                            showIndex={true}
                            onSlide={index => setSelectedImgIndex(index)}
                            // onScreenChange={() => onSetModal(true)}
                            startIndex={selectedImgIndex} />
                        {/* <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            initialSlide={selectedImgIndex}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {console.log('permanentItems=>',permanentItems)}
                            {console.log('permanentItemsGallery=>', permanentItems.map((item) => item.gallery))}
                            {console.log(Object.values(permanentItems.map((item) => item.gallery)))}
                            {permanentItems.gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image[selectedImgIndex]} alt={`Image ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </Modal>}
            </Container>
        </StyledSECTION>
    );
};