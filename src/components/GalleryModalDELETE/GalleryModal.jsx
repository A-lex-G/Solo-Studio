import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Overlay } from "./GalleryModal.styled";
import { galleryItems } from "../ItemsGallery/ItemsGallery";
import { useEffect } from "react";

export const GalleryModal = ({ selectedIndex, setIndex, onCloseModal }) => {
    
    const handleMouseClose = (e) => {

        // console.log("event=> ", e);
        // console.log("e.currentTarget=> ", e.currentTarget);
        // console.log("e.target=> ", e.target);
        
        if (e.currentTarget === e.target) {
            onCloseModal(e);
        };
    };

    useEffect(() => {
        const handleEscapeClose = (e) => {
            if (e.key === 'Escape') {
                onCloseModal(e)
            };
        };

        window.addEventListener('keydown', handleEscapeClose);
        return () => {
            window.removeEventListener('keydown', handleEscapeClose);
        };
    }, [onCloseModal]);

    return (
        <Overlay
            onClick={handleMouseClose}>
            <ReactImageGallery
                items={galleryItems}
                showPlayButton={false}
                showBullets={true}
                showIndex={true}
                onSlide={index => setIndex(index)}
                // onScreenChange={() => onSetModal(true)}
                startIndex={selectedIndex}
            />
        </Overlay>
    );
};