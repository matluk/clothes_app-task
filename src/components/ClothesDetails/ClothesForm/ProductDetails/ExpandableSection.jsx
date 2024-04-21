import React, { useState } from "react";
import { Box, IconButton, Collapse, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ExpandableSection = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        marginBottom: "10px",
        borderBottom: "2px solid black",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={handleToggle}
      >
        <h3 style={{ flexGrow: 1, fontFamily:"Alegreya Sans, sans-serif", fontSize:"1rem" }}>
          {title}
        </h3>
        <IconButton size="small">
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box>
          <Divider />
          <Box sx={{ padding: "10px 0" }}>{children}</Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableSection;
