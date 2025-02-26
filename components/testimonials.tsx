"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IconStarFilled } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface TestimonialSlideProps {
  text: string;
  author: string;
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({
  text,
  author,
}) => (
  <div className="flex flex-col items-center space-y-4 px-4 py-8 text-center">
    <p className="text-lg md:text-2xl">{text}</p>
    <div className="flex items-center gap-x-1">
      {[...Array(5)].map((_, index) => (
        <IconStarFilled key={index} className="text-2xl text-yellow-500" />
      ))}
    </div>
    <div className="mt-4">
      <p className="text-xl font-medium">{author}</p>
    </div>
  </div>
);

export default function TestimonialSection() {
  const testimonials = [
    {
      text: `"I recently engaged Socioheads for their social media marketing services, and I couldn't be happier with the results. Their team demonstrated a deep understanding of social media platforms and crafted a tailored strategy that perfectly suited my business needs."`,
      author: "Vaibhav Gautam",
    },
    {
      text: `"I had a fantastic experience with Socioheads! Their social media expertise truly delivered outstanding results for my business. From creative content to targeted campaigns, they exceeded my expectations. Highly recommend! #TopNotchMarketing"`,
      author: "Nazar Sachdeva",
    },
    {
      text: `"Perfect team with great service. They are passionate and dedicated towards their work, had a wonderful experience."`,
      author: "Karsimran Kaur",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-blue-500",
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialSlide
              text={testimonial.text}
              author={testimonial.author}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
