import React from "react";

export default function StatSection() {
 return (
  <div className="bg-indigo-800">
   <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
    <div className="mx-auto max-w-4xl text-center">
     <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
     Trusted by clients for our expertise and service delivery.
     </h2>
     <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
      We are committed to delivering high-quality and reliable solutions to meet
      your needs.
     </p>
    </div>
    <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
     <div className="flex flex-col">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
       Customer Satisfaction
      </dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-white">
       100%
      </dd>
     </div>
     <div className="mt-10 flex flex-col sm:mt-0">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
       Service Delivery
      </dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-white">
       24/7
      </dd>
     </div>
     <div className="mt-10 flex flex-col sm:mt-0">
      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">
       Clients
      </dt>
      <dd className="order-1 text-5xl font-bold tracking-tight text-white">
       50+
      </dd>
     </div>
    </dl>
   </div>
  </div>
 );
}
