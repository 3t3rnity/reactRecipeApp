import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe"
import "./App.scss";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  useEffect(() => {
    getRecipes();
  }, [query])

  const APP_ID = "ca4e2da5";
  const APP_KEY = "e745034f202f03c9d2e990686c6d60c8";

  const exampleReq = 
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const res = await fetch(exampleReq);
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className = "App" >
      <form className = "search-form" >
        <input type = "text" className = "search-bar" onChange = {e => setSearch(e.target.value)} />
        <button type = "submit" className = "search-button" onClick = {e => {
          e.preventDefault();
          setQuery(search);
        }} >Search</button>
      </form>
      <div className = "recipe-wrapper">
        { recipes.map((el, id) =>(
            <Recipe 
              key = {id}
              label = {el.recipe.label} 
              calories = {el.recipe.calories}
              image = {el.recipe.image}
              ingredients = {el.recipe.ingredients}  
            />   
          )
        )}
      </div>
    </div>
  );
}

export default App;
