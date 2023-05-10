import React, { useMemo } from "react";
import MyComponent from "./misc/Email";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Content = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto " id="about" >
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
            10 Must-Read Education Blogs: Embracing Agile and Lean Principles, Neuroscience, AI, and More
        </h1>
      <p style={{marginBottom: "1.5rem", fontSize: "1.1rem"}}>
        Education has undergone a significant transformation over the past few decades. With the rapid advancements in
        technology, the need for modernizing the education system has become more critical than ever. The traditional classroom model,
        which was focused on rote memorization and standardized testing, is no longer sufficient to prepare students for
        the 21st-century workforce. In response to this changing landscape, many educators and institutions have turned
        to agile and lean principles, as well as AI technology and interdisciplinary learning, to improve their teaching methods and
        enhance student outcomes. In this blog, we'll explore how these principles and technologies are revolutionizing
        education and preparing students for the challenges of the future. We'll take a closer look at a variety of topics,
        including embracing the agile mindset, lean principles in the classroom, personalized learning plans, and much more.
        So, without further ado, let's dive into our top 10 blogs about agile and lean principles and AI technology in the classroom.
      </p>

      <h2 className="text-2xl font-medium mb-2">Blog Post Titles:</h2>

      <ol className="text-base font-medium list-decimal px-4" style={{ color: "black", marginLeft: "1.5rem" }}>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Embracing the Agile Mindset in Education: A Paradigm Shift</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Lean Principles in the Classroom: Maximizing Efficiency and Learning Outcomes</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">The Role of Neuroscience in Shaping Modern Education Practices</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Preparing Students for the AI-Driven World: Essential Skills for Success</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">The Importance of Interdisciplinary Learning in the 21st Century</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Project-Based Learning: Engaging Students in Real-World Problem Solving</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Personalized Learning Plans: Empowering Students through Adaptive Education</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Fostering a Culture of Continuous Improvement in Education</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">The Power of Collaboration: Building a Network of Innovative Educators</a></li>
        <li style={{ marginBottom: "0.5rem" }}><a href="">Overcoming Cognitive and Mental Health Challenges in Today's Classrooms</a></li>
      </ol>

    </div>

    <div className=" from-white-300 to-white-500 w-full py-14" >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">


          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Like what you see?
                  </h5>
                  <p>You can sign up to our website to receive updates and news.</p>
                </div>
                <MyComponent></MyComponent>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>

    </>
  );
};

export default Content;
