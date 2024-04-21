import React, { useState, memo } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./WardrobeCard.css";

const memoizedWardrobeCard = memo(function WardrobeCard({
  brand,
  thumbnailImagePath,
  category,
  price,
  discountPrice,
  discountPercentage,
  onEdit,
}) {
  const rootPath = "https://cdn.mybestbrands.de";

  const [bright, setBright] = useState(false);

  const handleMouseOver = () => {
    setBright(true);
  };

  const handleMouseOut = () => {
    setBright(false);
  };

  return (
    <Card
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
      sx={{
        width: 370,
        height: 480,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <CardMedia
          component="img"
          alt={category}
          height="240"
          image={`${rootPath}${thumbnailImagePath}`}
          sx={{
            width: "77%",
            objectFit: "cover",
            flexGrow: 0,
            filter: bright ? "brightness(105%)" : "",
          }}
          onClick={onEdit}
        />
        {discountPercentage > 0 && (
          <Box
            sx={{
              padding: "3px 10px 3px",
              backgroundColor: "black",
              color: "white",
              position: "absolute",
              top: 200,
              right: 320,
            }}
          >
            {discountPercentage}%
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, overflow: "auto" }} onClick={onEdit}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textTransform: "uppercase",
            fontSize: ".9rem",
            lineHeight: "normal",
            letterSpacing: ".16px",
          }}
        >
          {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              color: "#e13232",
              paddingRight: discountPrice !== price ? "1rem" : "0rem",
              visibility: discountPrice === price ? "hidden" : "visible",
            }}
          >
            {discountPrice !== price ? `${discountPrice} €` : ""}
          </Typography>

          <Typography
            sx={{
              textDecoration: discountPrice !== price ? "line-through" : "none",
            }}
          >
            {`${price} €`}
          </Typography>
        </Box>
        {discountPrice !== price && (
          <Typography
            sx={{
              fontSize: "14px",
              color: "#b8b8b8",
              letterSpacing: ".13px",
              marginTop: ".125rem",
            }}
          >
            {`30-Tage-Bestpreis:${discountPrice}`}€
          </Typography>
        )}
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(0, 0, 0, 0.17)",
        }}
      >
        <Button sx={{ color: "black", marginLeft: "-20px",'&:hover': {backgroundColor: 'transparent',} }}>
          <FavoriteBorderIcon />
        </Button>
        <Button className="zumshop" size="small">
          <Box className="zumshop">Zum shop</Box>
        </Button>
      </CardActions>
    </Card>
  );
});

export default memoizedWardrobeCard;
