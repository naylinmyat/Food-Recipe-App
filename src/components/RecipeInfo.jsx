import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let vId = "";
const RecipeInfo = () => {
    let navigate = useNavigate();
    const [item, setItem] = useState();
    const { MealId } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals[0]);
            })
    }, [MealId])

    if (item) {
        const url = item.strYoutube;
        const str = url.split("=");
        vId = str[str.length - 1];
    }
    return (
        <>
            {
                (!item) ? "" : (
                    <>
                        <div className="content">
                            <img src={item.strMealThumb} alt="" />
                            <div className="innerContent">
                                <h1>{item.strMeal}</h1>
                                <h2>{item.strArea}</h2>
                                <h3>Category - {item.strCategory}</h3>
                            </div>
                        </div>
                        <div className="recipeDetails">
                            <div className="instructions">
                                <h2>Instructions (How To Cook)</h2><br />
                                <h4>{item.strInstructions}</h4>
                            </div>
                        </div>
                        <div className='ingredients'>
                            <h2>Ingredients</h2><br />
                            <div className='ingredientsContainer'>
                                {
                                    (!item.strIngredient1) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient1}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient1 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient1} : {item.strMeasure1}</h4></div>
                                }
                                {
                                    (!item.strIngredient2) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient2}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient2 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient2} : {item.strMeasure2}</h4></div>
                                }
                                {
                                    (!item.strIngredient3) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient3}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient3 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient3} : {item.strMeasure3}</h4></div>
                                }
                                {
                                    (!item.strIngredient4) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient4}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient4 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient4} : {item.strMeasure4}</h4></div>
                                }
                                {
                                    (!item.strIngredient5) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient5}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient5 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient5} : {item.strMeasure5}</h4></div>
                                }
                                {
                                    (!item.strIngredient6) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient6}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient6 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient6} : {item.strMeasure6}</h4></div>
                                }
                                {
                                    (!item.strIngredient7) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient7}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient7 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient7} : {item.strMeasure7}</h4></div>
                                }
                                {
                                    (!item.strIngredient8) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient8}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient8 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient8} : {item.strMeasure8}</h4></div>
                                }
                                {
                                    (!item.strIngredient9) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient9}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient9 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient9} : {item.strMeasure9}</h4></div>
                                }
                                {
                                    (!item.strIngredient10) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient10}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient10 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient10} : {item.strMeasure10}</h4></div>
                                }
                                {
                                    (!item.strIngredient11) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient11}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient11 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient11} : {item.strMeasure11}</h4></div>
                                }
                                {
                                    (!item.strIngredient12) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient12}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient12 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient12} : {item.strMeasure12}</h4></div>
                                }
                                {
                                    (!item.strIngredient13) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient13}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient13 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient13} : {item.strMeasure13}</h4></div>
                                }
                                {
                                    (!item.strIngredient14) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient14}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient14 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient14} : {item.strMeasure14}</h4></div>
                                }
                                {
                                    (!item.strIngredient15) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient15}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient15 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient15} : {item.strMeasure15}</h4></div>
                                }
                                {
                                    (!item.strIngredient16) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient16}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient16 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient16} : {item.strMeasure16}</h4></div>
                                }
                                {
                                    (!item.strIngredient17) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient17}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient17 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient17} : {item.strMeasure17}</h4></div>
                                }
                                {
                                    (!item.strIngredient18) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient18}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient18 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient18} : {item.strMeasure18}</h4></div>
                                }
                                {
                                    (!item.strIngredient19) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient19}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient19 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient19} : {item.strMeasure19}</h4></div>
                                }
                                {
                                    (!item.strIngredient20) ? "" : <div onClick={() => navigate(`/AllIngredients/${item.strIngredient20}`)} className='ingredientCard'><img src={'https://www.themealdb.com/images/ingredients/' + item.strIngredient20 + '.png'} alt="" /><h4 className='ingredientName'>{item.strIngredient20} : {item.strMeasure20}</h4></div>
                                }
                            </div>
                        </div>
                        <div className="video">
                            <iframe title='howToCookVd' src={`https://www.youtube.com/embed/${vId}`}></iframe>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default RecipeInfo