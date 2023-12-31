import React from "react";
import LogoVPN from "../../public/assets/mwclasslogo.svg";
import Facebook from "../../public/assets/Icon/bookface.svg";
import Twitter from "../../public/assets/Icon/tweeter.svg";
import Instagram from "../../public/assets/Icon/instagramm.svg";
import Discord from "../../public/assets/Icon/discord.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-12 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">Mywebclass</strong> is a service committed
            to giving everybody access to knowledge about AI.
            Follow us on social media and join our discord server by clicking the icon.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Link href="https://discord.gg/ht5d5RUf">
                <a><Discord className="h-6 w-6" /></a>
                </Link>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Mywebclass</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
                <Link href="/blogs">
                    <a>Blog{" "}</a>
                </Link>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Getting Started</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
            <Link href="/faqs">
                <a>FAQ{" "}</a>
            </Link>

            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
                <Link href="/privacy">
                    <a>Privacy Policy{" "}</a>
                </Link>
            </li>
            <li className="my-2 hover:text-green-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
