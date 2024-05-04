import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  let navigate = useNavigate();

  const setOrangeMode = () => {
    document.querySelector("body").setAttribute("data-theme", "orange");
  }

  const setSkyblueMode = () => {
    document.querySelector("body").setAttribute("data-theme", "skyblue");
  }

  const setVioletPurpleMode = () => {
    document.querySelector("body").setAttribute("data-theme", "violet");
  }

  const setLightGreenMode = () => {
    document.querySelector("body").setAttribute("data-theme", "lightgreen");
  }

  const setHotPinkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "hotpink");
  }

  return (
    <nav className='navBar'>
        <div className='logo' onClick={() => navigate('/')}>
            <h1>Food Recipe</h1>
        </div>
        <div className='navRightSide'>
            <div className='navHome' onClick={() => navigate('/')}><p>Home</p></div>
            <div className='navColorsContainer'>
              <div className='orangeColor' onClick={() => setOrangeMode()}></div>
              <div className='hotPinkColor' onClick={() => setHotPinkMode()}></div>
              <div className='skyblueColor' onClick={() => setSkyblueMode()}></div>
              <div className='violetColor' onClick={() => setVioletPurpleMode()}></div>
              <div className='lightGreenColor' onClick={() => setLightGreenMode()}></div>
            </div>
        </div>
    </nav>
  )
}

export default Navigation