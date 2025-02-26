import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Works = () => {
  // Original image sources from the grid gallery
  const images = [
    {
      id: 1,
      url: "/images/work/work1.jpg",
      title: "Image 1",
    },
    {
      id: 2,
      url: "/images/work/work2.jpg",
      title: "Image 2",
    },
    {
      id: 3,
      url: "/images/work/work3.jpg",
      title: "Image 3",
    },
    {
      id: 4,
      url: "/images/work/work4.jpg",
      title: "Image 4",
    },
    {
      id: 5,
      url: "/images/work/work5.jpg",
      title: "Image 5",
    },
    {
      id: 6,
      url: "/images/work/work6.jpg",
      title: "Image 6",
    },
    {
      id: 7,
      url: "/images/work/work7.jpg",
      title: "Image 7",
    },
    {
      id: 8,
      url: "/images/work/work8.jpg",
      title: "Image 8",
    },
    {
      id: 9,
      url: "/images/work/work9.jpg",
      title: "Image 9",
    },
    {
      id: 10,
      url: "/images/work/work10.jpg",
      title: "Image 10",
    },
    {
      id: 11,
      url: "/images/work/work11.jpg",
      title: "Image 11",
    },
    {
      id: 12,
      url: "/images/work/work12.jpg",
      title: "Image 12",
    },
    {
      id: 13,
      url: "/images/work/work13.jpg",
      title: "Image 13",
    },
    {
      id: 14,
      url: "/images/work/work14.jpg",
      title: "Image 14",
    },
    {
      id: 17,
      url: "/images/work/work17.jpg",
      title: "Image 17",
    },
    {
      id: 18,
      url: "/images/work/work18.jpg",
      title: "Image 18",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

  return (
    <section ref={targetRef} className="relative h-[600vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200 md:h-[480px] md:w-[480px]"
            >
              <Image
                src={image?.url}
                alt={image?.title}
                width={1000}
                height={1000}
                className="absolute inset-0 z-0 bg-cover bg-center object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
