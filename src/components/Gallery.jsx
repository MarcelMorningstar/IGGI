import React from 'react';

// import images
import Gallery1 from '../images/Gallery-1.jpg';
import Gallery2 from '../images/Gallery-2.jpg';
import Gallery3 from '../images/Gallery-3.jpg';
import Gallery4 from '../images/Gallery-4.jpg';
import Gallery5 from '../images/Gallery-5.jpg';
import Gallery6 from '../images/Gallery-6.jpg';
import Gallery7 from '../images/Gallery-7.jpg';
import Gallery8 from '../images/Gallery-8.jpg';
import Gallery9 from '../images/Gallery-9.jpg';
import Gallery10 from '../images/Gallery-10.jpg';
import Gallery11 from '../images/Gallery-11.jpg';
import Gallery12 from '../images/Gallery-12.jpg';

function Gallery(props) {
    const images = [
        {
            id: 1,
            src: Gallery9,
            width: 1,
            height: 1
        },
        {
            id: 2,
            src: Gallery2,
            width: 3,
            height: 4
        },
        {
            id: 3,
            src: Gallery3,
            width: 8,
            height: 10
        },
        {
            id: 4,
            src: Gallery1,
            width: 8,
            height: 10
        },
        {
            id: 5,
            src: Gallery6,
            width: 1,
            height: 1
        },
        {
            id: 6,
            src: Gallery5,
            width: 5,
            height: 7
        },
        {
            id: 7,
            src: Gallery7,
            width: 8,
            height: 10
        },
        {
            id: 8,
            src: Gallery8,
            width: 1,
            height: 1
        },
        {
            id: 9,
            src: Gallery4,
            width: 10,
            height: 8
        },
        {
            id: 10,
            src: Gallery10,
            width: 1,
            height: 1
        },
        {
            id: 11,
            src: Gallery11,
            width: 8,
            height: 10
        },
        {
            id: 12,
            src: Gallery12,
            width: 8,
            height: 10
        },
    ];

    return (
        <div id="gallery">
            <h1>{props.title}</h1>
            <hr />

            <div id="pic-container">
                {
                    images.map((item, index) => {
                        return (
                            <div className='pics' key={index}>
                                <img src={item.src} alt="" />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Gallery;
