import './App.css';
import Meal from './components/Meal';
import './components/style.css';
import { Routes,Route } from 'react-router-dom';
import RecipeInfo from './components/RecipeInfo';
import AllIngredients from './components/AllIngredients';
import { createContext } from 'react';
import { useState,useEffect } from 'react';
import IngredientInfo from './components/IngredientInfo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const IngredientsListContext = createContext();

function App() {
  const [ingredientList,setIngredientList] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then(res => res.json())
      .then(data => {
          setIngredientList(data.meals)
      })
      localStorage.setItem('myData', JSON.stringify(ingredientList));
  },[])
  return (
    <>
    <IngredientsListContext.Provider value={ingredientList}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo />} />
        <Route path="/AllIngredients" element={<AllIngredients />} />
        <Route path="/AllIngredients/:IngredientName" element={<IngredientInfo />} />
      </Routes>
      <Footer />
    </IngredientsListContext.Provider>
    </>
  );
}

export default App;
