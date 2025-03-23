import Link from 'next/link';
import React from 'react';

const NotFoundPage404 = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div>
                <h1> NotFoundPage404</h1>
                <Link href={'/'}>Go Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage404;