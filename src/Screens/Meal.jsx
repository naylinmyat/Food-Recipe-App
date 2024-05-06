import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MealItem from '../components/MealItem'
import RecipeIndex from '../components/RecipeIndex'
import { GridLoader } from 'react-spinners'
import RecipeCategoryIndex from '../components/RecipeCategoryIndex'
import RecipeCountryIndex from '../components/RecipeCountryIndex'
import Ingredient from '../components/Ingredient'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { IngredientsListContext } from '../App';

const Meal = () => {
    let navigate = useNavigate();
    const [url, setUrl] = useState(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const ingredientList = useContext(IngredientsListContext);
    const [categoryList,setCategoryList] = useState([]);
    const [countryList,setCountryList] = useState([]);
    const [item, setItem] = useState();
    const [category,setCategory] = useState("");
    const [country,setCountry] = useState("");
    const [alpha, setAlpha] = useState("");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
        .then(res => res.json())
        .then(data => {
            setCategoryList(data.meals)
        })
    },[])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        .then(res => res.json())
        .then(data => {
            setCountryList(data.meals)
        })
    },[])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            // console.log(data.meals);
            setItem(data.meals);
            setShow(true);
            window.scrollTo(0, 0);
        })
    }, [url])

    const setCategoryIndex = (category) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setCategory(category);
        setAlpha("");
        setSearch("");
        setCountry("");
    }

    const setCountryIndex = (country) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        setCountry(country);
        setAlpha("");
        setSearch("");
        setCategory("");
    }

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
        setAlpha(alpha);
        setSearch("");
        setCategory("");
        setCountry("");
    }

    const searchRecipe = (evt) => {
        if (evt.key === "Enter") {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setAlpha("");
            setCategory("");
            setCountry("");
        }
    }
    return (
        <>
            {
                show ?
                    <div className="main">
                        <div className="heading">
                            <h1>Search Your Food Recipe</h1>
                            <h4>Embark on a flavorful adventure with us as we explore the art of cooking and the joy of sharing delicious meals!</h4>
                        </div>
                        <p className='browseBy'>Browse By Category</p>
                        <div className='categoryContainer'>
                            <RecipeCategoryIndex categoryList={categoryList} categoryIndex={(category) => setCategoryIndex(category)} currentCategory={category} />
                        </div>
                        <div className="searchBox">
                            <input name='search' type="search" className="searchBar" placeholder='Search here...' value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchRecipe} />
                        </div>
                        <div className="container">
                            <MealItem data={item} />
                        </div>
                        <hr />
                        <br />
                        <p className='browseBy'>Popular Ingredients</p>
                        <div className="ingredientsContainer">
                            <Ingredient ingredientList={ingredientList} isPopular={true} />
                        </div>
                        <IngredientsListContext.Provider value={{ingredientList}}>
                            <div className='seeAllIngredientsBtn' onClick={() => navigate("AllIngredients")}>
                                <p>See All Ingredients</p>
                            </div>
                        </IngredientsListContext.Provider>
                        <br />
                        <hr />
                        <br />
                        <p className='browseBy'>Browse By Country</p>
                        <div className="countryContainer">
                            <RecipeCountryIndex countryList={countryList} countryIndex={(country) => setCountryIndex(country)} currentCountry={country} />
                        </div>
                        <p className='browseBy'>Browse By First Letter</p>
                        <div className="indexContainer">
                            <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} currentAlpha={alpha} />
                        </div>
                        <br />
                        <hr />
                        <br />
                    </div> :
                    <div className="loading">
                        <GridLoader color="Black" size={25} />
                    </div>
            }
        </>
    )
}

export default Meal