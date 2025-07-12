
import { useTheme } from '../../Context/ThemeContext' 
import clsx from 'clsx'
//icons
import { FaPhoneAlt,FaArrowAltCircleRight   } from "react-icons/fa"; 
import { IoMdMail } from "react-icons/io";



const Footer = () => {
  const theme = useTheme()
  const year=new Date().getFullYear()

  return (
    <div className="p-3 text-neutral-50 bg-black">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Top Section */}
        <div className="footerTop w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:h-[215.98px]">
          <div>
            <h1 className="text-[32px] md:text-[44px] font-bold">Ready to Elevate?</h1>
            <p className="max-w-full md:max-w-[500px]">
              Partner with DHIsys and take the first step towards AI transformation.
            </p>
          </div>
          <div>
            <a
              href="#"
              className={clsx("mt-2 md:mt-0 inline-block bg-white font-semibold px-4 py-2 rounded-full transition hover:bg-gray-300",{
          "text-[#7D0C1C]": theme === "themeMaroon",
          "text-[#0A2240]": theme === "themeBlue",
        })}
            >
              Book Free Consultation <FaArrowAltCircleRight className='inline'/>
            </a>
          </div>
        </div>

        <hr className="my-6 border-neutral-700" />

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <img
            src="../../assets/Common/footer.jpg"
            alt=""
            className="w-full sm:w-[250px] md:w-[300px] object-contain"
          />

          <div className="w-full sm:w-[200px] flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-[22px] mb-2 font-semibold">Services</h2>
            <p>AI Strategy Consulting</p>
            <p>Custom AI Development</p>
            <p>Implementation & Integration</p>
            <p>Training & Support</p>
          </div>

          <div className="w-full sm:w-[200px] flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-[22px] mb-2 font-semibold">Company</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Press</p>
          </div>

          <div className="w-full sm:w-[200px] flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-[22px] mb-2 font-semibold">Contact</h2>
            <p>Rome GA 310601</p>
            <p><FaPhoneAlt className={clsx('inline',{
          "text-[#7D0C1C]": theme === "themeMaroon",
          "text-[#0A2240]": theme === "themeBlue",
        })}/> +91 12345 67890</p>
            <p><IoMdMail className={clsx('inline',{
          "text-[#7D0C1C]": theme === "themeMaroon",
          "text-[#0A2240]": theme === "themeBlue",
        })}/> mail@example.com</p>
          </div>
        </div>

        <hr className="my-6 border-neutral-700" />

        <p className="text-center text-sm mt-4">
          Copyright © {year} DHIsys - Intelligent Systems for Intelligent Business
        </p>
      </div>
    </div>
  )
}

export default Footer
