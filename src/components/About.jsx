import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        Hello! I'm Gaurav Anand, a final year student pursuing a Bachelor's degree in Electronics and Communication Engineering. I am passionate about web development and have been honing my skills in this field. With a keen eye for design and a strong technical background, I strive to create engaging and user-friendly web experiences.
        </p>

        <p className="text-xl mt-5">
        In addition to my technical expertise, I believe in the importance of effective communication and collaboration. I enjoy working in a team environment, leveraging my interpersonal skills to understand client requirements and deliver solutions that exceed expectations.
        </p>


        <p className="text-xl mt-5">
        Thank you for visiting my portfolio, and I look forward to connecting with you to discuss potential opportunities and collaborations.
        </p>

      </div>
    </div>
  );
};

export default About;
