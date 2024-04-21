import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useColorContext } from "../../../utils/context/context";

const pageSize = 9;

export default function AppPagination() {
  const { visibleItems, setFinalVisibleItems} = useColorContext();
  
  const [page, setPage] = useState(1);
  const [paginationCount, setPaginationCount] = useState(0);

  useEffect(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const dataLocal = visibleItems.slice(startIndex, endIndex);

    setFinalVisibleItems(dataLocal);

    const count = visibleItems.length;
    setPaginationCount(Math.ceil(count / pageSize));
  }, [page, visibleItems, setFinalVisibleItems]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    console.log("New page working!")
  };

  useEffect(() => {
    console.log("Prva stranica")
    setPage(1);
  }, [visibleItems]);


  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display={"flex"}
      sx={{ margin: "20px 0px" }}
    >
      <Pagination
        sx={{color:"black"}}
        count={paginationCount}
        page={page}
        onChange={handlePageChange}
      />
    </Box>
  );
}
