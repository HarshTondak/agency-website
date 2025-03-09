import WordPullUp from "@/components/magicui/word-pull-up";
import Image from "next/image";

const services = [
  {
    icon: "/images/web-dev.webp",
    title: "Web Design + Development",
    description:
      "Socioheads offers web development services that help businesses create professional and functional websites that effectively represent their brand and engage their target audience.",
  },
  {
    icon: "/images/seo.webp",
    title: "Search Engine Optimization",
    description:
      "Socioheads offers SEO services that help businesses increase their visibility and rankings on search engines.",
  },
  {
    icon: "/images/social-media.webp",
    title: "Social Media Marketing",
    description:
      "Socioheads offers social media management services to help businesses optimize their social media profiles and create engaging content.",
  },
  {
    icon: "/images/content-writing.webp",
    title: "Content Writing",
    description:
      "Socioheads provides content writing services that help businesses create high-quality, engaging, and optimized content for their websites, blogs and social media channels.",
  },
  {
    icon: "/images/gmb.webp",
    title: "Google My Business",
    description:
      "SocioHead elevates your online presence and local visibility with Google My Business service, to ensure your business is not just seen but stands out.",
  },
  {
    icon: "/images/photo.webp",
    title: "Photography",
    description:
      "Socioheads offers professional photography services that enable businesses to showcase their products, services, and brand in a visually appealing and engaging manner.",
  },
];

export function Services() {
  return (
    <div className="mx-6 md:mx-auto md:px-0 xl:w-4/5 2xl:w-[68%]">
      <h1>
        <WordPullUp
          className="text-3xl font-medium md:text-center md:text-5xl"
          words="Built from the ground up"
        />
      </h1>
      <p className="mx-auto py-4 text-xl text-gray-500 md:w-1/2 md:text-center md:text-2xl">
        All of our services are designed to help your business stand out
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex h-full cursor-pointer flex-col justify-between space-y-4 rounded-md bg-gray-100 p-4 text-center transition-transform hover:scale-105"
          >
            <Image
              src={service.icon}
              width={100}
              height={100}
              className="w-full rounded-md bg-gray-100 object-contain p-4"
              alt="image"
            />
            <h1 className="text-xl font-medium">{service.title}</h1>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
