import { useState } from 'react';
import BagCard from "./BagCard.jsx";

function Carroussel({ elements }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : elements.length - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < elements.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="carousel w-full">
            {elements.map((element, index) => (
                <div id={"slide" + index} key={index} className={`carousel-item relative w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                    <BagCard sac={element} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
                        <a
                            href={`#slide${(index - 1 + elements.length) % elements.length}`}
                            onClick={prevSlide}
                            className="btn btn-circle"
                        >❮</a>
                        <a
                            href={`#slide${(index + 1) % elements.length}`}
                            onClick={nextSlide}
                            className="btn btn-circle"
                        >❯</a>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Carroussel;
