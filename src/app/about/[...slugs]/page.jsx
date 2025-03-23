import React from 'react';

const AboutSlugPages = async ({ params }) => {
    const p = await params;
    console.log(p);

    return (
        <div>
            <h1>AboutSlugPages</h1>
        </div>
    );
};

export default AboutSlugPages;