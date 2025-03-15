"use client";

import Calendly from "./calendly";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] px-5">
      <Link href="https://wa.me/918595840297" target="_blank">
        <Image
          src={"/images/whatsapp.png"}
          alt="whatsapp-icon"
          width={50}
          height={50}
          className="fixed bottom-10 right-5 z-50 animate-bounce"
        />
      </Link>
      <Header />
      <div className="mx-auto mb-16 justify-between px-6 md:mt-14 md:flex md:px-0 xl:w-4/5 2xl:w-[68%]">
        <div className="md:w-2/5">
          <h1 className="pt-10 text-4xl font-semibold">Let&apos;s Meet</h1>
          <p className="py-4 text-lg text-gray-500">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>
          {[
            {
              title: "Design + Implementation",
              description:
                "Turn your ideas into reality with our design & implementation services.",
            },

            {
              title: "Free Consultation",
              description:
                "Get expert advice on how to improve your business and increase your online presence.",
            },
            {
              title: "Technical Support",
              description:
                "Get technical support for your website or application.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.5 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="flex-shrink-0 rounded-md text-2xl text-[#3d80d7]" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">
                  {item.title}
                </h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meeting;
