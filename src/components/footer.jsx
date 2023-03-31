import React from "react";
import { navigation, social } from "../utils";

export default function Footer() {
 return (
  <footer className="bg-white">
   <div className="mx-auto max-w-7xl overflow-hidden py-5 px-6 sm:py-5 lg:px-8">
    <nav
     className="-mb-6 text-center sm:flex sm:justify-center sm:space-x-12"
     aria-label="Footer"
    >
     {navigation.map((item) => (
      <div key={item.name} className="pb-6">
       <a
        href={item.path}
        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
       >
        {item.name}
       </a>
      </div>
     ))}
    </nav>
    {/* <div className="mt-10 flex justify-center space-x-10">
     {social.map((item) => (
      <a
       key={item.name}
       href={item.href}
       className="text-gray-400 hover:text-gray-500"
      >
       <span className="sr-only">{item.name}</span>
       <item.icon className="h-6 w-6" aria-hidden="true" />
      </a>
     ))}
    </div> */}
    <p className="mt-10 text-center text-xs leading-5 text-gray-500">
     &copy; {new Date().getFullYear()} Chriscomik Company, Limited. All rights
     reserved.
    </p>
   </div>
  </footer>
 );
}
