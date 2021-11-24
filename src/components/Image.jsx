import React from 'react';

function Image(props) {
    const divStyle = {
        width: '100vw',
        height: '50vh',
        backgroundImage: 'url(' + props.imgUrl + ')',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

    return (
        <div id="image" style={divStyle}></div>
    );
}

export default Image;
