import React from 'react'
//icons
import { FaLinkedin } from "react-icons/fa";


const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section
      <section className="bg-[#0A2240] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI DHisys: Guiding AI Transformation Journey
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Transform Your Data Assets with AI Excellence. Let’s Guide Your AI Transformation Journey
        </p>
      </section> */}

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
  <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
    {[
      {
        title: "Expertise Solution",
        text: "We specialize in developing robust, scalable AI solutions that integrate seamlessly with your existing data systems and infrastructure, allowing you to transform your business without costly migrations or replacements.",
        src: "/assets/Home/section1.jpg"
      },
      {
        title: "From Initial Implementation to Enterprise Scale: A Transformation Solution for Every Stage",
        text: "We understand that every business has unique AI implementation needs, whether you’re a startup exploring your first AI solution or an established enterprise seeking to enhance your existing data infrastructure with advanced intelligence.",
        src: "/assets/Home/section1.jpg"
      },
      {
        title: "AI Transformation",
        text: "Our initial AI implementation approach focuses on delivering core intelligence capabilities that demonstrate measurable value and gather user feedback, allowing you to refine and expand your AI transformation with confidence and agility.",
        src: "/assets/Home/section1.jpg"
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="flex flex-col rounded-lg p-6 text-center h-full"
      >
        <h3 className="text-xl font-bold mb-4 min-h-[64px] flex items-center justify-center">
          {feature.title}
        </h3>
        <img
          src={feature.src}
          alt="AI"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-gray-700">{feature.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* Process Section */}
      <section className="bg-[#0A2240] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Crafting Excellence with Defined Process</h2>
        <div className="grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
  {[
    {
      title: "Discovery and Strategy",
      description: "We begin by thoroughly analyzing your existing data systems and business processes to identify optimal AI transformation opportunities, then develop a tailored roadmap that integrates the core technologies with your current infrastructure.This strategic approach ensures that our AI solutions align with your business objectives while leveraging your existing data assets, maximizing ROI without requiring complete system overhauls.",
    },
    {
      title: "Concept Development",
      description: "We architect tailored AI solutions using our Multi-Cloud Platforms and Agent-to-Agent Protocols to address your specific business challenges.We create detailed implementation plans that outline how AI will integrate with your existing systems, establish data flows between traditional AI components, and define expected intelligence capabilities and outcomes.",
    },
    {
      title: "Project Launch",
      description: "We carefully deploy your AI transformation solution with thorough testing and stakeholder training, ensuring seamless integration with your existing systems while minimizing disruption to your current operations.",
    },
    {
      title: "Performance Evaluation",
      description: "After launch, we rigorously assess the project’s impact and effectiveness.",
    },
  ].map((step, index) => (
    <div key={index} className="bg-white text-black rounded-lg p-6 text-center">
      <h3 className="font-semibold mb-2 text-2xl rounded-full p-2 border w-12 m-auto">{index+1}</h3>
      <h4 className="text-xl font-medium">{step.title}</h4>
      <p className="text-xs mt-2 text-gray-700">{step.description}</p>
    </div>
  ))}
</div>
      </section>

      {/* Team Showcase */}
      <section className="bg-white py-16 px-6 text-center">
  {/* Title */}
  <div className='grid grid-col-2'>
<h2 className="text-3xl font-bold mb-2 text-left max-w-6xl mx-auto">
    Masters of Our Craft
  </h2>
  <p className="text-left text-lg text-gray-600 mb-10 max-w-6xl mx-auto">
    Dhisys Offers a complete digital transformation experience
  </p>
  </div>
  

  {/* Custom Image Layout */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Left Tall Image */}
    <div className="md:col-span-2">
      <img
        src="/assets/Home/section1.jpg"
        alt="Team Member 1"
        className="w-full h-full object-cover rounded-md max-h-[640px]"
      />
    </div>

    {/* Right 2 Stacked Images */}
    <div className="md:col-span-1 grid grid-rows-2 gap-6">
      <img
        src="/assets/Home/section1.jpg"
        alt="Team Member 2"
        className="w-full h-full object-cover rounded-md max-h-[310px]"
      />
      <img
        src="/assets/Home/section1.jpg"
        alt="Team Member 3"
        className="w-full h-full object-cover rounded-md max-h-[310px]"
      />
    </div>
  </div>
</section>


      {/* Meet the Innovators */}
      <section className="bg-[#0A2240] text-white py-40 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">Meet the Innovators</h2>
  <div className="grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
    {[
      {
        role: "Founder & CTO",
        img: "/assets/Home/section1.jpg", // White shirt man
      },
      {
        role: "Co-Founder",
        img: "/assets/Home/section1.jpg", // Woman standing at a table
      },
      {
        role: "Lead Designer",
        img: "/assets/Home/section1.jpg", // Man at laptop
      },
      {
        role: "Manager",
        img: "/assets/Home/section1.jpg", // Woman smiling
      },
    ].map(({ role, img }, i) => (
      <div key={i} className="bg-white text-black p-6 rounded-lg">
        <img
          src={img}
          alt={role}
          className="rounded w-45 h-32 mx-auto mb-4 object-cover"
        />
        <p className="font-semibold">{role}</p>
        <a href="#" className="text-2xl underline mt-2 inline-block"><FaLinkedin/></a>
      </div>
    ))}
  </div>
</section>
    </div>
  )
}

export default About