// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// trend swiper
import trend_1 from "../../assets/trend book/daniel-hudson-kindle.jpg";
import trend_2 from "../../assets/trend book/frankie-cover.webp";
import trend_3 from "../../assets/trend book/front-cover---my-sugar-in-sugar-land-final.jpg";
import trend_4 from "../../assets/trend book/ghost_squad_print_final_ebook_updated.jpg";
import trend_5 from "../../assets/trend book/lovelot-a-match-made-in-hell-bound-to-the-vampires-1-400x600-rbb.jpg";
import trend_6 from "../../assets/trend book/mossdragon6by9.webp";
import trend_7 from "../../assets/trend book/sprinkles-and-skeletons-cover.jpg";
import trend_8 from "../../assets/trend book/the-girl-from-san-daniel-coverfront-final.jpg";
import trend_9 from "../../assets/trend book/the-overthinking-in-relationships-fix.jpg";
import trend_10 from "../../assets/trend book/vampires-and-villains-ebook-cover1638_0.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";

const TrendingBooks = () => {
  return (
    <article className="mt-20">
      <h1 className="text-text_color font-bold text-2xl underline mb-10 flex items-center gap-5 max-sm:text-lg">
        TRENDING BOOKS{" "}
        <FontAwesomeIcon className="text-rose-600" icon={faBookOpen} />
      </h1>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_1}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">Daniel Hudson</h3>
            <p className="text-sm text-gray-500">Jesse Storm</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_2}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">Frankie the Fart Wants a Friend</h3>
            <p className="text-sm text-gray-500">Daniel Huerga</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_3}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">My Sugar in Sugar Land</h3>
            <p className="text-sm text-gray-500">Dee Osah</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_4}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">Ghost Squad</h3>
            <p className="text-sm text-gray-500">Sean Kennedy</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_5}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">A Match Made in Hell</h3>
            <p className="text-sm text-gray-500">Traci Lovelot</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">Free</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_6}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">The Moss Dragon of Brittlekeep</h3>
            <p className="text-sm text-gray-500">Ashley Capes</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_7}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">Sprinkles and Skeletons</h3>
            <p className="text-sm text-gray-500">Leena Clover</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_8}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">The Girl From San-Daniele</h3>
            <p className="text-sm text-gray-500">Ilan Bahar</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">Free</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_9}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">
              The Overthinking In Relationships Fix
            </h3>
            <p className="text-sm text-gray-500">Rodney Noble</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">$0.99</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full block object-cover rounded-md cursor-pointer"
            src={trend_10}
            alt=""
          />
          <div className="mt-5">
            <h3 className="text-text_color">Vampires and Villains</h3>
            <p className="text-sm text-gray-500">Elizabeth Pantley</p>
            <h2 className="text-rose-600 font-bold text-lg mt-2">Free</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default TrendingBooks;
