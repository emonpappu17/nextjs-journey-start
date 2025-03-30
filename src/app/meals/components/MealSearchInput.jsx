

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSearchinput = () => {
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