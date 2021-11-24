import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../images/logo.png';

function Header() {
    var opacity = 1;
    
    window.addEventListener('scroll', () => {
        var logo = document.getElementById('logo');
        var header = document.getElementById('Home');
        var logoHeight = logo.clientHeight;
        var headerHeight = header.clientHeight;
        var Y = (headerHeight / 2) - (logoHeight / 2);

        if (window.scrollY > Y) {
            opacity = 1 - (window.scrollY - Y) / (logoHeight - 150);
            logo.style.opacity = opacity;
        }
        else {
            logo.style.opacity = 1;
        }
    });

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (document.getElementById('Home').classList.contains('active')) {
            document.getElementById('homeLink').classList.add('active');
        }
        else {
            document.getElementById('homeLink').classList.remove('active');
        }
    });

    return (
        <header id="Home" ref={ref} className={inView ? 'header active' : 'header'}>
            <img id="logo" src={logo} alt="logo" />
        </header>
    );

    
}

export default Header;
