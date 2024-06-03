import { useState } from 'react';

function Carroussel({ elements, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : elements.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < elements.length - 1 ? prevIndex + 1 : 0));
  };

  return (
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {elements.map((element, index) => (
              <div
                  key={index}
                  className="carousel-item"
              >
                {element}
              </div>
          ))}
        </div>
        {elements.length > 1 && (
            <>
              <button onClick={prevSlide} className="carousel-button left">❮</button>
              <button onClick={nextSlide} className="carousel-button right">❯</button>
            </>
        )}
      </div>
  );
}

export default Carroussel;
