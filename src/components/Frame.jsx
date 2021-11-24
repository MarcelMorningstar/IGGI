import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import frame1 from '../images/frame-1.png';
import frame2 from '../images/frame-2.png';

function Frame({children, id}) {
    const { ref, inView } = useInView({
        threshold: 0.35
    });

    useEffect(() => {
        if (document.getElementById('Menu').classList.contains('active')) {
            document.getElementById('menuLink').classList.add('active');
        }
        else {
            document.getElementById('menuLink').classList.remove('active');
        }

        if (document.getElementById('About').classList.contains('active')) {
            document.getElementById('aboutLink').classList.add('active');
        }
        else {
            document.getElementById('aboutLink').classList.remove('active');
        }

        if (document.getElementById('Gallery').classList.contains('active')) {
            document.getElementById('galleryLink').classList.add('active');
        }
        else {
            document.getElementById('galleryLink').classList.remove('active');
        }
    });

    return (
        <div id={id} ref={ref} className={inView ? 'frame active' : 'frame'}>
            <section>
                <img id="frame1" src={frame1} alt="" />
                <section>
                    {children}
                </section>
                <img id="frame2" src={frame2} alt="" />
            </section>
        </div>
    );
}

export default Frame;
