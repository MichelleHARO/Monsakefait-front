/*
import React, { useEffect, useState } from 'react';
import BagCard from "./BagCard.jsx";
import ReactSimplyCarousel from 'react-simply-carousel';

const Carousel = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    useEffect(() => {
        console.log('Carousel component rendered');
    }, []);

    const sacs = [
        { id: 1, name: 'Mon sac', color: 'grey', items: [{ id: 1, name: "zizi" }, { id: 2, name: "caca" }] },
        { id: 2, name: 'Mon sac 2', color: 'violet', items: [{ id: 1, name: "test1" }, { id: 2, name: "test2" }] },
        { id: 3, name: 'Mon sac 3', color: 'jaune', items: [{ id: 1, name: "test5" }, { id: 2, name: "test6" }] }
    ];

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    style: {
                        alignSelf: 'center',
                        background: 'black',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 2,
                        itemsToScroll: 2,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                {sacs.map((sac) => (
                    <div key={sac.id} style={{ width: 300, height: 300 }}>
                        <BagCard sac={sac} />
                    </div>
                ))}
            </ReactSimplyCarousel>
        </div>
    );
};

export default Carousel;
*/
