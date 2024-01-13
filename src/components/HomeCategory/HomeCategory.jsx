import React from 'react'
import './homecategory.css'
import icon1 from './HomeCategoryIcons/1.svg'
import icon2 from './HomeCategoryIcons/2.svg'
import icon3 from './HomeCategoryIcons/3.svg'
import icon4 from './HomeCategoryIcons/4.svg' 
import icon5 from './HomeCategoryIcons/5.svg' 
import icon6 from './HomeCategoryIcons/6.svg'

const icons = [
  [icon1, 'YENİ!Kore'],
  [icon2, 'Pizza'],
  [icon3, 'Burger'],
  [icon4, 'Kızartmalar'],
  [icon5, 'FastFood'],
  [icon6, 'Gazlı İçecekler'],
] 

export function HomeCategory() {
return (  
    <div className='home-category'>
        <div className='home-category-container'>
            {icons.map((icon,index) => (
                // eslint-disable-next-line no-unused-expressions
                <div key={index} className='home-category-item'>
                <img src={icon[0]} alt={icon[1]} />
                <p>{icon[1]}</p>
            </div>
                ))}
        </div>
    </div>
    
    )
}