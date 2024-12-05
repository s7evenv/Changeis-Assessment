import React from "react";
import { ImageData } from "../models/ImageData";

interface ImageCardProps {
  image: ImageData;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px", borderRadius: "8px" }}>
      <img src={image.url} alt={image.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{image.title}</h2>
      <p>{image.description}</p>
    </div>
  );
};

export default ImageCard;
