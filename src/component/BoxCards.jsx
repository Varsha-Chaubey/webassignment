import React from 'react'
import { featuredBoxes } from "../data/data";
const BoxCards = () => {
  return (
      <div className='box-card-container'>
        {featuredBoxes.map((item, id) => {
          return (
            <div className='card-box '>
              <div className='tag-box'>
                {item && item?.tag1 && <button className='tag-button' style={{backgroundColor:'#39FF88'}}> {item?.tag1}</button>}
                {item && item?.tag2 && <button className='tag-button' style={{backgroundColor:'#FF793F'}}> {item?.tag2}</button>}
                {item && item?.tag3 && <button className='tag-button' style={{backgroundColor:'#3FA1FC'}}> {item?.tag3}</button>}
              </div>
              <img src={item?.image}/>
              <h1 className='box-title'>{item?.title}</h1>
              <div className='box-type'>
                <button>{item?.type1}</button>
                <button>{item?.type2}</button>
              </div>
              <p>{`$ ${item?.price}.00`}</p>
              <div className='case-info'>
                <button className='case-btn'>{item?.open}</button>
                <button className='info-btn'>{item?.info}</button>
              </div>
            </div>
          );
        })}
      </div> 
  )
}

export default BoxCards
