import React from "react";
import { Box, Grid } from "@mui/material";
import ImageSliderModal from "./ImageSliderModal";
import { useColorContext } from "../../../utils/context/context";
import ProductDetails from "./ProductDetails/ProductDetails";

const ClothesForm = ({
  brand,
  category,
  price,
  discountPrice,
  discountPercentage,
  sizes,
  productDetails,
  materials,
  shipping,
  payments,
  coupons,
}) => {
  const {
    setCurrentImageIndex,
    images,
    setImages,
    mainImage,
    setMainImage,
    isSliderOpen,
    setIsSliderOpen,
  } = useColorContext();

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  const handleOpenSlider = () => {
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={3}>
          <Box
            sx={{
              width: 200,
              height: 500,
              marginRight: 2,
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "7px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#d8d8d8",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            <img
              src={images[0]}
              alt="1"
              onMouseOver={() => handleImageChange(images[0])}
              onClick={() => {
                handleOpenSlider();
                setCurrentImageIndex(0);
              }}
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            />
            <img
              src={images[1]}
              alt="2"
              onMouseOver={() => handleImageChange(images[1])}
              onClick={() => {
                handleOpenSlider();
                setCurrentImageIndex(1);
              }}
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            />
            <img
              src={images[2]}
              alt="3"
              onMouseOver={() => handleImageChange(images[2])}
              onClick={() => {
                handleOpenSlider();
                setCurrentImageIndex(2);
              }}
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            />
            <img
              src={images[3]}
              alt="4"
              onMouseOver={() => handleImageChange(images[3])}
              onClick={() => {
                handleOpenSlider();
                setCurrentImageIndex(3);
              }}
              style={{
                width: "100%",
                height: "auto",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            />
          </Box>
        </Grid>

        {/* Main Product Image */}
        <Grid
          item
          xs={4}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          {discountPercentage > 0 && (
            <Box
              sx={{
                padding: "3px 10px 3px",
                backgroundColor: "black",
                color: "white",
                position: "absolute",
              }}
            >
              {discountPercentage}%
            </Box>
          )}
          <img
            src={mainImage}
            onClick={handleOpenSlider}
            alt="Main Product"
            style={{
              width: "100%",
              maxHeight: "100%",
            }}
          />
          <ImageSliderModal
            isOpen={isSliderOpen}
            onClose={handleCloseSlider}
            mainImage={mainImage}
            images={images}
            setImages={setImages}
          />
        </Grid>

        {/* Product Details */}
        <ProductDetails
          brand={brand}
          category={category}
          price={price}
          discountPrice={discountPrice}
          discountPercentage={discountPercentage}
          sizes={sizes}
          productDetails={productDetails}
          materials={materials}
          shipping={shipping}
          payments={payments}
          coupons={coupons}
        />
      </Grid>
    </Box>
  );
};

export default ClothesForm;
