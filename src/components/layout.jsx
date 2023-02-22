import React from "react";

export default function Layout({ children }) {
 return (
  <div className="relative bg-white py-6 sm:py-0">
   <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
    {children}
   </div>
  </div>
 );
}
