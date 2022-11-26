import React from 'react';

const CustomerReview = (props) => {
    console.log(props)
    const { name, review, rating } = props.review
    return (
        <div className='bg-indigo-200 rounded-md relative h-36'>
            <h1 className='text-xl p-2'>Name:{name}</h1>
            <p>Review:{review}</p>
            <p className='absolute  bottom-0 left-0 right-0'>Rate:{rating}/5</p>
        </div>
    );
};

export default CustomerReview;