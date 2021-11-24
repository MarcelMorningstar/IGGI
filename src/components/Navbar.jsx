import React, { useState } from 'react';

function Navbar() {
    const [nav, setnav] = useState(false);

    window.addEventListener('scroll', function () {
        var positionY = document.getElementById('Home').clientHeight / 1.4;

        if (window.scrollY >= positionY) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    });

    function open() {
        document.getElementById('nav').classList.toggle('open');

        if (document.getElementById('nav').classList.contains('open')) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'overlay';
        }
    }

    function close() {
        document.getElementById('nav').classList.remove('open');
        document.body.style.overflowY = 'overlay';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            document.getElementById('nav').classList.remove('open');
        }
    });

    return (
        <nav id="nav" className={nav ? 'nav active' : 'nav'}>
            <svg id="menu-btn" onClick={open} width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>

            <ul className="menu">
                <li><a id="homeLink" onClick={close} href="#Home">Home</a></li>
                <li><a id="menuLink" onClick={close} href="#Menu">Menu</a></li>
                <li><a id="aboutLink" onClick={close} href="#About">About</a></li>
                <li><a id="galleryLink" onClick={close} href="#Gallery">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
