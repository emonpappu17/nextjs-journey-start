// "use client";

// import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const MealSearchinput = () => {
//     // const [meals, setMeals] = useState([]);
//     const [search, setSearch] = useState("")
//     const router = useRouter();
//     const pathName = usePathname();
//     useEffect(() => {
//         // fetchMeals();
//         const searchQuery = { search }
//         const urlQueryParam = new URLSearchParams(searchQuery);
//         const url = `${pathName}?${urlQueryParam}`
//         router.push(url)
//     }, [search])
//     // console.log('meals', meals);
//     return (
//         <div>
//             <input
//                 className='border mt-4 text-black'
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />
//         </div>
//     );
// };

// export default MealSearchinput;

//==================================================================================

import { usePathname, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const MealSearchinput = () => {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("")
    const router = useRouter();
    const pathName = usePathname();
    useEffect(() => {
        // fetchMeals();
        const searchQuery = { search }
        const urlQueryParam = new URLSearchParams(searchQuery);
        const url = `${pathName}?${urlQueryParam}`
        router.push(url)
    }, [search])
    return (
        <div>
            <input
                className='border mt-4 text-black'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default MealSearchinput;