import WardrobeCard from "./WardrobeCard/WardrobeCard";
import { Box } from "@mui/material";
import WardrobeListControl from "./WardrobeListControl/WardrobeListControl";
import { useColorContext } from "../../utils/context/context";
import AppPagination from "./AppPagination/AppPagination";
import { useNavigate } from "react-router-dom";

export default function WardrobeList() {
  const { finalVisibleItems, setDetailsItem } = useColorContext();

  const navigate = useNavigate();

  const handleEdit = (item) => {
    setDetailsItem(item);
    navigate(`/details/${item.UniqueProductID}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <WardrobeListControl />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          pt: 4,
          pb: 4,
        }}
      >
        {finalVisibleItems.length
          ? finalVisibleItems.map((item) => (
              <WardrobeCard
                key={item.DealID}
                brand={item.Brand.Name}
                category={item.Details.DealName}
                thumbnailImagePath={item.Details.Media.ThumbnailImagePath}
                price={item.Pricing.Price.FormattedString}
                discountPrice={item.Pricing.DiscountedPrice.FormattedString}
                discountPercentage={item.Pricing.Discount}
                onEdit={() => handleEdit(item)}
              />
            ))
          : "No items found"}
      </Box>
      <AppPagination />
    </Box>
  );
}
