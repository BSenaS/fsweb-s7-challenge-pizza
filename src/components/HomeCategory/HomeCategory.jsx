import React from 'react'
import './homecategory.css'
import icon1 from './HomeCategoryIcons/1.svg'
import icon2 from './HomeCategoryIcons/2.svg'
import icon3 from './HomeCategoryIcons/3.svg'
import icon4 from './HomeCategoryIcons/4.svg' 
import icon5 from './HomeCategoryIcons/5.svg' 
import icon6 from './HomeCategoryIcons/6.svg'

const icons = [
  ['YENİ!Kore', icon1],
  ['Pizza', icon2],
  ['Burger', icon3],
  ['Kızartmalar', icon4],
  ['FastFood', icon5],
  ['Gazlı İçecekler', icon6],
] 

export function HomeCategory() {
    return (  
            <div className='home-category'>
                    <div className='home-category-container'>
                        {icons.map((icon, index) => (
                            <div key={index} className='home-category-item'>
                                <img src={icon[1]} alt={icon[0]} />
                                <p>{icon[0]}</p>
                            </div>
                        ))}
                    </div>
            </div>
        
    )
}