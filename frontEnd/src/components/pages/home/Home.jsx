// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation} from "swiper/modules";

// home swiper
import home_swipe_1 from "../../../assets/home swipe/home_swipe_1.jpg";
import home_swipe_2 from "../../../assets/home swipe/home_swipe_2.jpg";
import home_swipe_3 from "../../../assets/home swipe/home_swipe_3.jpg";
import TrendingBooks from "../../trendingBooks/TrendingBooks";
import Categories from "../../categories/Categories";

const Home = () => {
  return (
    <section>
      <article className="-mx-4 mt-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-80"
        >
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <div className="absolute">
              <h1 className="font-bold text-6xl max-sm:text-4xl">
                LOTS OF EBOOKS. 100% FREE
              </h1>
              <p className="mt-10">
                Welcome to your friendly neighborhood library. We have more than
                50,000 free ebooks waiting to be discovered.
              </p>
            </div>
            <img
              className="w-full h-full block object-cover"
              src={home_swipe_1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <div className="absolute">
              <h1 className="font-bold text-6xl max-sm:text-4xl">
                FREE AND DISCOUNTED BESTSELLERS
              </h1>
              <p className="mt-10">
                Join 150,000+ fellow readers. Get free and discounted
                bestsellers straight to your inbox with the ManyBooks eBook
                deals newsletter.
              </p>
            </div>
            <img
              className="w-full h-full block object-cover"
              src={home_swipe_2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="text-center text-lg flex justify-center items-center">
            <div className="absolute">
              <h1 className="font-bold text-6xl max-sm:text-4xl">
                The Ultimate Guide to Free eBooks
              </h1>
              <p className="mt-10">
                Not sure what to read next? Explore our catalog of public domain
                books with our editors. Some real gems are hidden in our
                library.
              </p>
            </div>
            <img
              className="w-full h-full block object-cover"
              src={home_swipe_3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </article>
      <TrendingBooks />
      <Categories />
      
    </section>
  );
};

export default Home;
