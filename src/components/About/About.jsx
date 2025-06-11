import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/MyImage.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            Debaraj Behera
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "MERN Stack Developer",
                "Web & App Developer",
                "UI/UX Designer",
                "Mastering DSA in Java",
              ]}
              loop={0} // 0 for infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m an entry-level Full Stack Web Developer specializing in the MERN
            stack—MongoDB, Express.js, React.js, and Node.js. I build modern,
            responsive web applications and have hands-on experience with tools
            like Next.js and Redux. I’m actively seeking internship and junior
            developer roles where I can contribute, learn, and grow with a
            dynamic tech team
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1U7KMraQ3sQ4ld-HrwnbaYoKFxDZw0By0/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-full h-64 sm:w-64 sm:h-80 md:w-[20rem] md:h-[28rem] border-4 border-purple-700 overflow-hidden shadow-xl"
            style={{ borderRadius: "50% / 35%" }}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Debaraj Behera"
              className="w-full h-full object-contain"
              style={{ borderRadius: "50% / 35%" }} // Oval shape
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
