import React, { useState } from "react";
import PageHeader from "../components/page_header";
import SimpleGallery from "../components/photo_swipe";
import {
 companyImages1,
 companyImages2,
 companyImages3,
 pageImages,
 outliers,
 videos,
} from "../utils";

export default function Gallery() {
 return (
  <div>
   <PageHeader
    title="GALLERY"
    content="Welcome to our gallery page, where you can view some of our most recent projects."
    image={pageImages[5].source}
   />

   <div className="py-0 sm:py-0">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-5 sm:pb-5">
     <SimpleGallery galleryID="my-test-gallery" images={photo_list} />
     <SimpleGallery galleryID="companyImages1" images={companyImages1} />
     <SimpleGallery galleryID="companyImages2" images={companyImages3} />
     <SimpleGallery galleryID="companyImages3" images={companyImages2} />

     <SimpleGallery galleryID="outliers" images={outliers} />
     <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-5"
     >
      {videos.map((file) => (
       <li key={file.id} className="relative">
        <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
         <video width="320" height="240" controls>
          <source src={file.source} type="video/mp4" />
         </video>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </div>
 );
}

const photo_list = [
 {
  largeURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
  thumbnailURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
  width: 1875,
  height: 2500,
 },
 {
  largeURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
  thumbnailURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
  width: 1669,
  height: 2500,
 },
 {
  largeURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
  thumbnailURL:
   "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
  width: 2500,
  height: 1666,
 },
];
