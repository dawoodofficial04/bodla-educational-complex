
import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

 const Footer = () => {
  return (
    <footer className="w-full bg-[rgb(69_112_97)] text-gray-300 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Quick Links
          </h3>
          <ul className="text-lg list-none">
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Admission
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Departments
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Faculty
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block w-px h-70 bg-gray-400 self-stretch"></div>
        <div className="block sm:hidden w-full h-px bg-gray-400 my-4"></div>

        {/* Institutes */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Institutes
          </h3>
          <ul className="space-y-2 text-xl list-none">
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Bodla Eye Care
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Punjab College
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Nexskill
              </a>
            </li>
            <li className="before:content-['»'] before:mr-2 before:text-amber-400">
              <a href="#" className="hover:text-white">
                Regional Institute of Allied Health Sciences
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block w-px h-70 bg-gray-400 self-stretch"></div>
        <div className="block lg:hidden w-full h-px bg-gray-400 my-4"></div>

        {/* Social Media */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Social Media
          </h3>

          <ul className="space-y-4 text-lg list-none">
            {/* Bodla Educational Complex */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Bodla Educational Complex
              </h4>
              <div className="flex items-center gap-4 justify-center text-2xl">
                <a
                  href="https://www.facebook.com/BodlaEducationalComplex/"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/afzalassociates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </li>

            {/* Punjab College */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Punjab College
              </h4>
              <div className="flex items-center gap-4 justify-center text-2xl">
                <a
                  href="https://www.facebook.com/PunjabCollegeMianChannuOfficial/"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaFacebook />
                </a>
              </div>
            </li>

            {/* Nexskill */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Nexskill
              </h4>
              <div className="flex items-center gap-4 justify-center text-2xl">
                <a
                  href="https://www.facebook.com/NexskillMianChannu/"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.instagram.com/nexskill_mianchannu/"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </li>

            {/* Regional Institute of Allied Health Sciences */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Regional Institute of Allied Health Sciences
              </h4>
              <div className="flex items-center gap-4 justify-center text-2xl">
                <a
                  href="https://www.facebook.com/ReginoLInstituteofAlliedHealthSciences"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaFacebook />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden xl:block w-px h-70 bg-gray-400 self-stretch"></div>
        <div className="block xl:hidden w-full h-px bg-gray-400 my-4"></div>

        {/* Locate Us */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Locate Us
          </h3>
          <ul className="text-lg list-none">
            {/* Regional Institute of Allied Health Sciences */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Regional Institute of Allied Health Sciences
              </h4>
              <div className="flex items-center gap-4 justify-center text-lg">
                <a
                  href="https://wa.link/pupyr1"
                  className="hover:text-white flex items-center gap-2"
                >
                   <FaPhoneAlt /> +92 301 9613810
                </a>
              </div>
            </li>
            
            {/* Punjab College */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Punjab College 
              </h4>
              <div className="flex items-center gap-4 justify-center text-lg">
                <a
                  href="https://wa.link/dif090"
                  className="hover:text-white flex items-center gap-2"
                >
                   <FaPhoneAlt /> +92 329 4715701
                </a>
              </div>
            </li>

            {/* Bodla Educational Complex */}
            <li>
              <h4 className="font-semibold text-white mb-1 text-center">
                Bodla Educational Complex 
              </h4>
              <div className="flex items-center gap-4 justify-center text-lg">
                <a
                  href="mailto:becomplex11@gmail.com"
                  className="hover:text-white flex items-center gap-2"
                >
                   <IoMdMail /> becomplex11@gmail.com
                </a>
              </div>
            </li>
            
          </ul>
          <iframe
            title="Bodla Educational Complex"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.9874153080395!2d72.32987247537241!3d30.436458674728573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3923356260957207%3A0xb9cba1364b9314ed!2sPunjab%20College%20MianChannu!5e0!3m2!1sen!2sus!4v1764846317935!5m2!1sen!2sus"
            width="300"
            height="150"
            className="border-0 mt-4"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-center items-center text-center border-t border-gray-700 mt-10 pt-6 text-xl cursor-default">
        © Copyright 2025 Bodla Educational Complex. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer