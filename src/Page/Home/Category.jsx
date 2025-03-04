import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../assets/home/slide1.jpg';
import slider2 from '../../assets/home/slide2.jpg';
import slider3 from '../../assets/home/slide3.jpg';
import slider4 from '../../assets/home/slide4.jpg';
import slider5 from '../../assets/home/slide5.jpg';
import SharedTitle from '../../Components/SharedTitle';

const Category = () => {
    return (
        <section>
            <SharedTitle
            subHeading={'From 11.00 am To 10.00 pm'}
            heading={'Order Online'}
            ></SharedTitle>
                   <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mt-10"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>Salads</p>
            </SwiperSlide>
    
        <SwiperSlide>
            <img src={slider2} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>pizzas</p>
            </SwiperSlide>
    
        <SwiperSlide>
            <img src={slider3} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>soups</p>
            </SwiperSlide>
    
        <SwiperSlide>
            <img src={slider4} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>desserts</p>
            </SwiperSlide>
    
        <SwiperSlide>
            <img src={slider5} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>Salads</p>
            </SwiperSlide>
    
       
      </Swiper>
     </section>
    );
};

export default Category;