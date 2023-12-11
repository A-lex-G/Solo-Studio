import {
    StyledSECTION,
    TitleWRAPPER,
    StyledTITLE,
    StyledSPAN,
} from "./Gallery.styled";
import { Container } from "../StylesCommon/StylesCommon.styled";
import { Line } from "../Icons/Line";
import { GalleryList } from "../GalleryList/GalleryList";
import { useState } from "react";
import { galleryItems } from "../ItemsGallery/ItemsGallery";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Modal } from "../Modal/Modal";
import { Portfolio } from "../Portfolio/Portfolio";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

export const Gallery = () => {
    
    const [showModal, setModal] = useState(false);
    const [selectedImgIndex, setImgIndex] = useState(0);

    const handleImgClick = (index) => {
        setModal(true);
        setImgIndex(index);
    };

    // const toggleModal = (e) => {
    //     if (e && e.target) {
    //         setModal(() => !showModal);
    //         setImgIndex(e.target.curentSrc)
    //     };
    // };

    return (
        <StyledSECTION>
            <Container>
                <TitleWRAPPER>
                    <StyledTITLE>
                        Ga
                        <StyledSPAN>
                            ll
                        </StyledSPAN>
                        ery
                    </StyledTITLE>
                    <Line />
                </TitleWRAPPER>
                <GalleryList
                    galleryList={galleryItems}
                    onImgClick={handleImgClick} />
                {showModal &&
                    <Modal
                        onToogleModal={() => setModal(!showModal)}>
                        <ReactImageGallery
                            items={galleryItems}
                            showPlayButton={false}
                            showBullets={true}
                            showIndex={true}
                            onSlide={index => setImgIndex(index)}
                            // onScreenChange={() => onSetModal(true)}
                            startIndex={selectedImgIndex} />
                    </Modal>
                }
            </Container>
        </StyledSECTION>
    );
}