import React from 'react';

export default function Tour({id, image, info, price, name, removeTour}){
    const [readMore, setReadMore] = React.useState(false);

  return (
    <article className="single-tour">
        <img src={image} alt={name}/>
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}</button>
            <button onClick={() => removeTour(id)} className="delete-btn">
                not interested
            </button>
        </footer>
    </article>
  )
};