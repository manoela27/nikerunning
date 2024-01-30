import React from "react";
import Slider from "react-slick";

function SliderTrack() {
  const handleArrowClick = (direction: string) => {
    console.log(`Seta ${direction} clicada!`);
    // Adicione o código que você deseja executar quando a seta for clicada
  };

  const settings = {
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: (
      <div className="slick-arrow slick-prev" onClick={() => handleArrowClick("esquerda")}>
        {"<"}
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next bunda" onClick={() => handleArrowClick("direita")}>
        {">"}
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <div className="fox sprite-sheets-fox"></div>
        </div>
        <div>
          <div className="fox sprite-sheets-fox"></div>
        </div>
      </Slider>
    </>
  );
}

export default SliderTrack;
