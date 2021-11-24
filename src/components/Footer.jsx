import React from 'react';
import { useInView } from 'react-intersection-observer';

function Footer(props) {
    const { ref, inView } = useInView({
        threshold: 0.42,
    });

    var svgStyles;

    if (inView) {
        svgStyles = {
            transform: "translate3d(0px, -118px, 0px)",
            width: "192",
            height: "61",
            position: "absolute"
        };
    }
    else {
        svgStyles = {
            transform: "translate3d(0px, -81px, 0px) scale(0.5, 0.5)",
            width: "192",
            height: "61",
            position: "absolute",
        };
    }

    return (
        <footer ref={ref}>
            <svg className={inView ? 'svg active' : 'svg'} id="footerSvg" viewBox="0 0 160.7 61.5" style={svgStyles}>
                <path fill="var(--color-7)" d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"></path>
            </svg>
            <a className="btn-top" href="#Home">
                <svg className={inView ? 'svg active' : 'svg'} width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                <svg className={inView ? 'svg active' : 'svg'} width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            </a>
            <span>{props.copyright}</span>
            <p>{props.text}</p>
        </footer>
    );
}

export default Footer;
