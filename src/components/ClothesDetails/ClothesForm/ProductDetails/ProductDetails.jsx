import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ExpandableSection from "./ExpandableSection";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductDetails({
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
}) {

    const expandableStyle = {
    marginBottom: "15px", lineHeight:"1.5rem", fontSize:".9rem",fontFamily:"Alegreya Sans, sans-serif" 
    }
    const expandableStyleNoMargin = {
    lineHeight:"1.5rem", fontSize:".9rem",fontFamily:"Alegreya Sans, sans-serif" 
    }
    const expandableStyleBold = {
    marginBottom: "15px", lineHeight:"1.5rem", fontSize:".9rem",fontFamily:"Alegreya Sans, sans-serif" , fontWeight:700
    }

  const sizes_array = sizes.split("|");

  const sizes_spans = sizes_array.map((value, index) => (
    <span
      key={index}
      style={{
        dispay: "flex",
        cursor: "pointer",
        marginRight: "5px",
        textDecoration: "none",
        margin: "5px 20px 5px",
        width: "fit-content",
      }}
      onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
    >
      {value}
    </span>
  ));

  const paymentTypeList = payments.map((item) => item.PaymentType);

  const ShippingDetails = () => {
    return (
      <div>
        {shipping.map((item, index) => (
          <div key={index}>
            <Typography sx={expandableStyleBold}>{item.Country}</Typography>
            <Typography sx={expandableStyleNoMargin} >
              Versandkosten: {item.ShippingAndHandling}
            </Typography>
            <Typography sx={expandableStyleNoMargin}>
              Lieferung: {item.DeliveryPeriod}
            </Typography>
            <br />
          </div>
        ))}
      </div>
    );
  };

  const CouponDetails = () => {
    return (
      <div>
        {coupons.map((coupon, index) => (
          <div key={index}>
            <Typography sx={expandableStyleBold}>{coupon.CouponName}</Typography>
            <Typography sx={expandableStyle}>{coupon.Description}</Typography>
            <Typography sx={expandableStyleBold}>Code: {coupon.CouponCode}</Typography>
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Grid item xs={5}>
      <Box
        sx={{
          paddingLeft: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position:"relative"
        }}
      >

        <Typography sx={{textDecoration:"none", color:"#000", fontWeight:700,textTransform:"uppercase", lineHeight:"1.5rem", fontFamily:"Alegreya Sans, sans-serif"}}>{brand}</Typography>
        <IconButton sx={{ position: "absolute", top: 0, right: 0}}>
          <FavoriteBorderIcon />
        </IconButton>
        <Typography sx={{fontStyle:"italic", lineHeight:"1.125rem", fontSize:"1.125rem", fontFamily:"Playfair Display, serif",marginBottom:"1.5rem"}}>{category}</Typography>
        <Box sx={{ display: "flex", alignItems:"center", marginBottom: discountPrice !== price ? "" : "1.5rem"}}>
          <Typography sx={{color:"#e13232", fontWeight:700, fontSize:"1.5rem",lineHeight:"1.5rem",fontFamily:"Alegreya Sans, sans-serif", visibility: discountPrice === price ? "hidden" : "visible"}}>{discountPrice !== price ? `${discountPrice} €` : ""}</Typography>
          <Typography sx={{color:"#aeaeae", fontWeight:100, padding:"0.312rem", fontSize:"1.5rem", lineHeight:"1.5rem", fontFamily:"Alegreya Sans, sans-serif", visibility: discountPrice === price ? "hidden" : "visible"}}>{discountPrice !== price ? "|": ""}</Typography>
          <Typography sx={{color:discountPrice===price?"#000":"#797979", fontWeight:discountPrice===price?700:400, textDecoration: discountPrice !== price ? "line-through" : "none", fontSize:"1.5rem", lineHeight:"1.5rem", fontFamily:"Alegreya Sans, sans-serif" }}>{`${price} €`}</Typography>
          <Typography sx={{color:"#a5a5a5", paddingLeft:".937rem", fontSize:".625rem",whiteSpace:"nowrap",lineHeight:".625rem"}}>{`inkl. MwSt.`}</Typography>
        </Box>
        {discountPrice !== price &&
        <Typography sx={{marginTop:".625rem", fontSize:"1rem",color:"#a5a5a5", lineHeight:1.15, marginBottom:"1.25rem"}}>{`30-Tage-Bestpreis: ${discountPrice} €`}</Typography>
        }
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
            display: "flex",
            alignText: "center",
            marginBottom:3,
            padding:"10px"
          }}
          endIcon={<ArrowForwardIcon />}
        >
          <span
            style={{
              flexGrow: 1,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            zum shop <b>herrenausstatter.de</b> {/*Should be dynamic, but not found in JSON*/}
          </span>
        </Button>
        {parseInt(discountPrice) > 139 &&
        <Typography sx={{ textTransform: "uppercase", textAlign:"center", letterSpacing:".07rem", fontSize:".9rem", marginBottom:"1.5rem" }}>
          versandkostenfrei ab 149,00€
        </Typography>
        }

        <ExpandableSection
          title="Verfügbare Größen"
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>{sizes_spans}</div>
        </ExpandableSection>
        <ExpandableSection title="Produktdetails">
          <div style={expandableStyle}>{productDetails}</div>
          <div style={expandableStyle}>
            <strong>Material: </strong>
            {materials}
          </div>
        </ExpandableSection>
        <ExpandableSection title="Versand">
          <ShippingDetails />
        </ExpandableSection>
        <ExpandableSection title="Bezahlung">
            <div style={expandableStyle}>
                {paymentTypeList.join(", ")}
            </div>
        </ExpandableSection>
        <ExpandableSection title="*Gutschein">
          <CouponDetails />
        </ExpandableSection>
        <Grid item xs={3}>
          <Box>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}
