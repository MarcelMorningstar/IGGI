import React from 'react';

function Slogan({title, subtitle, paragraph}) {
    const titleStyles = {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '4.2em'
    };

    const subtitleStyles = {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: '2.4em'
    };

    const paragraphStyles = {
        textAlign: 'center',
        marginTop: '24px'
    };
    
    return (
        <div id="slogan">
            <h1 style={titleStyles}>{title}</h1>
            <h2 style={subtitleStyles}>{subtitle}</h2>
            <p style={paragraphStyles}>{paragraph}</p>
        </div>
    );
}

export default Slogan;
