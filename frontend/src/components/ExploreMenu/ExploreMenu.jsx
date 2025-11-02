import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
            Explore our diverse menu featuring everything from local favorites to international cuisines. Whether you’re in the mood for comfort food or something new, we’ve got you covered. Every meal is made fresh, just for you!
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item,index)=>{
            return(
                <div key={index} className="explore-menu-list-item">
<img src={item.menu_image} alt="" />
<p>{item.menu_name}</p>
                </div>
            )
          })}  
        </div>
    </div>
  )
}

export default ExploreMenu