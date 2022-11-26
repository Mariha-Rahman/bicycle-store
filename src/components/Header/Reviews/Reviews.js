import React from 'react';
import useReview from '../../../Hook/Usereview';
import CustomerReview from '../../CustomerReview/CustomerReview';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReview()

    return (
        <div>
            <h1>Total customers review:{reviews.length}</h1>
            <div className='review-section'>
                {
                    reviews.map(review => <CustomerReview
                        key={review.index}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;