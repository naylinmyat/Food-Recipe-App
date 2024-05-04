import React from 'react'

const Flag = ({country}) => {
  return (
    <>
    {
        (country === "American") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/us.png' alt="" /> :
        (country === "British") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/gb.png' alt="" /> :
        (country === "Canadian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/ca.png' alt="" /> :
        (country === "Chinese") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/cn.png' alt="" /> :
        (country === "Croatian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/hr.png' alt="" /> :
        (country === "Dutch") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/nl.png' alt="" /> :
        (country === "Egyptian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/eg.png' alt="" /> :
        (country === "Filipino") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/ph.png' alt="" /> :
        (country === "French") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/fr.png' alt="" /> :
        (country === "Greek") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/gr.png' alt="" /> :
        (country === "Indian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/in.png' alt="" /> :
        (country === "Irish") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/ie.png' alt="" /> :
        (country === "Italian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/it.png' alt="" /> :
        (country === "Jamaican") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/jm.png' alt="" /> :
        (country === "Japanese") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/jp.png' alt="" /> :
        (country === "Kenyan") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/kn.png' alt="" /> :
        (country === "Malaysian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/my.png' alt="" /> :
        (country === "Mexican") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/mx.png' alt="" /> :
        (country === "Moroccan") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/ma.png' alt="" /> :
        (country === "Polish") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/pl.png' alt="" /> :
        (country === "Portuguese") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/pt.png' alt="" /> :
        (country === "Russian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/ru.png' alt="" /> :
        (country === "Spanish") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/es.png' alt="" /> :
        (country === "Thai") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/th.png' alt="" /> :
        (country === "Tunisian") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/tn.png' alt="" /> :
        (country === "Turkish") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/tr.png' alt="" /> :
        (country === "Vietnamese") ?
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/vn.png' alt="" /> :
        <img className='flag' src='https://www.themealdb.com/images/icons/flags/big/64/sa.png' alt="" /> 
    }
    </>
  )
}

export default Flag