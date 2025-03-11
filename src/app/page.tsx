'use client'

import {useEffect, useState} from "react";
import {heroSlides, services} from "@/utils/constants";
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Olive Medicare Clinic | World-Class Healthcare</title>
        <meta name="description" content="Leading hospital providing comprehensive healthcare services globally" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="text-3xl font-bold text-blue-600 flex items-center">
                <span className="text-blue-800">Olive Medicare</span>
                <span className="text-blue-600 ml-1">Clinic</span>
              </div>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex space-x-8"
            >
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>

            {/*<motion.div*/}
            {/*  initial={{ opacity: 0, x: 20 }}*/}
            {/*  animate={{ opacity: 1, x: 0 }}*/}
            {/*  transition={{ duration: 0.5 }}*/}
            {/*  whileHover={{ scale: 1.05 }}*/}
            {/*  whileTap={{ scale: 0.95 }}*/}
            {/*  className="hidden md:block"*/}
            {/*>*/}
            {/*  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">*/}
            {/*    Book Appointment*/}
            {/*  </button>*/}
            {/*</motion.div>*/}

            <div className="md:hidden">
              <button className="text-gray-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative h-[70vh]" id={'home'}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-blue-400/40 z-10" />
            <div className="h-full w-full relative">
              <Image 
                src={heroSlides[currentSlide].image}
                alt={'image'}
                width={3200}
                height={2098}
                className={"w-full h-full object-cover"}
                priority 
              />
            </div>

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-2xl text-white"
                >
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  <motion.p
                    className="text-xl mb-8 text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                {/*  <motion.div*/}
                {/*    className="flex space-x-4"*/}
                {/*    initial={{ opacity: 0, y: 20 }}*/}
                {/*    animate={{ opacity: 1, y: 0 }}*/}
                {/*    transition={{ duration: 0.5, delay: 0.5 }}*/}
                {/*  >*/}
                {/*    <motion.button*/}
                {/*      className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium"*/}
                {/*      whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}*/}
                {/*      whileTap={{ scale: 0.95 }}*/}
                {/*    >*/}
                {/*      Learn More*/}
                {/*    </motion.button>*/}
                {/*    <motion.button*/}
                {/*      className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-full font-medium transition-colors"*/}
                {/*      whileHover={{ scale: 1.05 }}*/}
                {/*      whileTap={{ scale: 0.95 }}*/}
                {/*    >*/}
                {/*      Find a Doctor*/}
                {/*    </motion.button>*/}
                {/*  </motion.div>*/}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our Specialized Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The Olive Medicare Clinic is a Health Care Clinic that has delivered first-class health interventions and initiatives since 2001 in Nigeria. Our managed care schemes are provided with outstanding excellence.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <service.icon className="mb-4 text-blue-700" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {/*<motion.a*/}
                {/*  href="#"*/}
                {/*  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800"*/}
                {/*  whileHover={{ x: 5 }}*/}
                {/*  transition={{ type: "spring", stiffness: 400, damping: 10 }}*/}
                {/*>*/}
                {/*  Learn more →*/}
                {/*</motion.a>*/}
              </motion.div>
            ))}
          </div>

          {/*<motion.div*/}
          {/*  className="mt-16 text-center"*/}
          {/*  initial={{ opacity: 0, y: 20 }}*/}
          {/*  whileInView={{ opacity: 1, y: 0 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*  transition={{ duration: 0.7, delay: 0.4 }}*/}
          {/*>*/}
          {/*  <motion.button*/}
          {/*    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"*/}
          {/*    whileHover={{ scale: 1.05 }}*/}
          {/*    whileTap={{ scale: 0.95 }}*/}
          {/*  >*/}
          {/*    View All Services*/}
          {/*  </motion.button>*/}
          {/*</motion.div>*/}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white" id={"about-us"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Exceptional Care for Every Patient
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our dedicated team of healthcare professionals is committed to providing the highest quality care with compassion and excellence.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/*<motion.button*/}
              {/*  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium"*/}
              {/*  whileHover={{ scale: 1.05 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  Book an Appointment*/}
              {/*</motion.button>*/}
              {/*<motion.button*/}
              {/*  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-medium transition-colors"*/}
              {/*  whileHover={{ scale: 1.05 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  Contact Us*/}
              {/*</motion.button>*/}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8" id={"contact"}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-blue-400">Olive Medicare</span>
                <span className="text-blue-300 ml-1">Clinic</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Olive Medicare Clinic provides best medical diagnostics and treatment in Agege Lagos state.

              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">📍</div>
                  <span>3, Ige Street, Dopemu, Aluminium village, Agege, Lagos State Nigeria</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">📞</div>
                  <span>+234 8033 447 126</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2">⏰</div>
                  <span>24/7 Emergency Services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Olive Medicare. All rights reserved. RC. 7666712
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
