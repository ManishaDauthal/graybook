





import Image1 from "../src/assets/scroll1.svg";
import Image2 from "../src/assets/scroll2.svg";
import Image3 from "../src/assets/scroll3.svg";
import { motion } from "framer-motion";


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

const features = [
  {
    title: "Your AI Arsenal",
    description:
      "Top tools across professional categories with processes, insights, features, and pricing.",
    button: "Find Tools",
    icon: Image1,
  },
  {
    title: "Showcase your Tool, Prompt or Blog",
    description:
      "Submit your AI tool or prompt get rated, engage in forums, and unlock sponsorship and growth opportunities.",
    button: "Get Started",
    icon: Image2,
  },
  {
    title: "Tutorials & Insights",
    description:
      "Stay ahead of AI trends with tutorials, updates, insights, tool comparisons, tips, hacks, and more.",
    button: "Level Up",
    icon: Image3,
  },
];

const FeatureCards = () => {
  return (


    <section className="py-14 md:py-20 mx-auto">
      <div className=" px-[20px] md:px-[40px] lg:w-[94%] 2xl:w-[94%]  mx-auto flex">
        <button aria-label="Scroll" className=" w-20 hidden md:flex flex-col items-center mt-2 "><span className="text-[#909090] text-[24px]  font-semibold   
        mb-4 -rotate-90 whitespace-nowrap">Scroll</span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8667 
        7.0001C16.1405 7.0001 16.4031 7.10546 16.5967 7.293C16.7902 
        7.48053 16.899 7.73489 16.899 8.0001L16.899 21.5901L18.2306 20.2901C18.425 20.1018 18.6886 19.996 18.9635 19.996C19.2384 19.996 19.502 20.1018 19.6964 20.2901C19.8908 
        20.4784 20 20.7338 20 21.0001C20 21.2664 19.8908 21.5218 19.6964 21.7101L16.5996 24.7101C16.4545 24.8489 16.2702 24.9429 16.0699 24.9802C15.8697 25.0176 15.6625 24.9967 15.4745 
        24.9201C15.286 24.8451 15.1246 24.7177 15.0107 24.554C14.8968 24.3902 14.8355 24.1975 14.8345 24.0001L14.8345 8.0001C14.8345 7.73489 14.9432 7.48053 15.1368 7.293C15.3304 7.10546 
        15.593 7.0001 15.8667 7.0001Z" fill="#909090"></path><path d="M12.7701 20.0001C12.9059 19.9993 13.0406 20.0245 13.1664 20.0743C13.2921 20.1241 13.4065 20.1974 13.503 20.2901L16.5997 23.2901C16.7941 
        23.4784 16.9033 23.7338 16.9033 24.0001C16.9033 24.1319 16.8765 24.2625 16.8244 24.3843C16.7723 24.5061 16.696 24.6168 16.5997 24.7101C16.5035 24.8033 16.3892 24.8773 16.2635 24.9277C16.1377 24.9782 
        16.003 25.0042 15.8668 25.0042C15.5919 
        25.0042 15.3283 24.8984 15.1339 24.7101L12.0372 21.7101C11.9404 21.6171 11.8636 21.5065 11.8112 
        21.3846C11.7588 21.2628 11.7318 21.1321 11.7318 21.0001C11.7318 20.868 11.7588 20.7373 11.8112 20.6155C11.8636 
        20.4936 11.9404 20.383 12.0372 20.2901C12.1336 20.1974 12.248 20.1241 12.3738 20.0743C12.4995 20.0245 12.6342 
        19.9993 12.7701 20.0001Z" fill="#909090"></path></svg>
        </button>


        <div className="flex flex-col mt-4 md:flex-row justify-center  gap-5 lg:gap-10 xl:gap-16 2xl:gap-20 ">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}



              className="flex flex-col justify-between w-[100%]   bg-blue-100 bg-primary-ten rounded-[20px] p-6 xl:p-8  text-left  not-in-view in-view"
            >

              <div className=" ">
                <img src={item.icon} alt={item.title} />
              </div>


              <h3 className="text-lg font-bold  mb-2 xl:mb-4   mt-2 text-blue-900">{item.title}</h3>


              <p className="text-gray-400 text-md mb-6 ">{item.description}</p>


              <button className="w-full transition-all bg-neutral-700 font-semibold text-lg text-white shadow-xl px-4 py-4 rounded-lg hover:bg-neutral-eight">
                {item.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
