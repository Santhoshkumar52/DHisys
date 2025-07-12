// import React from 'react';
import { useTheme } from "../Context/ThemeContext";
import clsx from "clsx";

const Home = () => {
  const theme = useTheme();
  const contentBlocks = [
    "DHiSys is an innovative AI enablement firm dedicated to transforming businesses through intelligent systems. We specialize in implementing cutting-edge AI technologies — Multi-Cloud Platform, Agent-to-Agent Protocols, and AI Models Integration — that work seamlessly with your existing data assets.",
    "Our approach bridges the technology gap without requiring costly migrations or system overhauls. We believe AI should adapt to your business needs, not the other way around. Our team combines expertise in cloud infrastructure, data science, and business strategy to create practical AI solutions that deliver measurable results.",
    "As your partner in AI transformation, we guide you from strategy development through implementation and ongoing support. We're committed to making enterprise-grade AI accessible to organizations of all sizes, turning your existing data into valuable intelligence that drives growth, enhances decision-making, and creates competitive advantage in a data-driven world.",
    " Our team combines expertise in AI strategy, data science, and enterprise integration. We work closely with you to understand your business needs and implement core technologies — Multi-Cloud Platform, Agent-to-Agent Protocols, and AI Models Integration — delivering comprehensive AI transformation that enhances your existing systems and operations."
  ];

  return (
    <div>
      {/* Section 1 */}
      <div
        className={clsx("py-30 px-4 md:px-16 text-white", {
          "bg-[#7D0C1C]": theme === "themeMaroon",
          "bg-[#0A2240]": theme === "themeBlue",
        })}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-center relative">
            <img src="/assets/Home/section1.jpg" alt="AI Transformation" className="mx-auto rounded-md shadow" />
            <p className='absolute bottom-4 w-full text-[#7D0C1C]'>AI Transformation, Intelligently Delivered</p>
          </div>

          <div className='w-[475px] md:mx-5'>
            <h2 className="text-3xl font-bold mb-4 w-[290px] ">Our Purpose and Aspiration</h2>
            <p className="mb-4">DHIsys bridges the technology gap by providing businesses with enterprise-grade AI capabilities that leverage your existing data assets. We transform your data into valuable intelligence using cutting-edge AI technologies: Multi-Cloud Platforms, Agent-to-Agent Protocols, and AI Models Integration.</p>
            <p>Our goal is to make AI transformation accessible and practical for all businesses. By implementing solutions that work with your current systems — not replacing them — we unlock the value hidden in your data. This approach creates intelligent systems for intelligent business, delivering measurable outcomes through better decision-making, automated workflows, and predictive insights.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white md:py-[5%] px-4 md:flex justify-center items-center flex-col md:my-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-20">Guiding Your AI Transformation Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:mb-20 xl:gap-1 gap-10 w-full place-items-center">
  {[
  {
    title: "AI Strategy Consulting",
    description: "UAligning AI capabilities with your business goals and existing infrastructure",
    image: "/assets/Home/section3testimonial1.jpg",
  },
  {
    title: "Custom AI Development",
    description: "Aligning AI capabilities with your business goals and existing infrastructure",
    image: "/assets/Home/section3testimonial2.jpg",
  },
  {
    title: "Implementation & Integration",
    description: "Aligning AI capabilities with your business goals and existing infrastructure",
    image: "/assets/Home/section3testimonial3.jpg",
  },
  {
    title: "Training & Support",
    description: "Aligning AI capabilities with your business goals and existing infrastructure",
    image: "/assets/Home/section3testimonial4.jpg",
  },
].map((card, i) => (
    <div
      key={i}
      className={clsx(
        "text-white rounded-xl p-4 text-center md:w-min",
        {
          "bg-[#7D0C1C]": theme === "themeMaroon",
          "bg-[#0A2240]": theme === "themeBlue",
        }
      )}
    >
      <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-lg font-bold">
        {i + 1}
      </div>
      <h3 className="font-semibold mb-2">{card.title}</h3>
      <img
        src={card.image}
        alt={card.title}
        className="w-65 h-40 object-cover rounded-md mb-2 m-auto"
      />
      <p className="text-sm text-left w-70 m-auto">{card.description}</p>
    </div>
  ))}
</div>
      </div>

      {/* Section 3 */}
      <div className={clsx("py-30 px-4 md:px-16 grid text-white", {
        "bg-[#7D0C1C]": theme === "themeMaroon",
        "bg-[#0A2240]": theme === "themeBlue",
      })}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-20 mx-auto">Our AI Transformation Vision & Project </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className='w-[475px] md:mx-5'>
            <p className="mb-4">While we’re at the beginning of our journey, DHisys is poised to deliver
            exceptional AI transformation solutions. Our approach focuses on:</p>
            <ul className='my-10 list-disc pl-5'>
              <li>“We believe that every business has untapped potential hidden in their existing data. Our mission is to unlock that potential through strategic AI implementation without disrupting your current systems.”</li>
              <li>“Our team brings together expertise in cloud infrastructure, AI integration, and data analysis to create seamless transformation pathways for businesses ready to evolve.”</li>
              <li>“We’re committed to making enterprise-grade AI accessible to businesses of all sizes by working with your existing data assets rather than requiring costly migrations.”</li>
            </ul>
          </div>
          <div className="text-center w-[430px] h-[490px]">
            <img src="/assets/Home/section4.jpg" alt="AI Transformation" className="mx-auto w-full h-full rounded-md shadow object-cover" />
            <p className="bottom-4 w-full font-bold text-[26px] py-2">AI Transformation</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="relative w-full h-auto min-h-[400px] md:min-h-[500px] lg:h-full overflow-hidden">
        <img src="../../assets/Home/header1.png" alt="header" className="w-full h-full object-cover scale-x-[-1] absolute inset-0" />
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center text-white text-center px-4 py-10">
          <div className="w-full max-w-screen-xl flex flex-col gap-6">
      {contentBlocks.map((text, i) => (
        <div
          key={i}
          className={clsx(
            "opacity-80 p-6 rounded-lg w-full md:w-4/5 lg:w-[650px] text-white",
            {
              "bg-[#7D0C1C]": theme === "themeMaroon",
              "bg-[#0A2240]": theme === "themeBlue",
              "self-start": i % 2 === 0,
              "self-end": i % 2 !== 0,
            }
          )}
        >
          <p>{text}</p>
        </div>
      ))}
    </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="bg-white py-15 px-4 md:px-16 grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className='w-[475px] md:mx-5'>
            <h1 className="text-[32px] md:text-[44px] font-medium md:w-[400px] leading-10">Bring Your Ideas to life</h1>
            <p className='text-[#7D0C1C] font-bold xl:mt-5'>From startups to established enterprises, we partner with businesses across industries to create exceptional AI Transformation</p>
          </div>
          <div className="text-center w-[390px] h-[330px]">
            <img src="/assets/Home/section6Lamps.jpg" alt="AI Transformation" className="mx-auto w-full h-full rounded-md shadow object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
