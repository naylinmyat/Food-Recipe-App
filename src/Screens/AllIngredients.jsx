import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { IngredientsListContext } from '../App';
import Ingredient from '../components/Ingredient';
import { GridLoader } from 'react-spinners'

const AllIngredients = () => {
    const ingredientList = useContext(IngredientsListContext);
    const [tempIngredientList, setTempIngredientList] = useState(ingredientList);
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTempIngredientList(ingredientList)
        setShow(true)
    }, [ingredientList])

    const searchIngredient = (evt) => {
        if (evt.key === "Enter") {
            if (search !== "") {
                setTempIngredientList(ingredientList.filter((item => item.strIngredient.toLowerCase().includes(search.toLowerCase()))))
            } else {
                setTempIngredientList(ingredientList)
            }
        }
    }
    return (
        <>
            {
                show
                    ?
                    <div className="main">
                        <div className="heading">
                            <h1>All Ingredients</h1>
                        </div>
                        <div className="searchBox">
                            <input name='search' type="search" className="searchBar" placeholder='Search here...' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchIngredient} />
                        </div>
                        {
                            (tempIngredientList.length === 0) ? <p className='ingredientSearchErrorMessage'>Ingredient Not Found!</p> :
                                <div className="ingredientsContainer">
                                    <Ingredient ingredientList={tempIngredientList} isPopular={false} />
                                </div>
                        }
                    </div>
                    : 
                    <div className="loading">
                        <GridLoader color="Black" size={25} />
                    </div>
            }
        </>
    )
}

export default AllIngredients