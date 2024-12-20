import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import logo from "../../../assets/footer.svg";
import Image from "next/image";
import Link from "next/link";
import footer from "../../../assets/footertwo.png"
import { LuMoveRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="bg-footer bg-no-repeat bg-left-top z-50 w-full h-[480px]">
          <div className="flex gap-[204px] pt-16 mb-4">
            <div className="flex flex-col gap-7">
              <p className="text-[48px] font-semibold">Let's make <br /> something special</p>
              <p className="text-[24px] font-semibold">Let's talk! 🤙 </p>
              <a className="text-[18px] font-medium" href="tel: 020 7993 2905">020 7993 2905</a>
              <p className="text-[18px] font-medium">hi@finsweet.com</p>
            </div>
            <div className="flex gap-[70px]">
                <div>
                    <p className="font-semibold mb-4">Home</p>
                    <ul  className="flex flex-col gap-3">
                        <li className="font-semibold">
                            <a href="#">
                                <span>Servive</span>
                            </a>
                        </li>
                        <li className="font-semibold">
                            <a href="#">
                                <span>Company</span>
                            </a>
                        </li>
                        <li className="font-semibold">
                            <a href="#">
                                <span>Career</span>
                            </a>
                        </li>
                        <li className="font-semibold">
                            <a href="#">
                                <span>News</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-4">Service</p>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a href="#">
                                <span>Technical support</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Testing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Development</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>AWS/Azure </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Consulting</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Information Technology</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold mb-4">Resourses</p>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a href="#">
                                <span>About Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Testimonial</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Privacy Policy</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Terms of use</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Information Technology</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
                <p className="border-t border-t-[#00000014] pt-4 text-sm font-semibold">DLF Cybercity, Bhubaneswar,<br />
                India, &52050</p>
            </div>
            <div className="flex items-center gap-1">
                <Image src={footer} alt={"footer-button"}/>
                <button className="flex items-center gap-2 font-semibold">Contact Us <LuMoveRight/></button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE6D2]">
        <div className="container">
          <div className="flex justify-between items-center h-[80px]">
            <div className="flex gap-[42px] items-center">
              <Link href={"/"}>
                <Image src={logo} alt={"Logo"} />
              </Link>
              <p>©2021 Finsweet</p>
            </div>
            <div className="flex items-center gap-8">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
