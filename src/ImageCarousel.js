import { useState } from "react";
import './ImageCarousel.css'

const ImageCarousel = ({ imgList, alt}) => {
  const [Image, setImage] = useState(0);
  var circles = [];
  for (var i = 0; i < imgList.length; i++) {
    if (i !== Image) {
      circles.push(<div className="light-circle" key={i}></div>);
    } else {
      circles.push(<div className="dark-circle" key={i}></div>);
    }
  }
  return (
      <div className="container">
        <div className="image-carousel">
            <button
              className="button-left"
              onClick={() => {
                if (Image === 0) {
                  setImage(imgList.length - 1);
                } else {
                  setImage(Image - 1);
                }
              }}
            >
              &lt;
            </button>
          <img
            src={imgList[Image].src}
            alt={alt}
          ></img>
            <button
              className="button-right"
              onClick={() => {
                if (Image === imgList.length - 1) {
                  setImage(0);
                } else {
                  setImage(Image + 1);
                }
              }}
            >
              &gt;
            </button>
          
        </div>
        <div className="circles">
              {circles.map(c => {
                return c
              })}
            </div>
      </div>
  );
};

export default ImageCarousel;
