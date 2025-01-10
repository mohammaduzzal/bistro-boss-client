import SharedTitle from "../../Components/SharedTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://bistro-boss-server-roan-theta.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    return (
        <section className="my-10">
             <SharedTitle
            subHeading={'What Our Client Say'}
            heading={'Testimonial'}
            ></SharedTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    >
                <div className="mx-24 my-16 flex flex-col items-center">
                    <Rating
                    style={{maxWidth : 180}}
                    value={review.rating}
                    readOnly
                    />
                    <p className="py-8">{review.details}</p>
                    <h2 className="text-3xl text-orange-400">{review.name}</h2>
                </div>
                        </SwiperSlide>)
                }
        
      </Swiper>

            </div>
            
        </section>
    );
};

export default Testimonial;