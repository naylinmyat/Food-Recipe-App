import React from 'react'
import Flag from './Flag'

const RecipeCountryIndex = ({countryIndex,currentCountry,countryList}) => {
    return (
        <>
          {
            countryList.map(item => {
              if(item.strArea === currentCountry){
                return (
                  <div key={item.strArea} className='currentCountry' onClick={() => countryIndex(item.strArea)}>
                    <Flag country={item.strArea} />
                    <p>{item.strArea}</p>
                  </div>
                )
              }else{
                return (
                  <div key={item.strArea} className='country' onClick={() => countryIndex(item.strArea)}>
                    <Flag country={item.strArea} />
                    <p>{item.strArea}</p>
                  </div>
                )
              }
            })
          }
        </>
      )
}

export default RecipeCountryIndex