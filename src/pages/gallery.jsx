import React, { useState } from "react";
import PageHeader from "../components/page_header";
import ImageViewer from "../components/modal";
import { companyImages1, companyImages2, pageImages } from "../utils";

export default function Gallery() {
 let [item, setItem] = useState({});
 let [isOpen, setIsOpen] = useState(false);

 const sendInfo = (data) => {
  setItem(data);
  setIsOpen(true);
 };

 return (
  <div>
   <PageHeader
    title="GALLERY"
    content="Welcome to our gallery page, where you can view some of our most recent projects."
    image={pageImages[5].source}
   />

   <div className="py-0 sm:py-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-5 sm:pb-5">
     <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-5"
     >
      {companyImages1.map((file) => (
       <li key={file.id} className="relative">
        <div
         onClick={() => sendInfo(file)}
         className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
         <img
          src={file.source}
          alt={file.alt}
          className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
         />
        </div>
       </li>
      ))}
     </ul>

     <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-5"
     >
      {companyImages2.map((file) => (
       <li key={file.id} className="relative">
        <div
         onClick={() => sendInfo(file)}
         className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
         <img
          src={file.source}
          alt={file.alt}
          className="pointer-events-none object-cover group-hover:opacity-75"
         />
         <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {file.title}</span>
         </button>
        </div>
        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
         {file.title}
        </p>
        <p className="pointer-events-none block text-sm font-medium text-gray-500">
         {file.size}
        </p>
       </li>
      ))}
     </ul>
    </div>
   </div>

   <ImageViewer
    show={isOpen}
    setIsOpen={setIsOpen}
    data={item}
    setData={setItem}
   />
  </div>
 );
}
