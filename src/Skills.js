import React from 'react';

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <div>
                <h3>Languages/Frameworks</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>Ruby on Rails</li>
                    <li>Python</li>
                    {/* Add more languages/frameworks as needed */}
                </ul>
            </div>
            <div>
                <h3>Tools</h3>
                <ul>
                    <li>Git</li>
                    <li>Visual Studio Code</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    {/* Add more tools as needed */}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
