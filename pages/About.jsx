import React from 'react'

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
      <section className="py-16 px-6 grid gap-10 md:grid-cols-3 text-center max-w-7xl mx-auto">
        {[
          {
            title: "Expertise Solution",
            text: "We specialize in developing robust, scalable AI solutions that integrate seamlessly with your existing data systems and infrastructure, allowing you to transform your business without costly migrations or replacements.",
            // src:
          },
          {
            title: "From Initial Implementation to Enterprise Scale: A Transformation Solution for Every Stage",
            text: "We understand that every business has unique AI implementation needs, whether you’re a startup exploring your first AI solution or an established enterprise seeking to enhance your existing data infrastructure with advanced intelligence.",
            // src:
          },
          {
            title: "AI Transformation",
            text: "Our initial AI implementation approach focuses on delivering core intelligence capabilities that demonstrate measurable value and gather user feedback, allowing you to refine and expand your AI transformation with confidence and agility.",
            // src:
          },
        ].map((feature, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <img
              src={feature.src}
              alt="AI"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p>{feature.text}</p>
          </div>
        ))}
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
  <h2 className="text-3xl font-bold mb-10">Masters of Our Craft</h2>
  <div className="grid gap-6 md:grid-cols-2 grid-rows-2 max-w-6xl mx-auto">
    {[
      {
        src: "/assets/Home/section1.jpg", // Woman with coffee mug, brick wall
        alt: "Team Member 1",
      },
      {
        src: "/assets/Home/section1.jpg", // Woman working on laptop
        alt: "Team Member 2",
      },
      {
        src: "/assets/Home/section1.jpg", // Woman in red near desk
        alt: "Team Member 3",
      },
    ].map(({ src, alt }, i) => (
      <img
        key={i}
        src={src}
        alt={alt}
        className="w-full h-[300px] object-cover rounded-md"
      />
    ))}
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
        <a href="#" className="text-blue-600 text-sm underline mt-2 inline-block">LinkedIn</a>
      </div>
    ))}
  </div>
</section>
    </div>
  )
}

export default About