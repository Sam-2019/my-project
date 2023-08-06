import React from "react";
import { Link } from "react-router-dom";
import { webImages } from "../utils";

export default function HomeItem() {
 const activeImage = webImages[2];
 return (
  <div className="py-0 sm:py-10">
   <div className="inset-x-0 bottom-0 h-1/2" />
   <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
     <div className="absolute inset-0">
      <img
       className="h-full w-full object-cover rounded-md"
       src={activeImage.src}
       alt={activeImage.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
     </div>
     <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
       <span className="block text-white">Delivering world-class</span>
       <span className="block text-indigo-200">engineering solutions</span>
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
       We have built a solid reputation in the oil and gas industry and have
       grown rapidly into a global service company
      </p>
      <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
       <div className="space-y-4 sm:mx-auto sm:gap-5 sm:space-y-0">
        <Link
         to="/contact"
         className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
        >
         Contact Us
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

// https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100
