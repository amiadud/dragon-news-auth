import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {title, image_url,details, _id} = news
    

    return (
        <>
        <div className='mx-4 space-y-2'>
                <h2 className='text-xl'>{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length > 200 ? <p>{details.slice(0,200)}
                    <Link
                        to={`/news/${_id}`}
                     className='text-blue-600 font-semibold '> Read More</Link></p> :<p>{details}</p>
                }
                <hr className='py-2' />
            </div>
        </>
    );
};

export default NewsCard;