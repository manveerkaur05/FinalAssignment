import React from 'react';

function Work() {
    return (
        <div>
            <h2>Work</h2>
            <div>
                <div>
                    <h3>Google Books Data Project</h3>
                    <p>
                        This project analyzes Google Books data to extract insights and trends. It involves collecting, processing, and visualizing data from the Google Books API.
                    </p>
                    <img src="./images/books.jpg" alt="Books" />
                    <p>
                        <a href="https://github.com/manveerkaur05/Dataproject" target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
                    </p>
                    <div>
                        <h4>Tech List:</h4>
                        <ul>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            {/* Add more technologies as needed */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
