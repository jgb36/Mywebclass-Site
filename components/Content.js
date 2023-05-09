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
            Benefits for Volunteering for Our Project
        </h1>
      <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4">A. Benefits of Agile and Lean principles</h2>
      <p style={{marginBottom: "1.5rem"}}>
        Agile and Lean principles, which originated in software development and manufacturing, offer a framework for creating flexible, adaptive, and student-centered learning environments. By incorporating these principles into the classroom, educators can promote critical thinking, problem-solving, and collaboration among students. Agile and Lean principles also foster a growth mindset and a focus on continuous improvement, which are essential for lifelong learning.
      </p>

      <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4"> B. Examples of successful implementation</h2>
      <p style={{marginBottom: "1.5rem"}}>
        Several schools and educational institutions have successfully implemented Agile and Lean principles in their classrooms. These institutions have reported improved student engagement, increased collaboration, and enhanced problem-solving skills among their students. By sharing these success stories, MyWebClass.org can inspire other educators to adopt Agile and Lean principles in their own classrooms.
      </p>

      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
        How Agile and Lean principles helped the Community
      </h1>
      <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4">A. Success stories</h2>
      <p style={{marginBottom: "1.5rem"}}>
Agile and Lean principles, combined with AI technology, have had a transformative impact on various communities. For instance, these approaches have been used to improve healthcare delivery, making it more efficient and effective. AI-powered telemedicine platforms can now remotely diagnose and treat patients, reducing wait times and improving access to healthcare. Agile and Lean principles have also been applied in disaster response efforts, enabling rapid and effective deployment of aid resources to affected areas. Additionally, these approaches have been used to enhance public safety by enabling better resource allocation and more proactive crime prevention strategies. The use of AI-powered predictive analytics has helped law enforcement agencies to identify and respond to potential threats before they materialize. In all of these applications, the combination of Agile and Lean principles with AI technology has enabled greater efficiency, effectiveness, and innovation in service delivery, ultimately improving the lives of individuals and communities.      </p>

      <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4">B. Lessons learned</h2>
      <p >
        From the success stories of innovative educational approaches, several key lessons can be drawn. First, a clear vision and commitment to change are essential for successful implementation. Second, engaging all stakeholders, including students, parents, and educators, in the process is crucial for fostering a supportive environment. Finally, ongoing evaluation and continuous improvement are necessary to ensure the effectiveness and sustainability of these innovative approaches.
      </p>
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
