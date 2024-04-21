import { Box } from "@mui/material";
import ClothesForm from "./ClothesForm/ClothesForm";

export default function WardrobeDetailsPage({ item }) {
  if (!item) {
    return null;
  }

  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      {/** 
      <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
        Editing {item?.Details.DealName} (ID: {item?.DealID})
      </Typography>
      */}
      <ClothesForm
        key={item.DealID}
        brand={item.Brand.Name}
        category={item.Details.DealName}
        sizes={item.Details.AvailableSizes}
        thumbnailImagePath={item.Details.Media.ThumbnailImagePath}
        price={item.Pricing.Price.FormattedString}
        discountPrice={item.Pricing.DiscountedPrice.FormattedString}
        discountPercentage={item.Pricing.Discount}
        productDetails={item.Details.Description}
        materials={item.Details.Material}
        shipping={item.Retailer.Shippings}
        payments={item.Retailer.PaymentTypes}
        coupons={item.Retailer.Coupons}
      />
    </Box>
  );
}
