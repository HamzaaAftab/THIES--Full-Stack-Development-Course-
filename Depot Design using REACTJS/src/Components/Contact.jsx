import React from 'react';
import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto min-h-screen p-6 md:p-12 items-center justify-center">
      {/* Contact Form */}
      <motion.div
        className="flex flex-col p-8 md:p-12 rounded-xl shadow-2xl w-full md:w-1/2 mb-10 md:mb-0 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <form className="space-y-5">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 font-medium">Name</label>
            <input
              type="text"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 font-medium">Email</label>
            <input
              type="email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600 font-medium">Message</label>
            <textarea
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition transform hover:scale-105 duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Google Map */}
      <motion.div
        className="w-full h-64 md:h-auto md:w-1/2 rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <LoadScript
          googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </motion.div>
    </div>
  );
};

export default ContactUs;
