import React, { useMemo } from "react";
import MyComponent from "./misc/Email";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Content = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto " id="about">

            <main class="col-md-9 ms-sm-auto col-lg-9 px-md-4">


                <section class="row">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
                        Privacy Policy
                    </h1>

                    <p className="mb-9">We at mywebclass.org are committed to protecting your privacy. This Privacy Policy explains what
                        information we collect from you when you visit our website, how we use it, and how we protect
                        it. By using our website, you agree to the terms of this Privacy Policy.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Information we collect</h2>
                    <p>We may collect the following information from you when you visit our website:</p>
                    <ul className=" ml-9">
                        <li>-   Personal information such as your name and email address, if you choose to provide it to
                            us.
                        </li>
                        <li>-   Information about your use of the website, such as pages visited, time spent on the site,
                            and links clicked.
                        </li>
                        <li>-   Information about your device, such as your IP address, browser type, and operating
                            system.
                        </li>
                    </ul>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">How we use your information</h2>
                    <p>We use the information we collect from you for the following purposes:</p>
                    <ul className=" ml-9">
                        <li>- To improve our website and the user experience.</li>
                        <li>- To analyze user behavior and measure the effectiveness of our content and marketing
                            efforts.
                        </li>
                        <li>- To communicate with you about our products and services, if you have provided us with your
                            contact information.
                        </li>
                        <li>- To comply with legal obligations.</li>
                    </ul>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Google Analytics</h2>
                    <p>We use Google Analytics to collect information about your use of our website. Google Analytics
                        collects information such as how often users visit the site, what pages they visit when they do
                        so, and what other sites they used prior to coming to our website. We use the information we get
                        from Google Analytics to improve our website and the user experience. Google Analytics collects
                        only the IP address assigned to you on the date you visit our website, rather than your name or
                        other identifying information. We do not combine the information collected through the use of
                        Google Analytics with personally identifiable information. Google Analytics plants a permanent
                        cookie on your web browser to identify you as a unique user the next time you visit our website.
                        This cookie cannot be used by anyone other than Google. Google’s ability to use and share
                        information collected by Google Analytics about your visits to our website is restricted by the
                        Google Analytics Terms of Use and the Google Privacy Policy.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Data retention and security</h2>
                    <p>We retain the information we collect for as long as necessary to fulfill the purposes for which
                        it was collected, unless a longer retention period is required by law. We take reasonable
                        measures to protect the information we collect from loss, theft, misuse, and unauthorized
                        access, disclosure, alteration, and destruction.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Data retention and security</h2>
                    <p>We retain the information we collect for as long as necessary to fulfill the purposes for which
                        it was collected, unless a longer retention period is required by law. We take reasonable
                        measures to protect the information we collect from loss, theft, misuse, and unauthorized
                        access, disclosure, alteration, and destruction.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Your rights</h2>
                    <p>You have the right to access, correct, and delete your personal information. You also have the
                        right to object to the processing of your personal information and to withdraw your consent to
                        the processing of your personal information. To exercise these rights, please contact us at
                        <a href="">customerservice@mywebclass.com</a>.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Changes to this Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page. We recommend that you review this Privacy Policy
                        periodically for any changes.</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-3xl font-small text-black-600 leading-normal mt-4 mb-4">Contact us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="">customerservice@mywebclass.com</a>.</p>

                </section>


            </main>
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
