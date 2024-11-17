import React, {useState, useEffect} from 'react'
import emptyStar from '../../public/Resources/emptyStar.svg'
import filledStar from '../../public/Resources/filledStar.svg'

//Med hjälp av ChatGPT
  const displayStarsRating = (rating) => {
    return [...Array(5)].map((_, idx) => (
        <img key={idx} src={idx < rating ? filledStar : emptyStar} alt='Star ratings' className='star-rating'/>
    ));
  };
//Slut med ChatGPT

const Testimonial = ({item}) => {
  return (
    <div className='testimonial'>
        <div className='quote-icon'>
            <i className='fa-sharp fa-solid fa-quote-left'></i>
        </div>
        <div className='starRating'>
                    {displayStarsRating(item.starRating)}
                </div>
        <p>{item.comment}</p>
        <div className='testimonial-author'>
            <img className='profile' src={item.avatarUrl} alt={item.author} />
            <div className='author'>
                <h6 className='name'>{item.author}</h6>
                <p className='role'>{item.jobRole}</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial