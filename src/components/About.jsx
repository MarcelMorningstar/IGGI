import React from 'react';

function About() {
    return (
        <div id="about">
            <div id="text">
                <h1>Lorem ipsum dolor</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, excepturi delectus? Quaerat, officia! Molestiae, dolorum. Cum aliquid, nisi iure, ipsa, magnam asperiores velit obcaecati consequuntur fugiat nobis quasi a cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, tempora eveniet hic autem voluptate natus in eaque aperiam ab doloremque incidunt laboriosam sequi, deleniti reprehenderit. Modi, laborum? Quasi, ullam.</p>
            </div>

            <div id="info">
                <div>
                    <h2>PHONE</h2>
                    <span>22 107 107</span>
                </div>

                <div>
                    <h2>LOCATION</h2>
                    <span>Atbrīvošanas aleja 95C</span>
                    <span>Rēzekne</span>
                    <span>LV-4601</span>
                </div>

                <div>
                    <h2>HOURS</h2>

                    <div>
                        <h3>Monday - Thursday</h3>
                        <span>16:00 - 22:00</span>
                    </div>

                    <div>
                        <h3>Friday</h3>
                        <span>16:00 - 00:00</span>
                    </div>

                    <div>
                        <h3>Saturday</h3>
                        <span>12:00 - 00:00</span>
                    </div>

                    <div>
                        <h3>Sunday</h3>
                        <span>12:00 - 22:00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
