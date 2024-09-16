import React from "react";
import { Checkbox, FormControlLabel, Menu, MenuItem, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ColorFIlter.css";
import { useColorContext } from "../../../utils/context/context";

const ColorPicker = () => {


  const {
    selectedColors,
    addColor,
    removeColor,
    handleConfirm,
    anchorEl,
    setAnchorEl,
    showColorButton,
    setShowColorButton,
    showArrowUp,
    setShowArrowUp,
    showConfirmButton,
    setShowConfirmButton,
    colors
  } = useColorContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowArrowUp(true);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addColor(value);
    } else {
      removeColor(value);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowArrowUp(false);
  };

  const handleMouseOverChoose = () => {
    setShowColorButton(true);
  };

  const handleMouseOutChoose = () => {
    setShowColorButton(false);
  };

  const handleMouseOverConfirm = () => {
    setShowConfirmButton(false);
  };

  const handleMouseOutConfirm = () => {
    setShowConfirmButton(true);
  };

  const handleConfirmClick = () => {
    console.log("Selected Colors:", selectedColors);
    handleConfirm();
    handleClose();
  };

  return (
    <>
      <Box
        onClick={handleClick}
        onMouseOver={() => handleMouseOverChoose()}
        onMouseOut={() => handleMouseOutChoose()}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: showColorButton ? "white" : "black",
          bgcolor: showColorButton ? "black" : "white",
          border: showColorButton ? "1px solid white" : "1px solid black",
          padding: "7px 90px 7px",
        }}
      >
        Farben
        <ExpandMoreIcon
          className={showArrowUp ? "expanded" : "close"}
          sx={{ position: "relative", left: "70px" }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ height: 500 }}
      >
        {colors.map((color) => (
          <MenuItem
            key={color.value}
            sx={{ width: 235 }}
            className="checkboxHover"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedColors.includes(color.value)}
                  onChange={handleCheckboxChange}
                  value={color.value}
                />
              }
              label={color.label}
            />
          </MenuItem>
        ))}
        <Box
          onClick={handleConfirmClick}
          onMouseOver={() => handleMouseOverConfirm(false)}
          onMouseOut={() => handleMouseOutConfirm(true)}
          sx={{
            color: showConfirmButton ? "black" : "white",
            bgcolor: showConfirmButton ? "white" : "black",
            border: showConfirmButton ? "1px solid black" : "1px solid white",
            padding: "7px 50px 7px",
            textAlign: "center",
          }}
        >
          Confirm
        </Box>
      </Menu>
    </>
  );
};

export default ColorPicker;
