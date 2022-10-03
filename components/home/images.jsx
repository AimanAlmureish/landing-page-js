import Image from "next/image";
import { useState } from "react";

const ImagesAPI = () => {
  const [data, setData] = useState([]);
  const random = async () => {
    let response = await fetch(
      "https://api.unsplash.com/photos/random/?count=6&client_id=9kXWhW-MbYaFvCwNfj3ZkI7_sQef-0Y7bddaBFrfL9U"
    );
    setData(await response.json());
    console.log(data);
  };
  random();

  return (
    <div>
      <h1>hello</h1>

      {data.map((image) => {
        return (
          <div>
            <Image src={image.urls.small} layout="fill" objectFit="cover" />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesAPI;
