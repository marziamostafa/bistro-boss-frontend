import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json)
            .then(data => {
                setReviews(data)
            })

    }, [])
    return (
        <div className="my-20">
            <SectionTitle
                heading="Testimonials"
                subHeading="What our client say?"
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(items => (

                ))
                }
                <SwiperSlide>Slide 1</SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Testimonials;