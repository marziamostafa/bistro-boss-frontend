import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11.00 am to 10.00 pm"}
                heading={"Order online"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                autoplay
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-3xl text-center -mt-16 text-white'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-3xl text-center -mt-16 text-white'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-3xl text-center -mt-16 text-white'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-3xl text-center -mt-16 text-white'>Deserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-3xl text-center -mt-16 text-white'>Salads</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;