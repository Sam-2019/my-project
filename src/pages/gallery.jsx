import React, { useState } from "react";
import PageHeader from "../components/page_header";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {
  pageImages,
  all_images,
} from "../utils";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      <PageHeader
        title="GALLERY"
        content="Welcome to our gallery page, where you can view some of our most recent projects."
        image={pageImages[5].src}
      />

      <div className="py-0 sm:py-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-5 sm:pb-5">
          <PhotoAlbum
            layout="rows"
            photos={all_images}
            padding={7}
            spacing={2}
            width={100}
            targetRowHeight={225}
            onClick={({ index }) => setIndex(index)}
          />

          <Lightbox
            slides={all_images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Zoom]}
          />
        </div>
      </div>
    </div>
  );
}
