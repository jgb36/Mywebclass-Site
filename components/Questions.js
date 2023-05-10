import React, { useMemo } from "react";
import MyComponent from "./misc/Email";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Link from "next/link";

const questions = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto " id="about" >
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
            FAQs - Frequently Asked Questions about MyWebClass.org
        </h1>
        <h2 className="text-2xl font-semibold mb-2">1. What is MyWebClass.org?</h2>
            <p className="mb-4">
              MyWebClass.org is an online simulation that helps users learn how
              to build a website and apply essential web development skills in
              a safe, controlled environment.
            </p>
        <h2 className="text-2xl font-semibold mb-2">2. Who is MyWebClass.org for?</h2>
            <p className="mb-4">
              MyWebClass.org is suitable for anyone who wants to learn web development skills, including beginners and those who already have some coding knowledge.
            </p>
        <h2 className="text-2xl font-semibold mb-2">3. How does MyWebClass.org work?</h2>
            <p className="mb-4">
              MyWebClass.org provides users with access to a simulated environment that mimics real-life web development projects. Users can practice coding and develop their skills by completing various projects and challenges.
            </p>
        <h2 className="text-2xl font-semibold mb-2">4. What programming languages does MyWebClass.org support?</h2>
            <p className="mb-4">
              MyWebClass.org supports several programming languages, including HTML, CSS, JavaScript, and React.
            </p>
        <h2 className="text-2xl font-semibold mb-2">5. Is MyWebClass.org free to use?</h2>
            <p className="mb-4">
              Yes, MyWebClass.org is completely free to use, and users can access all the features and resources available on the platform.
            </p>
        <h2 className="text-2xl font-semibold mb-2">6. Do I need any prior coding knowledge to use MyWebClass.org?</h2>
            <p className="mb-4">
              No, MyWebClass.org is designed to cater to beginners as well as those with prior coding knowledge. The platform provides resources and tutorials for users of all levels.
            </p>
        <h2 className="text-2xl font-semibold mb-2">7. Can I work on MyWebClass.org projects with others?</h2>
            <p className="mb-4">
              Yes, MyWebClass.org allows users to collaborate with others on projects and share their progress and code with others.
            </p>
        <h2 className="text-2xl font-semibold mb-2">8. Will I receive a certificate upon completing the MyWebClass.org program?</h2>
            <p className="mb-4">
              Yes, upon completing the MyWebClass.org program, users will receive a certificate of completion that they can use to demonstrate their skills and knowledge to potential employers or clients.
            </p>
        <h2 className="text-2xl font-semibold mb-2">9. How can I get help if I get stuck on a project or challenge?</h2>
            <p className="mb-4">
              MyWebClass.org provides various resources, including tutorials, forums, and chat support like <Link href="https://discord.gg/ht5d5RUf"><a>discord</a></Link>
, to help users who get stuck on a project or challenge.
            </p>
        <h2 className="text-2xl font-semibold mb-2">10. Can I use the projects and code I develop on MyWebClass.org for personal or professional use?</h2>
            <p className="mb-4">
              Yes, users can use the projects and code they develop on MyWebClass.org for personal or professional use, as long as they comply with the platform's terms and conditions and any applicable copyright laws.
            </p>
        <h2 className="text-2xl font-semibold mb-2">11. Can I use MyWebClass.org on my mobile device?</h2>
            <p className="mb-4">
            Yes, MyWebClass.org is mobile-friendly and can be accessed on any device with an internet connection.
            </p>
        <h2 className="text-2xl font-semibold mb-2">12. How can I report a bug or issue with the platform?</h2>
            <p className="mb-4">
            If you encounter any bugs or issues with MyWebClass.org, please reach out to our support team via email at support@mywebclass.org and we will work to resolve the issue as soon as possible.
            </p>
        <h2 className="text-2xl font-semibold mb-2">13. Can I contribute to the development of MyWebClass.org?</h2>
            <p className="mb-4 ">
            Yes, we welcome contributions from the community to help improve the platform. If you're interested in contributing, please reach out to us at contribute@mywebclass.org to learn more about how you can get involved.
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

export default questions;
