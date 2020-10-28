import React from "react";


const Recipe = props => {
  return (
    <div className = "recipe-item">
        <div className = "recipe-description">
            <h1 className = "recipe-label">{props.label}</h1>
            <p className = "recipe-calories">Calories: {props.calories}</p>
        </div>
        <ul className  = "recipe-ingredients">
            {props.ingredients.map((el, id) => (
                    <li key = {id} 
                        className = "recipe-ingredients__item"
                    >{el.text}</li>
                )
            )}
        </ul>
        <img src = {props.image} alt = '' className = "recipe-image"/>
    </div>
  )
}

export default Recipe;
