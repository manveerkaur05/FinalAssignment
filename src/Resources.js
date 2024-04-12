import React from 'react';

function Resources() {
    return (
        <div>
            <h2>Resources</h2>
            <div>
                <div>
                    <h3>React Documentation</h3>

                    <p>
                        Official documentation for React.js. Learn about React's core concepts, API, and best practices.
                    </p>
                    <p>
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">View React Documentation</a>
                    </p>
                </div>
                <div>
                    <h3>MDN Web Docs</h3>
                    <p>
                        Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.
                    </p>
                    <p>
                        <a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noopener noreferrer">View MDN Web Docs</a>
                    </p>
                </div>
                {/* Add more resources as needed */}
            </div>
        </div>
    );
}

export default Resources;
