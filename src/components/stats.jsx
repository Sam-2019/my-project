import React from "react";

export default function Stats() {
  return (
    <div className=" bg-indigo-800 text-white">
      <div className="mx-auto max-w-7xl py-10 px-8">
        <div className="md:flex items-center">
          <div className="md:w-3/6">
            <h2 className="font-thin tracking-tight text-dark text-4xl">
              Trusted by clients for our
              <span className="font-light"> expertise</span> <span>and</span>
              <span className="font-light"> service delivery</span>.
            </h2>
            <p className="mt-1 text-xl font-extralight text-gray-300 sm:mt-4">
              We are committed to delivering high-quality and reliable solutions
              to meet your needs.
            </p>
          </div>

          <div className="md:w-3/6">
            <div className="grid grid-cols-2">
              <div className="p-8 text-center md:text-right">
                <p className="text-7xl font-thin">100%</p>
                <p className="font-extralight">customer satisfaction</p>
              </div>

              <div className="p-8 text-center md:text-right">
                <p className="text-7xl font-thin">10+</p>
                <p className="font-extralight">experience</p>
              </div>

              <div className="p-8 text-center md:text-right">
                <p className="text-7xl font-thin">10+</p>
                <p className="font-extralight">clients and partners</p>
              </div>

              <div className="p-8 text-center md:text-right">
                <p className="text-7xl font-thin">24/7</p>
                <p className="font-extralight">service delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
