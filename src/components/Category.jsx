import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from './SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}/>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src="/src/assets/home/slide1.jpg" alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide2.jpg" alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>pizzas</h3></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide3.jpg" alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>soups</h3></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide4.jpg" alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3></SwiperSlide>
        <SwiperSlide><img src="/src/assets/home/slide5.jpg" alt="" /><h3 className='text-4xl uppercase text-center -mt-16 text-white'>salads</h3></SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Category;