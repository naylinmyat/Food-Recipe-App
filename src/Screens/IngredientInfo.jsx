import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { IngredientsListContext } from '../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import MealItem from '../components/MealItem'
import { GridLoader } from 'react-spinners'

const IngredientInfo = () => {
    const { IngredientName } = useParams();
    const ingredientList = useContext(IngredientsListContext);
    const [ingredientDescription,setIngredientDescription] = useState("");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngredientName}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals);
                setIngredientDescription(ingredientList.filter((item => item.strIngredient.toLowerCase() === IngredientName.toLowerCase()))[0].strDescription)
                setShow(true)
            })
    },[IngredientName,ingredientList])

    return (
        <>
        {
            !show ? 
            <div className="loading">
                <GridLoader color="Black" size={25} />
            </div>
            :
            (!item) ? "" : (
                <div className='IngredientInfoPage'>
                    <div className='ingredientImgAndDesContainer'>
                        <div className='ingredientImgAndNameContainer'>
                            <img className='ingredientImg'  src={'https://www.themealdb.com/images/ingredients/'+ IngredientName +'.png'} alt="" />
                            <p className='ingredientName' >{IngredientName}</p>
                        </div>
                        <div className="description">
                            <h2>Description</h2><br />
                            {
                                ingredientDescription === null 
                                ? <h4 className='sorryMessage'>Sorry,we don't have description for this!</h4> 
                                : <h4>{ingredientDescription}</h4>
                            }
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <p className='browseBy'>Related Meals</p>
                    <div className="container">
                        <MealItem data={item} />
                    </div>
                </div>
            )
        }
        </>
    )
}

export default IngredientInfo