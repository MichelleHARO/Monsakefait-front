import { useState } from 'react';

function Carroussel({ elements, name }) {
  return (
    <div className="carousel w-full">
      {elements.map((element, index) => (
        <div key={index} id={`${name}-${index}`} className="carousel-item relative w-full">
          {element}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            {index > 0 && (
              <a href={`#${name}-${index - 1}`} className="btn btn-circle">❮</a>
            )}
            {index < elements.length - 1 && (
              <a href={`#${name}-${index + 1}`} className="btn btn-circle">❯</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carroussel;