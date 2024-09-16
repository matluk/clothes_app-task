import React, { createContext, useContext, useState, useEffect } from "react";
import jsonData from "../../db/deals.json";
import { createFilterByColors } from "../clothes";

import pic2 from "../../assets/pic1.jpg";
import pic3 from "../../assets/pic2.jpg";
import pic4 from "../../assets/pic3.jpg";

const ColorContext = createContext();

export const useColorContext = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [data, setData] = useState(jsonData.Deals.Items);
  const [confirmClicked, setConfirmClicked] = useState(false);
  const [visibleItems, setVisibleItems] = useState(data)
  const [finalVisibleItems, setFinalVisibleItems] = useState(visibleItems);

  const [colors, setColors] = useState([]);

  const [detailsItem, setDetailsItem] = useState(null);


  useEffect(() => {
    const uniqueColors = new Set();

    data.forEach(item => {
      if(item.Details && item.Details.Color){
        uniqueColors.add(item.Details.Color) 
      }
    });
    setColors([...uniqueColors].map(color => ({ label:color, value: color})));
  }, [data]);


  const addColor = (color) => {
    setSelectedColors((prevColors) => [...prevColors, color]);
  };

  const removeColor = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.filter((prevColor) => prevColor !== color)
    );
  };

  useEffect(() => {
    if (confirmClicked) {
      const filteredItems = data.filter(createFilterByColors(selectedColors));
      setVisibleItems(filteredItems);
    }
    setConfirmClicked(false);
  }, [confirmClicked, selectedColors, data]);

  const handleConfirm = () => {
    setConfirmClicked(true);
  };

  const handleCloseEdit = () => {
    setDetailsItem(null);
  }
  /*CLOTHES FILTER STATES*/

  const [anchorEl, setAnchorEl] = useState(null);
  const [showColorButton, setShowColorButton] = useState(false);
  const [showArrowUp, setShowArrowUp] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(true);
  
  /*CLOTHES FORM STATES*/

  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState([]);

  const [isSliderOpen, setIsSliderOpen] = useState(false);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (detailsItem && detailsItem.Details && detailsItem.Details.Media) {
      const rootPath = "https://cdn.mybestbrands.de";
      const thumbnailImagePath = detailsItem?.Details?.Media?.ThumbnailImagePath;
      if (thumbnailImagePath) {
        setMainImage(`${rootPath}${thumbnailImagePath}`);
        setImages([
          `${rootPath}${thumbnailImagePath}`,
          pic2, 
          pic3, 
          pic4
        ]);
      }
    }
  }, [detailsItem]);


  return (
    <ColorContext.Provider
      value={{
        data,
        setData,
        visibleItems,
        setVisibleItems,
        selectedColors,
        setSelectedColors,
        addColor,
        removeColor,
        handleConfirm,
        finalVisibleItems,
        setFinalVisibleItems,
        detailsItem,
        setDetailsItem,
        handleCloseEdit,
        currentImageIndex,
        setCurrentImageIndex,
        images,
        setImages,
        mainImage,
        setMainImage,
        isSliderOpen,
        setIsSliderOpen,
        anchorEl,
        setAnchorEl,
        showColorButton,
        setShowColorButton,
        showArrowUp,
        setShowArrowUp,
        showConfirmButton,
        setShowConfirmButton,
        colors
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
