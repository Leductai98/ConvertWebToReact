import React, { memo, useEffect, useState } from "react";

export default memo(function ImageBackGround() {
  const [slider, setSlider] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (slider < 2) {
        setSlider(slider + 1);
      } else {
        setSlider(0);
      }
    }, 10000);
  }, [slider]);
  return (
    <div className="image-background">
      <div className={`image-slider ${slider === 0 ? "active" : ""}`}>
        <img src="AnyConv.com__pexels-pixabay-258154.webp" />
      </div>
      <div className={`image-slider ${slider === 1 ? "active" : ""}`}>
        <img src="AnyConv.com__pexels-rachel-claire-4825701.webp" />
      </div>
      <div className={`image-slider ${slider === 2 ? "active" : ""}`}>
        <img src="AnyConv.com__pexels-spencer-davis-4356144.webp" />
      </div>
    </div>
  );
});
