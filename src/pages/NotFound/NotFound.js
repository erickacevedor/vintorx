import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Page <span className='color-yellow'>Not Found</span>  <img width="55" src="/images/people/girl-3.webp" alt="" /></h1>
            <p>The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="button">Go to Homepage</Link>
        </div>
    );
}

export default NotFound;