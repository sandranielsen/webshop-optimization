import React from "react";

const ImageGallery = ({ media }) => {

    return (
      <div>
        <img
          className="object-cover"
          src={media.preview.image.src}
          alt="{media.altText}"
          width={150}
          height={150}
          loading="lazy"
        />
      </div>
    );
};

export default ImageGallery