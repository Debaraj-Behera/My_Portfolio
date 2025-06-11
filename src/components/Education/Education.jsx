import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 bg-skills-gradient font-sans clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-2 sm:mt-4" />
        <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-white h-full" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative w-full mb-12 md:mb-20 flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Dot/Logo - only on desktop */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 rounded-full justify-center items-center z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#8245ec] flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
                  />
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 24px rgba(130, 69, 236, 0.3)",
                }}
                className={`relative bg-[#0F172A] text-white border border-[#8245ec] rounded-lg sm:rounded-xl shadow-lg w-full md:w-[48%] max-w-xl p-4 sm:p-6 z-0 mt-12 md:mt-0 transition-transform duration-300 ${
                  isLeft ? "md:ml-12" : "md:mr-12"
                }`}
              >
                {/* Top logo - only on mobile */}
                <div className="md:hidden mb-6 w-16 h-16 mx-auto bg-white border-4 border-[#8245ec] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-cover"
                  />
                </div>

                {/* Header */}
                <div className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-4">
                  <div className="hidden md:block w-14 h-12 sm:w-20 sm:h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                    <h4 className="text-xs sm:text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-[0.7rem] sm:text-sm text-gray-500">{edu.date}</p>
                  </div>
                </div>

                {/* Grade and Description */}
                <p className="text-gray-400 font-bold text-sm sm:text-base">
                  Grade: {edu.grade}
                </p>
                <p className="mt-1 sm:mt-2 text-gray-400 text-sm">{edu.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
