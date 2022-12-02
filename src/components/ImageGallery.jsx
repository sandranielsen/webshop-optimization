import React from "react";

const ImageGallery = ({ media }) => {

    return (
      <div>
        <img
          className="object-cover"
          src={media.preview.image.src}
          alt="{media.image.altText}"
        />
      </div>
    );
};

export default ImageGallery