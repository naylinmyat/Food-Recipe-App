import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const RecipeCategoryIndex = ({categoryIndex,currentCategory,categoryList}) => {
  return (
    <>
      {
        categoryList.map(item => {
          if(item.strCategory === currentCategory){
            return (
              <div key={item.strCategory} className='currentCategory' onClick={() => categoryIndex(item.strCategory)}>
                <p>{item.strCategory}</p>
              </div>
            )
          }else{
            return (
              <div key={item.strCategory} className='category' onClick={() => categoryIndex(item.strCategory)}>
                <p>{item.strCategory}</p>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default RecipeCategoryIndex