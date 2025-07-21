import React from 'react';
import Image1 from "../src/assets/1section3.webp";
import Image2 from "../src/assets/2section3.webp";
import Image3 from "../src/assets/3section3.png";
import { motion } from "framer-motion";

const cards = [
  {
    title: 'Artists',
    description:
      'The fusion of technology and creativity is transforming art. Discover AI tools that help you redefine creation, stay unique, streamline workflows, and expand creative...',
    image: Image1,
  },
  {
    title: 'Entrepreneur',
    description:
      'Discover AI tools to streamline workflows, enhance productivity, and fuel innovation. Make smarter decisions, accelerate growth, and open doors to new opportunities.',
    image: Image2,
  },
  {
    title: 'Seo Specialist',
    description:
      'Elevate your SEO strategies with curated AI tools to boost rankings, analyze keywords, optimize content, automate tasks, and drive organic growth effortlessly.',
    image: Image3,
  },
];


const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ThirdSection() {
  return (
    <>
      <section
        style={{ backgroundImage: "url('/public/BackgroundSection3.svg')" }}
        className="bg-[#0D0D0D] bg-cover bg-center bg-no-repeat text-white py-16 px-4 md:px-12 lg:px-20 xl:mt-20">
        <div className=" mx-auto ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Empower your profession</h2>
          <p

            className="  sm:text-lg  text-[#ffffffb3] max-w-6xl text-center mx-auto px-4 md:px-8 lg:px-0 mb-8 md:mb-12">

            Offering a wide range of AI-related content, including prompts for art and productivity, detailed
            information on AI products and models, leaderboards, courses by top instructors, and insightful blogs on AI
            trends and reviews.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-[#666666] text-sm font-medium mt-2  ">{card.description}</p>
                  <button
                    className="transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-white font-semibold rounded-full text-sm xl:text-base disabled:opacity-50 bg-blue-500 hover:bg-blue-300 h-12 bg-secondary-nine w-[146px] mt-4"


                  >
                    See More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


