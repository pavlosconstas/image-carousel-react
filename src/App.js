import ImageCarousel from "./ImageCarousel";

function App() {
  const imgList = [
    { src: "images/img1.jpeg"},
    { src: "images/img2.jpeg"},
    { src: "images/img3.jpeg"},
    { src: "images/img4.jpeg"},
    { src: "images/img5.gif"},
  ];

  return (
    <div className="App">
      <ImageCarousel imgList={imgList} alt="ImageCarousel"/>
    </div>
  );
}

export default App;
