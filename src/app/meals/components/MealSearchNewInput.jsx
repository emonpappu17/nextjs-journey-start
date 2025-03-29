// import React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// // import { useRouter } from 'next/router';
"use client";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// import React, { useEffect, useState } from 'react';
const MealSearchNewInput = () => {
    // const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("")
    const router = useRouter();
    const pathName = usePathname();
    console.log('pathName', pathName);

    useEffect(() => {
        // fetchMeals();
        const searchQuery = { search }   //{ search: search }=>{ search: "pizza" }
        console.log('searchQuery', searchQuery);

        const urlQueryParam = new URLSearchParams(searchQuery); //"search=pizza"  // aita use kora hoise object ke search url bananor jonno

        console.log('urlQueryParam', urlQueryParam.toString()); // Output: "search=pizza"

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

export default MealSearchNewInput;