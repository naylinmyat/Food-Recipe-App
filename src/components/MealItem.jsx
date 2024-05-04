import React from 'react'
import { useNavigate } from 'react-router-dom'

const MealItem = ({data}) => {
    // console.log(data)
    let navigate = useNavigate();
  return (
    <>
    {
        (!data) ? <p className='errorMessage'>Data Not Found!</p> : data.map(item => {
            return(
                <div className="card" key={item.idMeal} onClick={() => navigate(`/${item.idMeal}`)}>
                    <img src={item.strMealThumb} alt="" />
                    <p className='foodName' >{item.strMeal}</p>
                </div>
            )
        })
    }
    </>
  )
}

export default MealItem