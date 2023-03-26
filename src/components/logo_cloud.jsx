import React from "react";
import { logos } from "../utils";

export default function LogoCloud() {
 return (
  <div className="bg-white">
   <div className="mx-auto max-w-7xl py-6 sm:py-3 px-6 lg:pb-5 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
     <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Engaged by some of the best Oil & Gas, and Engineering companies in Ghana
      </h2>
      <p className="mt-3 max-w-3xl text-lg text-gray-500">
       We have built a solid reputation in the oil and gas industry and have
       grown rapidly into a global service company.
      </p>
      <div className="mt-8 sm:flex">
       <div className="rounded-md shadow"></div>
       <div className="mt-3 sm:mt-0 sm:ml-3"></div>
      </div>
     </div>
     <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
      {logos.map((logo) => (
       <div
        key={logo.id}
        className="col-span-1 flex justify-center bg-gray-50 py-8 px-8 grayscale hover:grayscale-0"
       >
        <img className="max-h-12" src={logo.source} alt={logo.alt} />
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
