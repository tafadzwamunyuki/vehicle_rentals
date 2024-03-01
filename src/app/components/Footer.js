"use client"

import Image from "next/image"
import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaXTwitter  } from "react-icons/fa6"
import Copyright from "./Copyright"
import { motion } from "framer-motion"
import { fadeIn } from "/variants"
import { Link } from "react-scroll"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
    <div className="container mx-auto mb-24">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
      >
        <div className="flex flex-col flex-1 gap-y-8">
          <Link 
            to={"home"}
            smooth={true}
            spy={true}
            className="cursor-pointer"
          >
            <Image 
              src={"/icons/logo.svg"}
              width={200}
              height={200}
              className=""
              alt=""
            />
          </Link>
          <div className="text-secondary">Get in touch with us:</div>
          <div className="flex flex-col gap-y-4 font-semibold">
            <div className="flex items-center gap-x-[10px]">
              <FaPhone />
              <div className="font-medium">+44 74 253 637 21</div>
            </div>

            <div className="flex items-center gap-x-[10px]">
              <FaEnvelope />
              <div className="font-medium">admin@carhire.com</div>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px]">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
          </div>
        </div>

        <div className="flex-1 flex-col xl:items-center">
          <div>
            <h3 className="h3 font-bold mb-4">Company</h3>
            <ul className="flex flex-col gap-x-4 font-semibold">
              <li><a href="">New York</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Mobile</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">How we work</a></li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="h3 font-bold mb-8">Working Hours</h3>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2">
              <div className="text-secondary">Mon - Fri:</div>
              <div>08:00AM - 17:00</div>
            </div>
            <div className="flex gap-x-2">
              <div className="text-secondary">Sat & Sun</div>
              <div>10:00AM - 16:00</div>
            </div>
            <div className="flex gap-x-2">
              <div className="text-secondary">Bank Holidays:</div>
              <div>10:00AM - 15:00</div>
            </div>
            
          </div>
        </div>
        <div className="flex-1">
        <div className="h3 font-bold mb-8">Newsletter</div>
        <div className="mb-9 text-secondary">
          Subscribe to our weekly newsletter
        </div>
        </div>

        <form className="flex gap-x-2 h-14">
          <input 
            type="text"
            placeholder="Your email" 
            className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" 
          />

          <button
            type="submit" 
            className="btn btn-sm btn-accent w-24"
          >
            Submit
          </button>

        </form>
      </motion.div>
    </div>
    <Copyright />
    </footer>
  )
}
