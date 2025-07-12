import React from 'react';
import { useTheme } from "../Context/ThemeContext";
import clsx from "clsx";

const Home = () => {
  const theme = useTheme();

  const contentBlocks = [
    "DHiSys is an innovative AI enablement firm dedicated to transforming businesses through intelligent systems. We specialize in implementing cutting-edge AI technologies — Multi-Cloud Platform, Agent-to-Agent Protocols, and AI Models Integration — that work seamlessly with your existing data assets.",
    "Our approach bridges the technology gap without requiring costly migrations or system overhauls. We believe AI should adapt to your business needs, not the other way around.",
    "As your partner in AI transformation, we guide you from strategy development through implementation and ongoing support. We're committed to making enterprise-grade AI accessible to organizations of all sizes.",
    "Our team combines expertise in AI strategy, data science, and enterprise integration. We work closely with you to understand your business needs and implement core technologies."
  ];

  const cards = [
    {
      title: "AI Strategy Consulting",
      description: "Aligning AI capabilities with your business goals and existing infrastructure.",
      image: "/assets/Home/section3testimonial1.jpg",
    },
    {
      title: "Custom AI Development",
      description: "Tailored AI solutions developed to fit your unique business workflows.",
      image: "/assets/Home/section3testimonial2.jpg",
    },
    {
      title: "Implementation & Integration",
      description: "Seamless integration with existing systems to avoid disruptions.",
      image: "/assets/Home/section3testimonial3.jpg",
    },
    {
      title: "Training & Support",
      description: "Ensuring your team can confidently use and manage new AI systems.",
      image: "/assets/Home/section3testimonial4.jpg",
    },
  ];

  return (
    <div>
      {/* Section 1 */}
      <div className={clsx("py-20 px-4 md:px-16 text-white", {
        "bg-[#7D0C1C]": theme === "themeMaroon",
        "bg-[#0A2240]": theme === "themeBlue",
      })}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center relative">
            <img src="/assets/Home/section1.jpg" alt="AI Transformation" className="mx-auto rounded-md shadow" />
            <p className="absolute bottom-4 w-full text-[#7D0C1C]">AI Transformation, Intelligently Delivered</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Purpose and Aspiration</h2>
            <p className="mb-4">DHIsys bridges the technology gap by providing businesses with enterprise-grade AI capabilities that leverage your existing data assets.</p>
            <p>Our goal is to make AI transformation accessible and practical for all businesses—delivering measurable outcomes through better decision-making and predictive insights.</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Guiding Your AI Transformation Journey</h2>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className={clsx("text-white rounded-xl p-4", {
              "bg-[#7D0C1C]": theme === "themeMaroon",
              "bg-[#0A2240]": theme === "themeBlue",
            })}>
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <p className="text-sm text-left">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className={clsx("py-20 px-4 md:px-16 text-white", {
        "bg-[#7D0C1C]": theme === "themeMaroon",
        "bg-[#0A2240]": theme === "themeBlue",
      })}>
        <h2 className="text-3xl font-bold text-center mb-10">Our AI Transformation Vision & Project</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4">DHisys is poised to deliver exceptional AI transformation solutions. Our approach focuses on:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>&ldquo;We believe that every business has untapped potential hidden in their existing data.&rdquo;</li>
              <li>&ldquo;Our team creates seamless transformation pathways for businesses ready to evolve.&rdquo;</li>
              <li>&ldquo;We make enterprise-grade AI accessible to businesses of all sizes.&rdquo;</li>
            </ul>
          </div>
          <div className="text-center">
            <img src="/assets/Home/section4.jpg" alt="AI Transformation" className="rounded-md shadow w-full max-w-md mx-auto object-cover" />
            <p className="text-xl font-bold mt-4">AI Transformation</p>
          </div>
        </div>
      </div>

      {/* Section 4 - Floating Quote Boxes */}
      <div className="relative w-full overflow-hidden min-h-[500px]">
        <img src="/assets/Home/header1.png" alt="header" className="w-full h-full object-cover scale-x-[-1] absolute inset-0" />
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        <div className="relative z-20 flex justify-center items-center text-white text-center px-4 py-10">
          <div className="w-full max-w-6xl flex flex-col gap-6">
            {contentBlocks.map((text, i) => (
              <div
                key={i}
                className={clsx(
                  "opacity-90 p-6 rounded-lg max-w-full md:max-w-3xl lg:max-w-[650px] text-white",
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
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">Bring Your Ideas to Life</h2>
            <p className="text-[#7D0C1C] font-bold mt-4">From startups to enterprises, we partner with businesses to create exceptional AI transformation strategies.</p>
          </div>
          <div className="text-center">
            <img src="/assets/Home/section6Lamps.jpg" alt="AI Lamp" className="w-full max-w-md mx-auto rounded-md shadow object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
