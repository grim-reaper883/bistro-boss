import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subHeading={"What our clients say"}
          heading={"Testimonials"}
        />

        <div className="mt-12">
          <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="mx-4 md:mx-8 my-8 md:my-12 flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Rating 
                    style={{ maxWidth: 180 }} 
                    value={review.rating} 
                    readOnly 
                    className="mb-4"
                  />
                  <p className="py-6 md:py-8 text-sm md:text-base leading-relaxed text-gray-700">{review.details}</p>
                  <h3 className="text-xl md:text-2xl text-orange-400 font-bold">{review.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
