import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useColorContext } from "../../../utils/context/context";

const ImageSliderModal = ({ isOpen, onClose, images }) => {
  
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const { currentImageIndex, setCurrentImageIndex } = useColorContext();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: isOpen ? "block" : "none",
          zIndex: 9999,
        }}
        onClick={onClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "90%",
            height: "90%",
            margin: "auto",
            backgroundColor: "white",
            boxShadow: 24,
            borderRadius: 8,
            overflow: "hidden",
          }}
          onClick={handleContentClick}
        >
          {/* Image Slider Content */}
          <img
            src={images[currentImageIndex]}
            alt="Main Product"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          {/* Navigation Buttons */}
          <IconButton
            sx={{ position: "absolute", top: "10px", left: "10px" }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
            onClick={nextImage}
          >
            <ArrowForwardIcon />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
            onClick={prevImage}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageSliderModal;
