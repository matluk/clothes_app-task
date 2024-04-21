import React from "react";
import WardrobeList from "./components/WardrobeList/WardrobeList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useColorContext } from "../src/utils/context/context";
import WardrobeDetailsPage from "./components/ClothesDetails/WardrobeDetailsPage";

export default function App() {
  const { handleCloseEdit, detailsItem } = useColorContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WardrobeList />}></Route>
        <Route path="/details/:id" element={<WardrobeDetailsPage item={detailsItem} onClose={handleCloseEdit}/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}
