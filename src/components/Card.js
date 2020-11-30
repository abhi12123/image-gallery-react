import React from 'react';

//image prop is recieved details are changed accordingly
const Card=({image})=>{
    return(
        <div className="card">
            <img src={image.webformatURL}></img>
            <div>Photo by <b>{image.user}</b></div> 
            <ul>
                <li><i class="fas fa-eye"></i> {image.views}</li>
                <li><i class="fas fa-download"></i> {image.downloads}</li>
                <li><i class="fas fa-heart"></i> {image.likes}</li>
            </ul>
        </div>
    )
}

export default Card;