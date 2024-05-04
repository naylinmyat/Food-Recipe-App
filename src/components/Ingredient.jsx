import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ingredient = ({ ingredientList, isPopular }) => {
    let navigate = useNavigate();
    return (
        <>
            {
                isPopular ?
                    ingredientList.slice(0, 4).map(ingredient => {
                        return (
                            <div className="ingredientCard" key={ingredient.idIngredient} onClick={() => navigate(`AllIngredients/${ingredient.strIngredient}`)}>
                                <img src={'https://www.themealdb.com/images/ingredients/' + ingredient.strIngredient + '.png'} alt="" />
                                <p className='ingredientName' >{ingredient.strIngredient}</p>
                            </div>
                        )
                    }) :
                    ingredientList.map(ingredient => {
                        return (
                            <div className="ingredientCard" key={ingredient.idIngredient} onClick={() => navigate(`${ingredient.strIngredient}`)}>
                                <img src={'https://www.themealdb.com/images/ingredients/' + ingredient.strIngredient + '.png'} alt="" />
                                <p className='ingredientName' >{ingredient.strIngredient}</p>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default Ingredient