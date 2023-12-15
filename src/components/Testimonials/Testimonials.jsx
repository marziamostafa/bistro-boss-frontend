import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])
    console.log(reviews)
    return (
        <div className="my-20">
            <SectionTitle
                heading="Testimonials"
                subHeading="What our client say?"
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center mx-24 my-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>

                        </SwiperSlide>
                    ))
                }


            </Swiper>

        </div>
    );
};

export default Testimonials;