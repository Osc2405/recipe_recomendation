import React from "react";
import "./assets/js/actions.js";
import HomeRecipes from "./pages/HomeRecipes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IngredientsRecomendation from "./pages/IngredientsRecomendation";
import CaloriesRecomendation from "./pages/CaloriesRecomendation";
import DailyRecomendation from "./pages/DailyRecomendation.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeRecipes />} />
          <Route
            path='/ingredientsRecomendation'
            element={<IngredientsRecomendation />}
          />
          <Route
            path='/caloriesRecomendation'
            element={<CaloriesRecomendation />}
          />
          <Route path='/dailyRecomendation' element={<DailyRecomendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
