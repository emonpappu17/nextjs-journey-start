import Link from 'next/link';
import React from 'react';
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}
const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                posts.map((singlePost) => {
                    return (
                        <div className='border-2 border-slate-300' key={singlePost.id}>
                            <p className='text-2xl font-bold'>
                                {singlePost.title}
                            </p>
                            <p className='font-semibold'>
                                {singlePost.body}
                            </p>
                            <Link href={`/posts/${singlePost.id}`}>
                                <button className='bg-green-300'>Details</button>
                            </Link>
                        </div>
                    )


                })
            }
            {/* <p>{JSON.stringify(posts)}</p> */}
        </div>
    );
};

export default Posts;