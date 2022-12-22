import { useEffect, useState } from "react";

const LazyLoadImage = () => {
  console.log("running lazy load image");
  const [loaded, setLoaded] = useState(false);
  console.log("loaded", loaded);

  useEffect(() => {
    window.addEventListener("load", (event) => {
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      page
      {loaded ? " loaded" : " loading"}
    </div>
  );
};
export default LazyLoadImage;
