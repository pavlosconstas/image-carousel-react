# Image Carousel Component for React
There was a lack of Image Carousels for React so I made one.
Accepts all file types in all resolutions.
Scaling can be edited in the ImageCarousel.css file. 

## Use

Import the component using 

`import ImageCarousel from "./ImageCarousel";`

You can then create an ImageCarousel, and it takes 2 props, imgList and alt.

`<ImageCarousel imgList={imgList} alt="ImageCarousel"/>`

The imgList prop is an array of JSON objects with src.

e.g in this example project: 
```js 
const imgList = [
    { src: "images/img1.jpeg"},
    { src: "images/img2.jpeg"},
    { src: "images/img3.jpeg"},
    { src: "images/img4.jpeg"},
    { src: "images/img5.gif"},
  ];

```

**The images directory should be located in the public/ directory and NOT in the src/ directory.** 