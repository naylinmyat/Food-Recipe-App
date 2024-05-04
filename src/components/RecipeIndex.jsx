import React from 'react'

const RecipeIndex = ({alphaIndex,currentAlpha}) => {
    const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var num = 0;
  return (
    <>
        {
            alpha.map(item => {
                if(item === currentAlpha){
                    return(
                        <div className="currentNumBox" key={num++} onClick={() => alphaIndex(item)}>
                            <p className='alpha'>{item}</p>
                        </div>
                    )
                }else{
                    return(
                        <div className="numBox" key={num++} onClick={() => alphaIndex(item)}>
                            <p className='alpha'>{item}</p>
                        </div>
                    )
                }
            })
        }
    </>
  )
}

export default RecipeIndex