import React from "react";
import { ImageData } from "../models/ImageData";
import ImageCard from "./ImageCard";

interface ImageListProps {
  images: ImageData[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
