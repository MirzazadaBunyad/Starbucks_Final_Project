import "swiper/css";
import "swiper/css/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function GiftCard({ category, cards }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  return (
    <div className="max-md:px-[16px] max-md:py-[16px] max-lg:pt-[16px] max-lg:pb-[16px] max-lg:pl-[99px] pt-[50px] pl-[131px]">
      <div className="max-md:p-0 font-[Sodo] pr-[40px] mb-[8px] flex justify-between">
        <h2 className="uppercase font-[SodoB] text-[14px] max-md:text-[13px] tracking-widest">{category}</h2>
        {cards.length > 4 ? (
          <Link
            className="text-[#00754A] max-md:text-[14px]"
            to={`/giftcards/category/${category.toLowerCase()}`}
          >
            See All
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="flex">
            <Carousel
                responsive={responsive}
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {cards.map((item, i) => (
                    <div key={nanoid()} className='carousel-card'>
                        <Link to={`/giftcards/${category.toLowerCase()}-${i}`}>
                            <img src={item} alt="" />
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div >
    </div>
  );
}
