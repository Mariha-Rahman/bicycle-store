import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hook/Usereview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReview()


    return (
        <section>
            <div className='home-container'>
                <div className='mt-40 pl-36 text-left '>
                    <h1 className='text-7xl font-serif text-orange-700'>GAINT BIKES</h1>
                    <h1 className='text-3xl text-gray-700 font-serif mt-3 font-bold '>PERFORMANCE & RACING ROAD BIKES</h1>
                    <button className='bg-green-600 text-white p-2 border rounded font-bold text-xl mt-16 hover:bg-green-800'>Purchase Now</button>
                </div>
                <div className='image-section'>
                    <img className='' src="https://i5.walmartimages.com/asr/7a9ecb27-9db4-4ed3-a325-d88b99f221d0.b8a6d4470f8034fb8968c01f18e34902.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" alt="" />
                </div>
            </div>
            <div className='bg-yellow-100 h-80 relative'>
                <h1 className='text-3xl p-5 text-pink-700 font-bold'>All Customers Review:{reviews.length}</h1>
                <div className='home-review'>
                    {
                        reviews.slice(0, 4).map(review =>
                            <div >
                                <p>{review.name}</p>
                                <p>{review.review}</p>
                            </div>
                        )
                    }

                </div>
                <div className=' bg-green-500 p-2 mt-6 text-3xl text-indigo-700 absolute bottom-0 left-0 right-0'>
                    <Link to='/reviews' >View All Reviews</Link>
                </div>
            </div>
        </section>
    );
};

export default Home;