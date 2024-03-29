import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
 useEffect(() => {
  const options = {
   gallery: "#" + props.galleryID,
   children: "a",
   pswpModule: () => import("photoswipe"),
  };
  let lightbox = new PhotoSwipeLightbox(options);
  lightbox.init();

  return () => {
   lightbox.destroy();
   lightbox = null;
  };
 }, []);

 return (
  <div
   id={props.galleryID}
   className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-5"
  >
   {props.images.map((image, index) => (
    <a
     href={image.src}
     data-pswp-width={image.width}
     data-pswp-height={image.height}
     key={props.galleryID + "-" + index}
     target="_blank"
     rel="noreferrer"
     className="group overflow-hidden rounded-lg bg-gray-100"
    >
     <img
      src={image.src}
      alt={image.description}
      className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
      title={image.description}
     />
    </a>
   ))}
  </div>
 );
}
