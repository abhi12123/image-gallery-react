import React from 'react';

const Card=({image})=>{
    return(
        <div className="card">
            <img src={image.webformatURL}></img>
            <div>Photo by {image.user}</div> 
            <ul>
                <li>views: {image.views}</li>
                <li>Downloads: {image.downloads}</li>
                <li>Likes: {image.likes}</li>
            </ul>
        </div>
    )
}

export default Card;