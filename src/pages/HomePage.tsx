import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiResponse, ImageData } from "../models/ImageData";
import ImageList from "../components/ImageList";

const HomePage: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<ApiResponse>("https://fakerapi.it/api/v1/images?_width=380")
      .then((response) => {
        setImages(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Faker API Image Gallery</h1>
      <ImageList images={images} />
    </div>
  );
};

export default HomePage;
