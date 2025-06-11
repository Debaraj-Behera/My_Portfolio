import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-12 md:px-[10vw] bg-skills-gradient font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative w-full mb-10 flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Logo (centered dot) - only on desktop */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 md:w-16 md:h-16 rounded-full justify-center items-center z-10">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border-2 border-[#8245ec] flex items-center justify-center">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className={`relative bg-[#0F172A] text-white border border-[#8245ec] rounded-xl shadow-lg w-full max-w-xl p-6 transition-transform duration-300 ease-in-out z-0 mt-20 md:mt-0 ${
                  isLeft
                    ? "md:mr-auto md:pr-10 text-left"
                    : "md:ml-auto md:pl-10 text-left"
                }`}
              >
                {/* Mobile Top Logo */}
                <div className="md:hidden mb-6 w-16 h-16 mx-auto bg-white border-4 border-[#8245ec] rounded-full flex items-center justify-center">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-4 text-center md:text-left">
                  <div className="hidden md:block w-20 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h4 className="font-semibold text-white mb-2 text-sm">Skills:</h4>
                  <ul className="flex flex-wrap">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-lg mr-2 mb-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
