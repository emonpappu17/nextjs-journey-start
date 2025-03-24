import React from 'react';

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data
}

const SinglePost = async ({ params }) => {
    const p = await params
    console.log(p.id);
    const singlePost = await getSinglePost(p.id)

    return (
        <div>
            {/* <h1>i am SinglePost {p.id}</h1> */}
            <p>
                singlePost{JSON.stringify(singlePost)}
            </p>
            <h1 className='text-2xl font-bold'>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    );
};

export default SinglePost;