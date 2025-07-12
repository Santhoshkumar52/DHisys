import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import clsx from 'clsx'

const Services = () => {
  const theme = useTheme()

  const cardData = [
    {
      title: "AI Strategy Consulting",
      description: "Aligning AI capabilities with your business goals and existing infrastructure",
      image: "/assets/Home/section3testimonial1.jpg",
      hoverImage: "85% More Effective AI Implementation"
    },
    {
      title: "Custom AI Development",
      description: "Aligning AI capabilities with your business goals and existing infrastructure",
      image: "/assets/Home/section3testimonial2.jpg",
      hoverImage: "75% Faster Time to Value"
    },
    {
      title: "Implementation & Integration",
      description: "Aligning AI capabilities with your business goals and existing infrastructure",
      image: "/assets/Home/section3testimonial3.jpg",
      hoverImage: "92% System Compatibility"
    },
    {
      title: "Training & Support",
      description: "Aligning AI capabilities with your business goals and existing infrastructure",
      image: "/assets/Home/section3testimonial4.jpg",
      hoverImage: "63% Higher User Adoption"
    }
  ]

  return (
    <section>
      {/* Services: Services Grid */}
      <div className="bg-white md:py-[5%] px-4 my-20 md:m-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-50 gap-10 md:mb-20 place-items-center max-w-7xl mx-auto">
          {cardData.map((card, i) => (
            <div
              key={i}
              className={clsx(
                "text-white rounded-[20%] py-5 px-6 text-center md:w-min transition-all duration-300",
                {
                  "bg-[#7D0C1C]": theme === "themeMaroon",
                  "bg-[#0A2240]": theme === "themeBlue",
                }
              )}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-65 h-40 object-cover rounded-[20%] mb-2 m-auto"
              />
              <p className="my-3 md:mt-0 inline-block bg-white text-[#7D0C1C] font-semibold px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition">
                {card.hoverImage}
              </p>
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-left w-70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services: From the Founder's Desk */}
      <div className="relative w-full h-auto min-h-[400px] overflow-hidden">
        <img
          src="../../assets/Home/header1.png"
          alt="header"
          className="w-full h-full object-cover scale-x-[-1] absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <div className="relative z-20 text-white text-center py-10">
          <div className="w-full m-auto">
            <div
              className={clsx(
                "opacity-80 px-6 md:px-20 py-8 rounded-lg text-white",
                {
                  "bg-[#7D0C1C]": theme === "themeMaroon",
                  "bg-[#0A2240]": theme === "themeBlue",
                }
              )}
            >
              <h2 className="text-3xl font-bold mb-10">From the Founder's Desk</h2>
              <p className="text-left text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa deleniti animi blanditiis nam? Aut, esse! Sunt, a sapiente beatae ex necessitatibus velit omnis quas, consectetur dolorem tenetur ullam impedit corporis reprehenderit quibusdam iusto dignissimos voluptatem voluptatum unde optio nostrum. Vero repellendus minima similique sequi iste molestias cumque, enim cupiditate recusandae earum in architecto alias voluptatibus doloribus, nesciunt, quibusdam maxime nisi! Id consectetur quas quasi corrupti consequatur cupiditate ipsa laborum placeat dolorum aliquid? Ab reprehenderit veniam fuga tempore incidunt dolorem accusantium accusamus earum illo perferendis nulla, assumenda corrupti laborum praesentium repellat voluptates error! Quibusdam, quidem alias earum facere saepe totam fugit nemo aliquam aperiam adipisci reiciendis id exercitationem minus quae incidunt dolorem voluptatum sunt delectus nisi iusto voluptate quia, fugiat ut at! Nulla quidem deleniti aperiam vitae deserunt vel beatae sit illo cumque eum laboriosam dolorum alias incidunt possimus quia consequatur, doloremque impedit odit eius architecto atque facere repellat quis.
              </p>
              <p className="mt-10 font-bold text-center">Founder & CEO, DHisys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
