import React, { useMemo } from "react";
import MyComponent from "./misc/Email";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Content = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto text-center" id="about" >
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
            Unlock Your Learning Potential: Sign Up for Mywebclass.org Today
        </h1>
        <p>
        Welcome to Mywebclass.org, your ultimate destination for online learning! Our website offers a comprehensive range
        of courses designed to help you enhance your skills and knowledge in various fields. Whether you are looking
        to advance your career, improve your personal growth, or simply learn something new, we have something for everyone.
        By signing up for Mywebclass.org, you will gain access to high-quality educational resources, expert instructors,
        and a supportive community of learners. Don't wait any longer, join us today and start your journey towards success!
        Please fill out the form below to sign up and get started.
        </p>
        <form class="max-w-md mx-auto mt-8">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block font-medium text-gray-700 mb-2" for="first-name">
          First Name
        </label>
        <input class="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="John"></input>
      </div>
      <div>
        <label class="block font-medium text-gray-700 mb-2" for="last-name">
          Last Name
        </label>
        <input class="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Doe"></input>
      </div>
    </div>
    <div class="mt-4">
      <label class="block font-medium text-gray-700 mb-2" for="phone-number">
        Phone Number
      </label>
      <input class="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone-number" type="tel" placeholder="555-555-5555"></input>
    </div>
    <div class="mt-4">
      <label class="block font-medium text-gray-700 mb-2" for="email">
        Email
      </label>
      <input class="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com"></input>
    </div>
    <div class="mt-8">
      <button class="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
  Sign Up
</button>


    </div>
  </form>

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
